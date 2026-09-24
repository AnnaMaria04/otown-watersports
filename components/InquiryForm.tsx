"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { contact } from "@/content/site";

const activities = [
  { value: "first-session", label: "A first session (wakeboard or wakesurf)" },
  { value: "coaching", label: "Coaching to develop my riding" },
  { value: "training-stay", label: "A training stay / camp" },
  { value: "wakesurf", label: "Wakesurf coaching" },
  { value: "other", label: "Something else — groups, tubing, events" },
];
const levels = ["Never ridden", "Beginner — getting up and riding", "Intermediate — crossing the wake", "Advanced — working on inverts and spins", "Pro / competitive"];

/**
 * No backend is configured, so this form composes an email to O'Town in the visitor's own mail app.
 * It never reports a successful submission it cannot confirm.
 */
export default function InquiryForm() {
  const [activity, setActivity] = useState("first-session");
  const [status, setStatus] = useState<"idle" | "invalid" | "opened">("idle");

  const params = useSearchParams();
  useEffect(() => {
    const a = params.get("activity");
    if (a && activities.some((x) => x.value === a)) setActivity(a);
  }, [params]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus("invalid");
      form.reportValidity();
      return;
    }
    const f = new FormData(form);
    const act = activities.find((x) => x.value === f.get("activity"))?.label ?? "";
    const lines = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Interested in: ${act}`,
      `Riding level: ${f.get("level")}`,
      `Preferred dates: ${f.get("dates")}`,
      f.get("riders") ? `Number of riders: ${f.get("riders")}` : "",
      f.get("message") ? `\nWhat I'd like to work on:\n${f.get("message")}` : "",
    ].filter(Boolean);
    const href = `mailto:${contact.email}?subject=${encodeURIComponent(`Session inquiry — ${f.get("name")}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setStatus("opened");
  }

  return (
    <form className="inquiry" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="q-name">Name</label>
        <input id="q-name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="q-email">Email</label>
        <input id="q-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="q-activity">Activity</label>
        <select id="q-activity" name="activity" value={activity} onChange={(e) => setActivity(e.target.value)}>
          {activities.map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="q-level">Riding level</label>
        <select id="q-level" name="level" defaultValue={levels[1]}>
          {levels.map((l) => <option key={l}>{l}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="q-dates">Preferred dates</label>
        <input id="q-dates" name="dates" placeholder="e.g. 12–14 March, mornings" required />
      </div>
      <div className="field">
        <label htmlFor="q-riders">Number of riders <span className="optional">optional</span></label>
        <input id="q-riders" name="riders" inputMode="numeric" />
      </div>
      <div className="field field--full">
        <label htmlFor="q-message">What would you like to work on? <span className="optional">optional</span></label>
        <textarea id="q-message" name="message" rows={4} />
      </div>

      <div className="inquiry__foot field--full">
        <button type="submit" className="btn btn--primary">Send inquiry</button>
        <p className="inquiry__note">
          Opens your email app with these details filled in — nothing is sent until you press send there.
          An inquiry asks about availability; it isn’t a confirmed booking.
        </p>
      </div>

      <p className="inquiry__status field--full" role="status" aria-live="polite">
        {status === "invalid" && "Please add your name, a valid email and your preferred dates."}
        {status === "opened" && (
          <>Your email app should now be open with your inquiry. If nothing happened, email us at <a href={`mailto:${contact.email}`}>{contact.email}</a>.</>
        )}
      </p>
    </form>
  );
}
