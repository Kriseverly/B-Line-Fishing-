"use client";

import type { ReactNode } from "react";

export default function BookingChoice({ value, className, children }: { value: string; className?: string; children: ReactNode }) {
  const chooseTrip = () => {
    window.dispatchEvent(new CustomEvent("bas:choose-trip", { detail: value }));
  };

  return <a href="#book" className={className} onClick={chooseTrip}>{children}</a>;
}
