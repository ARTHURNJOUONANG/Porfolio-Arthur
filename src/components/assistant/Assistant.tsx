"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Assistant({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function ask(event: React.FormEvent) {
    event.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    const response = await fetch("/api/assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, locale }),
    });
    const data = (await response.json()) as { answer?: string };
    setAnswer(data.answer ?? dict.contact.error);
    setLoading(false);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="mb-3 w-[min(92vw,360px)] rounded-2xl border border-line bg-card p-4 shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <p className="display text-lg">{dict.assistant.title}</p>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close">
              <X size={16} />
            </button>
          </div>
          <p className="mb-3 text-xs text-mute">{dict.assistant.hint}</p>
          {answer ? <p className="mb-3 whitespace-pre-wrap text-sm text-mute">{answer}</p> : null}
          <form onSubmit={ask} className="flex gap-2">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={dict.assistant.placeholder}
              className="flex-1 rounded-full border border-line bg-muted-bg px-3 py-2 text-sm"
            />
            <button type="submit" className="rounded-full bg-accent px-3 py-2 text-xs text-black">
              {loading ? "…" : dict.assistant.send}
            </button>
          </form>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="assistant-pulse inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-black shadow-lg"
        aria-label={dict.assistant.title}
      >
        <MessageCircle size={18} />
      </button>
    </div>
  );
}
