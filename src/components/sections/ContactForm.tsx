"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { Button } from "../ui/Button";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setStatus(response.ok ? "ok" : "error");
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.contact.name} name="name" required />
        <Field label={dict.contact.email} name="email" type="email" required />
      </div>
      <Field label={dict.contact.subject} name="subject" required />
      <label className="block">
        <span className="mb-2 block text-sm text-mute">{dict.contact.message}</span>
        <textarea
          name="message"
          required
          minLength={10}
          rows={6}
          className="w-full rounded-xl border border-line bg-muted-bg px-4 py-3 text-ink"
        />
      </label>
      <div className="hidden" aria-hidden="true">
        <input name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? dict.contact.sending : dict.contact.send}
      </Button>
      {status === "ok" ? <p className="text-sm text-[var(--ok)]">{dict.contact.success}</p> : null}
      {status === "error" ? <p className="text-sm text-[var(--danger)]">{dict.contact.error}</p> : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-mute">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-line bg-muted-bg px-4 py-3 text-ink"
      />
    </label>
  );
}
