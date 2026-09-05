import { describe, expect, it } from "vitest";
import { assistantSchema, contactSchema } from "./validations";

describe("contactSchema", () => {
  it("accepts a valid payload", () => {
    const result = contactSchema.safeParse({
      name: "Marie Dupont",
      email: "marie@example.com",
      subject: "Mission fullstack",
      message: "Bonjour Arthur, pouvons-nous échanger sur un projet ?",
      website: "",
    });
    expect(result.success).toBe(true);
  });

  it("rejects a short message", () => {
    const result = contactSchema.safeParse({
      name: "Marie",
      email: "marie@example.com",
      subject: "Hi",
      message: "Trop court",
    });
    expect(result.success).toBe(false);
  });
});

describe("assistantSchema", () => {
  it("accepts a question", () => {
    const result = assistantSchema.safeParse({ question: "Quels projets ?", locale: "fr" });
    expect(result.success).toBe(true);
  });
});
