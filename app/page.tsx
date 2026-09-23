import ReserveForm from "./ReserveForm";

const proWomen = [
  "Raimi Merritt", "Dallas Friday", "Erika Lang", "Sian Hurst", "Meagan Ethell",
  "Bec Gange", "Carolina Goldenberg", "Luna Cassart", "Alizé Piana", "Otoha Kawahara",
  "Taylor McCullough", "Mary Morgan Howell", "Hollie Waldrop", "Bethany Henderson", "Sophia Fletcher",
];
const proMen = [
  "Rusty Malinoski", "Andrew Adkison", "Aaron Rathy", "Steel Lafferty", "Tony Carroll",
  "Austin Hair", "Jacob Valdez", "Eddie Valdez", "Damian Adam", "Shota Tezuka",
  "Deco Rondi", "Lorenzo Soprani",
];

const sessions = [
  {
    name: "Private Lesson",
    with: "with Glen Fletcher",
    price: "$160",
    unit: "per lesson",
    points: ["1:1 coaching", "Training on and off the water", "By appointment"],
    featured: true,
  },
  {
    name: "Private Lesson",
    with: "with O'Town staff",
    price: "$145",
    unit: "per lesson",
    points: ["1:1 coaching", "Training on and off the water", "By appointment"],
  },
  {
    name: "Full Day",
    with: "the complete program",
    price: "$425",
    unit: "per day",
    points: ["On & off-water training", "Trampoline sessions", "Video review of every set"],
  },
  {
    name: "Camps",
    with: "stay on the lake",
    price: "Enquire",
    unit: "per day",
    points: ["Coaching & video review", "Meals included", "Lakefront accommodation"],
  },
];

const facility = [
  ["The boat", "A new Supra SL, set up for wakeboard and wakesurf."],
  ["The gym", "Strength work and a trampoline for air awareness off the water."],
  ["The lakefront", "Private dock and sand beach on Lake Barton."],
  ["The house", "Overnight apartments, lounges, full kitchen and showers."],
  ["The space", "Meeting and event space for teams and groups."],
  ["The location", "Downtown Orlando — minutes from the airport and the parks."],
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="wordmark" aria-label="O'Town Watersports home">
          <span className="wm-main">O&apos;TOWN</span>
          <span className="wm-sub">Watersports</span>
        </a>
        <nav className="nav-links">
          <a href="#coaching">Coaching</a>
          <a href="#roster">The Roster</a>
          <a href="#lake">The Lake</a>
          <a href="#sessions">Sessions</a>
        </nav>
        <a href="#reserve" className="btn btn-ghost nav-cta">Reserve</a>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-water" aria-hidden />
          <div className="hero-inner">
            <p className="eyebrow">Private wakeboard &amp; wakesurf coaching · Lake Barton, Orlando</p>
            <h1 className="display">
              Where world champions <em>learned to ride.</em>
            </h1>
            <p className="lede">
              Over twenty years of coaching from Glen Fletcher. One lake, one boat,
              one rider at a time.
            </p>
            <div className="hero-ctas">
              <a href="#reserve" className="btn btn-solid">Reserve a session</a>
              <a href="#roster" className="btn btn-ghost">Meet the roster</a>
            </div>
          </div>
          <dl className="stats">
            <div><dt>20+</dt><dd>Years coaching</dd></div>
            <div><dt>25+</dt><dd>Pro riders coached</dd></div>
            <div><dt>10×</dt><dd>World titles — Raimi Merritt</dd></div>
            <div><dt>365</dt><dd>Days a year on the water</dd></div>
          </dl>
        </section>

        {/* PHILOSOPHY */}
        <section className="section light" id="coaching">
          <div className="split">
            <div>
              <p className="label">The approach</p>
              <h2 className="h2">Beginners welcomed.<br /><em>Pros challenged.</em></h2>
            </div>
            <div className="prose">
              <p>
                O&apos;Town is a private coaching school, not a rental dock. Every
                session is built around one rider: your level, your goals, your next
                trick. On the water, off the water, on the trampoline and in video review.
              </p>
              <p>
                Enrollment is limited and the schedule runs on time, so the set you
                book is yours — rain or shine, wind or no wind.
              </p>
              <p className="signature">Learn. Ride. Progress.</p>
            </div>
          </div>
        </section>

        {/* GLEN */}
        <section className="section dark">
          <div className="coach">
            <figure className="frame frame-portrait">
              <span>Portrait — Glen on the tower<br />(replace with real photo)</span>
            </figure>
            <div>
              <p className="label">Head coach</p>
              <h2 className="h2">Glen Fletcher</h2>
              <p className="prose-dark">
                New Zealand born, a former professional wakeboarder, and one of the
                most accomplished coaches in the sport. For more than two decades Glen
                has driven the boat and shaped the riding of juniors, weekend riders and
                world champions — from Lake Barton.
              </p>
              <p className="prose-dark">
                In 2007 a fifteen-year-old Raimi Merritt moved to Orlando to train
                with him. She went on to win ten world titles — more than any woman in
                the history of wakeboarding.
              </p>
              <a href="https://www.instagram.com/fletcherotown/" className="link" target="_blank" rel="noreferrer">
                Follow @fletcherotown →
              </a>
            </div>
          </div>
        </section>

        {/* ROSTER */}
        <section className="section light" id="roster">
          <p className="label center">The roster</p>
          <h2 className="h2 center">Riders who trained at O&apos;Town</h2>
          <p className="center muted narrow">
            A selection of the professional riders Glen has coached across two decades.
          </p>
          <div className="roster">
            <div>
              <h3 className="roster-head">Pro Women</h3>
              <ul>{proWomen.map((n) => <li key={n}>{n}</li>)}</ul>
            </div>
            <div>
              <h3 className="roster-head">Pro Men</h3>
              <ul>{proMen.map((n) => <li key={n}>{n}</li>)}</ul>
            </div>
          </div>
        </section>

        {/* LAKE */}
        <section className="section dark" id="lake">
          <div className="split">
            <div>
              <p className="label">The lake</p>
              <h2 className="h2">A private training ground in downtown Orlando.</h2>
              <figure className="frame frame-wide">
                <span>Lake Barton at golden hour<br />(replace with real photo)</span>
              </figure>
            </div>
            <ul className="facility">
              {facility.map(([k, v]) => (
                <li key={k}><span className="fac-k">{k}</span><span className="fac-v">{v}</span></li>
              ))}
            </ul>
          </div>
        </section>

        {/* SESSIONS */}
        <section className="section light" id="sessions">
          <p className="label center">Sessions</p>
          <h2 className="h2 center">By appointment only.</h2>
          <div className="cards">
            {sessions.map((s) => (
              <article key={s.name + s.with} className={`card${s.featured ? " featured" : ""}`}>
                <h3>{s.name}</h3>
                <p className="card-with">{s.with}</p>
                <p className="price">{s.price}<span>{s.unit}</span></p>
                <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <a href="#reserve" className="card-link">Reserve →</a>
              </article>
            ))}
          </div>
          <p className="center muted small">
            A 50% deposit holds your reservation. Once you have booked the time — it is
            yours. No refunds for sore muscles.
          </p>
        </section>

        {/* RESERVE */}
        <section className="section dark" id="reserve">
          <div className="split">
            <div>
              <p className="label">Reserve</p>
              <h2 className="h2">Plan your session.</h2>
              <p className="prose-dark">
                Tell us about the rider and the dates you have in mind. We&apos;ll
                confirm availability personally.
              </p>
              <div className="contact">
                <a href="tel:+14073800734">407 380 0734</a>
                <a href="tel:+14075297727">407 529 7727 (cell)</a>
                <a href="mailto:info@otownwatersports.com">info@otownwatersports.com</a>
              </div>
            </div>
            <ReserveForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <span className="wm-main small-wm">O&apos;TOWN</span>
        <span>Lake Barton · Orlando, Florida</span>
        <span>
          <a href="https://www.instagram.com/fletcherotown/" target="_blank" rel="noreferrer">Instagram</a>
        </span>
      </footer>
    </>
  );
}
