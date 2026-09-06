import type { MetadataRoute } from "next";
import { featuredProjects } from "@/data/featuredProjects";
import { siteUrl } from "@/lib/utils";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteUrl();
  const staticRoutes = ["", "/about", "/projects", "/skills", "/experience", "/education", "/services", "/contact", "/cv"];

  let projects: { slug: string; updatedAt: Date }[] = [];
  try {
    projects = await prisma.project.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });
  } catch {
    projects = [];
  }

  if (!projects.length) {
    const now = new Date();
    projects = featuredProjects.map((project) => ({ slug: project.slug, updatedAt: now }));
  }

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      lastModified: project.updatedAt,
    })),
  ];
}
