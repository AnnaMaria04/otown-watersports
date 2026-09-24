/**
 * All factual content lives here, separate from presentation.
 * Sources: otownwatersports.com (home, about, glen-fletcher-2, rates), @fletcherotown on Instagram,
 * and the rider sources listed per rider. Update facts here — components only render this file.
 */

export const contact = {
  phone: { label: "407 380 0734", href: "tel:+14073800734" },
  cell: { label: "407 529 7727", href: "tel:+14075297727" },
  email: "info@otownwatersports.com",
  instagram: { label: "@fletcherotown", href: "https://www.instagram.com/fletcherotown/" },
  facebook: { label: "Facebook", href: "https://www.facebook.com/otownwatersports/" },
  waiver: "https://otownwatersports.com/about/waiver/",
  location: "Lake Barton · Orlando, Florida",
  address: "5220 E Colonial Dr, Orlando, FL 32807",
  directions: "https://www.google.com/maps/dir/?api=1&destination=5220+E+Colonial+Dr,+Orlando,+FL+32807",
  mapEmbed: "https://www.google.com/maps?q=O%27Town+Watersports,+5220+E+Colonial+Dr,+Orlando,+FL+32807&z=15&output=embed",
  hours: "Open every week of the year, by appointment",
};

export const brandLine = "Learn. Ride. Progress.";

/** Hero slides map to the brand line. Photos: O'Town originals (otownwatersports.com). */
export const heroSlides = [
  {
    key: "learn",
    label: "Learn",
    caption: "Dock starts on Lake Barton",
    image: "/images/hero-dock-start.jpg",
    alt: "A rider starts from the O’Town dock as the boat pulls away across Lake Barton",
    position: "50% 74%",
    mobilePosition: "40% 70%",
  },
  {
    key: "ride",
    label: "Ride",
    caption: "Wakesurfing behind the boat",
    image: "/images/sophia-wakesurf.jpg",
    alt: "A rider wakesurfing on the wave behind the boat",
    position: "50% 58%",
    mobilePosition: "50% 55%",
  },
  {
    key: "progress",
    label: "Progress",
    caption: "Air awareness on the trampoline",
    image: "/images/trampoline.jpg",
    alt: "A rider flips on the lakeside trampoline while friends watch from the dock",
    position: "50% 38%",
    mobilePosition: "55% 40%",
  },
];

export const glen = {
  role: "Head coach",
  // From otownwatersports.com/about/glen-fletcher-2/, @fletcherotown bio and Wakeboarding Mag.
  points: [
    "New Zealand–born former pro rider, coaching wakeboarding for more than twenty years.",
    "Has worked with first-timers, juniors and some of the best-known riders in the sport.",
    "Beginners welcomed. Pros challenged.",
  ],
  aside: "Between sets, there’s a fair chance of a guitar on the dock.",
};

export type Rider = {
  key: string;
  name: string;
  country: string;
  points: string[];
  source: string;
  /** Add a licensed photo path here when one is supplied. Without it the panel is typographic. */
  photo?: string;
  photoAlt?: string;
  photoPosition?: string;
};

/** Riders listed on the official O'Town coaching page. Historical relationships — not current students or endorsers. */
export const spotlight: Rider[] = [
  {
    key: "raimi",
    name: "Raimi Merritt",
    country: "USA",
    points: ["Moved to Orlando at 15 to train with Glen.", "Named female Rider of the Year five years running, 2009–2013."],
    source: "https://en.wikipedia.org/wiki/Raimi_Merritt",
  },
  {
    key: "dallas",
    name: "Dallas Friday",
    country: "USA",
    points: ["Four-time X Games gold medalist.", "2009 WWA Wakeboard World Champion."],
    source: "https://usa-wwf.org/IWWF-Hall-of-Fame/dallas-friday",
  },
  {
    key: "rusty",
    name: "Rusty Malinoski",
    country: "Canada",
    points: ["Credited with the first 1080 landed in professional competition."],
    source: "https://en.wikipedia.org/wiki/Rusty_Malinoski",
  },
  {
    key: "aaron",
    name: "Aaron Rathy",
    country: "Canada",
    points: ["2009 WWA Wakeboard World Champion.", "2009 King of Wake."],
    source: "https://www.wakeboardingmag.com/blog/events/2009/08/30/rathy-friday-win-worlds-and-king-of-wake-crowns/",
  },
  {
    key: "meagan",
    name: "Meagan Ethell",
    country: "USA",
    points: ["Best Female Rider at the 2019 Wake Awards."],
    source: "https://www.wakeboardingmag.com/story/photos/2019-wake-awards-winners/",
  },
  {
    key: "sophia",
    name: "Sophia Fletcher",
    country: "USA",
    points: ["Listed with the pro women on O’Town’s coaching page."],
    source: "https://otownwatersports.com/about/glen-fletcher-2/",
    photo: "/images/sophia-wakesurf.jpg",
    photoAlt: "Sophia Fletcher wakesurfing on Lake Barton",
    photoPosition: "50% 45%",
  },
];

export const juniorRiders = [
  "Sky Berninghaus", "Marc Kroon", "Landon Kasey", "Jorge Gill", "Kevin Duffy",
  "Jamie Huser", "Xavi Olea", "Igor Colombo", "Kira Lewis", "Kitt Smith", "Jordan Wolfe",
];

/** How a session works — from the rates page (training on and off the water, trampoline, video review). */
export const method = [
  { n: "01", title: "On the water", body: "One-to-one sets behind the boat, with Glen driving and coaching every pass — speed, line length and timing tuned to you.", image: "/images/sophia-wakesurf.jpg", alt: "A rider wakesurfing behind the boat on Lake Barton", position: "50% 55%" },
  { n: "02", title: "On the trampoline", body: "Air awareness and trick progressions on the lakeside trampoline, so the movement is familiar before you try it behind the boat.", image: "/images/trampoline.jpg", alt: "A rider flips on the lakeside trampoline", position: "50% 35%" },
  { n: "03", title: "In video review", body: "Full days include video review of your sessions — see what you felt, and know exactly what to change on the next set.", image: "/images/glen-driving.jpg", alt: "Glen driving the boat, looking back toward the rider", position: "35% 40%" },
];

export const moreRiders = [
  "Steel Lafferty", "Mary Morgan Howell", "Erika Lang", "Sian Hurst", "Bec Gange", "Andrew Adkison",
  "Tony Carroll", "Austin Hair", "Jacob Valdez", "Eddie Valdez", "Damian Adam", "Shota Tezuka",
  "Deco Rondi", "Lorenzo Soprani", "Carolina Goldenberg", "Luna Cassart", "Alizé Piana", "Otoha Kawahara",
  "Taylor McCullough", "Hollie Waldrop", "Bethany Henderson",
];

export type ActivityKey = "first-session" | "coaching" | "training-stay" | "wakesurf" | "other";

export const experiences = [
  {
    key: "first-session" as ActivityKey,
    index: "01",
    title: "Your first session",
    who: "For people learning to wakeboard or wakesurf.",
    body: "Start behind the boat with a coach who has taught every kind of rider — from standing up for the first time to riding comfortably across the wake.",
    image: "/images/dock-boat-tube.jpg",
    alt: "The boat at the O’Town dock, ready for the next rider",
    position: "50% 60%",
  },
  {
    key: "coaching" as ActivityKey,
    index: "02",
    title: "Develop your riding",
    who: "For riders seeking focused coaching and progression.",
    body: "One-to-one coaching on and off the water, with trampoline work and video review to connect what you feel to what you see.",
    image: "/images/big-air.jpg",
    alt: "A rider high above the wake against a bright, cloudy sky",
    position: "62% 40%",
  },
  {
    key: "training-stay" as ActivityKey,
    index: "03",
    title: "Plan a training stay",
    who: "For visitors who want more time on the water.",
    body: "Camps can combine coaching, video review, meals and lakeside accommodation. Tell us your dates and we’ll confirm what’s available.",
    image: "/images/stay-bedroom.jpg",
    alt: "A bright bedroom with a window looking onto the lake",
    position: "50% 50%",
  },
];

export const boat = {
  /** O'Town's new boat is a Supra SL (owner + @fletcherotown, Sept 2026).
   *  NOTE: the 360° render was recorded from a configurator build that carries an SV badge — re-record an SL build to match. */
  model: "SL" as string | null,
  make: "Supra",
  link: "https://www.supraboats.com/boats/sl",
  frames: 72,
};

/** Latest posts from @fletcherotown (covers downloaded Sept 2026). */
export const igPosts = [
  { id: "DVM2FoiATjD", caption: "Dock start, French style", image: "/ig/DVM2FoiATjD.jpg" },
  { id: "DPkBb_gEgYb", caption: "Wipeout Wednesday — with redemption", image: "/ig/DPkBb_gEgYb.jpg" },
  { id: "DZ2ndOUhbpu", caption: "What spin is this?", image: "/ig/DZ2ndOUhbpu.jpg" },
  { id: "DS8A6e7AZeI", caption: "End of 2025", image: "/ig/DS8A6e7AZeI.jpg" },
  { id: "DaYLopoBBOZ", caption: "The KGB, and why it got loose", image: "/ig/DaYLopoBBOZ.jpg" },
  { id: "DTd591RAfuu", caption: "Winter in the Deep South", image: "/ig/DTd591RAfuu.jpg" },
];

export const faqs = [
  { q: "Do I need any experience?", a: "No. Beginners are welcomed and pros are challenged — every session is built around the rider on the end of the rope." },
  { q: "What happens if the weather turns?", a: "O’Town is open year-round and lessons run rain or shine, wind or no wind." },
  { q: "How do I reserve a session?", a: "Send an inquiry or call. A 50% deposit holds your time, and the balance is due on arrival." },
  { q: "Is there a waiver?", a: "Yes — every rider signs the O’Town waiver. Riders under 18 need it signed before they arrive." },
  { q: "Can I stay on site?", a: "Camps can include meals and accommodation. Ask with your dates and we’ll confirm availability." },
  { q: "Where are you?", a: "5220 E Colonial Dr, Orlando — on private Lake Barton, about 15–20 minutes from Orlando International Airport. Look for the two-story building with the big blue “O”." },
];

export const rates = {
  items: [
    { name: "Lesson with Glen", price: "$160", unit: "per lesson", includes: ["1:1 coaching with Glen", "Training on and off the water"], featured: true },
    { name: "Lesson with staff", price: "$145", unit: "per lesson", includes: ["1:1 coaching", "Training on and off the water"] },
    { name: "Full day", price: "$425", unit: "per day", includes: ["Training on and off the water", "Trampoline training", "Video review of sessions"] },
    { name: "Camps", price: "Call", unit: "for pricing", includes: ["Training on and off the water", "Video review", "Meals & accommodation"] },
  ],
  note: "All sessions are by appointment only.",
  policies: [
    {
      q: "Making a reservation",
      a: "Email or call 407 380 0734 with each rider’s name and age, riding experience and goals, and the dates and times you’d like. A 50% deposit holds the reservation.",
    },
    { q: "Waiver", a: "Every rider signs the O’Town Watersports waiver. Riders under 18 need it signed before arriving." },
    { q: "Payment", a: "Visa, MasterCard, AMEX, check, traveler’s check or cash. A 3% fee is added to card transactions. Full payment is due on arrival." },
    {
      q: "Cancellations",
      a: "Cancel 30 days ahead in season or 14 days ahead off-season, with a 50% charge. No-shows and later cancellations are charged in full — there’s a waiting list and limited availability.",
    },
    {
      q: "On the day",
      a: "Open year-round; lessons run rain or shine, wind or no wind. Be on the dock with your equipment on at your start time. Once you’ve booked the time, it’s yours — no refunds for sore muscles.",
    },
  ],
};
