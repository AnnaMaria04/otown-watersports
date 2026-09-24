# O'Town Watersports — website

Next.js (App Router) site for O'Town Watersports, Glen Fletcher's wakeboard & wakesurf coaching on Lake Barton, Orlando.

## Structure
- `content/site.ts` — **all facts** (contact, Glen bio, riders + sources, experiences, boat model, rates). Edit here, not in components.
- `app/page.tsx` — homepage: Hero · Meet Glen · History · Experiences · Boat · Life at O'Town · Inquiry
- `app/rates/page.tsx` — rates and booking policy
- `components/` — `SiteHeader` (accessible mobile menu), `BoatViewer` (360° drag viewer), `VideoDialog`, `InquiryForm`, `Reveal`
- `app/globals.css` — design tokens and components
- `ASSETS.md` — asset register with sources and publication permission

## Design system
- Colour: Pearl `#F2F1ED` (surface) · Charcoal `#11191C` (type, boat section) · Turquoise `#16A8AD` (primary action, focus, fine detail) · Silver `#B8C2C5` (rules, text on dark)
- Type: Manrope (self-hosted via @fontsource-variable), sentence case, medium weight headlines
- Primary buttons are turquoise with **charcoal** text (≈6:1 contrast)

## Boat viewer
72 captured views (desktop 1440w, mobile 820w WebP with transparent background) in `public/boat/`. Poster loads first; the sequence loads when the section approaches; drag/swipe horizontally, arrow keys, buttons, optional auto-rotate (paused offscreen and under reduced motion). Set `boat.model` in `content/site.ts` once confirmed.

## Inquiry form
No backend is configured — the form opens the visitor's email app with a pre-filled message to info@otownwatersports.com and says so. To use a real endpoint (e.g. Formspree, Resend), replace `onSubmit` in `components/InquiryForm.tsx` and show real success/error states.

## Dev
```bash
npm install
npm run dev
```
Deploy: import the repo in Vercel (framework auto-detected).
