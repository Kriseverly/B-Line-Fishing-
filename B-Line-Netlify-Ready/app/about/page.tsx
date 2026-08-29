import { BreadcrumbsJsonLd } from "../seo-data";
import Link from "next/link";
export const metadata = {
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" }, title: "About", description: "Learn about the B-Line Fishing Charters experience aboard Solstice from Huntington Harbour." };

export default function AboutPage() {
  return <main className="subpage">
    <nav className="subnav shell"><Link className="brand" href="/"><span>B-LINE<br/><b>FISHING CHARTERS</b></span></Link><div><Link href="/">Home</Link><Link href="/conditions">Reports</Link><Link href="/#book">Book a Trip</Link></div></nav>
    <header className="subhero about-hero shell"><p className="eyebrow">THE B-LINE EXPERIENCE</p><h1>LOCAL WATER.<br/><em>REAL ADVENTURE.</em></h1><p>B-Line Fishing Charters runs private fishing, spearfishing, Avalon shuttle, and island-day adventures from Huntington Harbour aboard Solstice, a 37-foot EdgeWater built to cover serious water comfortably.</p></header>
    <section className="about-story shell"><div><p className="eyebrow dark">BUILT AROUND YOUR GROUP</p><h2>YOUR DAY.<br/>YOUR TARGETS.</h2></div><div><p>Every charter is private for your group of up to six. We plan around the season, weather, experience level, and what you want to chase—from a family’s first island fishing trip to a long-range offshore mission.</p><p>Beginners and families are welcome. Experienced anglers and freedivers can build a more specialized trip around Catalina, San Clemente Island, local coastal structure, or the offshore banks.</p></div></section>
    <section className="about-values"><div className="shell"><article><b>01</b><h3>PRIVATE</h3><p>Your group gets the entire boat and a trip shaped around your goals.</p></article><article><b>02</b><h3>CAPABLE</h3><p>Solstice offers speed, range, open fishing space, a full tower, and triple outboards.</p></article><article><b>03</b><h3>LOCAL</h3><p>Depart directly from Huntington Harbour for Southern California waters.</p></article></div></section>
    <section className="crew-section">
      <div className="shell">
        <div className="crew-heading"><p className="eyebrow">THE CREW</p><h2>MEET THE<br/><em>SCALLYWAGS.</em></h2><p>Every proper voyage needs a captain, a crew, and at least one person confidently pointing at something in the distance. Crew assignments vary by trip, but these are the likely suspects.</p></div>
        <article className="captain-card"><span className="crew-icon">⚓</span><small>CAPTAIN OF SOLSTICE</small><h3>BRADY SMITH</h3><p>Captain Brady commands Solstice with complete confidence that every bird on the horizon is sitting on fish. Part captain, part treasure hunter, and self-appointed Jack Sparrow of Huntington Harbour, he promises nobody will walk the plank—unless they bring bananas aboard.</p><b>THE CAPTAIN</b></article>
        <div className="deckhand-grid">
          <article><span>☠</span><small>POSSIBLE DECKHAND</small><h3>JAKOB DAVIS</h3><p>Line wrangler and unofficial snack inspector.</p></article>
          <article><span>☠</span><small>POSSIBLE DECKHAND</small><h3>RYAN PATTERSON</h3><p>Lookout, fish spotter, and enthusiastic pointer.</p></article>
          <article><span>☠</span><small>POSSIBLE DECKHAND</small><h3>JAKE LUX</h3><p>Anchor hoister and acting officer of morale.</p></article>
          <article><span>☠</span><small>POSSIBLE DECKHAND</small><h3>BRIAN RODNEY</h3><p>Guardian of the deck and teller of suspiciously tall tales.</p></article>
        </div>
      </div>
    </section>
    <section className="subpage-cta"><div className="shell"><p className="eyebrow">COME FISH WITH US</p><h2>MAKE IT A DAY TO REMEMBER.</h2><Link className="button light" href="/#book">Request a Trip <span>→</span></Link></div></section>
  <BreadcrumbsJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
  </main>;
}
