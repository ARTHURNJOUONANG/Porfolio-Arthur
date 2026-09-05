import type { Dictionary } from "@/i18n/dictionaries";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutPreview({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionHeading kicker={dict.aboutPreview.kicker} title={dict.aboutPreview.title} />
          <div>
            <p className="text-lg text-mute">{dict.aboutPreview.body}</p>
            <div className="mt-6">
              <Button href="/about" variant="line">
                {dict.aboutPreview.more} →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
