"use client";

import { useEffect, useState } from "react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [trip, setTrip] = useState("");

  useEffect(() => {
    const chooseTrip = (event: Event) => setTrip((event as CustomEvent<string>).detail);
    window.addEventListener("bas:choose-trip", chooseTrip);
    const requestedTrip = new URLSearchParams(window.location.search).get("trip");
    if (requestedTrip) setTrip(requestedTrip);
    return () => window.removeEventListener("bas:choose-trip", chooseTrip);
  }, []);

  return (
    <form
      className="booking-form"
      action="https://formsubmit.co/bradysmith9@icloud.com"
      method="POST"
      onSubmit={() => setSubmitted(true)}
    >
      <input type="hidden" name="_subject" value="New B-Line Charter Booking Request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://bradys-charters-hb.netlify.app/?request=sent#book" />
      <input className="honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" />

      <div className="field wide">
        <label htmlFor="name">Your name</label>
        <input id="name" name="Name" type="text" placeholder="First and last name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="Email" type="email" placeholder="you@email.com" required />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="Phone" type="tel" placeholder="(555) 555-5555" required />
      </div>
      <div className="field">
        <label htmlFor="date">Preferred date</label>
        <input id="date" name="Preferred date" type="date" required />
      </div>
      <div className="field">
        <label htmlFor="alt-date">Alternate date</label>
        <input id="alt-date" name="Alternate date" type="date" />
      </div>
      <div className="field">
        <label htmlFor="contact">Preferred contact</label>
        <select id="contact" name="Preferred contact" required defaultValue="">
          <option value="" disabled>How should we reach you?</option>
          <option>Text</option>
          <option>Phone call</option>
          <option>Email</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="guests">Group size</label>
        <select id="guests" name="Group size" required defaultValue="">
          <option value="" disabled>Select guests</option>
          {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n} guest{n > 1 ? "s" : ""}</option>)}
        </select>
      </div>
      <div className="field wide">
        <label htmlFor="trip">Trip</label>
        <select id="trip" name="Trip" required value={trip} onChange={(event) => setTrip(event.target.value)}>
          <option value="" disabled>Choose a trip</option>
          <option>Catalina Island — 3/4 Day</option>
          <option>Catalina Island — Full Day</option>
          <option>San Clemente Island</option>
          <option>Offshore Banks</option>
          <option>Spearfishing expedition — custom quote</option>
          <option>Beginner &amp; Family Dive Day — custom quote</option>
          <option>Kelp & Reef spearfishing — custom quote</option>
          <option>Bluewater spearfishing — custom quote</option>
          <option>Custom Support spearfishing — custom quote</option>
          <option>Avalon Private Round Trip</option>
          <option>Avalon Drop-Off</option>
          <option>Avalon Pickup</option>
          <option>Private Island Cruise</option>
          <option>Private Island Bar Hop</option>
          <option>Newport Dinner Cruise</option>
          <option>Laguna Coves Cruise</option>
          <option>Custom Coastal Cruise</option>
          <option>Not sure — help me choose</option>
        </select>
      </div>
      <div className="field wide">
        <label htmlFor="notes">Tell us about your trip</label>
        <textarea id="notes" name="Notes" rows={4} placeholder="Target species, island plans, preferred timing, experience level, or questions" />
      </div>
      <label className="field wide agree">
        <input type="checkbox" name="Agreed to charter policies" value="Yes" required />
        <span>I understand this is a request, not a confirmed booking, and agree to the <a href="/info#policies">charter policies</a>.</span>
      </label>
      <button className="booking-submit" type="submit">
        {submitted ? "Opening confirmation…" : "Send Booking Request"}<span>→</span>
      </button>
      <p className="form-note">No payment is taken. Your date is only booked after B-Line confirms availability with you.</p>
    </form>
  );
}
