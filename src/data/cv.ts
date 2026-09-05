export const profile = {
  roleFr: "Développeur Full Stack",
  roleEn: "Full Stack Developer",
  stackLine: "JavaScript · Java · Python · React · Next.js · Node.js · PostgreSQL · Docker",
  phone: "+33 7 73 50 75 62",
  location: "Île-de-France",
  availabilityFr: "Alternance 12 mois · Disponible sept. 2026 · 3 sem. entreprise / 1 sem. école",
  availabilityEn: "12-month apprenticeship · Available Sept. 2026 · 3 weeks company / 1 week school",
  summaryFr:
    "Développeur Full Stack Bac+5 (Hexagon) avec une solide maîtrise de JavaScript/TypeScript, Java (notions EE), Python et des bases de données relationnelles (PostgreSQL, MySQL). Curieux, autonome et force de proposition, j'ai une appétence naturelle pour l'innovation et l'IA appliquée (Claude API, GitHub Copilot). Habitué au travail en équipe transverse et aux contextes agiles. Je cherche à expérimenter et concevoir des solutions innovantes au sein d'un Lab.",
  summaryEn:
    "Bac+5 Full Stack developer (Hexagon) with a solid command of JavaScript/TypeScript, Java (EE notions), Python and relational databases (PostgreSQL, MySQL). Curious, autonomous and proactive, with a real appetite for applied AI (Claude API, GitHub Copilot). Used to cross-functional teams and agile contexts. Looking to design innovative solutions inside a Lab.",
};

export const cvExperiences = [
  {
    titleFr: "Développeur Full Stack",
    titleEn: "Full Stack Developer",
    company: "Fracktal Group",
    period: "Janv. – Juin 2025",
    year: 2025,
    missionsFr: [
      "Développement JavaScript/TypeScript (React/Next.js, Node.js/Koa) en Agile Scrum, de la spécification à la production",
      "Conception et évolution de solutions innovantes en lien avec les besoins métier ; échanges réguliers avec les utilisateurs finaux",
      "CI/CD GitLab, pull requests, revues de code, amélioration continue de l'architecture",
      "AI-assisted development : GitHub Copilot + Python — gain estimé 30 % sur les tâches répétitives",
    ],
    missionsEn: [
      "JavaScript/TypeScript development (React/Next.js, Node.js/Koa) in Agile Scrum, from spec to production",
      "Designed and evolved product solutions with regular feedback from end users",
      "GitLab CI/CD, pull requests, code reviews, continuous architecture improvement",
      "AI-assisted development with GitHub Copilot + Python — about 30% faster on repetitive tasks",
    ],
    technologies: ["React", "Next.js", "Node.js", "Koa", "TypeScript", "Python", "GitLab CI/CD", "GitHub Copilot"],
    resultsFr: ["Livraison en production dans un cadre Scrum", "Accélération des tâches répétitives grâce à l'IA"],
    resultsEn: ["Shipped to production in a Scrum setup", "Faster repetitive work through AI-assisted development"],
    sortOrder: 1,
  },
  {
    titleFr: "Stagiaire Développeur Full Stack",
    titleEn: "Full Stack Developer Intern",
    company: "Digital House International",
    period: "Janv. – Août 2024",
    year: 2024,
    missionsFr: [
      "APIs REST sécurisées (JWT/HTTPS), interfaces dynamiques, tests unitaires et e2e",
      "Bases relationnelles PostgreSQL / MySQL",
      "Autonomie rapide : correction d'anomalies, support utilisateurs, documentation technique",
    ],
    missionsEn: [
      "Secured REST APIs (JWT/HTTPS), dynamic interfaces, unit and e2e tests",
      "Relational databases: PostgreSQL / MySQL",
      "Quick autonomy: bug fixes, user support, technical documentation",
    ],
    technologies: ["REST", "JWT", "PostgreSQL", "MySQL", "Tests unitaires", "E2E"],
    resultsFr: ["Montée en autonomie sur un poste fullstack réel"],
    resultsEn: ["Reached autonomy on a real fullstack role"],
    sortOrder: 2,
  },
  {
    titleFr: "Chef de Projet & Développeur Full Stack",
    titleEn: "Project Lead & Full Stack Developer",
    company: "Hackathon 2026",
    period: "2026",
    year: 2026,
    missionsFr: [
      "Projet pilote Node.js / React / MySQL conçu et déployé en 48h",
      "GitHub Actions CI/CD et expérimentation Claude / ChatGPT",
    ],
    missionsEn: [
      "Pilot Node.js / React / MySQL project designed and deployed in 48 hours",
      "GitHub Actions CI/CD and Claude / ChatGPT experimentation",
    ],
    technologies: ["Node.js", "React", "MySQL", "GitHub Actions", "Claude API"],
    resultsFr: ["Prototype déployé en 48 heures"],
    resultsEn: ["Prototype shipped in 48 hours"],
    sortOrder: 3,
  },
] as const;

export const cvEducation = [
  {
    titleFr: "Master Développement Logiciel — Bac+5",
    titleEn: "Master's in Software Development — Bac+5",
    school: "Hexagon",
    period: "2025 – 2027",
    detailFr: "Architecture logicielle, Full Stack, DevOps, IA générative. Rythme 3 sem. entreprise / 1 sem. école.",
    detailEn: "Software architecture, fullstack, DevOps, generative AI. 3 weeks company / 1 week school.",
    sortOrder: 1,
  },
  {
    titleFr: "Licence Génie Logiciel — Bac+3",
    titleEn: "Bachelor's in Software Engineering — Bac+3",
    school: "Keyce Academy",
    period: "2024 – 2025",
    detailFr: "Web & mobile, Python, SQL, POO.",
    detailEn: "Web & mobile, Python, SQL, OOP.",
    sortOrder: 2,
  },
] as const;

export const cvProjects = [
  {
    title: "CareerAI",
    href: "https://www.careerai.live",
    github: "https://github.com/ARTHURNJOUONANG/Projet_Chat_board",
    stack: "Next.js · React · Supabase · Groq · Docker",
    bodyFr: "Plateforme IA de carrière en production : assistant, CV, lettres et suivi des candidatures.",
    bodyEn: "AI career platform in production: assistant, resumes, cover letters and application tracking.",
  },
  {
    title: "Solocal CRM",
    href: "https://crm-ai-wine.vercel.app",
    github: "https://github.com/ARTHURNJOUONANG/crm-ai",
    stack: "React · FastAPI · SQLAlchemy · Claude API",
    bodyFr: "CRM en production avec lead scoring IA : priorités Hot/Warm/Cold, recommandations et suivi des interactions.",
    bodyEn: "Production CRM with AI lead scoring: Hot/Warm/Cold priorities, recommendations and interaction follow-up.",
  },
  {
    title: "Compta Pilot",
    href: "https://compta-pilot.vercel.app",
    github: "https://github.com/ARTHURNJOUONANG/compta-pilot-",
    stack: "Next.js · Prisma · SQLite · OCR · Docker",
    bodyFr: "Plateforme de gestion pour cabinets comptables : clients, tâches, OCR factures et notifications.",
    bodyEn: "Practice-management platform for accounting firms: clients, tasks, invoice OCR and notifications.",
  },
  {
    title: "LifeOS",
    href: "https://life-osplatform.vercel.app",
    stack: "React · Next.js · Node.js · PostgreSQL",
    bodyFr: "Plateforme full stack en production, conçue comme un produit utilisable au quotidien.",
    bodyEn: "Fullstack production platform, built as a product people can actually use.",
  },
  {
    title: "Protech Occitanie",
    href: "https://github.com/ARTHURNJOUONANG/Protech-occitanie",
    github: "https://github.com/ARTHURNJOUONANG/Protech-occitanie",
    stack: "Flutter · Dart · Node.js · Express · SQLite",
    bodyFr: "Réseau mobile tech en Occitanie : annuaire, besoins numériques, messagerie et événements.",
    bodyEn: "Occitanie tech network on mobile: directory, digital needs, messaging and events.",
  },
  {
    title: "SymfoConnect",
    href: "https://github.com/ARTHURNJOUONANG/Symfoconnect",
    github: "https://github.com/ARTHURNJOUONANG/Symfoconnect",
    stack: "Symfony · Twig · Doctrine · API Platform",
    bodyFr: "Réseau social Symfony : feed, posts, likes, messagerie privée et API REST.",
    bodyEn: "Symfony social network: feed, posts, likes, private messaging and REST API.",
  },
  {
    title: "Treevas Agents",
    href: "https://github.com/ARTHURNJOUONANG/Treevas-agents",
    github: "https://github.com/ARTHURNJOUONANG/Treevas-agents",
    stack: "FastAPI · LangChain · Groq · ElevenLabs",
    bodyFr: "Agents IA TreevasGroup : Livia (sommeil / QAI) et Evans (sport), avec routeur, mémoire et voix.",
    bodyEn: "TreevasGroup AI agents: Livia (sleep / IAQ) and Evans (sport), with routing, memory and voice.",
  },
] as const;

export const cvSkillLines = [
  { labelFr: "Langages", labelEn: "Languages", items: "JavaScript ES6+, TypeScript, Python, Java EE (notions), PHP 8.x" },
  { labelFr: "Frontend", labelEn: "Frontend", items: "React.js, Next.js, MUI, Vue.js (notions)" },
  { labelFr: "Backend", labelEn: "Backend", items: "Node.js (Koa/Express), GraphQL, Prisma, TypeORM, Symfony" },
  { labelFr: "Bases de données", labelEn: "Databases", items: "PostgreSQL, MySQL, SQL avancé, ORM Doctrine, NoSQL (notions)" },
  { labelFr: "IA & innovation", labelEn: "AI & innovation", items: "Claude API, Groq, LangChain, ElevenLabs, GitHub Copilot, Claude Code, ChatGPT, Prompt Engineering, LLM" },
  { labelFr: "DevOps / Cloud", labelEn: "DevOps / Cloud", items: "Docker, Azure, GitHub Actions, GitLab CI/CD, Git, code reviews" },
  { labelFr: "Tests & qualité", labelEn: "Tests & quality", items: "Tests unitaires, end-to-end, Agile Scrum, Jira" },
  { labelFr: "Langues", labelEn: "Spoken languages", items: "Français natif · Anglais B2/C1 professionnel" },
] as const;
