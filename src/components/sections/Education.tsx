import type { Dictionary } from "@/i18n/dictionaries";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

type Item = {
  id: string;
  title: string;
  school: string;
  period: string;
  detail: string;
};

export function Education({ dict, items }: { dict: Dictionary; items: Item[] }) {
  return (
    <section id="education" className="scroll-mt-24 py-20">
      <Container>
        <SectionHeading
          kicker={dict.education.kicker}
          title={dict.education.title}
          subtitle={dict.education.subtitle}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.id} className="rounded-2xl border border-line bg-card p-6">
              <p className="font-mono text-xs text-accent">{item.period}</p>
              <h3 className="display mt-3 text-2xl">{item.title}</h3>
              <p className="mt-2 text-mute">{item.school}</p>
              <p className="mt-4 text-sm text-mute">{item.detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
