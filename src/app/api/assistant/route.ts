import { NextResponse } from "next/server";
import { answerQuestion } from "@/lib/assistant";
import { defaultLocale, isLocale } from "@/i18n/config";
import { prisma } from "@/lib/prisma";
import { clientKey, rateLimit } from "@/lib/rate-limit";
import { parseJson } from "@/lib/utils";
import { assistantSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const limited = rateLimit(clientKey(request.headers, "assistant"), 20, 60_000);
  if (!limited.ok) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const parsed = assistantSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const locale = isLocale(parsed.data.locale) ? parsed.data.locale : defaultLocale;
  const [projects, experiences, skills] = await Promise.all([
    prisma.project.findMany({ where: { published: true }, orderBy: { sortOrder: "asc" } }).catch(() => []),
    prisma.experience.findMany({ orderBy: { sortOrder: "asc" } }).catch(() => []),
    prisma.skill.findMany().catch(() => []),
  ]);

  const knowledge = {
    projects: projects.map((project) => ({
      slug: project.slug,
      title: locale === "en" ? project.titleEn : project.titleFr,
      excerpt: locale === "en" ? project.excerptEn : project.excerptFr,
      stack: parseJson<{ name: string }[]>(project.techStack, []).map((item) => item.name),
    })),
    skills: skills.map((skill) => skill.name),
    experiences: experiences.map((item) => ({
      title: locale === "en" ? item.titleEn : item.titleFr,
      company: item.company,
    })),
  };

  return NextResponse.json({
    answer: answerQuestion(parsed.data.question, locale, knowledge),
  });
}
