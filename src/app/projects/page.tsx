import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "@/lib/locale";
import { getProjects } from "@/lib/queries";

export const metadata: Metadata = { title: "Projets" };

export default async function ProjectsPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const projects = await getProjects(locale);

  return (
    <SiteShell dict={dict} locale={locale}>
      <Container className="pt-32 pb-20">
        <SectionHeading kicker={dict.projects.kicker} title={dict.projects.title} subtitle={dict.projects.subtitle} />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} dict={dict} index={index} />
          ))}
        </div>
      </Container>
    </SiteShell>
  );
}
