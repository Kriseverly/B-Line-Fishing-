import Link from "next/link";
import { SPEAR_FAQS, SpearFaqJsonLd, BreadcrumbsJsonLd } from "../seo-data";

export const metadata = {
  alternates: { canonical: "/spearfishing" },
  openGraph: { url: "/spearfishing" },
  title: "Spearfishing Charters",
  description:
    "Private Southern California spearfishing charters aboard Solstice from Huntington Harbour. Beginner and family dive days, Catalina kelp and reef, and bluewater expeditions.",
};

const dives = [
  {
    n: "01",
    title: "Beginner & Family Dive Day",
    text: "A relaxed introduction for first-timers, families, and casual divers. We choose protected water and build the day around your group's comfort and ability.",
    meta: "Calm-water focus · All experience levels",
    trip: "Beginner & Family Dive Day — custom quote",
  },
  {
    n: "02",
    title: "Catalina Kelp & Reef",
    text: "Explore kelp forests, rocky structure, and island coastline for yellowtail, calico bass, sheephead, and seasonal opportunities.",
    meta: "Island diving · Location based on conditions",
    trip: "Kelp & Reef spearfishing — custom quote",
  },
  {
    n: "03",
    title: "Bluewater Expedition",
    text: "Advanced offshore diving around paddies, banks, and temperature breaks when pelagic fish, visibility, and conditions line up.",
    meta: "Experienced divers · Weather dependent",
    trip: "Bluewater spearfishing — custom quote",
  },
];

const day = [
  { n: "01", h: "Meet at the harbor", p: "Meet the crew in Huntington Harbour, load your gear, and talk through the day's plan." },
  { n: "02", h: "Briefing & boat ride", p: "We cover boat procedures, diver ability, conditions, and the plan before getting in the water." },
  { n: "03", h: "Dive the best water", p: "The captain adjusts locations throughout the day based on visibility, current, and your group." },
  { n: "04", h: "Ride home", p: "Relax aboard the 37′ EdgeWater while the crew gets everyone and their gear safely back to the dock." },
];

const details = [
  { b: "Boat support", p: "Private transportation, experienced positioning, dry storage, coolers, and fish storage aboard Solstice." },
  { b: "Bring your dive gear", p: "Bring your own properly fitted mask, snorkel, fins, wetsuit, weights, float system, and spearfishing equipment." },
  { b: "Licenses & regulations", p: "Every diver is responsible for required licenses and legal equipment. All diving and harvesting follows current regulations." },
  { b: "Conditions decide", p: "Weather, visibility, current, season, and captain approval determine the final route and whether a trip can safely run." },
];

export default function SpearfishingPage() {
  return (
    <main className="spearfishing-page">
      <nav className="subnav spear-nav shell">
        <Link className="brand" href="/"><span>B-LINE<br/><b>FISHING CHARTERS</b></span></Link>
        <div>
          <Link href="/">Home</Link>
          <Link href="/#trips">Fishing</Link>
          <Link href="/boat-days">Boat Days</Link>
          <Link href="/conditions">Reports</Link>
          <Link href="/info">FAQ</Link>
          <Link href="/about">About</Link>
          <Link href="/#book">Book</Link>
        </div>
      </nav>

      <section className="spear-page-hero">
        <div className="spear-hero-content shell">
          <p className="eyebrow">BELOW THE SURFACE</p>
          <h1>PRIVATE <em>SPEARFISHING</em><br/>ADVENTURES.</h1>
          <p className="spear-hero-copy">From a first kelp dive to a serious bluewater mission, every private trip is shaped around your group, the conditions, and a safe day on the water.</p>
          <Link className="button primary" href="/?trip=Spearfishing%20expedition%20%E2%80%94%20custom%20quote#book">Plan Your Dive <span>→</span></Link>
          <div className="spear-hero-facts">
            <span><b>Private</b> groups</span>
            <span><b>Beginner</b> friendly</span>
            <span><b>Custom</b> routes</span>
          </div>
        </div>
      </section>

      <section className="spear-trips shell">
        <div className="spear-section-head">
          <div>
            <p className="eyebrow dark">CHOOSE YOUR DIVE</p>
            <h2>BUILT AROUND<br/><em>YOUR CREW.</em></h2>
          </div>
          <p>No two days underwater are the same. We match the destination and plan to your group&rsquo;s experience, goals, and the best available conditions.</p>
        </div>
        <div className="spear-trip-grid">
          {dives.map((d) => (
            <Link key={d.n} className="spear-trip-card" href={`/?trip=${encodeURIComponent(d.trip)}#book`}>
              <article>
                <span>{d.n}</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
                <small>{d.meta}</small>
                <b>CHOOSE THIS DIVE <i>→</i></b>
              </article>
            </Link>
          ))}
        </div>
        <p className="spear-quote-note"><strong>Custom quote:</strong> Route, hours, and group size determine pricing. Tell us what kind of day you want and we&rsquo;ll build the trip around you.</p>
      </section>

      <section className="spear-day">
        <div className="shell">
          <div className="spear-day-heading">
            <p className="eyebrow">YOUR DAY ON SOLSTICE</p>
            <h2>SIMPLE FROM<br/><em>DOCK TO DIVE.</em></h2>
          </div>
          <ol className="spear-day-steps">
            {day.map((s) => (
              <li key={s.n}><b>{s.n}</b><div><h3>{s.h}</h3><p>{s.p}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="spear-details shell">
        <div className="spear-included">
          <p className="eyebrow dark">BEFORE YOU BOOK</p>
          <h2>WHAT TO EXPECT</h2>
          <div className="spear-detail-grid">
            {details.map((d) => (
              <article key={d.b}><b>{d.b}</b><p>{d.p}</p></article>
            ))}
          </div>
        </div>
        <aside className="spear-safety-card">
          <span>SAFETY FIRST</span>
          <h2>THE OCEAN SETS THE SCHEDULE.</h2>
          <p>We never promise one exact spot or species. The captain chooses the safest, most productive plan available for the group that day. Tell us honestly about every diver&rsquo;s experience when requesting a trip.</p>
          <Link className="button primary" href="/#book">Request a Date <span>→</span></Link>
        </aside>
      </section>

      <section className="spear-faq shell">
        <div>
          <p className="eyebrow dark">QUICK ANSWERS</p>
          <h2>SPEARFISHING FAQ</h2>
        </div>
        <div className="faq-list">
          {SPEAR_FAQS.map((f) => (
            <details key={f.q}>
              <summary>{f.q}<span>+</span></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="spear-final-cta">
        <div className="shell">
          <p className="eyebrow">READY TO GET WET?</p>
          <h2>LET&rsquo;S BUILD YOUR<br/><em>DIVE DAY.</em></h2>
          <Link className="button light" href="/#book">Check a Date <span>→</span></Link>
        </div>
      </section>

      <SpearFaqJsonLd />
      <BreadcrumbsJsonLd items={[{ name: "Home", path: "/" }, { name: "Spearfishing", path: "/spearfishing" }]} />
    </main>
  );
}
