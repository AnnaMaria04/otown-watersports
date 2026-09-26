import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "@/components/Lightbox";
import VideoDialog from "@/components/VideoDialog";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Stay at O’Town | Wakeboard Camps & Overnight Stays in Orlando",
  description: "Stay on Lake Barton for a wakeboard camp or training stay with Glen Fletcher: stocked kitchen, laundry, high speed Wi-Fi and supervision for young riders. Tailored to your dates.",
  alternates: { canonical: "/stay" },
};

const amenities = [
  { t: "Rooms on the lake", d: "Bedrooms in the house on Lake Barton, including bunks for teams and camps." },
  { t: "Stocked kitchen", d: "We stock the kitchen around your preferences and allergies. Meals aren’t cooked for you, so you cook what you like, when you like." },
  { t: "Supervision for minors", d: "Parents can send young riders to train. Riders under 18 are supervised during their stay." },
  { t: "Washer and dryer", d: "Laundry on site, so wet gear and riding clothes are never a problem." },
  { t: "High speed Wi-Fi", d: "Fast internet throughout the house, for school, work or watching back your sets." },
  { t: "Steps from the dock", d: "The boat, the dock and the trampoline are right outside. Train, rest, go again." },
];

const Play = () => <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden><path d="M7 4.5v15l12.5-7.5z" fill="currentColor" /></svg>;

export default function StayPage() {
  return (
    <>
      <section className="page-hero page-hero--stay">
        <Image src="/images/new/stay-bedroom-lake.jpg" alt="A bright bedroom at O’Town with a window looking straight onto Lake Barton" fill priority quality={85} sizes="(orientation: portrait) 150vh, 100vw" style={{ objectPosition: "58% 42%" }} />
        <div className="wrap page-hero__inner">
          <p className="eyebrow eyebrow--cyan">Stay at O’Town</p>
          <h1 className="display display--hero">Wake up on the lake.</h1>
          <p>Camps and overnight stays, tailored to your needs. Live at O’Town, ride with Glen and train every day on Lake Barton.</p>
        </div>
      </section>

      <section className="section stay" aria-labelledby="stay-title">
        <div className="wrap">
          <div className="section-head section-head--row">
            <div>
              <p className="eyebrow eyebrow--dark">What’s included</p>
              <h2 id="stay-title" className="display display--lg display--ink">Everything you<br />need between sets.</h2>
            </div>
            <p className="lede lede--narrow">Each stay is built around the rider: your dates, your level and how much time you want on the water.</p>
          </div>
          <ul className="amen">
            {amenities.map((a, i) => (
              <li key={a.t} className="amen__item">
                <span className="amen__n">0{i + 1}</span>
                <h3>{a.t}</h3>
                <p>{a.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="stay-gallery" aria-label="Inside O’Town">
        <div className="wrap">
          <div className="sg">
            <Lightbox className="sg__a" src="/images/new/stay-kitchen-dining.jpg" alt="The open kitchen and dining area upstairs at O’Town" caption="Kitchen and dining" sizes="(max-width: 700px) 100vw, 50vw" position="50% 55%" />
            <VideoDialog src="/video/stay-walkthrough.mp4" title="Inside the house" className="tile sg__b" muted portrait>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/video/stay-walkthrough-poster.jpg" alt="Walking through the kitchen and lounge at O’Town" loading="lazy" />
              <span className="tile__play"><Play /></span>
              <span className="tile__cap">Walk through the house</span>
            </VideoDialog>
            <Lightbox className="sg__c" src="/images/new/stay-lounge.jpg" alt="The lounge with sofas, a TV and the dining table" caption="The lounge" sizes="(max-width: 700px) 100vw, 33vw" position="50% 60%" />
            <Lightbox className="sg__d" src="/images/new/stay-kitchen.jpg" alt="The stocked kitchen with fridge, oven and counters" caption="Stocked kitchen" sizes="(max-width: 700px) 50vw, 25vw" position="50% 55%" />
            <Lightbox className="sg__e" src="/images/new/stay-bunks.jpg" alt="Bunk beds for camps and teams" caption="Bunks for camps" sizes="(max-width: 700px) 50vw, 25vw" position="50% 50%" />
            <Lightbox className="sg__f" src="/images/games-room.jpg" alt="The downstairs lounge with a table-tennis table and board racks" caption="Downstairs lounge" sizes="(max-width: 700px) 50vw, 25vw" />
            <Lightbox className="sg__g" src="/images/new/dock-trampoline.jpg" alt="The dock and trampoline on Lake Barton, right outside the house" caption="Right outside: the dock" sizes="(max-width: 700px) 100vw, 50vw" position="50% 88%" />
          </div>
        </div>
      </section>

      <section className="section stay-info" aria-labelledby="stay-info-title">
        <div className="wrap stay-info__grid">
          <div>
            <p className="eyebrow eyebrow--dark">Pricing</p>
            <h2 id="stay-info-title" className="display display--lg display--ink">Tailored to<br />your stay.</h2>
          </div>
          <div className="stay-info__side">
            <p className="lede">Every camp and stay is priced around your dates, group size and coaching. Call and we’ll put it together with you.</p>
            <div className="actions">
              <a className="btn btn--ink btn--pill btn--lg" href={contact.phone.href}>Call {contact.phone.label}</a>
              <Link className="btn btn--outline btn--pill btn--lg" href="/plan?activity=training-stay">Send your dates</Link>
            </div>
            <p className="stay-info__note">Riders under 18 need the <Link className="u-link" href="/waiver">waiver</Link> signed by a parent or guardian before arriving.</p>
          </div>
        </div>
      </section>
    </>
  );
}
