import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { methodSteps } from "@/data/content";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function Methodology({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading kicker={dict.method.kicker} title={dict.method.title} subtitle={dict.method.subtitle} />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {methodSteps.map((step) => (
            <li key={step.n} className="rounded-2xl border border-line bg-card p-6">
              <p className="font-mono text-accent">{step.n}</p>
              <h3 className="display mt-3 text-2xl">{locale === "en" ? step.titleEn : step.titleFr}</h3>
              <p className="mt-3 text-sm text-mute">{locale === "en" ? step.bodyEn : step.bodyFr}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
