import Link from "next/link";
import { BreadcrumbsJsonLd } from "../seo-data";
import CrewGrid, { type CrewMember } from "../crew-feedback";

export const metadata = {
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
  title: "About",
  description: "Learn about the B-Line Fishing Charters experience aboard Solstice from Huntington Harbour, and meet the captain and crew.",
};

const crew: CrewMember[] = [
  { role: "POSSIBLE DECKHAND · ALLEGEDLY", name: "AUSTIN HARGIS", bio: "If anything mysteriously breaks, Austin and Jordan were probably standing nearby. Austin says Jordan did it and insists he was “just checking the bilge.”" },
  { role: "POSSIBLE DECKHAND", name: "RYAN PATTERSON", bio: "Lookout, fish spotter, and enthusiastic pointer." },
  { role: "POSSIBLE DECKHAND", name: "BRIAN RODNEY", bio: "Guardian of the deck and teller of suspiciously tall tales." },
  { role: "POSSIBLE DECKHAND · ALLEGEDLY", name: "JORDAN WILSON", bio: "If anything mysteriously breaks, Austin and Jordan were probably standing nearby. Jordan will already be pointing at Austin while protecting the voyage playlist." },
  { role: "POSSIBLE DECKHAND", name: "JAKOB DAVIS", bio: "Line wrangler and unofficial snack inspector." },
  { role: "POSSIBLE DECKHAND", name: "JAKE LUX", bio: "Anchor hoister and acting officer of morale." },
];

export default function AboutPage() {
  return (
    <main className="subpage">
      <nav className="subnav shell">
        <Link className="brand" href="/"><span>B-LINE<br/><b>FISHING CHARTERS</b></span></Link>
        <div>
          <Link href="/">Home</Link>
          <Link href="/spearfishing">Spearfishing</Link>
          <Link href="/boat-days">Boat Days</Link>
          <Link href="/conditions">Reports</Link>
          <Link href="/info">FAQ</Link>
          <Link href="/#book">Book a Trip</Link>
        </div>
      </nav>

      <header className="subhero about-hero shell">
        <p className="eyebrow">THE B-LINE EXPERIENCE</p>
        <h1>LOCAL WATER.<br/><em>REAL ADVENTURE.</em></h1>
        <p>B-Line Fishing Charters runs private fishing, spearfishing, Avalon shuttle, and island-day adventures from Huntington Harbour aboard Solstice, a 37-foot EdgeWater built to cover serious water comfortably.</p>
      </header>

      <section className="about-story shell">
        <div><p className="eyebrow dark">BUILT AROUND YOUR GROUP</p><h2>YOUR DAY.<br/>YOUR TARGETS.</h2></div>
        <div>
          <p>Every charter is private for your group of up to six. We plan around the season, weather, experience level, and what you want to chase&mdash;from a family&rsquo;s first island fishing trip to a long-range offshore mission.</p>
          <p>Beginners and families are welcome. Experienced anglers and freedivers can build a more specialized trip around Catalina, San Clemente Island, local coastal structure, or the offshore banks.</p>
        </div>
      </section>

      <section className="about-values">
        <div className="shell">
          <article><b>01</b><h3>PRIVATE</h3><p>Your group gets the entire boat and a trip shaped around your goals.</p></article>
          <article><b>02</b><h3>CAPABLE</h3><p>Solstice offers speed, range, open fishing space, a full tower, and triple outboards.</p></article>
          <article><b>03</b><h3>LOCAL</h3><p>Depart directly from Huntington Harbour for Southern California waters.</p></article>
        </div>
      </section>

      <section className="crew-section">
        <div className="shell">
          <div className="crew-heading">
            <p className="eyebrow">THE CREW</p>
            <h2>MEET THE<br/><em>SCALLYWAGS.</em></h2>
            <p>Every proper voyage needs a captain, a crew, and at least one person confidently pointing at something in the distance. Crew assignments vary by trip, but these are the likely suspects.</p>
          </div>
          <article className="captain-card">
            <span className="crew-icon" aria-hidden="true">⚓</span>
            <small>CAPTAIN OF SOLSTICE</small>
            <h3>BRADY SMITH</h3>
            <p>Captain Brady commands Solstice with complete confidence that every bird on the horizon is sitting on fish. Part captain, part treasure hunter, and self-appointed Jack Sparrow of Huntington Harbour, he promises nobody will walk the plank&mdash;unless they bring bananas aboard.</p>
            <b>THE CAPTAIN</b>
          </article>
          <CrewGrid crew={crew} />
        </div>
      </section>

      <section className="reviews-section shell">
        <div>
          <p className="eyebrow dark">GUEST LOGBOOK</p>
          <h2>REAL TRIPS.<br/>REAL REVIEWS.</h2>
        </div>
        <div className="reviews-empty">
          <span aria-hidden="true">★ ★ ★ ★ ★</span>
          <h3>THE FIRST STORIES ARE COMING.</h3>
          <p>We only publish feedback from people who have actually been aboard Solstice. As B-Line trips roll out, genuine guest reviews and catch photos will be added here.</p>
          <a href="mailto:bradysmith9@icloud.com?subject=B-Line%20guest%20review">Share your trip &rarr;</a>
        </div>
      </section>

      <section className="subpage-cta">
        <div className="shell">
          <p className="eyebrow">COME FISH WITH US</p>
          <h2>MAKE IT A DAY TO REMEMBER.</h2>
          <Link className="button light" href="/#book">Request a Trip <span>→</span></Link>
        </div>
      </section>

      <BreadcrumbsJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
    </main>
  );
}
