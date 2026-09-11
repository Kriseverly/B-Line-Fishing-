const headers = { "User-Agent": "B-Line-Fishing-Charters/1.0 bradysmith9@icloud.com", Accept: "application/geo+json" };

function asNumber(value: string | undefined) {
  if (!value || value === "MM") return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const lat = url.searchParams.get("lat");
  const lon = url.searchParams.get("lon");
  const station = url.searchParams.get("station");
  if (!lat || !lon || !station) return Response.json({ error: "Missing location" }, { status: 400 });
  try {
    const weatherRequest = (async () => {
      const pointResponse = await fetch(`https://api.weather.gov/points/${lat},${lon}`, { headers });
      if (!pointResponse.ok) return undefined;
      const point = await pointResponse.json() as { properties?: { forecastHourly?: string } };
      if (!point.properties?.forecastHourly) return undefined;
      const hourlyResponse = await fetch(point.properties.forecastHourly, { headers });
      if (!hourlyResponse.ok) return undefined;
      const hourly = await hourlyResponse.json() as { properties?: { periods?: Array<{ temperature?: number; windSpeed?: string; startTime?: string; shortForecast?: string }> } };
      return hourly.properties?.periods?.[0];
    })();
    const buoyRequest = fetch(`https://www.ndbc.noaa.gov/data/realtime2/${station}.txt`, { headers: { "User-Agent": headers["User-Agent"] } });
    const [weatherResult, buoyResult] = await Promise.allSettled([weatherRequest, buoyRequest]);
    const current = weatherResult.status === "fulfilled" ? weatherResult.value : undefined;
    const buoyResponse = buoyResult.status === "fulfilled" ? buoyResult.value : undefined;
    let waveHeight: number | undefined;
    let wavePeriod: number | undefined;
    let buoyWind: number | undefined;
    let buoyTemperature: number | undefined;
    let buoyUpdated: string | undefined;
    if (buoyResponse?.ok) {
      const lines = (await buoyResponse.text()).trim().split("\n");
      const columns = lines[0].replace(/^#/, "").trim().split(/\s+/);
      const rows = lines.filter((line) => !line.startsWith("#")).map((line) => line.trim().split(/\s+/));
      const firstAvailable = (column: string) => {
        const index = columns.indexOf(column);
        if (index < 0) return undefined;
        for (const row of rows) {
          const value = asNumber(row[index]);
          if (value != null) return value;
        }
      };
      const meters = firstAvailable("WVHT");
      waveHeight = meters == null ? undefined : meters * 3.28084;
      wavePeriod = firstAvailable("DPD") ?? firstAvailable("APD");
      const windMetersPerSecond = firstAvailable("WSPD");
      buoyWind = windMetersPerSecond == null ? undefined : windMetersPerSecond * 1.94384;
      const airCelsius = firstAvailable("ATMP");
      buoyTemperature = airCelsius == null ? undefined : (airCelsius * 9) / 5 + 32;
      const newest = rows[0];
      if (newest?.length >= 5) {
        const [year, month, day, hour, minute] = newest.slice(0, 5).map(Number);
        const timestamp = Date.UTC(year, month - 1, day, hour, minute);
        if (Number.isFinite(timestamp)) buoyUpdated = new Date(timestamp).toISOString();
      }
    }
    const windMph = Number(current?.windSpeed?.match(/[\d.]+/)?.[0]);
    const temperature = current?.temperature ?? buoyTemperature;
    const wind = Number.isFinite(windMph) ? windMph * .868976 : buoyWind;
    if (temperature == null && wind == null && waveHeight == null && wavePeriod == null) throw new Error();
    return Response.json({ temperature, wind, waveHeight, wavePeriod, summary: current?.shortForecast, updated: current?.startTime ?? buoyUpdated }, { headers: { "Cache-Control": "public, max-age=900" } });
  } catch {
    return Response.json({ error: "Conditions temporarily unavailable" }, { status: 502 });
  }
}
