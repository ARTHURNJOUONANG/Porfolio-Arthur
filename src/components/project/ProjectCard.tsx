import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { ProjectCard as ProjectCardType } from "@/lib/queries";
import { Cover } from "./Cover";

export function ProjectCard({
  project,
  dict,
  index = 0,
}: {
  project: ProjectCardType;
  dict: Dictionary;
  index?: number;
}) {
  return (
    <div className="rise" style={{ animationDelay: `${120 + index * 90}ms` }}>
    <article
      className="group float-card overflow-hidden rounded-2xl border border-line bg-card/80 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-sm"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted-bg">
          <Cover
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
          />
        </div>
      </Link>
      <div className="p-6">
        <h3 className="display text-2xl">
          <Link href={`/projects/${project.slug}`} className="hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm text-mute">{project.excerpt}</p>
        <p className="mt-4 font-mono text-xs text-accent">
          {project.stack.map((item) => item.name).join(" · ")}
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <Link href={`/projects/${project.slug}`} className="text-ink underline-offset-4 hover:underline">
            {dict.projects.view}
          </Link>
          {project.demoUrl ? (
            <a href={project.demoUrl} className="text-mute hover:text-ink" target="_blank" rel="noreferrer">
              {dict.projects.demo}
            </a>
          ) : null}
          {project.githubUrl ? (
            <a href={project.githubUrl} className="text-mute hover:text-ink" target="_blank" rel="noreferrer">
              {dict.projects.github}
            </a>
          ) : null}
        </div>
      </div>
    </article>
    </div>
  );
}
