"use client";

import { useEffect, useState } from "react";

const photos = [
  { src: "/images/solstice-underway-gallery.jpeg", alt: "Solstice underway in Huntington Harbour" },
  { src: "/images/solstice-gallery-1.jpeg", alt: "Solstice center console and tower" },
  { src: "/images/solstice-gallery-2.jpeg", alt: "Spacious bow seating aboard Solstice" },
  { src: "/images/solstice-gallery-3.jpeg", alt: "Solstice docked in Huntington Harbour" },
  { src: "/images/solstice-gallery-4.jpeg", alt: "Triple outboards on Solstice" },
  { src: "/images/solstice-gallery-5.jpeg", alt: "Stern view of the 37-foot EdgeWater Solstice" },
  { src: "/images/solstice-gallery-6.jpeg", alt: "Garmin helm aboard Solstice near Catalina" },
];

export default function BoatCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % photos.length), 4200);
    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (direction: number) => setActive((current) => (current + direction + photos.length) % photos.length);

  return (
    <div className="boat-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-roledescription="carousel" aria-label="Photos of Solstice">
      <div className="boat-slides">
        {photos.map((photo, index) => (
          <img key={photo.src} src={photo.src} alt={photo.alt} className={index === active ? "active" : ""} aria-hidden={index !== active} />
        ))}
      </div>
      <div className="boat-carousel-shade" />
      <p className="boat-photo-count"><strong>{String(active + 1).padStart(2, "0")}</strong> / {String(photos.length).padStart(2, "0")}</p>
      <div className="boat-carousel-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous boat photo">←</button>
        <div className="boat-dots" aria-label="Choose a boat photo">
          {photos.map((photo, index) => <button key={photo.src} type="button" className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show boat photo ${index + 1}`} aria-current={index === active ? "true" : undefined} />)}
        </div>
        <button type="button" onClick={() => move(1)} aria-label="Next boat photo">→</button>
      </div>
    </div>
  );
}
