import type { Metadata } from "next";
import Link from "next/link";
import { contact, rates } from "@/content/site";

export const metadata: Metadata = {
  title: "Rates & booking — O’Town Watersports",
  description: "Lesson, full-day and camp rates for wakeboard and wakesurf coaching at O’Town Watersports, Lake Barton, Orlando.",
};

export default function RatesPage() {
  return (
    <div className="rates-page">
      <section className="section section--first">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Rates</p>
            <h1 className="h1">Rates and booking.</h1>
            <p className="lede lede--narrow">{rates.note} Every session includes coaching on and off the water.</p>
          </div>

          <ul className="rate-list">
            {rates.items.map((r) => (
              <li key={r.name} className="rate">
                <h2 className="rate__name">{r.name}</h2>
                <p className="rate__price">
                  {r.price}
                  {r.price.startsWith("$") && <span> {r.unit}</span>}
                </p>
                <ul className="rate__includes">
                  {r.includes.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </li>
            ))}
          </ul>

          <div className="policy">
            <div>
              <h2 className="h3">Making a reservation</h2>
              <p>Contact us by email or phone on <a href={contact.phone.href}>{contact.phone.label}</a>. We’ll need:</p>
              <ul className="policy__list">
                {rates.reservations.map((r) => <li key={r}>{r}</li>)}
              </ul>
              <p><a className="text-link" href={contact.waiver} target="_blank" rel="noreferrer">Read and sign the waiver</a></p>
            </div>
            <div>
              <h2 className="h3">Payment</h2>
              <p>{rates.payment}</p>
              <h2 className="h3">Cancellations</h2>
              <p>{rates.cancellation}</p>
              <h2 className="h3">On the day</h2>
              <p>{rates.conditions}</p>
            </div>
          </div>

          <div className="rates-cta">
            <p className="h3">Ready to plan your time on the water?</p>
            <Link href="/#plan" className="btn btn--primary">Plan your session</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
