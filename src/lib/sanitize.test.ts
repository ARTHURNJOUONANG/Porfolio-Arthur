import { describe, expect, it } from "vitest";
import { sanitizeMessage } from "./sanitize";

describe("sanitizeMessage", () => {
  it("strips angle brackets", () => {
    const clean = sanitizeMessage({
      name: "<script>Arthur</script>",
      email: "arthur@example.com",
      subject: "Hello",
      message: "Bonjour <b>équipe</b>",
    });
    expect(clean.name).not.toContain("<");
    expect(clean.body).not.toContain(">");
  });
});
