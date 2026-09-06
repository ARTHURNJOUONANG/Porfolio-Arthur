import { spawnSync } from "node:child_process";

const url = process.env.DATABASE_URL ?? "";
const onHost = Boolean(
  process.env.VERCEL ||
    process.env.RAILWAY_ENVIRONMENT ||
    process.env.RAILWAY_PROJECT_ID ||
    process.env.RENDER,
);
const looksReal =
  url.startsWith("postgres") &&
  !url.includes("127.0.0.1:5432") &&
  !url.includes("unused:unused") &&
  !url.includes("ci:ci@");

if (!onHost || !looksReal) {
  process.exit(0);
}

const run = (command, args) => {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: true,
    env: process.env,
  });
  return result.status ?? 1;
};

if (run("npx", ["prisma", "db", "push", "--skip-generate"])) {
  console.warn("Database push skipped — pages will use the static catalog.");
  process.exit(0);
}

if (run("npx", ["tsx", "prisma/seed.ts"])) {
  console.warn("Database seed skipped — pages will use the static catalog.");
}
