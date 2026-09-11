import Link from "next/link";
import { FAQS, FaqJsonLd, BreadcrumbsJsonLd } from "../seo-data";

export const metadata = {
  alternates: { canonical: "/info" },
  openGraph: { url: "/info" },
  title: "FAQ & Charter Policies",
  description:
    "Answers to common questions about B-Line Fishing Charters, plus booking, weather, cancellation, timing, safety, and guest responsibility policies.",
};

const policies = [
  { n: "01", h: "BOOKING", p: "A submitted form is only a request. The trip is confirmed after B-Line approves the route and date, provides the final total and terms, and receives any required deposit." },
  { n: "02", h: "WEATHER", p: "The captain controls all safety and weather decisions. Unsafe conditions may require a route change, reschedule, or cancellation. The resolution will follow your written booking confirmation." },
  { n: "03", h: "CANCELLATIONS", p: "Guest-cancellation deadlines, deposit treatment, and refund terms will be stated before payment. Those written terms control your reservation." },
  { n: "04", h: "TIMING", p: "Please arrive at the confirmed meeting time. A late arrival may shorten the trip because the scheduled return time and operating limits still apply." },
  { n: "05", h: "SAFETY", p: "Guests must follow captain and crew instructions. Illegal activity, dangerous behavior, harassment, or severe intoxication may end the trip without a refund." },
  { n: "06", h: "GUEST RESPONSIBILITY", p: "Disclose relevant mobility concerns and bring required licenses, personal medication, and suitable clothing. Guests are responsible for damage caused by reckless or intentional conduct." },
];

export default function InfoPage() {
  return (
    <main className="subpage">
      <nav className="subnav shell">
        <Link className="brand" href="/"><span>B-LINE<br/><b>FISHING CHARTERS</b></span></Link>
        <div>
          <Link href="/">Home</Link>
          <Link href="/spearfishing">Spearfishing</Link>
          <Link href="/boat-days">Boat Days</Link>
          <Link href="/conditions">Reports</Link>
          <Link href="/about">About</Link>
          <Link href="/#book">Book a Trip</Link>
        </div>
      </nav>

      <header className="subhero shell">
        <p className="eyebrow">BEFORE YOU COME ABOARD</p>
        <h1>FAQ &amp;<br/><em>POLICIES.</em></h1>
        <p>Clear answers and straightforward expectations make for a better day on the water. Final trip details are always provided with your booking confirmation.</p>
      </header>

      <section className="faq-section shell">
        <div className="info-heading">
          <p className="eyebrow dark">COMMON QUESTIONS</p>
          <h2>KNOW BEFORE YOU GO.</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((f) => (
            <details key={f.q}>
              <summary>{f.q}<span>+</span></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="policies-section" id="policies">
        <div className="shell">
          <div className="info-heading">
            <p className="eyebrow">CHARTER POLICIES</p>
            <h2>THE FINE PRINT.<br/><em>KEPT SIMPLE.</em></h2>
          </div>
          <div>
            <div className="policy-grid">
              {policies.map((p) => (
                <article key={p.n}><b>{p.n}</b><h3>{p.h}</h3><p>{p.p}</p></article>
              ))}
            </div>
            <p className="policy-disclaimer">These website policies are a general overview. Your written booking confirmation, waiver, and final trip terms control the reservation.</p>
          </div>
        </div>
      </section>

      <section className="subpage-cta">
        <div className="shell">
          <p className="eyebrow">READY TO PLAN IT?</p>
          <h2>REQUEST YOUR DAY.</h2>
          <Link className="button light" href="/#book">Start a Booking Request <span>→</span></Link>
        </div>
      </section>

      <FaqJsonLd />
      <BreadcrumbsJsonLd items={[{ name: "Home", path: "/" }, { name: "FAQ & Policies", path: "/info" }]} />
    </main>
  );
}
