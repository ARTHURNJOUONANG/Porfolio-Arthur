import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  subject: z.string().trim().min(3).max(120),
  message: z.string().trim().min(10).max(4000),
  website: z.string().max(0).optional().or(z.literal("")),
});

export const projectSchema = z.object({
  slug: z
    .string()
    .trim()
    .min(2)
    .max(80)
    .regex(/^[a-z0-9-]+$/),
  titleFr: z.string().trim().min(2).max(120),
  titleEn: z.string().trim().min(2).max(120),
  excerptFr: z.string().trim().min(10).max(400),
  excerptEn: z.string().trim().min(10).max(400),
  problemFr: z.string().trim().min(10),
  problemEn: z.string().trim().min(10),
  contextFr: z.string().trim().min(10),
  contextEn: z.string().trim().min(10),
  featuresFr: z.string().trim().min(2),
  featuresEn: z.string().trim().min(2),
  architecture: z.string().trim().min(2),
  techStack: z.string().trim().min(2),
  challengesFr: z.string().trim().min(10),
  challengesEn: z.string().trim().min(10),
  solutionsFr: z.string().trim().min(10),
  solutionsEn: z.string().trim().min(10),
  resultFr: z.string().trim().min(10),
  resultEn: z.string().trim().min(10),
  image: z.string().optional().nullable(),
  demoUrl: z.string().url().optional().or(z.literal("")).nullable(),
  githubUrl: z.string().url().optional().or(z.literal("")).nullable(),
  docsUrl: z.string().url().optional().or(z.literal("")).nullable(),
  featured: z.boolean().optional(),
  published: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
});

export const experienceSchema = z.object({
  titleFr: z.string().trim().min(2),
  titleEn: z.string().trim().min(2),
  company: z.string().trim().min(2),
  period: z.string().trim().min(2),
  year: z.number().int().min(2000).max(2100),
  missionsFr: z.string().trim().min(2),
  missionsEn: z.string().trim().min(2),
  technologies: z.string().trim().min(2),
  resultsFr: z.string().trim().min(2),
  resultsEn: z.string().trim().min(2),
  sortOrder: z.number().int().optional(),
});

export const skillSchema = z.object({
  category: z.string().trim().min(2),
  name: z.string().trim().min(1),
  sortOrder: z.number().int().optional(),
});

export const assistantSchema = z.object({
  question: z.string().trim().min(2).max(400),
  locale: z.enum(["fr", "en"]).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
