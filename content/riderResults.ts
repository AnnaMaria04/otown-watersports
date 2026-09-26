/** Verified, dated career results for /athletes/[slug] (checked Sept 2026 against the sources listed).
 *  Every entry must have a year and a source. "rider" = stated by the rider / her own records. */
export type Result = { year: string; text: string; source: string };

const PWT26 = "https://prowakeboardtour.com/2025-results/"; // page is headed "2026 Results"
const WWA22W = "https://www.thewwa.com/2022-nautique-wwa-wakeboard-world-championships-masters-wakesurf-championships-presented-by-gm-marine-conclude-in-pine-mountain-georgia/";
const WWA22N = "https://www.thewwa.com/2022-national-champions-crowned-in-polk-county/";
const WWA24W = "https://www.thewwa.com/gold-medals-awarded-on-australias-gold-coast-for-the-2024-nautique-wwa-wakeboard-world-championships/";
const MC = "https://www.mastercraft.com/athletes/meagan-ethell/";
const OLY = "https://olympic.ca/team-canada/rusty-malinoski/";
const STEEL = "https://steellafferty.com/accomplishments/";
const KIRA = "https://www.wakeboardingmag.com/story/gear/whats-in-kira-lewis-board-bag/";
const ZOEY = "https://zoeycarroll.com/";

export const riderResults: Record<string, Result[]> = {
  meagan: [
    { year: "2026", text: "Pro Wakeboard Tour, Pro Women overall co-champion", source: PWT26 },
    { year: "2024", text: "WWA Wakeboard World Champion, her 8th world title (Gold Coast, Australia)", source: "https://www.wakeboardingmag.com/news/ethell-earns-eighth-wwa-title-while-rapa-snares-mens-title/" },
    { year: "2012–2025", text: "Six-time Best Female Rider, Wake Awards", source: MC },
    { year: "2012", text: "Rookie season: won Queen of Wake, The Masters and Wake Games; Rookie of the Year", source: MC },
  ],
  rusty: [
    { year: "2013", text: "World Champion, his second world title", source: OLY },
    { year: "2009", text: "First 1080 ever landed in competition (Pro Wakeboard Tour finale, Reno)", source: "https://www.wakeboardingmag.com/blog/news/2009/08/16/rusty-malinoski-lands-first-1080-in-competition/" },
    { year: "2008", text: "World Champion", source: OLY },
    { year: "2007, 2011, 2013", text: "Canada’s Wakeboard Male Athlete of the Year", source: OLY },
    { year: "2005", text: "U.S. Pro-Am Championship, Pro Men winner", source: "https://en.wikipedia.org/wiki/Rusty_Malinoski" },
  ],
  steel: [
    { year: "2017", text: "X Games gold, Real Wake Throwdown", source: STEEL },
    { year: "2017", text: "Wakeboarder of the Year", source: STEEL },
    { year: "2017", text: "Trick of the Year (double mute moby) and 1st at Double Up Pro", source: STEEL },
    { year: "2010", text: "Rookie of the Year", source: STEEL },
  ],
  shota: [
    { year: "2025", text: "World Games silver, men’s wakeboard freestyle (Chengdu, China)", source: "https://en.wikipedia.org/wiki/Wakeboarding_at_the_2025_World_Games" },
    { year: "2017", text: "World Games gold, men’s wakeboard freestyle (Wrocław, Poland)", source: "https://en.wikipedia.org/wiki/Water_skiing_at_the_2017_World_Games_%E2%80%93_Men%27s_wakeboard" },
    { year: "2026", text: "16th overall, Pro Men, Pro Wakeboard Tour", source: PWT26 },
  ],
  jamie: [
    { year: "2025", text: "World record: 140 m (460 ft) wakeboard rail slide, Laax, Switzerland", source: "https://alliancewake.com/wake/switzerlands-jamie-huser-sets-a-new-world-record/" },
    { year: "2022", text: "WWA World Champion, Junior Pro Men (Pine Mountain, Georgia)", source: WWA22W },
    { year: "2022", text: "WWA U.S. National Champion, Junior Pro Men", source: WWA22N },
  ],
  camden: [
    { year: "2026", text: "6th overall, Pro Men, Pro Wakeboard Tour", source: PWT26 },
    { year: "2023", text: "WWA U.S. National Champion, Junior Men", source: "https://www.thewwa.com/2023-nautique-wwa-national-championships-presented-by-gm-marine-wrap-up-in-pine-mountain-georgia/" },
  ],
  kitt: [
    { year: "2025", text: "Gold, women’s wakeboard, Junior Pan American Games", source: "https://en.wikipedia.org/wiki/Water_skiing_at_the_2025_Junior_Pan_American_Games" },
    { year: "2022", text: "WWA U.S. National Champion, Junior Pro Women", source: WWA22N },
  ],
  kira: [
    { year: "2026", text: "8th overall, Pro Women, Pro Wakeboard Tour", source: PWT26 },
    { year: "2023", text: "2nd overall, Junior Pro Tour", source: "https://montverde.org/kira-lewis-ranks-second-in-junior-pro-tour-after-competing-in-wwa-wakeboard-world-championships/" },
    { year: "2021", text: "Nautique Masters winner, Junior Pro Women", source: KIRA },
    { year: "2019", text: "WWA World Champion, Junior Pro Women (Mexico)", source: KIRA },
    { year: "2018", text: "WWA World Champion, Junior Pro Women (Japan)", source: KIRA },
  ],
  ashley: [
    { year: "2026", text: "6th overall, Pro Women, Pro Wakeboard Tour", source: PWT26 },
    { year: "2024", text: "2nd, Junior Pro Women, WWA World Championships (Gold Coast)", source: WWA24W },
    { year: "2023", text: "World Champion, Junior Pro Women (Portugal)", source: "https://www.carymagazine.com/features/ashley-kazmer-wakeboard-world-champion/" },
  ],
  rex: [
    { year: "2026", text: "3rd, WWA Wakeboard World Championships", source: "https://www.instagram.com/rad_rexx/" },
    { year: "2026", text: "3rd overall, Junior Pro, Pro Wakeboard Tour", source: PWT26 },
    { year: "2022", text: "WWA World Champion, Men’s Wakeskate", source: WWA22W },
  ],
  campbell: [
    { year: "2026", text: "11th overall, Pro Women (boat), Pro Wakeboard Tour", source: PWT26 },
    { year: "2024", text: "Pan American Champion, Open Women cable wakeboard (Orlando); qualified for the 2025 World Games", source: "https://www.usawaterski.org/news/2024/july/20/u-s-cable-wakeboard-athletes-qualify-for-world-games" },
    { year: "2022", text: "WWA Wake Park National Champion, Pro Women Traditional", source: WWA22N },
  ],
  hina: [
    { year: "2026", text: "5th overall, Pro Women, Pro Wakeboard Tour", source: PWT26 },
    { year: "by 2022", text: "Four-time Japanese champion and two-time WWA Asian champion", source: "https://www.wakeboardingmag.com/howto/hinata-yoshihara-interview/" },
  ],
  luna: [
    { year: "2025", text: "World Games, women’s wakeboard freestyle for Belgium (8th)", source: "https://en.wikipedia.org/wiki/Wakeboarding_at_the_2025_World_Games" },
    { year: "2025", text: "4th, Open Women, IWWF Europe & Africa Boat Championships", source: "https://www.iwwfed-ea.org/boatwake/25/25EURO15/women_wakeboard_final_startlist_r.pdf" },
  ],
  alize: [
    { year: "2022", text: "IWWF World Champion, Wakeboard Under 18 Women (Varco Sabino, Italy), 13 months after severe burn injuries", source: "https://fissw.com/news/la-campionessa-alize-piana-insignita-della-civica-benemerenza-della-citta-di-lecco/" },
  ],
  fernanda: [
    { year: "2025", text: "Silver, women’s wakeboard, Junior Pan American Games", source: "https://en.wikipedia.org/wiki/Water_skiing_at_the_2025_Junior_Pan_American_Games" },
    { year: "2023", text: "4th, women’s wakeboard, Pan American Games (Santiago)", source: "https://en.wikipedia.org/wiki/Water_skiing_at_the_2023_Pan_American_Games_%E2%80%93_Women%27s_wakeboard" },
    { year: "2022", text: "Mexican National Champion, Women’s Open", source: "https://communitynewspapers.com/featured/palmer-trinity-sophomore-wins-mexicos-national-wakeboarding-championship/" },
  ],
  "anna-mariia": [
    { year: "2022–2025", text: "Russian National Champion, boat wakeboard", source: "rider" },
    { year: "2023", text: "2nd, Junior Pro Women, WWA", source: "rider" },
    { year: "2019", text: "Junior European Champion", source: "rider" },
    { year: "2019", text: "Bronze, Junior, IWWF", source: "rider" },
    { year: "2013", text: "2nd, Girls, Russian Boat Wakeboard Championships", source: "https://kiteteam.ru/news/chempionat-rossii-po-katernomu-vejkbordu-rezultaty/" },
  ],
  zoey: [
    { year: "2026", text: "WWA World Champion, Junior Pro Women", source: ZOEY },
    { year: "2026", text: "Nautique Masters Champion, Junior Pro Women", source: ZOEY },
    { year: "2025", text: "3rd, Junior Pro Women, Nautique Masters", source: ZOEY },
    { year: "2024", text: "Gold, U14 Girls, IWWF Pan American Championships", source: "https://en.wikipedia.org/wiki/Zoey_Carroll" },
    { year: "2022", text: "WWA U.S. National Champion", source: "https://www.orthocarolina.com/news/elevenyearold-wakeboarder-overcomes-injury-and-wins-national-title-" },
  ],
  ana: [
    { year: "2026", text: "4th, Junior Pro Women, Nautique Wake Series", source: "https://app.thewwa.com/wwa-rankings" },
    { year: "2022", text: "WWA World Champion, Jr. Girls 9 & Under", source: WWA22W },
  ],
  stella: [
    { year: "2026", text: "5th, Junior Pro Women, Nautique Wake Series", source: "https://app.thewwa.com/wwa-rankings" },
  ],
};
