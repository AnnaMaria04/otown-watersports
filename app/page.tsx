import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import BoatViewer from "@/components/BoatViewer";
import InquiryForm from "@/components/InquiryForm";
import VideoDialog from "@/components/VideoDialog";
import { boat, brandLine, contact, experiences, featuredRiders, glen, juniorRiders, moreRiders } from "@/content/site";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
    <path d="M7 4.5v15l12.5-7.5z" fill="currentColor" />
  </svg>
);

const clips = [
  { src: "/video/clip-riding-1.mp4", poster: "/video/clip-riding-1-poster.jpg", title: "Wakesurfing behind the boat", alt: "A rider wakesurfing" },
  { src: "/video/clip-dock.mp4", poster: "/video/clip-dock-poster.jpg", title: "The view from the back yard", alt: "Palm trees opening onto the dock and Lake Barton" },
  { src: "/video/clip-riding-2.mp4", poster: "/video/clip-riding-2-poster.jpg", title: "Another set", alt: "A rider launching off the wake" },
];

export default function Home() {
  const boatLabel = `The O’Town ${boat.make}${boat.model ? ` ${boat.model}` : ""}`;

  return (
    <>
      {/* A — Arrive at the lake */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">{contact.location}</p>
          <h1 id="hero-title" className="display">Your next&nbsp;set starts&nbsp;here.</h1>
          <p className="lede">
            Wakeboard and wakesurf coaching on Lake Barton, Orlando. From your first ride to the trick you’ve been working toward.
          </p>
          <div className="actions">
            <Link href="#plan" className="btn btn--primary">Plan your session</Link>
            <Link href="#glen" className="btn btn--ghost">Meet Glen</Link>
          </div>
          <p className="hero__line">{brandLine}</p>
        </div>
        <figure className="hero__media">
          <Image
            src="/images/hero-dock-start.jpg"
            alt="A rider starts from the O’Town dock as the boat pulls away across Lake Barton"
            fill
            priority
            sizes="(max-width: 860px) 100vw, 58vw"
          />
        </figure>
      </section>

      {/* B — Meet Glen */}
      <section className="section glen" id="glen" aria-labelledby="glen-title">
        <div className="wrap glen__grid">
          <figure className="glen__main media" data-reveal>
            <Image src="/images/glen-helm.jpg" alt="Glen Fletcher at the helm, handle in hand, watching the lake" fill sizes="(max-width: 860px) 100vw, 55vw" />
          </figure>
          <div className="glen__side">
            <figure className="glen__inset media" data-reveal>
              <Image src="/images/glen-driving.jpg" alt="Glen driving the boat, looking back toward the rider" fill sizes="(max-width: 860px) 60vw, 22vw" />
            </figure>
            <div className="glen__text" data-reveal>
              <p className="eyebrow">Coaching</p>
              <h2 id="glen-title" className="h2">Meet Glen Fletcher.</h2>
              <p>{glen.intro}</p>
              <p>{glen.detail}</p>
              <VideoDialog src="/video/glen-film.mp4" title="Glen on the water" className="text-btn">
                <span className="text-btn__icon"><PlayIcon /></span> Watch Glen on the water
              </VideoDialog>
            </div>
          </div>
        </div>
      </section>

      {/* C — History */}
      <section className="section history" aria-labelledby="history-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <p className="eyebrow">History</p>
            <h2 id="history-title" className="h2">A lot of riding.<br />A lot of stories.</h2>
            <p className="lede lede--narrow">
              Over the years, riders from North America, Europe, Australia and Japan have trained with Glen on Lake Barton — juniors and professionals alike.
            </p>
          </div>

          <div className="history__grid">
            <figure className="history__then" data-reveal>
              <div className="media media--archive">
                <Image src="/images/archive-header.jpg" alt="Archive banner: Glen in a bucket hat in the foreground, a rider cutting behind the boat" fill sizes="(max-width: 860px) 100vw, 55vw" />
              </div>
              <figcaption><span>Then</span> From the early O’Town website.</figcaption>
            </figure>
            <figure className="history__now" data-reveal>
              <div className="media media--portrait">
                <Image src="/images/glen-tower.jpg" alt="Glen under the tower of the boat on Lake Barton" fill sizes="(max-width: 860px) 100vw, 32vw" />
              </div>
              <figcaption><span>Now</span> Glen on the boat, Lake Barton.</figcaption>
            </figure>
            <figure className="history__air" data-reveal>
              <div className="media media--landscape">
                <Image src="/images/big-air.jpg" alt="A rider high above the wake against a bright, cloudy sky" fill sizes="(max-width: 860px) 100vw, 66vw" />
              </div>
              <figcaption>Big air behind the boat at O’Town.</figcaption>
            </figure>
          </div>

          <div className="riders" data-reveal>
            <p className="eyebrow">Riders Glen has worked with</p>
            <ul className="riders__featured">
              {featuredRiders.map((r) => (
                <li key={r.name}>
                  <span className="riders__name">{r.name}</span>
                  <span className="riders__country">{r.country}</span>
                  <span className="riders__note">{r.note}</span>
                </li>
              ))}
            </ul>
            <p className="riders__more"><span>Also</span><span className="riders__list">{moreRiders.join(" · ")}</span></p>
            <p className="riders__more"><span>Juniors</span><span className="riders__list">{juniorRiders.join(" · ")}</span></p>
            <p className="riders__foot">
              From the rider list on O’Town’s coaching page, covering many years of coaching. Career highlights are the riders’ own achievements.
            </p>
          </div>
        </div>
      </section>

      {/* D — Experiences */}
      <section className="section experiences" id="experiences" aria-labelledby="exp-title">
        <div className="wrap">
          <div className="section-head section-head--row" data-reveal>
            <div>
              <p className="eyebrow">Experiences</p>
              <h2 id="exp-title" className="h2">Where would you like to start?</h2>
            </div>
            <Link href="/rates" className="text-link">See rates and booking policy</Link>
          </div>
          <div className="exp__grid">
            {experiences.map((x, i) => (
              <article key={x.key} className={`exp exp--${i === 0 ? "feature" : "side"}`} data-reveal>
                <div className="media exp__media">
                  <Image src={x.image} alt={x.alt} fill sizes={i === 0 ? "(max-width: 860px) 100vw, 58vw" : "(max-width: 860px) 100vw, 34vw"} />
                </div>
                <div className="exp__body">
                  <h3 className="h3">{x.title}</h3>
                  <p className="exp__who">{x.who}</p>
                  <p>{x.body}</p>
                  <Link href={`/?activity=${x.key}#plan`} className="text-link">Ask about this</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* E — The boat */}
      <section className="boat" aria-labelledby="boat-title">
        <div className="wrap">
          <div className="boat__head" data-reveal>
            <div>
              <p className="eyebrow eyebrow--on-dark">The boat</p>
              <h2 id="boat-title" className="h2">Good equipment.<br />Experienced hands.</h2>
            </div>
            <p className="boat__copy">
              A well set-up {boat.make} makes a clean, consistent wake to learn and progress on. What matters just as much is who’s driving: speed, line length and timing, adjusted to the rider behind the boat.
            </p>
          </div>
          <BoatViewer frames={boat.frames} label={boatLabel} />
        </div>
      </section>

      {/* F — Life at O'Town */}
      <section className="section life" id="life" aria-labelledby="life-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <p className="eyebrow">Life at O’Town</p>
            <h2 id="life-title" className="h2">Between sets.</h2>
          </div>
          <div className="life__grid">
            <figure className="life__main" data-reveal>
              <div className="media media--wide">
                <Image src="/images/dock-bougainvillea.jpg" alt="Bougainvillea over the trampoline and dock, with riders sitting at the water’s edge and the boat moored" fill sizes="(max-width: 860px) 100vw, 64vw" />
              </div>
              <figcaption>The dock, the trampoline and the lake — a few steps from the house.</figcaption>
            </figure>
            <figure className="life__a" data-reveal>
              <div className="media media--portrait">
                <Image src="/images/tubing.jpg" alt="Two friends laughing on a tube on the lake" fill sizes="(max-width: 860px) 100vw, 30vw" />
              </div>
              <figcaption>Tubing for anyone who’d rather sit this one out.</figcaption>
            </figure>
            <figure className="life__b" data-reveal>
              <div className="media media--portrait">
                <Image src="/images/games-room.jpg" alt="The downstairs lounge with a table-tennis table and board racks" fill sizes="(max-width: 860px) 100vw, 30vw" />
              </div>
              <figcaption>Downstairs: table tennis and somewhere to put your feet up.</figcaption>
            </figure>
          </div>

          <div className="clips" data-reveal>
            <p className="eyebrow">From the lake</p>
            <ul className="clips__list">
              {clips.map((c) => (
                <li key={c.src}>
                  <VideoDialog src={c.src} title={c.title} className="clip" muted>
                    <span className="clip__media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.poster} alt={c.alt} loading="lazy" width={720} height={720} />
                      <span className="clip__play"><PlayIcon /></span>
                    </span>
                    <span className="clip__title">{c.title}</span>
                  </VideoDialog>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* G — Inquiry */}
      <section className="section plan" id="plan" aria-labelledby="plan-title">
        <div className="wrap plan__grid">
          <div className="plan__intro" data-reveal>
            <p className="eyebrow">Plan your session</p>
            <h2 id="plan-title" className="h2">What are you working on?</h2>
            <p className="lede">
              Tell us your riding level, preferred dates and what you’d like to do. We’ll help you plan your time on the water.
            </p>
            <div className="plan__direct">
              <p className="eyebrow">Prefer to talk?</p>
              <p><a href={contact.phone.href}>{contact.phone.label}</a></p>
              <p><a href={contact.cell.href}>{contact.cell.label}</a> <span className="muted">cell</span></p>
              <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            </div>
          </div>
          <Suspense fallback={null}><InquiryForm /></Suspense>
        </div>
      </section>
    </>
  );
}
