import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "O’Town Watersports — Wakeboard & wakesurf coaching on Lake Barton, Orlando",
  description:
    "Wakeboard and wakesurf coaching with Glen Fletcher on Lake Barton, Orlando. From your first ride to the trick you’ve been working toward. Learn. Ride. Progress.",
  openGraph: {
    title: "O’Town Watersports",
    description: "Wakeboard and wakesurf coaching on Lake Barton, Orlando.",
    images: ["/images/hero-dock-start.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#F2F1ED" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Reveal />
      </body>
    </html>
  );
}
