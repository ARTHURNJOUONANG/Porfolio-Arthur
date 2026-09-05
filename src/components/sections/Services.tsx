import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { services } from "@/data/content";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function Services({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section id="services" className="scroll-mt-24 py-20">
      <Container>
        <SectionHeading kicker={dict.services.kicker} title={dict.services.title} subtitle={dict.services.subtitle} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.id} className="rounded-2xl border border-line bg-card p-6">
              <p className="font-mono text-xs text-accent">0{index + 1}</p>
              <h3 className="display mt-3 text-2xl">
                {locale === "en" ? service.titleEn : service.titleFr}
              </h3>
              <p className="mt-3 text-sm text-mute">{locale === "en" ? service.bodyEn : service.bodyFr}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
