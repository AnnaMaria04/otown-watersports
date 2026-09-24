import Link from "next/link";
import { contact } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="site-footer__big" aria-label="Learn. Ride. Progress.">Learn. Ride. <span>Progress.</span></p>
        <div className="site-footer__grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="site-footer__logo" src="/brand/otown-logo-solid.png" alt="O’Town Watersports" width={900} height={302} />
            <p className="site-footer__tag">Wakeboard &amp; wakesurf coaching with Glen Fletcher.</p>
          </div>
          <div>
            <p className="eyebrow">Visit</p>
            <p>{contact.address}</p>
            <p><a href={contact.directions} target="_blank" rel="noreferrer">Get directions</a></p>
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <p><a href={contact.phone.href}>{contact.phone.label}</a></p>
            <p><a href={contact.cell.href}>{contact.cell.label}</a> (cell)</p>
            <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          </div>
          <div>
            <p className="eyebrow">More</p>
            <p><Link href="/coaching">Coaching</Link> · <Link href="/rates">Rates</Link> · <Link href="/athletes">Athletes</Link> · <Link href="/plan">Plan</Link></p>
            <p><a href={contact.waiver} target="_blank" rel="noreferrer">Waiver</a></p>
            <p><a href={contact.instagram.href} target="_blank" rel="noreferrer">Instagram</a> · <a href={contact.facebook.href} target="_blank" rel="noreferrer">Facebook</a></p>
          </div>
        </div>
        <div className="site-footer__base">
          <span>© O’Town Watersports · Lake Barton, Orlando</span>
          <span>Open every week of the year</span>
        </div>
      </div>
    </footer>
  );
}
