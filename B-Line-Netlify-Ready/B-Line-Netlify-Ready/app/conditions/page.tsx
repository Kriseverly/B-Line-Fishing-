import { BreadcrumbsJsonLd } from "../seo-data";
import Link from "next/link";
import ConditionsBoard from "./conditions-board";

export const metadata = {
  alternates: { canonical: "/conditions" },
  openGraph: { url: "/conditions" }, title: "Current Conditions", description: "Live marine weather and automatic fishing outlooks for Huntington Beach, Catalina Island, San Clemente Island, and the offshore banks." };

export default function ConditionsPage() {
  return <main className="subpage">
    <nav className="subnav shell"><Link className="brand" href="/"><span>B-LINE<br/><b>FISHING CHARTERS</b></span></Link><div><Link href="/">Home</Link><Link href="/spearfishing">Spearfishing</Link><Link href="/boat-days">Boat Days</Link><Link href="/info">FAQ</Link><Link href="/about">About</Link><Link href="/#book">Book a Trip</Link></div></nav>
    <header className="subhero shell"><p className="eyebrow">LIVE MARINE DATA</p><h1>CURRENT<br/><em>CONDITIONS.</em></h1><p>Location-specific weather and fishing outlooks for every B-Line charter zone. Conditions update automatically; your final route is always confirmed directly with B-Line.</p></header>
    <section className="conditions-section shell"><ConditionsBoard /><div className="report-sources"><p><strong>Marine data:</strong> National Weather Service forecasts and NOAA buoy observations. Fishing outlooks combine the season with each location’s typical targets and current marine conditions; they are not a guarantee of catch.</p><a href="https://www.socalfishreports.com/" target="_blank" rel="noreferrer">View latest Southern California fish counts ↗</a><a href="https://www.weather.gov/lox/marine" target="_blank" rel="noreferrer">Official NOAA marine forecast ↗</a></div></section>
    <section className="subpage-cta"><div className="shell"><p className="eyebrow">READY TO GO?</p><h2>LET’S PLAN THE RUN.</h2><Link className="button light" href="/#book">Request a Trip <span>→</span></Link></div></section>
  <BreadcrumbsJsonLd items={[{ name: "Home", path: "/" }, { name: "Current Conditions", path: "/conditions" }]} />
  </main>;
}
