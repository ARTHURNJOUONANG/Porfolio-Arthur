import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { PrintButton } from "@/components/cv/PrintButton";
import { Container } from "@/components/ui/Container";
import { Portrait } from "@/components/ui/Portrait";
import { social } from "@/data/content";
import { cvEducation, cvExperiences, cvProjects, cvSkillLines, profile } from "@/data/cv";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = { title: "CV" };

export default async function CvPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const en = locale === "en";

  return (
    <SiteShell dict={dict} locale={locale}>
      <Container className="pt-32 pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4 print:hidden">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">{dict.nav.cv}</p>
            <h1 className="display mt-3 text-4xl sm:text-6xl">{dict.cv.title}</h1>
            <p className="mt-3 text-mute">{dict.cv.available}</p>
          </div>
          <PrintButton label={dict.cv.download} />
        </div>

        <article className="cv-sheet mt-10 overflow-hidden rounded-2xl border border-line bg-card print:overflow-visible print:rounded-none print:border-0">
          <header className="grid gap-8 border-b border-line p-6 sm:p-10 lg:grid-cols-[auto_1fr] lg:items-start">
            <Portrait size="md" />
            <div className="min-w-0">
              <h2 className="display text-3xl sm:text-5xl">Arthur Njouonang</h2>
              <p className="mt-2 text-lg text-accent">{en ? profile.roleEn : profile.roleFr}</p>
              <p className="mt-2 max-w-2xl text-sm text-mute">{profile.stackLine}</p>
              <p className="mt-4 inline-flex rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                {en ? profile.availabilityEn : profile.availabilityFr}
              </p>
              <p className="mt-3 text-sm text-mute">
                {profile.location}
                <span className="mx-2 text-mute">·</span>
                <a href={social.whatsapp} className="hover:text-accent">
                  {profile.phone}
                </a>
              </p>
              <div className="mt-5">
                <SocialLinks className="justify-start" />
              </div>
            </div>
          </header>

          <div className="space-y-10 p-6 sm:p-10">
            <section>
              <h3 className="cv-section">{dict.cv.profile}</h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-mute">
                {en ? profile.summaryEn : profile.summaryFr}
              </p>
            </section>

            <section>
              <h3 className="cv-section">{dict.experience.title}</h3>
              <ol className="mt-6 space-y-8">
                {cvExperiences.map((item) => (
                  <li key={`${item.company}-${item.period}`} className="cv-entry">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <h4 className="display text-xl">
                        {en ? item.titleEn : item.titleFr}
                        <span className="text-accent"> · {item.company}</span>
                      </h4>
                      <p className="shrink-0 font-mono text-xs text-accent">{item.period}</p>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-mute">
                      {(en ? item.missionsEn : item.missionsFr).map((mission) => (
                        <li key={mission} className="flex gap-2">
                          <span aria-hidden className="text-accent">
                            ▸
                          </span>
                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 font-mono text-[11px] tracking-wide text-mute">
                      {item.technologies.join(" · ")}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h3 className="cv-section">{dict.cv.production}</h3>
              <ul className="mt-6 space-y-6">
                {cvProjects.map((project) => (
                  <li key={project.title} className="cv-entry">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <h4 className="display text-xl">{project.title}</h4>
                      <div className="flex shrink-0 flex-wrap gap-3 font-mono text-xs">
                        <a href={project.href} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                          {project.href.replace(/^https?:\/\//, "")}
                        </a>
                        {"github" in project && project.github ? (
                          <a href={project.github} target="_blank" rel="noreferrer" className="text-mute hover:text-accent">
                            GitHub
                          </a>
                        ) : null}
                      </div>
                    </div>
                    <p className="mt-1 font-mono text-[11px] text-mute">{project.stack}</p>
                    <p className="mt-2 text-sm text-mute">{en ? project.bodyEn : project.bodyFr}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="cv-section">{dict.cv.skills}</h3>
              <dl className="mt-6 divide-y divide-line">
                {cvSkillLines.map((line) => (
                  <div key={line.labelFr} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-6">
                    <dt className="text-sm font-medium text-ink">{en ? line.labelEn : line.labelFr}</dt>
                    <dd className="text-sm text-mute">{line.items}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section>
              <h3 className="cv-section">{dict.cv.education}</h3>
              <ul className="mt-6 space-y-5">
                {cvEducation.map((item) => (
                  <li key={item.titleFr} className="cv-entry">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <h4 className="display text-xl">{en ? item.titleEn : item.titleFr}</h4>
                      <p className="shrink-0 font-mono text-xs text-accent">{item.period}</p>
                    </div>
                    <p className="mt-1 text-sm text-ink">{item.school}</p>
                    <p className="mt-2 text-sm text-mute">{en ? item.detailEn : item.detailFr}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </Container>
    </SiteShell>
  );
}
