import type { Dictionary } from "@/i18n/dictionaries";
import { Container } from "../ui/Container";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative pt-24 pb-2 sm:pt-28">
      <Container className="relative z-10 text-center">
        <p className="rise mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          {dict.hero.kicker}
        </p>
        <h1 className="rise display text-4xl leading-[0.95] sm:text-6xl">{dict.hero.name}</h1>
        <p className="rise mt-4 text-accent sm:text-lg">{dict.hero.title}</p>
      </Container>
    </section>
  );
}
