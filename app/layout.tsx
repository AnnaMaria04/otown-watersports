import type { Metadata } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "O'Town Watersports — Private Wakeboard & Wakesurf Coaching, Orlando",
  description:
    "Private wakeboard and wakesurf coaching with Glen Fletcher on Lake Barton, Orlando. Coach to world champions. Beginners welcomed, pros challenged.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
