"use client";

import { FormEvent } from "react";

export default function ReserveForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Riders & ages: ${f.get("riders")}`,
      `Session: ${f.get("session")}`,
      `Preferred dates: ${f.get("dates")}`,
      `Experience & goals: ${f.get("goals")}`,
    ].join("\n");
    window.location.href = `mailto:info@otownwatersports.com?subject=${encodeURIComponent(
      "Session request — " + f.get("name")
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Name<input name="name" required /></label>
      <label>Phone<input name="phone" type="tel" /></label>
      <label>Riders &amp; ages<input name="riders" placeholder="e.g. Alex, 14" required /></label>
      <label>
        Session
        <select name="session" defaultValue="Private lesson with Glen">
          <option>Private lesson with Glen</option>
          <option>Private lesson with staff</option>
          <option>Full day</option>
          <option>Camp</option>
          <option>Group / event</option>
        </select>
      </label>
      <label>Preferred dates<input name="dates" placeholder="e.g. Oct 12–14, mornings" required /></label>
      <label className="full">Experience &amp; goals<textarea name="goals" rows={3} placeholder="Current level, tricks you're working on" /></label>
      <button type="submit" className="btn btn-solid full">Request availability</button>
    </form>
  );
}
