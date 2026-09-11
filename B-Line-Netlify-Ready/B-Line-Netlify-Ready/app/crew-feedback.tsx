"use client";

import { useEffect, useRef, useState } from "react";

export type CrewMember = { role: string; name: string; bio: string };

export default function CrewGrid({ crew }: { crew: CrewMember[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  const firstField = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    document.addEventListener("keydown", onKey);
    firstField.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [selected]);

  const firstName = (full: string) => full.split(" ")[0].charAt(0) + full.split(" ")[0].slice(1).toLowerCase();

  return (
    <>
      <div className="deckhand-grid">
        {crew.map((c) => (
          <article key={c.name}>
            <span aria-hidden="true">☠</span>
            <small>{c.role}</small>
            <h3>{c.name}</h3>
            <p>{c.bio}</p>
            <div className="crew-rating" aria-label="No reviews yet">
              <b>NEW CREW</b>
              <small>No verified ratings yet</small>
            </div>
            <button className="rate-crew-button" type="button" onClick={() => setSelected(c.name)}>
              Rate {firstName(c.name)}
            </button>
          </article>
        ))}
      </div>

      {selected && (
        <div className="crew-modal" role="dialog" aria-modal="true" aria-label={`Rate ${selected}`} onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}>
          <form
            className="crew-form"
            action="https://formsubmit.co/bradysmith9@icloud.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value={`B-Line crew feedback: ${selected}`} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://bradys-charters-hb.netlify.app/about?feedback=sent" />
            <input type="hidden" name="Crew member" value={selected} />
            <input className="honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" />

            <button className="crew-form-close" type="button" onClick={() => setSelected(null)} aria-label="Close">×</button>
            <p className="eyebrow dark">CREW FEEDBACK</p>
            <h3>{selected}</h3>
            <p className="crew-form-note">Only guests who have actually been aboard Solstice should submit feedback. It goes straight to Brady.</p>

            <div className="field">
              <label htmlFor="crew-rating-select">Rating</label>
              <select id="crew-rating-select" name="Rating" required defaultValue="" ref={firstField}>
                <option value="" disabled>Choose a rating</option>
                <option>5 - Outstanding</option>
                <option>4 - Great</option>
                <option>3 - Good</option>
                <option>2 - Below expectations</option>
                <option>1 - Poor</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="crew-trip-date">Trip date</label>
              <input id="crew-trip-date" name="Trip date" type="date" required />
            </div>
            <div className="field wide">
              <label htmlFor="crew-comments">What stood out?</label>
              <textarea id="crew-comments" name="Comments" rows={4} placeholder="How did the day go? Anything the crew did especially well?" required />
            </div>
            <div className="field">
              <label htmlFor="crew-guest-name">Your name</label>
              <input id="crew-guest-name" name="Guest name" type="text" required />
            </div>
            <div className="field">
              <label htmlFor="crew-guest-email">Your email</label>
              <input id="crew-guest-email" name="Guest email" type="email" required />
            </div>

            <button className="booking-submit" type="submit">Send Feedback<span>→</span></button>
          </form>
        </div>
      )}
    </>
  );
}
