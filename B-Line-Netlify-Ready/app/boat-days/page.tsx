import { BreadcrumbsJsonLd } from "../seo-data";
import Link from "next/link";
export const metadata = {
  alternates: { canonical: "/boat-days" },
  openGraph: { url: "/boat-days" },
  title: "Boat Days, Avalon Shuttle & Coastal Cruises",
  description: "Private Avalon transportation, Catalina Island boat days, Newport dinner trips, Laguna cove cruises, pickups, and drop-offs from Huntington Harbour.",
};

const services = [
  { number: "01", title: "Avalon Round Trip", value: "Avalon Private Round Trip", description: "A private run from Huntington Harbour to Avalon with a scheduled ride home." },
  { number: "02", title: "Avalon Drop-Off", value: "Avalon Drop-Off", description: "Private one-way transportation to Avalon for your island stay or plans." },
  { number: "03", title: "Avalon Pickup", value: "Avalon Pickup", description: "Arrange a private pickup from Avalon and a comfortable ride back to Huntington Harbour." },
  { number: "04", title: "Island Cruise", value: "Private Island Cruise", description: "Tour Catalina’s coastline, relax on the water, swim, and enjoy an unhurried private day." },
  { number: "05", title: "Island Bar Hop", value: "Private Island Bar Hop", description: "Build a custom day around waterfront stops and island destinations for your private group." },
  { number: "06", title: "Newport Dinner Cruise", value: "Newport Dinner Cruise", description: "Cruise the coast to Newport for dinner, enjoy the harbor, and ride home privately aboard Solstice." },
  { number: "07", title: "Laguna Coves Cruise", value: "Laguna Coves Cruise", description: "Explore Laguna’s coves and coastline with time to sightsee, relax, swim, or anchor when conditions allow." },
  { number: "08", title: "Custom Coastal Cruise", value: "Custom Coastal Cruise", description: "Build an easy coastal day around the route, waterfront stop, sunset, or occasion your group has in mind." },
];

export default function BoatDaysPage() {
  return (
    <main className="subpage">
      <nav className="subnav shell">
        <Link className="brand" href="/"><span>B-LINE<br/><b>FISHING CHARTERS</b></span></Link>
        <div><Link href="/">Home</Link><Link href="/#trips">Fishing</Link><Link href="/#spearfishing">Spearfishing</Link><Link href="/conditions">Reports</Link><Link href="/about">About</Link><Link href="/#book">Book a Trip</Link></div>
      </nav>
      <header className="subhero boat-days-hero shell">
        <p className="eyebrow">YOUR DAY, YOUR ISLAND</p>
        <h1>SHUTTLES &<br/><em>PRIVATE BOAT DAYS.</em></h1>
        <p>Skip the crowded ferry and enjoy a private ride aboard Solstice. Head to Avalon, cruise Laguna’s coves, run to Newport for dinner, or build an easy private day around the coast and islands.</p>
      </header>
      <section className="boat-days boat-days-page">
        <div className="boat-days-inner shell">
          <div className="boat-day-grid">
            {services.map((service) => (
              <a className="boat-day-choice" key={service.value} href={`/?trip=${encodeURIComponent(service.value)}#book`}>
                <article><span>{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><b>REQUEST THIS SERVICE →</b></article>
              </a>
            ))}
          </div>
          <p className="boat-days-note">All routes, stops, timing, and pickup locations are confirmed in advance and remain subject to weather, dock access, and operating conditions. Restaurant reservations, dockage, meals, beverages, and shore expenses are separate unless specifically included.</p>
        </div>
      </section>
      <footer className="footer shell"><div className="brand"><span>B-LINE<br/><b>FISHING CHARTERS</b></span></div><p><a href="tel:+17146205933">714-620-5933</a> · <a href="mailto:bradysmith9@icloud.com">Email</a></p><p>© 2026 B-Line Fishing Charters</p></footer>
    <BreadcrumbsJsonLd items={[{ name: "Home", path: "/" }, { name: "Boat Days", path: "/boat-days" }]} />
  </main>
  );
}
