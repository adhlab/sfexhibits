"use client";

import Link from "next/link";
import { useState } from "react";

type Offering = { id: string; reference: string; kind: string; display_name: string; contribution: string; relationship: string; status: string; historical_status: string; created_at: string };

export function StewardConsole() {
  const [items, setItems] = useState<Offering[]>([]);
  const [message, setMessage] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  async function load() {
    const response = await fetch("/api/v1/steward/offerings", { credentials: "same-origin" });
    if (response.ok) setItems((await response.json()).offerings);
  }
  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("/api/v1/steward/login", { method: "POST", body: new FormData(event.currentTarget), credentials: "same-origin" });
    setAuthenticated(response.ok);
    if (response.ok) void load(); else setMessage("Credentials or verification code were not accepted.");
  }
  async function update(id: string, status: string) {
    const csrf = document.cookie.match(/(?:^|; )csrf=([^;]+)/)?.[1] ?? "";
    const response = await fetch(`/api/v1/steward/offerings/${id}`, { method: "PATCH", headers: { "content-type": "application/json", "x-csrf-token": csrf }, body: JSON.stringify({ status }), credentials: "same-origin" });
    if (response.ok) void load();
  }
  async function classify(id: string, historical_status: string) {
    const csrf = document.cookie.match(/(?:^|; )csrf=([^;]+)/)?.[1] ?? "";
    const response = await fetch(`/api/v1/steward/offerings/${id}`, { method: "PATCH", headers: { "content-type": "application/json", "x-csrf-token": csrf }, body: JSON.stringify({ historical_status }), credentials: "same-origin" });
    if (response.ok) void load();
  }

  return <>
    <header><Link href="/">← Monument</Link><p className="eyebrow">Private stewardship</p><h1>Offerings held for review</h1></header>
    {!authenticated ? <form className="steward-login" onSubmit={login}>
      <label>Password<input name="password" type="password" required /></label>
      <label>Six-digit verification code<input name="totp" inputMode="numeric" pattern="[0-9]{6}" required /></label>
      <button>Enter review</button>{message && <p role="alert">{message}</p>}
    </form> : <section className="steward-list"><button onClick={load}>Refresh</button>{items.map((item) => <article key={item.id}>
      <p className="eyebrow">{item.kind} · {item.reference} · {item.status} · {item.historical_status}</p><h2>{item.display_name}</h2><p>{item.contribution}</p><small>{item.relationship} · {new Date(item.created_at).toLocaleString()}</small>
      <div>{["needs-follow-up", "approved", "declined", "withdrawn"].map((status) => <button key={status} onClick={() => update(item.id, status)}>{status}</button>)}</div>
      <div>{["submitted", "verified", "held-in-community-memory"].map((status) => <button key={status} onClick={() => classify(item.id, status)}>{status}</button>)}</div>
    </article>)}</section>}
  </>;
}
