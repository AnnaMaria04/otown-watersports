"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { heroSlides, contact } from "@/content/site";
import VideoDialog from "./VideoDialog";
import Magnetic from "./Magnetic";

const DURATION = 6500;

/**
 * Full-bleed hero with a rotating set of real O'Town photographs.
 * Learn · Ride · Progress tabs double as the slide controls, with a progress bar on the active one.
 * Auto-advance pauses on hover/focus, when the tab is hidden, and never runs under reduced motion.
 */
export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
    const vis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", vis);
    return () => document.removeEventListener("visibilitychange", vis);
  }, []);

  useEffect(() => {
    if (!auto || paused) return;
    const t = setTimeout(() => setI((v) => (v + 1) % heroSlides.length), DURATION);
    return () => clearTimeout(t);
  }, [i, auto, paused]);

  return (
    <section
      ref={ref}
      className={`hero${auto && !paused ? " is-playing" : ""}`}
      aria-roledescription="carousel"
      aria-label="O’Town on Lake Barton"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="hero__slides">
        {heroSlides.map((s, n) => (
          <div key={s.key} className={`hero__slide${n === i ? " is-active" : ""}`} aria-hidden={n !== i}
            style={{ ["--pos" as string]: s.position, ["--pos-m" as string]: s.mobilePosition }}>
            <Image src={s.image} alt={s.alt} fill priority={n === 0} quality={85} sizes="100vw" />
          </div>
        ))}
        <div className="hero__shade" aria-hidden />
      </div>

      <div className="hero__inner wrap">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--light">{contact.location}</p>
          <h1 className="display display--hero">Your next set<br />starts here.</h1>
          <p className="hero__lede">
            Wakeboard and wakesurf coaching with Glen Fletcher. From your first ride to the trick you’ve been working toward.
          </p>
          <div className="actions">
            <Magnetic><Link href="/plan" className="btn btn--primary btn--pill btn--lg">Plan your session</Link></Magnetic>
            <Link href="#glen" className="btn btn--glass btn--pill btn--lg">Meet Glen</Link>
          </div>
        </div>

        <VideoDialog src="/video/glen-film.mp4" title="Glen on the water" className="film-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/video/glen-film-poster.jpg" alt="" className="film-card__img" width={720} height={720} />
          <span className="film-card__play" aria-hidden>
            <svg viewBox="0 0 24 24" width="16" height="16"><path d="M7 4.5v15l12.5-7.5z" fill="currentColor" /></svg>
          </span>
          <span className="film-card__text">
            <span className="film-card__title">Watch Glen on the water</span>
            <span className="film-card__meta">1 min film</span>
          </span>
        </VideoDialog>

        <div className="hero__tabs" role="tablist" aria-label="Choose a photo">
          {heroSlides.map((s, n) => (
            <button key={s.key} type="button" role="tab" aria-selected={n === i} className={`hero__tab${n === i ? " is-active" : ""}`}
              onClick={() => setI(n)}>
              <span className="hero__tab-bar" aria-hidden><span key={`${i}-${n}`} className="hero__tab-fill" style={{ animationDuration: `${DURATION}ms` }} /></span>
              <span className="hero__tab-num">0{n + 1}</span>
              <span className="hero__tab-label">{s.label}.</span>
              <span className="hero__tab-cap">{s.caption}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
