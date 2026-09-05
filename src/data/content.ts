export const skillGroups = [
  {
    id: "backend",
    rank: "01",
    labelFr: "Langages & backend",
    labelEn: "Languages & backend",
    featured: true,
    items: [
      "JavaScript ES6+",
      "TypeScript",
      "Python",
      "Java EE",
      "PHP 8",
      "Node.js",
      "Koa",
      "Express",
      "GraphQL",
      "Symfony",
    ],
  },
  {
    id: "frontend",
    rank: "02",
    labelFr: "Frontend",
    labelEn: "Frontend",
    items: ["React.js", "Next.js", "MUI", "Vue.js", "TypeScript", "Flutter", "Dart"],
  },
  {
    id: "ia",
    rank: "03",
    labelFr: "IA & innovation",
    labelEn: "AI & innovation",
    featured: true,
    items: ["Claude API", "Groq", "LangChain", "ElevenLabs", "GitHub Copilot", "Claude Code", "ChatGPT", "Prompt Engineering", "LLM"],
  },
  {
    id: "database",
    rank: "04",
    labelFr: "Données",
    labelEn: "Data",
    items: ["PostgreSQL", "MySQL", "SQL avancé", "Prisma", "TypeORM", "Doctrine"],
  },
  {
    id: "delivery",
    rank: "05",
    labelFr: "DevOps & qualité",
    labelEn: "DevOps & quality",
    items: ["Docker", "Azure", "GitHub Actions", "GitLab CI/CD", "Git", "Tests unitaires", "E2E", "Jira", "Agile Scrum"],
  },
  {
    id: "languages",
    rank: "06",
    labelFr: "Langues",
    labelEn: "Languages",
    items: ["Français — natif", "Anglais — B2 / C1 professionnel"],
  },
] as const;

export const services = [
  {
    id: "api",
    titleFr: "Backend & API",
    titleEn: "Backend & APIs",
    bodyFr: "API REST sécurisées (JWT/HTTPS), Node.js (Koa/Express), GraphQL, Java et Symfony.",
    bodyEn: "Secured REST APIs (JWT/HTTPS), Node.js (Koa/Express), GraphQL, Java and Symfony.",
  },
  {
    id: "web",
    titleFr: "Applications web & mobile",
    titleEn: "Web & mobile applications",
    bodyFr: "Interfaces dynamiques avec React, Next.js, MUI, Vue, Flutter et Dart.",
    bodyEn: "Dynamic interfaces with React, Next.js, MUI, Vue, Flutter and Dart.",
  },
  {
    id: "ia",
    titleFr: "IA dans le produit",
    titleEn: "AI in the product",
    bodyFr: "Claude API, Copilot et prompt engineering intégrés dans un vrai parcours, pas en démo isolée.",
    bodyEn: "Claude API, Copilot and prompt engineering inside a real user flow — not a standalone demo.",
  },
  {
    id: "db",
    titleFr: "Données",
    titleEn: "Data",
    bodyFr: "PostgreSQL, MySQL, SQL avancé, Prisma, TypeORM et Doctrine.",
    bodyEn: "PostgreSQL, MySQL, advanced SQL, Prisma, TypeORM and Doctrine.",
  },
  {
    id: "architecture",
    titleFr: "Architecture & livraison",
    titleEn: "Architecture & delivery",
    bodyFr: "De l'étude jusqu'au déploiement : Docker, CI/CD, tests et mise en production.",
    bodyEn: "From design to release: Docker, CI/CD, tests and production delivery.",
  },
] as const;

export const methodSteps = [
  { n: "01", titleFr: "Comprendre", titleEn: "Understand", bodyFr: "Clarifier le besoin, les utilisateurs et les contraintes.", bodyEn: "Clarify the need, users and constraints." },
  { n: "02", titleFr: "Concevoir", titleEn: "Design", bodyFr: "Architecture, parcours et modèle de données.", bodyEn: "Architecture, flows and data model." },
  { n: "03", titleFr: "Développer", titleEn: "Build", bodyFr: "Implémentation itérative, code clair et typé.", bodyEn: "Iterative implementation, typed and readable code." },
  { n: "04", titleFr: "Tester", titleEn: "Test", bodyFr: "Contrôler les parcours critiques avant la mise en ligne.", bodyEn: "Cover critical paths before going live." },
  { n: "05", titleFr: "Déployer", titleEn: "Deploy", bodyFr: "Mise en production, monitoring et CI/CD.", bodyEn: "Production release, monitoring and CI/CD." },
  { n: "06", titleFr: "Maintenir", titleEn: "Maintain", bodyFr: "Évolutions, correctifs et amélioration continue.", bodyEn: "Iterations, fixes and continuous improvement." },
] as const;

export const proofs = [
  { href: "https://www.careerai.live", label: "CareerAI" },
  { href: "https://crm-ai-wine.vercel.app", label: "Solocal CRM" },
  { href: "https://compta-pilot.vercel.app", label: "Compta Pilot" },
  { href: "https://life-osplatform.vercel.app", label: "LifeOS" },
  { href: "https://github.com/ARTHURNJOUONANG/Protech-occitanie", label: "Protech Occitanie" },
  { href: "https://github.com/ARTHURNJOUONANG/Symfoconnect", label: "SymfoConnect" },
  { href: "https://github.com/ARTHURNJOUONANG/Treevas-agents", label: "Treevas Agents" },
] as const;

function whatsappLink(phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "33773507562") {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";
  const text = encodeURIComponent("Bonjour Arthur, je vous contacte depuis votre portfolio.");
  return `https://wa.me/${digits}?text=${text}`;
}

export const social = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/ARTHURNJOUONANG",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/arthur-njouonang-278b89307",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "arthurnjouonang5@gmail.com",
  whatsapp: whatsappLink(),
};
