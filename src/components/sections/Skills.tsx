import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { Reveal } from "../motion/Reveal";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

type Group = {
  id: string;
  rank?: string;
  labelFr: string;
  labelEn: string;
  featured?: boolean;
  items: readonly string[] | string[];
};

export function Skills({
  dict,
  locale,
  groups,
}: {
  dict: Dictionary;
  locale: Locale;
  groups: Group[];
}) {
  return (
    <section id="skills" className="scroll-mt-28 py-16">
      <Container>
        <Reveal>
          <SectionHeading kicker={dict.skills.kicker} title={dict.skills.title} subtitle={dict.skills.subtitle} />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((group, groupIndex) => (
            <article
              key={group.id}
              id={group.id === "ia" ? "ia" : undefined}
              className={`rise scroll-mt-28 rounded-2xl border p-6 backdrop-blur-sm ${
                group.featured ? "border-accent/50 bg-accent/10" : "border-line bg-card/80"
              }`}
              style={{ animationDelay: `${groupIndex * 70}ms` }}
            >
              <h3 className="display flex items-baseline gap-3 text-xl">
                {group.rank ? <span className="font-mono text-sm text-accent">{group.rank}</span> : null}
                {locale === "en" ? group.labelEn : group.labelFr}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-muted-bg px-3 py-1 font-mono text-xs text-mute transition-transform hover:-translate-y-1 hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
