"use client";

export function LocaleSwitch({ locale }: { locale: "fr" | "en" }) {
  async function setLocale(next: "fr" | "en") {
    await fetch("/api/locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: next }),
    });
    window.location.reload();
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-line px-1 py-1 text-xs">
      {(["fr", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`rounded-full px-2.5 py-1 uppercase ${
            locale === code ? "bg-accent text-black" : "text-mute hover:text-ink"
          }`}
          aria-pressed={locale === code}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
