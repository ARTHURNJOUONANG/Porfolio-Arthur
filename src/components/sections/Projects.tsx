import type { Dictionary } from "@/i18n/dictionaries";
import type { ProjectCard as Project } from "@/lib/queries";
import { ProjectCard } from "../project/ProjectCard";
import { Reveal } from "../motion/Reveal";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function Projects({ dict, projects }: { dict: Dictionary; projects: Project[] }) {
  return (
    <section id="projects" className="scroll-mt-28 py-16">
      <Container>
        <Reveal>
          <SectionHeading kicker={dict.projects.kicker} title={dict.projects.title} subtitle={dict.projects.subtitle} />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} dict={dict} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
