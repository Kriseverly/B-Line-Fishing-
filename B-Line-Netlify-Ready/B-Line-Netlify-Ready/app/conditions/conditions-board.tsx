"use client";

import { useEffect, useState } from "react";

type Location = {
  name: string;
  subtitle: string;
  latitude: number;
  longitude: number;
  station: string;
  targets: string[];
  note: string;
};

type Report = {
  temperature?: number;
  wind?: number;
  waveHeight?: number;
  wavePeriod?: number;
  updated?: string;
  error?: boolean;
};

const locations: Location[] = [
  { name: "Huntington Beach", subtitle: "Local Coast", latitude: 33.64, longitude: -118.08, station: "46222", targets: ["Calico bass", "Bonito", "Barracuda", "Halibut"], note: "Focus on nearshore structure, hard bottom, kelp edges, and local temperature breaks." },
  { name: "Catalina Island", subtitle: "Island Waters", latitude: 33.39, longitude: -118.42, station: "46025", targets: ["Yellowtail", "White seabass", "Calico bass", "Bonito"], note: "Kelp lines, current edges, coves, and island structure shape the day’s plan." },
  { name: "San Clemente Island", subtitle: "Long Range", latitude: 32.9, longitude: -118.5, station: "46086", targets: ["Yellowtail", "Bluefin tuna", "Calico bass", "White seabass"], note: "Access, wind, swell, and Navy closures can affect the route and fishing area." },
  { name: "Offshore Banks", subtitle: "Open Water", latitude: 33.0, longitude: -119.0, station: "46086", targets: ["Bluefin tuna", "Dorado", "Yellowtail"], note: "We watch temperature breaks, paddies, bird life, bait, and offshore weather before choosing a zone." },
];

function seasonalNote(targets: string[]) {
  const month = new Date().getMonth() + 1;
  const warmSeason = month >= 6 && month <= 10;
  return warmSeason
    ? `Summer and fall opportunities may include ${targets.slice(0, 3).join(", ")}. Actual bites move daily.`
    : `Seasonal focus may include ${targets.slice(1).join(", ")}. Offshore pelagic opportunities depend on water conditions.`;
}

export default function ConditionsBoard() {
  const [reports, setReports] = useState<Record<string, Report>>({});

  useEffect(() => {
    locations.forEach(async (location) => {
      try {
        const response = await fetch(`/api/conditions?lat=${location.latitude}&lon=${location.longitude}&station=${location.station}`);
        if (!response.ok) throw new Error("Conditions unavailable");
        const report = await response.json();
        setReports((current) => ({ ...current, [location.name]: report }));
      } catch {
        setReports((current) => ({ ...current, [location.name]: { error: true } }));
      }
    });
  }, []);

  return <div className="conditions-grid">
    {locations.map((location) => {
      const report = reports[location.name];
      const favorable = report && !report.error && (report.wind ?? 99) < 16 && (report.waveHeight ?? 99) < 5;
      return <article className="condition-card" key={location.name}>
        <div className="condition-card-head"><div><span>{location.subtitle}</span><h2>{location.name}</h2></div><b className={favorable ? "good" : "watch"}>{!report ? "UPDATING" : report.error ? "CHECK SOURCE" : favorable ? "FAVORABLE" : "WATCH CONDITIONS"}</b></div>
        <div className="condition-stats">
          <div><small>AIR</small><strong>{report?.temperature != null ? `${Math.round(report.temperature)}°F` : "—"}</strong></div>
          <div><small>WIND</small><strong>{report?.wind != null ? `${Math.round(report.wind)} kt` : "—"}</strong></div>
          <div><small>WAVES</small><strong>{report?.waveHeight != null ? `${report.waveHeight.toFixed(1)} ft` : "—"}</strong></div>
          <div><small>PERIOD</small><strong>{report?.wavePeriod != null ? `${Math.round(report.wavePeriod)} sec` : "—"}</strong></div>
        </div>
        <div className="fish-outlook"><small>AUTOMATIC FISHING OUTLOOK</small><h3>{location.targets.join(" · ")}</h3><p>{seasonalNote(location.targets)} {location.note}</p></div>
        <p className="condition-update">{report?.updated ? `Updated ${new Date(report.updated).toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}` : "Loading current marine data…"}</p>
      </article>;
    })}
  </div>;
}
