import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero page-hero--full">
      <Image src="/images/bg-sunset-air.jpg" alt="" fill priority quality={80} sizes="100vw" style={{ objectPosition: "30% 30%" }} />
      <div className="wrap page-hero__inner">
        <p className="eyebrow eyebrow--cyan">404</p>
        <h1 className="display display--hero">Missed the handle.</h1>
        <p>This page doesn’t exist. Let’s get you back behind the boat.</p>
        <div className="actions" style={{ marginTop: 28 }}>
          <Link href="/" className="btn btn--primary btn--pill btn--lg">Back to home</Link>
          <Link href="/plan" className="u-link u-link--light">Plan your session</Link>
        </div>
      </div>
    </section>
  );
}
