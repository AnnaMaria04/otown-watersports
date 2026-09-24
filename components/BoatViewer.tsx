"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = { frames: number; label: string };
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * 360° boat viewer built from captured views (not a free-orbit 3D model).
 * Controlled by the rotation bar below (and by dragging the boat) — it never plays on its own.
 * Poster first; the sequence loads as the section approaches; vertical page scroll is untouched.
 */
export default function BoatViewer({ frames, label }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgs = useRef<HTMLImageElement[]>([]);
  const target = useRef(0);
  const shown = useRef(0);
  const raf = useRef(0);
  const [value, setValue] = useState(0); // 0..frames-1 (float)
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  const draw = useCallback((f: number) => {
    const c = canvasRef.current;
    const n = ((f % frames) + frames) % frames;
    const i0 = Math.floor(n), t = n - i0;
    const a = imgs.current[i0], b = imgs.current[(i0 + 1) % frames];
    if (!c || !a) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, c.width, c.height);
    const r = Math.min(c.width / a.naturalWidth, c.height / a.naturalHeight);
    const w = a.naturalWidth * r, h = a.naturalHeight * r;
    const x = (c.width - w) / 2, y = (c.height - h) / 2;
    // Crossfade neighbouring views so the turn reads as continuous rather than stepped
    ctx.globalAlpha = 1;
    ctx.drawImage(a, x, y, w, h);
    if (b && t > 0.02) { ctx.globalAlpha = t; ctx.drawImage(b, x, y, w, h); ctx.globalAlpha = 1; }
  }, [frames]);

  // Ease the displayed frame toward the target for a calm, steady turn
  const animate = useCallback(() => {
    cancelAnimationFrame(raf.current);
    const step = () => {
      let d = target.current - shown.current;
      if (Math.abs(d) < 0.02) { shown.current = target.current; draw(shown.current); return; }
      shown.current += d * 0.18;
      draw(shown.current);
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  }, [draw]);

  const goTo = useCallback((f: number) => {
    target.current = f;
    setValue(((f % frames) + frames) % frames);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { shown.current = f; draw(f); }
    else animate();
  }, [frames, animate, draw]);

  useEffect(() => {
    const c = canvasRef.current, s = stageRef.current;
    if (!c || !s) return;
    const ro = new ResizeObserver(() => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = Math.round(s.clientWidth * dpr);
      c.height = Math.round(s.clientHeight * dpr);
      draw(shown.current);
    });
    ro.observe(s);
    return () => ro.disconnect();
  }, [draw]);

  useEffect(() => {
    const s = stageRef.current;
    if (!s) return;
    let started = false;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started) return;
      started = true;
      const size = s.clientWidth * Math.min(window.devicePixelRatio || 1, 2) > 1000 ? "d" : "m";
      let done = 0;
      const list: HTMLImageElement[] = [];
      for (let i = 0; i < frames; i++) {
        const img = new Image();
        img.decoding = "async";
        img.src = `/boat/${size}/${pad(i)}.webp`;
        list.push(img);
        img.decode().catch(() => {}).finally(() => {
          done++;
          setProgress(done / frames);
          if (done === frames) { imgs.current = list; setReady(true); draw(shown.current); }
        });
      }
    }, { rootMargin: "700px 0px" });
    io.observe(s);
    return () => { io.disconnect(); cancelAnimationFrame(raf.current); };
  }, [frames, draw]);

  // Drag on the boat (horizontal only; vertical swipes scroll the page)
  useEffect(() => {
    const s = stageRef.current;
    if (!s || !ready) return;
    let down = false, dragging = false, x0 = 0, y0 = 0, f0 = 0;
    const per = () => (s.clientWidth * 1.4) / frames; // ~1.4 widths per full turn — slow and controlled
    const onDown = (e: PointerEvent) => { if (e.button !== 0) return; down = true; dragging = false; x0 = e.clientX; y0 = e.clientY; f0 = target.current; };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - x0, dy = e.clientY - y0;
      if (!dragging) {
        if (Math.abs(dx) < 6) return;
        if (Math.abs(dy) > Math.abs(dx)) { down = false; return; }
        dragging = true; s.setPointerCapture(e.pointerId); s.classList.add("is-dragging");
      }
      goTo(f0 - dx / per());
    };
    const onUp = () => { down = false; s.classList.remove("is-dragging"); };
    s.addEventListener("pointerdown", onDown); s.addEventListener("pointermove", onMove);
    s.addEventListener("pointerup", onUp); s.addEventListener("pointercancel", onUp);
    return () => { s.removeEventListener("pointerdown", onDown); s.removeEventListener("pointermove", onMove); s.removeEventListener("pointerup", onUp); s.removeEventListener("pointercancel", onUp); };
  }, [ready, frames, goTo]);

  const deg = Math.round((value / frames) * 360) % 360;
  const pct = (value / (frames - 1)) * 100;

  return (
    <div className="boat-viewer">
      <div ref={stageRef} className={`boat-stage${ready ? " is-ready" : ""}`} aria-hidden>
        <picture>
          <source media="(max-width: 700px)" srcSet="/boat/m/00.webp" />
          <img className="boat-poster" src="/boat/d/00.webp" alt="" width={1800} height={841} />
        </picture>
        <canvas ref={canvasRef} className="boat-canvas" />
        <div className="boat-floor" />
      </div>

      <div className="boat-bar">
        <button type="button" className="icon-btn icon-btn--dark" aria-label="Rotate left" disabled={!ready} onClick={() => goTo(Math.round(target.current) - 3)}>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
        </button>
        <div className="boat-range" style={{ ["--pct" as string]: `${pct}%` }}>
          <span className="boat-range__track" aria-hidden />
          <input
            type="range" min={0} max={frames - 1} step={0.05} value={value} disabled={!ready}
            aria-label={`Rotate ${label}`} aria-valuetext={`${deg} degrees`}
            onChange={(e) => goTo(Number(e.target.value))}
          />
          <span className="boat-range__thumb" aria-hidden />
          <div className="boat-range__ticks" aria-hidden>{Array.from({ length: 13 }, (_, n) => <span key={n} />)}</div>
        </div>
        <button type="button" className="icon-btn icon-btn--dark" aria-label="Rotate right" disabled={!ready} onClick={() => goTo(Math.round(target.current) + 3)}>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
        </button>
        <p className="boat-deg" aria-hidden>{ready ? `${String(deg).padStart(3, "0")}°` : `${Math.round(progress * 100)}%`}</p>
      </div>
      <p className="boat-hint">{ready ? "Slide the bar or drag the boat to turn it" : "Loading views…"}</p>
    </div>
  );
}
