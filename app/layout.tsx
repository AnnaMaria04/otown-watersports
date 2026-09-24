import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/archivo/wdth.css";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SmoothAnchors from "@/components/SmoothAnchors";
import Reveal from "@/components/Reveal";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://otown-watersports.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "O’Town Watersports — Wakeboard & wakesurf coaching on Lake Barton, Orlando",
  description:
    "Wakeboard and wakesurf coaching with Glen Fletcher on Lake Barton, Orlando. From your first ride to the trick you’ve been working toward. Learn. Ride. Progress.",
  openGraph: {
    title: "O’Town Watersports",
    description: "Wakeboard and wakesurf coaching on Lake Barton, Orlando.",
    siteName: "O’Town Watersports",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "O’Town Watersports",
  description: "Wakeboard and wakesurf coaching with Glen Fletcher on Lake Barton, Orlando.",
  url: SITE,
  telephone: "+1-407-380-0734",
  email: "info@otownwatersports.com",
  address: { "@type": "PostalAddress", streetAddress: "5220 E Colonial Dr", addressLocality: "Orlando", addressRegion: "FL", postalCode: "32807", addressCountry: "US" },
  sameAs: ["https://www.instagram.com/fletcherotown/", "https://www.facebook.com/otownwatersports/"],
};

export const viewport: Viewport = { themeColor: "#0B1116", viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <SmoothAnchors />
        <Reveal />
      </body>
    </html>
  );
}
