import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Portrait } from "@/components/ui/Portrait";
import { proofs } from "@/data/content";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = { title: "À propos" };

export default async function AboutPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <SiteShell dict={dict} locale={locale}>
      <Container className="pt-32 pb-20">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:gap-16 md:text-left">
          <Portrait size="lg" showHint />
          <div className="min-w-0 flex-1">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">{dict.nav.about}</p>
            <h1 className="display mt-4 text-4xl leading-[1.05] sm:text-5xl">{dict.about.title}</h1>
            <p className="mt-8 text-xl text-ink">{dict.about.lead}</p>
            <div className="mt-8 space-y-5 text-mute">
              <p>{dict.about.p1}</p>
              <p>{dict.about.p2}</p>
              <p>{dict.about.p3}</p>
            </div>

            <div className="mt-10">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">{dict.about.proofTitle}</p>
              <ul className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                {proofs.map((proof) => (
                  <li key={proof.href}>
                    <Link
                      href={proof.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-line bg-card px-4 py-2 text-sm hover:border-accent hover:text-accent"
                    >
                      {proof.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="mt-12 rounded-2xl border border-accent/40 bg-accent/10 p-6 text-left">
              <p className="font-mono text-xs text-accent">{dict.about.seeking}</p>
              <p className="mt-3 text-mute">{dict.about.seekingBody}</p>
              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-black hover:opacity-90"
              >
                {dict.about.cta}
              </Link>
            </aside>
          </div>
        </div>
      </Container>
    </SiteShell>
  );
}
