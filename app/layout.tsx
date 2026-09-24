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
  title: "O’Town Watersports | Wakeboard & Wakesurf Lessons in Orlando, FL",
  description:
    "Private wakeboard and wakesurf lessons in Orlando with pro coach Glen Fletcher. One-to-one coaching on Lake Barton for beginners to pros, every week of the year.",
  keywords: ["wakeboard lessons Orlando", "wakesurf lessons Orlando", "wakeboard coaching", "Glen Fletcher", "Lake Barton", "O’Town Watersports"],
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
  "@graph": [
    {
      "@type": ["SportsActivityLocation", "LocalBusiness"],
      "@id": `${SITE}/#business`,
      name: "O’Town Watersports",
      description: "Private wakeboard and wakesurf coaching with Glen Fletcher on Lake Barton, Orlando.",
      url: SITE,
      image: `${SITE}/opengraph-image.jpg`,
      logo: `${SITE}/brand/otown-logo-solid.png`,
      telephone: "+1-407-380-0734",
      email: "info@otownwatersports.com",
      priceRange: "$145–$425",
      address: { "@type": "PostalAddress", streetAddress: "5220 E Colonial Dr", addressLocality: "Orlando", addressRegion: "FL", postalCode: "32807", addressCountry: "US" },
      hasMap: "https://www.google.com/maps/search/?api=1&query=5220+E+Colonial+Dr,+Orlando,+FL+32807",
      sameAs: ["https://www.instagram.com/fletcherotown/", "https://www.facebook.com/otownwatersports/"],
      employee: { "@id": `${SITE}/#glen` },
      makesOffer: [
        { "@type": "Offer", name: "Wakeboard or wakesurf lesson with Glen", price: "160", priceCurrency: "USD" },
        { "@type": "Offer", name: "Lesson with staff", price: "145", priceCurrency: "USD" },
        { "@type": "Offer", name: "Full day of coaching", price: "425", priceCurrency: "USD" },
      ],
    },
    { "@type": "Person", "@id": `${SITE}/#glen`, name: "Glen Fletcher", jobTitle: "Head wakeboard coach", worksFor: { "@id": `${SITE}/#business` }, sameAs: ["https://www.instagram.com/fletcherotown/"] },
    { "@type": "WebSite", "@id": `${SITE}/#website`, url: SITE, name: "O’Town Watersports", publisher: { "@id": `${SITE}/#business` } },
  ],
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
