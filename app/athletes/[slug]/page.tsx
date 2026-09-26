import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { riders } from "@/content/site";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://otown-watersports.vercel.app";

export function generateStaticParams() {
  return riders.map((r) => ({ slug: r.key }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = riders.find((x) => x.key === slug);
  if (!r) return {};
  const desc = `${r.name}, ${r.title.toLowerCase()} from ${r.country}, rides with Glen Fletcher at O’Town Watersports, Orlando. ${r.points.join(" ")}`;
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
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE}/athletes/${r.key}#person`,
        name: r.name,
        jobTitle: r.title,
        nationality: r.country,
        description: r.points.join(" "),
        url: `${SITE}/athletes/${r.key}`,
        ...(r.photo ? { image: `${SITE}${r.photo}` } : {}),
        ...(r.instagram ? { sameAs: [`https://www.instagram.com/${r.instagram}/`] } : {}),
        knowsAbout: ["Wakeboarding"],
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
          <ul className="dash-list">{r.points.map((p) => <li key={p}>{p}</li>)}</ul>
          {r.instagram && (
            <a className="riders__ig" href={`https://www.instagram.com/${r.instagram}/`} target="_blank" rel="noreferrer">Follow @{r.instagram} on Instagram <span aria-hidden>↗</span></a>
          )}
          <p className="rider-page__about">{first} is part of the O’Town Watersports rider roster, coached by Glen Fletcher on Lake Barton in Orlando, Florida. O’Town offers one-to-one wakeboard and wakesurf coaching for every level, from first-timers to pros.</p>
          <div className="actions">
            <Link href="/plan?activity=coaching" className="btn btn--primary btn--pill btn--lg">Train with Glen</Link>
            <Link href={`/athletes/${next.key}`} className="u-link u-link--light">Next: {next.name} →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
