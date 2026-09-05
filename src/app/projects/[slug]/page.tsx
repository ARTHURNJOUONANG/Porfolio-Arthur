import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { Cover } from "@/components/project/Cover";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "@/lib/locale";
import { projectGalleries } from "@/data/projectMedia";
import { getProject, getProjects, incrementProjectViews } from "@/lib/queries";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const project = await getProject(slug, locale);
  if (!project) return { title: "Projet" };
  return { title: project.title, description: project.excerpt };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const project = await getProject(slug, locale);
  if (!project) notFound();
  await incrementProjectViews(slug);

  return (
    <SiteShell dict={dict} locale={locale}>
      <Container className="pt-32 pb-20">
        <Link href="/projects" className="text-sm text-mute hover:text-ink">
          ← {dict.projects.back}
        </Link>
        <h1 className="display mt-6 text-4xl sm:text-6xl">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-mute">{project.excerpt}</p>
        {project.image ? (
          <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-2xl border border-line bg-card">
            <Cover src={project.image} alt={project.title} className="h-full w-full object-cover object-top" />
          </div>
        ) : null}
        {projectGalleries[project.slug] ? (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {projectGalleries[project.slug].map((shot) => (
              <figure key={shot.src} className="overflow-hidden rounded-2xl border border-line bg-card">
                <Cover src={shot.src} alt={locale === "en" ? shot.labelEn : shot.labelFr} className="h-auto w-full" />
                <figcaption className="px-3 py-2 text-center font-mono text-[11px] text-mute">
                  {locale === "en" ? shot.labelEn : shot.labelFr}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : null}

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <Block title={dict.projects.problem} body={project.problem} />
            <Block title={dict.projects.context} body={project.context} />
            <section>
              <h2 className="display text-2xl">{dict.projects.features}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-mute">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="display text-2xl">{dict.projects.architecture}</h2>
              <ol className="mt-6 space-y-2">
                {project.architecture.map((layer, index) => (
                  <li key={layer} className="rounded-xl border border-line bg-card px-4 py-3">
                    <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-1">{layer}</p>
                  </li>
                ))}
              </ol>
            </section>
            <Block title={dict.projects.challenges} body={project.challenges} />
            <Block title={dict.projects.solutions} body={project.solutions} />
            <Block title={dict.projects.result} body={project.result} />
          </div>
          <aside className="space-y-6">
            <section className="rounded-2xl border border-line bg-card p-6">
              <h2 className="display text-xl">{dict.projects.stack}</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {project.stack.map((tech) => (
                  <li key={tech.name}>
                    <p className="text-ink">{tech.name}</p>
                    {tech.role ? <p className="text-mute">{tech.role}</p> : null}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-2xl border border-line bg-card p-6">
              <h2 className="display text-xl">{dict.projects.links}</h2>
              <div className="mt-4 flex flex-col gap-3">
                {project.demoUrl ? <Button href={project.demoUrl}>{dict.projects.demo}</Button> : null}
                {project.githubUrl ? (
                  <Button href={project.githubUrl} variant="line">
                    {dict.projects.github}
                  </Button>
                ) : null}
                {project.docsUrl ? (
                  <Button href={project.docsUrl} variant="ghost">
                    {dict.projects.docs}
                  </Button>
                ) : null}
              </div>
            </section>
          </aside>
        </div>
      </Container>
    </SiteShell>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="display text-2xl">{title}</h2>
      <p className="mt-4 text-mute">{body}</p>
    </section>
  );
}

export async function generateStaticParams() {
  try {
    const projects = await getProjects("fr");
    return projects.map((project) => ({ slug: project.slug }));
  } catch {
    return [];
  }
}
