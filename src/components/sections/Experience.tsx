import type { Dictionary } from "@/i18n/dictionaries";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

type Item = {
  id: string;
  title: string;
  company: string;
  period: string;
  year: number;
  missions: string[];
  technologies: string[];
  results: string[];
};

export function Experience({ dict, items }: { dict: Dictionary; items: Item[] }) {
  return (
    <section id="experience" className="scroll-mt-24 py-20">
      <Container>
        <SectionHeading
          kicker={dict.experience.kicker}
          title={dict.experience.title}
          subtitle={dict.experience.subtitle}
        />
        <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-10">
          {items.map((item) => (
            <li key={item.id} className="relative">
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-accent sm:-left-[47px]" />
              <p className="font-mono text-xs text-accent">{item.year}</p>
              <h3 className="display mt-2 text-2xl">{item.title}</h3>
              <p className="text-mute">
                {item.company} · {item.period}
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-wider text-mute">{dict.experience.missions}</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {item.missions.map((mission) => (
                      <li key={mission}>{mission}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-mute">{dict.experience.stack}</p>
                  <p className="mt-2 font-mono text-xs text-accent">{item.technologies.join(" · ")}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-mute">{dict.experience.results}</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {item.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
