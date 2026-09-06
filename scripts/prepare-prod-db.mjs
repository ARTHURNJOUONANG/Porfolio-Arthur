import { spawnSync } from "node:child_process";

const shouldPrepare = Boolean(
  process.env.VERCEL || process.env.RAILWAY_ENVIRONMENT || process.env.RAILWAY_PROJECT_ID,
);

if (!shouldPrepare) {
  process.exit(0);
}

const run = (command, args) => {
  const result = spawnSync(command, args, { stdio: "inherit", shell: true });
  if (result.status) process.exit(result.status);
};

run("npx", ["prisma", "db", "push", "--skip-generate"]);
run("npx", ["tsx", "prisma/seed.ts"]);
