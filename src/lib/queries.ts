import { prisma } from "./prisma";
import { parseJson } from "./utils";
import { skillGroups } from "@/data/content";
import type { Locale } from "@/i18n/config";

export type ProjectCard = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string | null;
  demoUrl: string | null;
  githubUrl: string | null;
  stack: { name: string; role?: string }[];
  featured: boolean;
};

export type ProjectDetail = ProjectCard & {
  problem: string;
  context: string;
  features: string[];
  architecture: string[];
  challenges: string;
  solutions: string;
  result: string;
  docsUrl: string | null;
};

function localized<T extends { titleFr: string; titleEn: string }>(
  item: T,
  locale: Locale,
) {
  return locale === "en" ? item.titleEn : item.titleFr;
}

export async function getProjects(locale: Locale): Promise<ProjectCard[]> {
  const rows = await prisma.project.findMany({
    where: { published: true },
    orderBy: { sortOrder: "asc" },
  }).catch(() => []);

  return rows.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: locale === "en" ? p.titleEn : p.titleFr,
    excerpt: locale === "en" ? p.excerptEn : p.excerptFr,
    image: p.image,
    demoUrl: p.demoUrl,
    githubUrl: p.githubUrl,
    stack: parseJson<{ name: string; role?: string }[]>(p.techStack, []),
    featured: p.featured,
  }));
}

export async function incrementProjectViews(slug: string) {
  await prisma.project
    .update({
      where: { slug },
      data: { views: { increment: 1 } },
    })
    .catch(() => undefined);
}

export async function getProject(slug: string, locale: Locale): Promise<ProjectDetail | null> {
  const p = await prisma.project.findUnique({ where: { slug } }).catch(() => null);
  if (!p || !p.published) return null;

  return {
    id: p.id,
    slug: p.slug,
    title: locale === "en" ? p.titleEn : p.titleFr,
    excerpt: locale === "en" ? p.excerptEn : p.excerptFr,
    image: p.image,
    demoUrl: p.demoUrl,
    githubUrl: p.githubUrl,
    docsUrl: p.docsUrl,
    stack: parseJson(p.techStack, []),
    featured: p.featured,
    problem: locale === "en" ? p.problemEn : p.problemFr,
    context: locale === "en" ? p.contextEn : p.contextFr,
    features: parseJson(locale === "en" ? p.featuresEn : p.featuresFr, []),
    architecture: parseJson(p.architecture, []),
    challenges: locale === "en" ? p.challengesEn : p.challengesFr,
    solutions: locale === "en" ? p.solutionsEn : p.solutionsFr,
    result: locale === "en" ? p.resultEn : p.resultFr,
  };
}

export async function getExperiences(locale: Locale) {
  const rows = await prisma.experience.findMany({ orderBy: { sortOrder: "asc" } }).catch(() => []);
  return rows.map((e) => ({
    id: e.id,
    title: localized(e, locale),
    company: e.company,
    period: e.period,
    year: e.year,
    missions: parseJson<string[]>(locale === "en" ? e.missionsEn : e.missionsFr, []),
    technologies: parseJson<string[]>(e.technologies, []),
    results: parseJson<string[]>(locale === "en" ? e.resultsEn : e.resultsFr, []),
  }));
}

export async function getEducation(locale: Locale) {
  const rows = await prisma.education.findMany({ orderBy: { sortOrder: "asc" } }).catch(() => []);
  return rows.map((e) => ({
    id: e.id,
    title: localized(e, locale),
    school: e.school,
    period: e.period,
    detail: locale === "en" ? e.detailEn : e.detailFr,
  }));
}

export async function getSkills() {
  return skillGroups.map((group) => ({
    ...group,
    featured: "featured" in group ? Boolean(group.featured) : false,
    items: [...group.items],
  }));
}

export async function getSetting(key: string, fallback = "") {
  const row = await prisma.setting.findUnique({ where: { key } }).catch(() => null);
  return row?.value ?? fallback;
}
