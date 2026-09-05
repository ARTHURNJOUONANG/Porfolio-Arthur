import { describe, expect, it } from "vitest";
import { answerQuestion } from "./assistant";

const knowledge = {
  projects: [
    { slug: "careerai", title: "CareerAI", excerpt: "CV et opportunités", stack: ["Next.js"] },
  ],
  skills: ["React", "NestJS"],
  experiences: [{ title: "Développeur Fullstack", company: "Missions" }],
};

describe("answerQuestion", () => {
  it("answers project questions in French", () => {
    const answer = answerQuestion("Quels projets a réalisé Arthur ?", "fr", knowledge);
    expect(answer).toContain("CareerAI");
  });

  it("answers stack questions in English", () => {
    const answer = answerQuestion("What technologies does he use?", "en", knowledge);
    expect(answer).toContain("React");
  });

  it("answers AI questions in French", () => {
    const answer = answerQuestion("Il fait de l'IA ?", "fr", knowledge);
    expect(answer).toMatch(/Claude|Mistral|RAG/);
  });
});
