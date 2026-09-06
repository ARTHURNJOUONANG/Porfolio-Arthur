import { featuredProjects, type FeaturedProject } from "@/data/featuredProjects";
import { skillGroups } from "@/data/content";
import { cvEducation, cvExperiences } from "@/data/cv";
import type { Locale } from "@/i18n/config";
import { prisma } from "./prisma";
import { parseJson } from "./utils";

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

function fromCatalog(item: FeaturedProject, locale: Locale): ProjectDetail {
  const en = locale === "en";
  return {
    id: item.slug,
    slug: item.slug,
    title: en ? item.titleEn : item.titleFr,
    excerpt: en ? item.excerptEn : item.excerptFr,
    image: item.image,
    demoUrl: item.demoUrl ?? null,
    githubUrl: item.githubUrl ?? null,
    docsUrl: null,
    stack: item.techStack,
    featured: true,
    problem: en ? item.problemEn : item.problemFr,
    context: en ? item.contextEn : item.contextFr,
    features: en ? item.featuresEn : item.featuresFr,
    architecture: item.architecture,
    challenges: en ? item.challengesEn : item.challengesFr,
    solutions: en ? item.solutionsEn : item.solutionsFr,
    result: en ? item.resultEn : item.resultFr,
  };
}

export async function getProjects(locale: Locale): Promise<ProjectCard[]> {
  const rows = await prisma.project.findMany({
    where: { published: true },
    orderBy: { sortOrder: "asc" },
  }).catch(() => []);

  if (!rows.length) {
    return featuredProjects.map((item) => fromCatalog(item, locale));
  }

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
  if (!p || !p.published) {
    const fallback = featuredProjects.find((item) => item.slug === slug);
    return fallback ? fromCatalog(fallback, locale) : null;
  }

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
  const source = rows.length
    ? rows
    : cvExperiences.map((item, index) => ({
        id: `cv-experience-${index}`,
        titleFr: item.titleFr,
        titleEn: item.titleEn,
        company: item.company,
        period: item.period,
        year: item.year,
        missionsFr: JSON.stringify([...item.missionsFr]),
        missionsEn: JSON.stringify([...item.missionsEn]),
        technologies: JSON.stringify([...item.technologies]),
        resultsFr: JSON.stringify([...item.resultsFr]),
        resultsEn: JSON.stringify([...item.resultsEn]),
      }));

  return source.map((e) => ({
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
  const source = rows.length
    ? rows
    : cvEducation.map((item, index) => ({
        id: `cv-education-${index}`,
        titleFr: item.titleFr,
        titleEn: item.titleEn,
        school: item.school,
        period: item.period,
        detailFr: item.detailFr,
        detailEn: item.detailEn,
      }));

  return source.map((e) => ({
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
