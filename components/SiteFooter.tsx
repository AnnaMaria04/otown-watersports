import Link from "next/link";
import { brandLine, contact } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div>
          <p className="lockup lockup--footer"><span className="lockup__name">O’Town</span><span className="lockup__sub">Watersports</span></p>
          <p className="site-footer__line">{brandLine}</p>
        </div>
        <div>
          <p className="eyebrow">Find us</p>
          <p>{contact.location}</p>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <p><a href={contact.phone.href}>{contact.phone.label}</a></p>
          <p><a href={contact.cell.href}>{contact.cell.label}</a> (cell)</p>
          <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        </div>
        <div>
          <p className="eyebrow">More</p>
          <p><Link href="/rates">Rates &amp; booking policy</Link></p>
          <p><a href={contact.waiver} target="_blank" rel="noreferrer">Waiver</a></p>
          <p><a href={contact.instagram.href} target="_blank" rel="noreferrer">Instagram</a> · <a href={contact.facebook.href} target="_blank" rel="noreferrer">Facebook</a></p>
        </div>
      </div>
      <div className="wrap site-footer__base">
        <span>© O’Town Watersports</span>
      </div>
    </footer>
  );
}
