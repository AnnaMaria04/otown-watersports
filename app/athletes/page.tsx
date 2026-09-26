import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { riders } from "@/content/site";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://otown-watersports.vercel.app";

export const metadata: Metadata = {
  title: "O’Town Riders: Meagan Ethell, Rusty Malinoski, Jamie Huser, Camden Marsden & more",
  description: "The O’Town Watersports rider roster in Orlando: Camden Marsden, Meagan Ethell, Rusty Malinoski, Jamie Huser, Kira Lewis, Kitt Smith, Steel Lafferty, Shota Tezuka and more, coached by Glen Fletcher.",
  alternates: { canonical: "/athletes" },
};

const IG = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" /></svg>
);

export default function AthletesPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "O’Town Watersports riders",
    itemListElement: riders.map((r, n) => ({
      "@type": "ListItem",
      position: n + 1,
      item: {
        "@type": "Person",
        name: r.name,
        url: `${SITE}/athletes#${r.key}`,
        jobTitle: r.title,
        nationality: r.country,
        description: r.points.join(" "),
        ...(r.photo ? { image: `${SITE}${r.photo}` } : {}),
        ...(r.instagram ? { sameAs: [`https://www.instagram.com/${r.instagram}/`] } : {}),
        affiliation: { "@type": "SportsOrganization", name: "O’Town Watersports", url: SITE },
      },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="ath-hero" aria-labelledby="ath-title">
        <div className="wrap">
          <p className="eyebrow eyebrow--cyan">Athletes</p>
          <h1 id="ath-title" className="display display--hero">The O’Town<br /><span className="ath-hero__neon">riders.</span></h1>
          <p className="ath-hero__lede">World champions, X Games medalists and the next generation of junior pros, coached by Glen Fletcher on Lake Barton, Orlando.</p>
        </div>
      </section>

      <section className="ath" aria-label="All riders">
        <div className="wrap">
          <ul className="ath-grid">
            {riders.map((a, n) => {
              const [first, ...rest] = a.name.split(" ");
              return (
                <li key={a.key} id={a.key} className="ath-card">
                  <div className={`ath-card__media${a.photo ? "" : " ath-card__media--type"}`}>
                    {a.photo ? (
                      <Image src={a.photo} alt={a.photoAlt ?? `${a.name} riding`} fill quality={80} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        style={{ objectPosition: a.photoPosition ?? "50% 50%" }} />
                    ) : (
                      <span className={`ath-card__type${a.name.length > 16 ? " ath-card__type--long" : ""}`} aria-hidden><span>{first}</span><span>{rest.join(" ")}</span></span>
                    )}
                    <span className="ath-card__n" aria-hidden>{String(n + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="ath-card__body">
                    <p className="ath-card__country">{a.country} · {a.title}</p>
                    <h2 className="ath-card__name"><Link href={`/athletes/${a.key}`} className="ath-card__link">{a.name}</Link></h2>
                    <ul className="ath-card__points">{a.points.map((p) => <li key={p}>{p}</li>)}</ul>
                    {a.instagram && (
                      <a className="ath-card__ig" href={`https://www.instagram.com/${a.instagram}/`} target="_blank" rel="noreferrer" aria-label={`${a.name} on Instagram`}>
                        <IG /> @{a.instagram}
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="cta-band cta-band--short" aria-labelledby="cta-title">
        <Image src="/images/bg-sunset-air.jpg" alt="" fill sizes="(orientation: portrait) 150vh, 100vw" quality={85} style={{ objectPosition: "28% 14%" }} />
        <div className="wrap cta-band__inner">
          <h2 id="cta-title" className="display display--xl">Next on the list?</h2>
          <div className="actions">
            <Link href="/plan?activity=coaching" className="btn btn--primary btn--pill btn--lg">Train with Glen</Link>
            <Link href="/coaching" className="u-link u-link--light">How coaching works</Link>
          </div>
        </div>
      </section>
    </>
  );
}
