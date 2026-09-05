import { describe, expect, it } from "vitest";
import { rateLimit } from "./rate-limit";

describe("rateLimit", () => {
  it("allows requests under the limit", () => {
    const key = `test-${Date.now()}`;
    expect(rateLimit(key, 2, 10_000).ok).toBe(true);
    expect(rateLimit(key, 2, 10_000).ok).toBe(true);
    expect(rateLimit(key, 2, 10_000).ok).toBe(false);
  });
});
