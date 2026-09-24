# O'Town Watersports — website

Next.js (App Router) site for O'Town Watersports, Glen Fletcher's wakeboard & wakesurf coaching on Lake Barton, Orlando.

## Pages
- `/` — Hero (rotating Learn/Ride/Progress photos + Glen film), statement, Glen, rider spotlight, experiences, 360° boat, life at O'Town, Instagram, closing CTA
- `/coaching` — Glen, how a session works, rider spotlight, full rider list
- `/rates` — prices, booking policy, FAQ
- `/plan` — inquiry form (chips), contact, map & directions

## Structure
- `content/site.ts` — **all facts** (contact, Glen bio, riders + sources, experiences, boat model, rates). Edit here, not in components.
- `app/page.tsx` — homepage: Hero · Meet Glen · History · Experiences · Boat · Life at O'Town · Inquiry
- `app/rates/page.tsx` — rates and booking policy
- `components/` — `SiteHeader` (accessible mobile menu), `BoatViewer` (360° drag viewer), `VideoDialog`, `InquiryForm`, `Reveal`
- `app/globals.css` — design tokens and components
- `ASSETS.md` — asset register with sources and publication permission

## Design system
- Colour: from the O'Town neon sign — Ink `#0B1116`, Neon cyan `#22C7E8`, Electric blue `#2B7DE9`, Pearl `#F4F2EE`, Stone `#E9E5DD`
- Type: Archivo condensed (display) + Manrope (text), both self-hosted via @fontsource
- Primary buttons are cyan with **ink** text (≈10:1 contrast)

## Boat viewer
72 captured views (desktop 1440w, mobile 820w WebP, transparent background) in `public/boat/`. Controlled by the rotation bar and horizontal drag — it never plays on its own. Poster loads first; the sequence loads as the section approaches.

## Inquiry form
No backend is configured — the form opens the visitor's email app with a pre-filled message to info@otownwatersports.com and says so. To use a real endpoint (e.g. Formspree, Resend), replace `onSubmit` in `components/InquiryForm.tsx` and show real success/error states.

## Dev
```bash
npm install
npm run dev
```
Deploy: import the repo in Vercel (framework auto-detected).
