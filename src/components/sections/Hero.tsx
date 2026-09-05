import type { Dictionary } from "@/i18n/dictionaries";
import { Container } from "../ui/Container";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative pt-24 pb-2 sm:pt-28">
      <Container className="relative z-10 text-center">
        <h1 className="display name-shimmer text-4xl leading-[0.95] sm:text-6xl">{dict.hero.name}</h1>
        <p className="rise mt-4 text-accent sm:text-lg" style={{ animationDelay: "120ms" }}>
          {dict.hero.title}
        </p>
        <div className="hairline rise mx-auto mt-8 w-40" style={{ animationDelay: "220ms" }} />
      </Container>
    </section>
  );
}
