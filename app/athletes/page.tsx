import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { athletes, juniorRiders, moreRiders } from "@/content/site";

export const metadata: Metadata = {
  title: "Pro Riders Coached by Glen Fletcher | O’Town Watersports",
  description: "World champions, X Games medalists and junior pros from the rider list Glen Fletcher has coached over more than twenty years on Lake Barton, Orlando.",
  alternates: { canonical: "/athletes" },
};

export default function AthletesPage() {
  return (
    <>
      <section className="ath-hero" aria-labelledby="ath-title">
        <div className="wrap">
          <p className="eyebrow eyebrow--cyan">Athletes</p>
          <h1 id="ath-title" className="display display--hero">The riders<br />Glen has <span className="ath-hero__neon">coached.</span></h1>
          <p className="ath-hero__lede">World champions, X Games medalists and junior pros, all from the rider list on O’Town’s coaching page, across more than twenty years behind the boat.</p>
        </div>
      </section>

      <section className="ath" aria-label="Featured athletes">
        <div className="wrap">
          <ul className="ath-grid">
            {athletes.map((a, n) => (
              <li key={a.name} className="ath-card">
                <div className="ath-card__media">
                  {a.photo && (
                    <Image src={a.photo} alt={`${a.name} riding`} fill quality={80} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      style={{ objectPosition: a.position ?? "50% 50%" }} />
                  )}
                  <span className="ath-card__n" aria-hidden>{String(n + 1).padStart(2, "0")}</span>
                </div>
                <div className="ath-card__body">
                  <p className="ath-card__country">{a.country}</p>
                  <h2 className="ath-card__name">{a.name}</h2>
                  <p className="ath-card__note">{a.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="roster" aria-labelledby="roster-title">
        <div className="wrap roster__grid">
          <div>
            <p className="eyebrow eyebrow--cyan">The full list</p>
            <h2 id="roster-title" className="display display--lg">Also on<br />Glen’s list.</h2>
            <p className="roster__foot">Historical coaching relationships from O’Town’s rider list. Not current students or sponsors.</p>
          </div>
          <div>
            <h3>Pro riders</h3>
            <ul className="name-grid">{[...moreRiders, "Sophia Fletcher"].map((n) => <li key={n}>{n}</li>)}</ul>
            <h3>Junior pros</h3>
            <ul className="name-grid">{juniorRiders.map((n) => <li key={n}>{n}</li>)}</ul>
          </div>
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
