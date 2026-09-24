/**
 * All factual content lives here, separate from presentation.
 * Sources: otownwatersports.com (home, about, glen-fletcher-2, rates) and @fletcherotown.
 * Update facts here — components only render what is in this file.
 */

export const contact = {
  phone: { label: "407 380 0734", href: "tel:+14073800734" },
  cell: { label: "407 529 7727", href: "tel:+14075297727" },
  email: "info@otownwatersports.com",
  instagram: { label: "@fletcherotown", href: "https://www.instagram.com/fletcherotown/" },
  facebook: { label: "Facebook", href: "https://www.facebook.com/otownwatersports/" },
  waiver: "https://otownwatersports.com/about/waiver/",
  location: "Lake Barton · Orlando, Florida",
};

export const brandLine = "Learn. Ride. Progress.";

export const glen = {
  // From otownwatersports.com/about/glen-fletcher-2/ and Wakeboarding Mag "Pro Playlist w/ Glen Fletcher".
  intro:
    "New Zealand–born Glen Fletcher has been coaching wakeboarding for more than twenty years. From his dock on Lake Barton he has worked with first-timers, juniors and some of the best-known professional riders in the sport.",
  detail:
    "His coaching is practical and personal: clear direction from the boat, video to review, and a plan built around the rider on the end of the rope. Between sets, there’s a fair chance of a guitar on the dock.",
};

/** Riders listed on the official O'Town coaching page. Historical relationships — not current students or endorsers. */
export const featuredRiders: { name: string; country: string; note: string; source: string }[] = [
  {
    name: "Rusty Malinoski",
    country: "Canada",
    note: "Credited with the first 1080 landed in professional competition.",
    source: "https://en.wikipedia.org/wiki/Rusty_Malinoski",
  },
  {
    name: "Dallas Friday",
    country: "USA",
    note: "Four-time X Games gold medalist and 2009 WWA Wakeboard World Champion.",
    source: "https://usa-wwf.org/IWWF-Hall-of-Fame/dallas-friday",
  },
  {
    name: "Raimi Merritt",
    country: "USA",
    note: "Named female Rider of the Year five years running, 2009–2013.",
    source: "https://en.wikipedia.org/wiki/Raimi_Merritt",
  },
  {
    name: "Aaron Rathy",
    country: "Canada",
    note: "2009 WWA Wakeboard World Champion and King of Wake.",
    source: "https://www.wakeboardingmag.com/blog/events/2009/08/30/rathy-friday-win-worlds-and-king-of-wake-crowns/",
  },
  {
    name: "Meagan Ethell",
    country: "USA",
    note: "Best Female Rider at the 2019 Wake Awards.",
    source: "https://www.wakeboardingmag.com/story/photos/2019-wake-awards-winners/",
  },
];

export const moreRiders = [
  "Steel Lafferty", "Mary Morgan Howell", "Erika Lang", "Sian Hurst", "Bec Gange",
  "Andrew Adkison", "Tony Carroll", "Austin Hair", "Jacob Valdez", "Eddie Valdez",
  "Damian Adam", "Shota Tezuka", "Deco Rondi", "Lorenzo Soprani", "Carolina “Rod” Goldenberg",
  "Luna Cassart", "Alizé Piana", "Otoha Kawahara", "Taylor McCullough", "Hollie Waldrop",
  "Bethany Henderson", "Sophia Fletcher",
];

export const juniorRiders = [
  "Sky Berninghaus", "Marc Kroon", "Landon Kasey", "Jorge Gill", "Kevin Duffy",
  "Jamie Huser", "Xavi Olea", "Igor Colombo", "Kira Lewis", "Kitt Smith", "Jordan Wolfe",
];

export type ActivityKey = "first-session" | "coaching" | "training-stay" | "wakesurf" | "other";

export const experiences = [
  {
    key: "first-session" as ActivityKey,
    title: "Your first session",
    who: "For people learning to wakeboard or wakesurf.",
    body: "Start behind the boat with a coach who has taught every kind of rider — from standing up for the first time to riding comfortably across the wake.",
    image: "/images/sophia-wakesurf.jpg",
    alt: "A rider wakesurfing on the wave behind the boat on Lake Barton",
  },
  {
    key: "coaching" as ActivityKey,
    title: "Develop your riding",
    who: "For riders seeking focused coaching and progression.",
    body: "One-to-one coaching on and off the water, with trampoline work and video review to connect what you feel to what you see.",
    image: "/images/trampoline.jpg",
    alt: "Riders practising on the trampoline by the dock, with the lake behind",
  },
  {
    key: "training-stay" as ActivityKey,
    title: "Plan a training stay",
    who: "For visitors who want more time on the water.",
    body: "Camps can combine coaching, video review, meals and lakeside accommodation. Tell us your dates and we’ll confirm what’s available.",
    image: "/images/stay-bedroom.jpg",
    alt: "A bright bedroom with a window looking onto the lake",
  },
];

export const boat = {
  /** Owner describes a 2027 Supra SL; the supplied renders carry an SV badge. Leave null until confirmed. */
  model: null as string | null,
  make: "Supra",
  frames: 72,
};

export const rates = {
  items: [
    { name: "Full day", price: "$425", unit: "per day", includes: ["Training on and off the water", "Trampoline training", "Video review of sessions"] },
    { name: "Lesson with Glen", price: "$160", unit: "per lesson", includes: ["1:1 coaching", "Training on and off the water"] },
    { name: "Lesson with O’Town staff", price: "$145", unit: "per lesson", includes: ["1:1 coaching", "Training on and off the water"] },
    { name: "Camps", price: "Call for pricing", unit: "per day", includes: ["Training on and off the water", "Video review, meals & accommodation"] },
  ],
  note: "All sessions are by appointment only.",
  reservations: [
    "Name and age of each rider",
    "Riding experience and goals",
    "The dates and times you’re interested in",
    "A 50% deposit to hold your reservation",
    "A signed O’Town Watersports waiver (riders under 18 need it signed before arriving)",
  ],
  payment:
    "Visa, MasterCard, AMEX, check, traveler’s check or cash. A 3% fee is added to card transactions. Full payment is due on arrival.",
  cancellation:
    "Cancellations must be made 30 days ahead in season and 14 days ahead off-season, with a 50% charge. No-shows and later cancellations are charged in full — there’s a waiting list and limited availability.",
  conditions:
    "Open year-round. Lessons run rain or shine, wind or no wind. Be on the dock, equipment on, ready to ride at your start time. Once you’ve booked the time, it’s yours — no refunds for sore muscles.",
};
