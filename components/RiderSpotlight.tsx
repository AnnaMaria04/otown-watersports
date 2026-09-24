"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { spotlight } from "@/content/site";

const DURATION = 7000;

/** Tabbed rider spotlight that rotates on its own (no scroll effects). Pauses on hover/focus; manual under reduced motion. */
export default function RiderSpotlight() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
  }, []);
  useEffect(() => {
    if (!auto || paused) return;
    const t = setTimeout(() => setI((v) => (v + 1) % spotlight.length), DURATION);
    return () => clearTimeout(t);
  }, [i, auto, paused]);

  const r = spotlight[i];
  const [first, ...rest] = r.name.split(" ");

  return (
    <section className="riders" id="riders" aria-labelledby="riders-title"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
      <div className="riders__stage">
        <div className="riders__copy wrap-left">
          <p className="eyebrow eyebrow--cyan" id="riders-title">Riders Glen has worked with</p>
          <div className="riders__swap" key={r.key}>
            <p className="riders__country">{r.country}</p>
            <h2 className="display display--name">{first}<br />{rest.join(" ")}</h2>
            <ul className="dash-list">
              {r.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <a className="riders__source" href={r.source} target="_blank" rel="noreferrer">Source</a>
          </div>
          <div className="actions">
            <Link href="/plan?activity=coaching" className="btn btn--primary btn--pill btn--lg">Train with Glen</Link>
            <Link href="/coaching#roster" className="u-link">Full rider list</Link>
          </div>
        </div>

        <div className="riders__visual">
          {r.photo ? (
            <Image key={r.key} className="riders__photo" src={r.photo} alt={r.photoAlt ?? r.name} fill sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectPosition: r.photoPosition ?? "50% 50%" }} />
          ) : (
            <div key={r.key} className="riders__type" aria-hidden>
              <span className="riders__type-first">{first}</span>
              <span className="riders__type-last">{rest.join(" ")}</span>
              <span className="riders__type-country">{r.country}</span>
            </div>
          )}

          <div className="pill-tabs" role="tablist" aria-label="Riders">
            {spotlight.map((s, n) => (
              <button key={s.key} type="button" role="tab" aria-selected={n === i} className={`pill-tab${n === i ? " is-active" : ""}`} onClick={() => setI(n)}>
                {s.name.split(" ")[0]}
                {n === i && auto && !paused && <span className="pill-tab__progress" style={{ animationDuration: `${DURATION}ms` }} aria-hidden />}
              </button>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
