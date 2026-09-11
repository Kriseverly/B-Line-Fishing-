import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { SITE, BusinessJsonLd } from "./seo-data";

const display = Oswald({ variable: "--font-display", subsets: ["latin"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"] });

const TITLE =
  "B-Line Fishing Charters | Private Sportfishing from Huntington Harbour";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: TITLE, template: "%s | B-Line Fishing Charters" },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Fishing Charters",
  keywords: [
    "fishing charters Huntington Beach",
    "Southern California fishing charter",
    "private fishing charter",
    "Catalina Island fishing charter",
    "San Clemente Island fishing",
    "offshore tuna charter",
    "bluefin tuna charter",
    "spearfishing charter California",
    "Avalon shuttle Catalina",
    "Catalina boat day charter",
    "Huntington Harbour sportfishing",
    "Orange County fishing charter",
    "EdgeWater charter boat",
    "B-Line Fishing Charters",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: TITLE,
    description: SITE.description,
    locale: "en_US",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "B-Line Fishing Charters — private sportfishing aboard Solstice, a 37' EdgeWater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B-Line Fishing Charters | Private Southern California Sportfishing",
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/images/icon-192.png", sizes: "192x192" }],
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#03141f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        {children}
        <BusinessJsonLd />
      </body>
    </html>
  );
}
