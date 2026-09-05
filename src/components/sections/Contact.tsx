import type { Dictionary } from "@/i18n/dictionaries";
import { SocialLinks } from "../layout/SocialLinks";
import { Reveal } from "../motion/Reveal";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ContactForm } from "./ContactForm";

export function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" className="scroll-mt-28 py-16 pb-24">
      <Container>
        <Reveal>
          <div className="grid gap-12 rounded-3xl border border-line bg-card/70 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeading kicker={dict.contact.kicker} title={dict.contact.title} subtitle={dict.contact.subtitle} />
              <SocialLinks className="mt-2 justify-center lg:justify-start" />
            </div>
            <ContactForm dict={dict} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
