"use client";

import { useEffect, useRef, useState } from "react";

const ENDPOINT = "https://formsubmit.co/ajax/bradysmith9@icloud.com";
const PHONE_DISPLAY = "714-620-5933";
const PHONE_LINK = "tel:+17146205933";

type Status = "idle" | "sending" | "sent" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [trip, setTrip] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chooseTrip = (event: Event) => setTrip((event as CustomEvent<string>).detail);
    window.addEventListener("bas:choose-trip", chooseTrip);
    const requestedTrip = new URLSearchParams(window.location.search).get("trip");
    if (requestedTrip) setTrip(requestedTrip);
    return () => window.removeEventListener("bas:choose-trip", chooseTrip);
  }, []);

  useEffect(() => {
    if (status === "sent") panelRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const payload: Record<string, string> = {};
    new FormData(event.currentTarget).forEach((value, key) => {
      payload[key] = typeof value === "string" ? value : "";
    });

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);
      const accepted =
        response.ok && result && String(result.success).toLowerCase() === "true";
      setStatus(accepted ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  function startOver() {
    setTrip("");
    setStatus("idle");
  }

  if (status === "sent") {
    return (
      <div
        className="booking-confirm"
        role="status"
        aria-live="polite"
        tabIndex={-1}
        ref={panelRef}
      >
        <span className="booking-confirm-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
            <path d="M4 12.5 9.5 18 20 6.5" />
          </svg>
        </span>
        <h3>REQUEST RECEIVED</h3>
        <p className="booking-confirm-lead">Thanks, you&rsquo;re on our radar.</p>
        <p>
          B-Line will contact you shortly to confirm availability and send your trip details.
        </p>
        <p className="booking-confirm-hold">
          Your requested date is not reserved until you receive confirmation directly from us.
        </p>
        <div className="booking-confirm-contact">
          <small>QUESTIONS IN THE MEANTIME?</small>
          <a href={PHONE_LINK}>Call or text {PHONE_DISPLAY}</a>
        </div>
        <button className="booking-restart" type="button" onClick={startOver}>
          Send Another Request<span aria-hidden="true">→</span>
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate={false}>
      <input type="hidden" name="_subject" value="New B-Line Charter Booking Request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
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

      {status === "error" && (
        <p className="booking-error" role="alert">
          We couldn&rsquo;t send your request. Please try again, or call/text{" "}
          <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>.
        </p>
      )}

      <button className="booking-submit" type="submit" disabled={sending} aria-busy={sending}>
        {sending ? "Sending Request…" : "Send Booking Request"}
        <span aria-hidden="true">{sending ? "" : "→"}</span>
      </button>
      <p className="form-note">No payment is taken. Your date is only booked after B-Line confirms availability with you.</p>
    </form>
  );
}
