import type { Dictionary } from "@/i18n/dictionaries";
import { social } from "@/data/content";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

type Stats = {
  publicRepos: number;
  languages: string[];
};

export function Github({ dict, stats }: { dict: Dictionary; stats: Stats }) {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading kicker={dict.github.kicker} title={dict.github.title} subtitle={dict.github.subtitle} />
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-line bg-card p-6">
            <p className="text-sm text-mute">{dict.github.repos}</p>
            <p className="display mt-3 text-5xl">{stats.publicRepos}</p>
          </article>
          <article className="rounded-2xl border border-line bg-card p-6">
            <p className="text-sm text-mute">{dict.github.languages}</p>
            <p className="mt-4 font-mono text-sm text-accent">{stats.languages.join(" · ")}</p>
          </article>
        </div>
        <div className="mt-8">
          <Button href={social.github} variant="line">
            {dict.github.cta} →
          </Button>
        </div>
      </Container>
    </section>
  );
}
