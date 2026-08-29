// Central SEO + structured-data source of truth for B-Line Fishing Charters.
// To move to a custom domain later, change SITE.url in ONE place below.

export const SITE = {
  name: "B-Line Fishing Charters",
  legalName: "B-Line Fishing Charters",
  url: "https://bradys-charters-hb.netlify.app",
  description:
    "Private Southern California sportfishing, spearfishing, Avalon shuttle, and coastal cruise charters aboard Solstice, a 37' EdgeWater departing from Huntington Harbour. Catalina Island, San Clemente Island, and the offshore banks.",
  telephone: "+1-714-620-5933",
  telephoneDisplay: "714-620-5933",
  email: "bradysmith9@icloud.com",
  boat: "Solstice — 37' EdgeWater",
  port: "Huntington Harbour, Huntington Beach, California",
  ogImage: "/images/og-image.jpg",
  // Approx. Huntington Harbour departure area
  geo: { latitude: 33.7157, longitude: -118.0653 },
  areaServed: [
    "Southern California",
    "Huntington Beach, California",
    "Catalina Island, California",
    "Avalon, California",
    "San Clemente Island, California",
    "Newport Beach, California",
    "Laguna Beach, California",
    "Long Beach, California",
    "Orange County, California",
  ],
  species: [
    "Bluefin tuna",
    "Yellowfin tuna",
    "Yellowtail",
    "Dorado (Mahi-mahi)",
    "White seabass",
    "Calico bass",
    "Bonito",
    "Rockfish",
  ],
};

// Pricing is intentionally omitted: the live site quotes trips directly rather
// than publishing rates. Add a `price` field here only if a rate is also shown
// on the page, so the structured data never contradicts the site.
export const TRIPS = [
  {
    name: "Catalina Island Fishing Charter",
    duration: "3/4 day or full day, up to 10 hours",
    guests: "Up to 6 guests",
    description:
      "Private Catalina Island fishing charter targeting yellowtail, white seabass, calico bass, and bonito across coves, kelp lines, and rocky structure.",
  },
  {
    name: "San Clemente Island Fishing Charter",
    duration: "Up to 10 hours",
    guests: "Up to 6 guests",
    description:
      "Long-range private charter to San Clemente Island for serious island fishing when weather, access, and conditions allow.",
  },
  {
    name: "Offshore Banks Tuna Charter",
    duration: "Up to 12 hours",
    guests: "Up to 6 guests",
    description:
      "Offshore pelagic charter hunting bluefin tuna, yellowfin tuna, dorado, and kelp-paddy fish across the Southern California banks.",
  },
  {
    name: "Private Spearfishing Expedition",
    duration: "Custom",
    guests: "Up to 6 divers",
    description:
      "Family-friendly private spearfishing trips — kelp & reef, bluewater, or custom dive support — planned around visibility, current, and your group's ability.",
  },
  {
    name: "Avalon Shuttle & Catalina Boat Days",
    duration: "Round trip, drop-off, or pickup",
    guests: "Up to 6 guests",
    description:
      "Private Avalon transportation and Catalina Island boat days from Huntington Harbour, including round trips, one-way drop-offs, and scheduled pickups.",
  },
  {
    name: "Private Coastal Cruise",
    duration: "Custom",
    guests: "Up to 6 guests",
    description:
      "Private island cruises, island bar hops, Newport dinner runs, and Laguna cove cruises aboard Solstice.",
  },
];

export const FAQS = [
  {
    q: "Where do B-Line Fishing Charters depart from?",
    a: "All trips depart from Huntington Harbour in Huntington Beach, California, aboard Solstice, a 37' EdgeWater. We run throughout Southern California, including Catalina Island, Avalon, San Clemente Island, and the offshore banks.",
  },
  {
    q: "How many people can come on the boat?",
    a: "Every charter is private for your group of up to six guests. You get the entire boat and a trip planned around your goals.",
  },
  {
    q: "What kind of boat is Solstice?",
    a: "Solstice is a 37-foot EdgeWater center console built for serious water — triple outboards, a full tower, and open fishing room from bow to stern, with speed and range for offshore missions.",
  },
  {
    q: "What fish can we catch?",
    a: "Depending on season and conditions, targets include yellowtail, white seabass, calico bass, bonito, rockfish, and offshore bluefin tuna, yellowfin tuna, and dorado.",
  },
  {
    q: "Do you offer spearfishing trips?",
    a: "Yes. We run private spearfishing expeditions for beginners, families, and experienced freedivers — kelp & reef, bluewater, and custom dive support. Divers bring personal gear and must hold all required licenses.",
  },
  {
    q: "Do you run Avalon shuttles and boat days?",
    a: "Yes. B-Line runs private Avalon round trips, one-way drop-offs and pickups, Catalina boat days, island bar hops, Newport dinner cruises, and Laguna cove cruises from Huntington Harbour.",
  },
  {
    q: "Are beginners and families welcome?",
    a: "Absolutely. We plan around the season, weather, and your group's experience level — from a family's first island trip to a long-range offshore mission.",
  },
  {
    q: "How much does a charter cost?",
    a: "Pricing depends on the trip, hours, and route, and is quoted directly. Submit a request through the booking form or call 714-620-5933. Fishing licenses, gratuity, and optional fish processing are not included.",
  },
  {
    q: "How do I book a trip?",
    a: "Submit a request through the booking form on our website or call 714-620-5933. No payment is taken up front — your date is only booked after B-Line confirms availability with you.",
  },
];

type Json = Record<string, unknown>;

function JsonLd({ data }: { data: Json }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Site-wide LocalBusiness + WebSite graph (rendered on every page)
export function BusinessJsonLd() {
  const data: Json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.url}/#business`,
        name: SITE.name,
        alternateName: ["B Line Fishing Charters", "BLine Charters"],
        description: SITE.description,
        url: SITE.url,
        telephone: SITE.telephone,
        email: SITE.email,
        image: `${SITE.url}${SITE.ogImage}`,
        logo: `${SITE.url}/images/icon-512.png`,
        priceRange: "$$$",
        slogan: "Go farther. Fish harder.",
        knowsAbout: [
          "Sportfishing charters",
          "Spearfishing charters",
          "Catalina Island fishing",
          "Avalon boat shuttle",
          "Offshore tuna fishing",
          "Southern California fishing",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Huntington Beach",
          addressRegion: "CA",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.geo.latitude,
          longitude: SITE.geo.longitude,
        },
        areaServed: SITE.areaServed.map((name) => ({ "@type": "Place", name })),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "05:00",
            closes: "20:00",
          },
        ],
        makesOffer: TRIPS.map((t) => ({
          "@type": "Offer",
          name: t.name,
          description: t.description,
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            description: "Quoted per trip",
          },
          category: "Charter Boat",
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": `${SITE.url}/#business` },
        inLanguage: "en-US",
      },
    ],
  };
  return <JsonLd data={data} />;
}

// Individual services (home page)
export function ServicesJsonLd() {
  const data: Json = {
    "@context": "https://schema.org",
    "@graph": TRIPS.map((t, i) => ({
      "@type": "Service",
      "@id": `${SITE.url}/#service-${i + 1}`,
      serviceType: "Charter boat trip",
      name: t.name,
      description: t.description,
      provider: { "@id": `${SITE.url}/#business` },
      areaServed: { "@type": "Place", name: "Southern California" },
    })),
  };
  return <JsonLd data={data} />;
}

export function FaqJsonLd() {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <JsonLd data={data} />;
}

export function BreadcrumbsJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
  return <JsonLd data={data} />;
}
