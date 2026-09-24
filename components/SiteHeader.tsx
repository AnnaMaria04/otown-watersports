"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Coaching", href: "/#glen" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Life at O’Town", href: "/#life" },
  { label: "Rates", href: "/rates" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route/hash change
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Escape to close, focus management, scroll lock only while open
  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add("menu-open");
    const first = panelRef.current?.querySelector<HTMLElement>("a,button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>("a,button");
        const a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="site-header__bar">
        <Link href="/" className="lockup" aria-label="O’Town Watersports — home" onClick={close}>
          <span className="lockup__name">O’Town</span>
          <span className="lockup__sub">Watersports</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="site-nav__link" aria-current={pathname === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/#plan" className="btn btn--primary site-header__cta">Plan your session</Link>

        <button
          ref={btnRef}
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-btn__label">{open ? "Close" : "Menu"}</span>
          <span className="menu-btn__icon" aria-hidden />
        </button>
      </div>

      <div id="mobile-menu" ref={panelRef} className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="mobile-menu__link" onClick={close}>{l.label}</Link>
          ))}
        </nav>
        <Link href="/#plan" className="btn btn--primary btn--block" onClick={close}>Plan your session</Link>
      </div>
    </header>
  );
}
