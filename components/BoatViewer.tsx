"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = { frames: number; label: string };

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * 360° boat viewer built from a sequence of captured views (not a free-orbit 3D model).
 * - Poster frame renders immediately; the sequence loads only when the section approaches.
 * - Horizontal drag / swipe rotates; vertical page scroll is untouched (touch-action: pan-y).
 * - Arrow keys and buttons for keyboard users; optional auto-rotate with a visible pause state.
 * - Animation stops offscreen and never starts under prefers-reduced-motion.
 */
export default function BoatViewer({ frames, label }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgs = useRef<HTMLImageElement[]>([]);
  const frame = useRef(0);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const [hint, setHint] = useState(true);
  const reduced = useRef(false);
  const size = useRef<"d" | "m">("d");

  const draw = useCallback(() => {
    const c = canvasRef.current;
    const img = imgs.current[frame.current];
    if (!c || !img) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(img, 0, 0, c.width, c.height);
  }, []);

  const setFrame = useCallback(
    (i: number) => {
      frame.current = ((Math.round(i) % frames) + frames) % frames;
      draw();
      stageRef.current?.setAttribute("aria-valuenow", String(Math.round((frame.current / frames) * 360)));
    },
    [frames, draw]
  );

  // Size canvas to its box at device resolution
  useEffect(() => {
    const c = canvasRef.current, s = stageRef.current;
    if (!c || !s) return;
    const ro = new ResizeObserver(() => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = Math.round(s.clientWidth * dpr);
      c.height = Math.round(s.clientHeight * dpr);
      draw();
    });
    ro.observe(s);
    return () => ro.disconnect();
  }, [draw]);

  // Visibility: preload when near, animate only when visible
  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const s = stageRef.current;
    if (!s) return;
    let started = false;
    const near = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) {
          started = true;
          load();
        }
      },
      { rootMargin: "700px 0px" }
    );
    const vis = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 });
    near.observe(s);
    vis.observe(s);
    function load() {
      size.current = s!.clientWidth * Math.min(window.devicePixelRatio || 1, 2) > 1000 ? "d" : "m";
      let done = 0;
      const list: HTMLImageElement[] = [];
      for (let i = 0; i < frames; i++) {
        const img = new Image();
        img.decoding = "async";
        img.src = `/boat/${size.current}/${pad(i)}.webp`;
        list.push(img);
        img.decode().catch(() => {}).finally(() => {
          done++;
          setProgress(done / frames);
          if (done === frames) {
            imgs.current = list;
            setReady(true);
            setFrame(frame.current);
            if (!reduced.current) setPlaying(true);
          }
        });
      }
    }
    return () => {
      near.disconnect();
      vis.disconnect();
    };
  }, [frames, setFrame]);

  // Auto-rotate loop
  useEffect(() => {
    if (!ready || !playing || !inView) return;
    let raf = 0, last = performance.now(), acc = 0;
    const tick = (t: number) => {
      acc += (t - last) / 1000;
      last = t;
      const step = 1 / 11; // ~11 frames per second ≈ one turn every 6.5s
      if (acc >= step) {
        setFrame(frame.current + Math.floor(acc / step));
        acc %= step;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ready, playing, inView, setFrame]);

  // Drag / swipe
  useEffect(() => {
    const s = stageRef.current;
    if (!s || !ready) return;
    let down = false, dragging = false, x0 = 0, y0 = 0, f0 = 0, lastX = 0, lastT = 0, vel = 0, raf = 0;
    const perFrame = () => (s.clientWidth * 1.1) / frames;
    const onDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      cancelAnimationFrame(raf);
      down = true; dragging = false;
      x0 = lastX = e.clientX; y0 = e.clientY; f0 = frame.current; lastT = e.timeStamp; vel = 0;
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - x0, dy = e.clientY - y0;
      if (!dragging) {
        if (Math.abs(dx) < 6) return;
        if (Math.abs(dy) > Math.abs(dx)) { down = false; return; } // vertical intent: let the page scroll
        dragging = true;
        s.setPointerCapture(e.pointerId);
        s.classList.add("is-dragging");
        setPlaying(false);
        setHint(false);
      }
      const dt = Math.max(1, e.timeStamp - lastT);
      vel = (e.clientX - lastX) / dt;
      lastX = e.clientX; lastT = e.timeStamp;
      setFrame(f0 - dx / perFrame());
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      s.classList.remove("is-dragging");
      if (!dragging || reduced.current) return;
      // gentle inertia
      let v = vel * 16;
      let pos = frame.current;
      const glide = () => {
        v *= 0.92;
        if (Math.abs(v) < 0.4) return;
        pos -= v / perFrame();
        setFrame(pos);
        raf = requestAnimationFrame(glide);
      };
      raf = requestAnimationFrame(glide);
    };
    s.addEventListener("pointerdown", onDown);
    s.addEventListener("pointermove", onMove);
    s.addEventListener("pointerup", onUp);
    s.addEventListener("pointercancel", onUp);
    return () => {
      cancelAnimationFrame(raf);
      s.removeEventListener("pointerdown", onDown);
      s.removeEventListener("pointermove", onMove);
      s.removeEventListener("pointerup", onUp);
      s.removeEventListener("pointercancel", onUp);
    };
  }, [ready, frames, setFrame]);

  const step = (d: number) => {
    setPlaying(false);
    setHint(false);
    setFrame(frame.current + d);
  };

  return (
    <div className="boat-viewer">
      <div
        ref={stageRef}
        className={`boat-stage${ready ? " is-ready" : ""}`}
        tabIndex={0}
        role="slider"
        aria-label={`${label}, 360 degree view. Use the left and right arrow keys to rotate.`}
        aria-valuemin={0}
        aria-valuemax={360}
        aria-valuenow={0}
        aria-valuetext="Rotated view of the boat"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") { e.preventDefault(); step(-2); }
          if (e.key === "ArrowRight") { e.preventDefault(); step(2); }
        }}
      >
        <picture>
          <source media="(max-width: 700px)" srcSet="/boat/m/00.webp" />
          <img className="boat-poster" src="/boat/d/00.webp" alt={`${label}, side view`} width={1440} height={711} fetchPriority="low" />
        </picture>
        <canvas ref={canvasRef} className="boat-canvas" aria-hidden />
        <div className="boat-floor" aria-hidden />
      </div>

      <div className="boat-controls">
        <p className={`boat-hint${hint ? "" : " is-hidden"}`} aria-hidden={!hint}>
          <svg viewBox="0 0 40 12" width="34" height="10" aria-hidden><path d="M1 6h38M6 1 1 6l5 5M34 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
          {ready ? "Drag to explore" : `Loading views ${Math.round(progress * 100)}%`}
        </p>
        <div className="boat-buttons">
          <button type="button" className="icon-btn icon-btn--dark" onClick={() => step(-6)} aria-label="Rotate left" disabled={!ready}>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
          </button>
          <button
            type="button"
            className="icon-btn icon-btn--dark"
            onClick={() => setPlaying((p) => !p)}
            aria-pressed={playing}
            aria-label={playing ? "Pause rotation" : "Play rotation"}
            disabled={!ready}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden><path d="M8 5v14M16 5v14" stroke="currentColor" strokeWidth="2.2" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden><path d="M8 5l11 7-11 7z" fill="currentColor" /></svg>
            )}
          </button>
          <button type="button" className="icon-btn icon-btn--dark" onClick={() => step(6)} aria-label="Rotate right" disabled={!ready}>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
