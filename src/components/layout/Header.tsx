"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { LocaleSwitch } from "./LocaleSwitch";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  ["/about", "about"],
  ["/projects", "projects"],
  ["/skills", "skills"],
  ["/contact", "contact"],
] as const;

export function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="rise-nav fixed inset-x-0 top-4 z-40 px-4">
      <div className="mx-auto flex max-w-4xl items-center justify-between rounded-full border border-line/80 bg-bg/70 px-4 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <Link href="/" className="display px-2 text-sm tracking-wide">
          AN
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-mute md:flex" aria-label="Principal">
          {links.map(([href, key]) => (
            <Link key={href} href={href} className="hover:text-ink">
              {dict.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitch locale={locale} />
          <ThemeToggle light={dict.theme.light} dark={dict.theme.dark} />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="mx-auto mt-2 max-w-4xl rounded-2xl border border-line bg-bg/90 px-5 py-4 backdrop-blur-xl md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3 text-sm">
            {links.map(([href, key]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="py-1 text-mute hover:text-ink">
                {dict.nav[key]}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
