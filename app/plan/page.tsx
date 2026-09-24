import type { Metadata } from "next";
import { Suspense } from "react";
import InquiryForm from "@/components/InquiryForm";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Plan your session — O’Town Watersports",
  description: "Ask about wakeboard and wakesurf coaching with Glen Fletcher on Lake Barton, Orlando. 5220 E Colonial Dr, Orlando, FL 32807.",
};

export default function PlanPage() {
  return (
    <>
      <section className="plan plan--page" aria-labelledby="plan-title">
        <div className="wrap plan__grid">
          <div className="plan__intro">
            <p className="eyebrow eyebrow--cyan">Plan your session</p>
            <h1 id="plan-title" className="display display--lg">What are you<br />working on?</h1>
            <p className="plan__lede">Tell us your level, dates and what you’d like to do. We’ll help you plan your time on the water.</p>
            <div className="plan__direct">
              <a href={contact.phone.href}>{contact.phone.label}</a>
              <a href={contact.cell.href}>{contact.cell.label} <span>cell</span></a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
          <Suspense fallback={null}><InquiryForm /></Suspense>
        </div>
      </section>

      <section className="visit" aria-labelledby="visit-title">
        <div className="wrap visit__grid">
          <div className="visit__info">
            <p className="eyebrow eyebrow--dark">Find us</p>
            <h2 id="visit-title" className="display display--lg display--ink">On Lake Barton,<br />in the heart of Orlando.</h2>
            <dl>
              <div><dt>Address</dt><dd>{contact.address}</dd></div>
              <div><dt>Look for</dt><dd>The two-story building with the big blue “O” on the front.</dd></div>
              <div><dt>Getting here</dt><dd>About 15–20 minutes from Orlando International Airport.</dd></div>
              <div><dt>Hours</dt><dd>{contact.hours}</dd></div>
            </dl>
            <div className="actions">
              <a className="btn btn--ink btn--pill btn--lg" href={contact.directions} target="_blank" rel="noreferrer">Get directions</a>
              <a className="u-link" href={contact.waiver} target="_blank" rel="noreferrer">Sign the waiver</a>
            </div>
          </div>
          <div className="map">
            <iframe title="Map showing O’Town Watersports, 5220 E Colonial Dr, Orlando" src={contact.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
