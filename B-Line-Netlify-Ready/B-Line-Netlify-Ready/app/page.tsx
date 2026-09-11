import Link from "next/link";
import BookingForm from "./booking-form";
import BoatCarousel from "./boat-carousel";
import BookingChoice from "./booking-choice";
import { ServicesJsonLd } from "./seo-data";

const trips = [
  { tag: "MOST POPULAR", title: "Catalina Island", meta: "3/4 day or full day · 6 guests", options: [{ label: "3/4 Day · Up to 8 hours", value: "Catalina Island — 3/4 Day" }, { label: "Full Day · Up to 10 hours", value: "Catalina Island — Full Day" }], image: "/images/catalina-user.jpeg", text: "Target yellowtail, white seabass, calico bass, and other local species across Catalina's coves, kelp lines, and rocky structure." },
  { tag: "LONG RANGE", title: "San Clemente Island", meta: "Up to 10 hours · 6 guests", options: [{ label: "Request this trip", value: "San Clemente Island" }], image: "/images/san-clemente-island.jpg", text: "Make the long run to rugged San Clemente for serious island fishing when weather, access, and conditions allow." },
  { tag: "PELAGIC", title: "Offshore Banks", meta: "Up to 12 hours · 6 guests", options: [{ label: "Request this trip", value: "Offshore Banks" }], image: "/images/offshore-bluefin.jpeg", text: "A high-energy hunt for bluefin, dorado, and kelp-paddy fish across the Southern California offshore grounds." },
];

const species = ["BLUEFIN TUNA", "YELLOWTAIL", "DORADO", "CALICO BASS", "BONITO", "ROCKFISH"];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav shell">
          <a className="brand" href="#home" aria-label="B-Line Fishing Charters home">
            <span>B-LINE<br/><b>FISHING CHARTERS</b></span>
          </a>
          <div className="nav-links">
            <a href="#trips">Fishing</a><Link href="/spearfishing">Spearfishing</Link><Link href="/boat-days">Boat Days</Link><Link href="/conditions">Reports</Link><Link href="/info">FAQ</Link><Link href="/about">About</Link>
          </div>
          <a className="nav-cta" href="#book">Book a Trip <span>↗</span></a>
        </nav>
        <div className="mobile-nav" aria-label="Mobile navigation">
          <a href="#trips">Fishing</a><Link href="/spearfishing">Spearfishing</Link><Link href="/boat-days">Boat Days</Link><Link href="/conditions">Reports</Link><Link href="/info">FAQ</Link><Link href="/about">About</Link><a href="#book">Booking</a>
        </div>

        <div className="hero-lines" aria-hidden="true"><span/><span/><span/></div>
        <div className="hero-content shell">
          <p className="eyebrow">PRIVATE SPORTFISHING · SPEARFISHING · HUNTINGTON HARBOUR</p>
          <h1>B-LINE<br/><em>CHARTERS</em></h1>
          <p className="hero-copy">Private charters aboard Solstice—a 37′ EdgeWater built for Catalina, San Clemente Island, and the offshore grounds.</p>
          <div className="hero-actions">
            <a className="button primary" href="#trips">Explore Trips <span>→</span></a>
            <a className="text-link" href="#boat"><i>▶</i> Meet the EdgeWater</a>
          </div>
        </div>
        <div className="hero-stats shell">
          <div><strong>37′</strong><span>EDGEWATER</span></div>
          <div><strong>6</strong><span>GUESTS MAX</span></div>
          <div><strong>3</strong><span>TRIP STYLES</span></div>
          <div className="status"><i/> NOW BOOKING<br/><small>CONTACT FOR AVAILABILITY</small></div>
        </div>
      </section>

      <section className="ticker" aria-label="Target species"><div>{[...species, ...species].map((fish, i) => <span key={i}>{fish}<b>✦</b></span>)}</div></section>

      <section className="section shell" id="trips">
        <div className="section-head"><div><p className="eyebrow dark">CHOOSE YOUR RUN</p><h2>FISH HARD.<br/><em>COME HOME WITH A STORY.</em></h2></div><p>Every trip is private and built around the season, conditions, and what you want to chase.</p></div>
        <div className="trip-grid">
          {trips.map((trip, i) => <article className={`trip-card card-${i+1}`} key={trip.title}>
            <img className="trip-image" src={trip.image} alt="" /><span className="trip-number">0{i+1}</span><p className="trip-tag">{trip.tag}</p>
            <div className="trip-content"><div className="trip-title-row"><h3>{trip.title}</h3></div><b>{trip.meta}</b><p>{trip.text}</p><div className="trip-options">{trip.options.map((option) => <BookingChoice key={option.value} value={option.value}>{option.label} <span>→</span></BookingChoice>)}</div></div>
          </article>)}
        </div>
      </section>

      <section className="boat-section" id="boat">
        <BoatCarousel />
        <div className="boat-copy"><p className="eyebrow">MEET SOLSTICE</p><h2>37′ EDGEWATER</h2><p className="lead">Fast, capable, and comfortable—made to cover serious water and fish hard all day.</p>
          <div className="feature-grid"><div><strong>37 FT</strong><span>OFFSHORE PLATFORM</span></div><div><strong>360°</strong><span>FISHING SPACE</span></div><div><strong>PRIVATE</strong><span>YOUR GROUP ONLY</span></div><div><strong>HB</strong><span>HARBOUR DEPARTURE</span></div></div>
          <p className="fine">Triple outboards, a full tower, and open fishing room from bow to stern.</p>
        </div>
      </section>

      <section className="about shell"><p className="eyebrow dark">THE B-LINE EXPERIENCE</p><div><h2>LOCAL WATER.<br/><em>REAL ADVENTURE.</em></h2><p>Private charters for families, beginners, experienced anglers, and freedivers. <Link className="about-link" href="/about">Learn more about B-Line →</Link></p></div></section>

      <section className="photo-break"><img src="/images/solstice-dock.jpeg" alt="Solstice docked in Huntington Harbour at sunset" /><div><span>SOLSTICE</span><small>HUNTINGTON HARBOUR · CALIFORNIA</small></div></section>

      <section className="book" id="book"><div className="book-inner shell"><div className="booking-intro"><p className="eyebrow">REQUEST YOUR DATE</p><h2>PLAN YOUR<br/><em>TRIP.</em></h2><p>Choose your preferred date and trip. B-Line will receive your request and contact you to confirm availability.</p><ol className="booking-steps"><li><span>1</span><p>Send your preferred trip and dates.</p></li><li><span>2</span><p>We confirm the plan, total, and availability.</p></li><li><span>3</span><p>Your deposit secures the date.</p></li></ol><div className="direct-contact"><a href="tel:+17146205933">714-620-5933</a><a href="mailto:bradysmith9@icloud.com">bradysmith9@icloud.com</a></div></div><BookingForm /></div></section>

      <footer className="footer shell"><div className="brand"><span>B-LINE<br/><b>FISHING CHARTERS</b></span></div><p><a href="tel:+17146205933">714-620-5933</a> · <a href="mailto:bradysmith9@icloud.com">Email</a></p><p>© 2026 B-Line Fishing Charters</p><p className="credits">San Clemente Island photography: <a href="https://commons.wikimedia.org/wiki/File:San_Clemente_Island_Sunset_1.jpg" target="_blank" rel="noreferrer">Catatonique, CC BY-SA 4.0</a></p></footer>
      <ServicesJsonLd />
    </main>
  );
}
