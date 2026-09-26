import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { riders } from "@/content/site";
import { riderBios } from "@/content/riderBios";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://otown-watersports.vercel.app";

export function generateStaticParams() {
  return riders.map((r) => ({ slug: r.key }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = riders.find((x) => x.key === slug);
  if (!r) return {};
  const bio = riderBios[r.key]?.bio.join(" ");
  const desc = bio ?? `${r.name}, ${r.title.toLowerCase()} from ${r.country}. ${r.points.join(" ")}`;
  return {
    title: `${r.name} | ${r.title} | O’Town Watersports Orlando`,
    description: desc.slice(0, 300),
    alternates: { canonical: `/athletes/${r.key}` },
    openGraph: { title: `${r.name} · O’Town Watersports`, description: desc.slice(0, 200), ...(r.photo ? { images: [{ url: r.photo }] } : {}) },
  };
}

export default async function RiderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = riders.findIndex((x) => x.key === slug);
  if (i < 0) notFound();
  const r = riders[i];
  const next = riders[(i + 1) % riders.length];
  const [first, ...rest] = r.name.split(" ");
  const b = riderBios[r.key];
  const yearOf = (t: string) => Number(t.match(/\b(19|20)\d{2}\b/)?.[0] ?? 0);
  const seen = new Set<string>();
  const highlights = [...r.points, ...(b?.more ?? [])]
    .filter((t) => { const k = t.toLowerCase().replace(/^\d{4}:\s*/, "").slice(0, 28); if (seen.has(k)) return false; seen.add(k); return true; })
    .sort((x, y) => yearOf(y) - yearOf(x));
  const pool = riders.filter((x) => x.key !== r.key && x.photo);
  const related = [...pool.filter((x) => x.title.startsWith("Junior") === r.title.startsWith("Junior")), ...pool.filter((x) => x.title.startsWith("Junior") !== r.title.startsWith("Junior"))].slice(0, 3);
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE}/athletes/${r.key}#person`,
        name: r.name,
        jobTitle: r.title,
        nationality: r.country,
        description: b?.bio.join(" ") ?? r.points.join(" "),
        url: `${SITE}/athletes/${r.key}`,
        ...(r.photo ? { image: `${SITE}${r.photo}` } : {}),
        ...(r.instagram ? { sameAs: [`https://www.instagram.com/${r.instagram}/`] } : {}),
        knowsAbout: ["Wakeboarding", "Boat wakeboarding"],
        award: highlights,
        ...(b?.from ? { homeLocation: { "@type": "Country", name: b.from } } : {}),
        ...(b?.sources.length ? { subjectOf: b.sources.map((x) => ({ "@type": "WebPage", name: x.label, url: x.url })) } : {}),
        affiliation: { "@type": "SportsOrganization", name: "O’Town Watersports", url: SITE },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Athletes", item: `${SITE}/athletes` },
          { "@type": "ListItem", position: 3, name: r.name, item: `${SITE}/athletes/${r.key}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="rider-page">
        <div className="rider-page__media">
          {r.photo ? (
            <Image src={r.photo} alt={r.photoAlt ?? `${r.name} wakeboarding`} fill priority quality={85} sizes="(max-width: 900px) 100vw, 55vw" style={{ objectPosition: r.photoPosition ?? "50% 50%" }} />
          ) : (
            <span className="ath-card__type rider-page__type" aria-hidden><span>{first}</span><span>{rest.join(" ")}</span></span>
          )}
        </div>
        <div className="rider-page__copy">
          <nav className="rider-page__crumbs" aria-label="Breadcrumb"><Link href="/athletes">Athletes</Link> <span aria-hidden>/</span> {r.name}</nav>
          <p className="eyebrow eyebrow--cyan">{r.country} · {r.title}</p>
          <h1 className="display display--name">{first}<br />{rest.join(" ")}</h1>
          {r.instagram && (
            <a className="riders__ig" href={`https://www.instagram.com/${r.instagram}/`} target="_blank" rel="noreferrer">Follow @{r.instagram} on Instagram <span aria-hidden>↗</span></a>
          )}
          {b?.bio.map((t) => <p key={t} className="rider-page__about">{t}</p>)}
          <div className="actions">
            <Link href="/plan?activity=coaching" className="btn btn--primary btn--pill btn--lg">Train with Glen</Link>
            <Link href={`/athletes/${next.key}`} className="u-link u-link--light">Next: {next.name} →</Link>
          </div>
        </div>
      </section>

      <section className="rider-more">
        <div className="rider-more__inner">
          <div>
            <p className="eyebrow">Results &amp; career</p>
            <h2 className="rider-more__h">{r.name}: career highlights</h2>
            <ol className="rider-hl">
              {highlights.map((p) => {
                const y = p.match(/\b(19|20)\d{2}\b/)?.[0];
                return (<li key={p}><span className={`rider-hl__y${y ? "" : " is-dot"}`}>{y ?? ""}</span><span className="rider-hl__t">{p.replace(/^\d{4}:?\s+/, "").replace(/,? (in )?\d{4}\.$/, ".")}</span></li>);
              })}
            </ol>
            {b && b.sources.length > 0 && (
              <p className="rider-src">Sources: {b.sources.map((x, k) => (<span key={x.url}>{k > 0 && " · "}<a href={x.url} target="_blank" rel="noreferrer nofollow">{x.label}</a></span>))}</p>
            )}
          </div>
          {related.length > 0 && (
            <nav aria-label="More O’Town riders" className="rider-rel">
              <p className="eyebrow">More O’Town riders</p>
              <ul>
                {related.map((x) => (
                  <li key={x.key}><Link href={`/athletes/${x.key}`}><span className="rider-rel__img"><Image src={x.cardPhoto ?? x.photo!} alt="" fill sizes="80px" /></span><span><b>{x.name}</b><small>{x.title}</small></span></Link></li>
                ))}
              </ul>
              <Link href="/athletes" className="u-link">All riders →</Link>
            </nav>
          )}
        </div>
      </section>
    </>
  );
}
