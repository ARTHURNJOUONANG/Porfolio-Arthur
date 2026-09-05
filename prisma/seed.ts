import { readFileSync } from "node:fs";
import path from "node:path";
import { PrismaClient } from "@prisma/client";
import { skillGroups } from "../src/data/content";
import { cvEducation, cvExperiences } from "../src/data/cv";

try {
  const text = readFileSync(path.join(process.cwd(), ".env"), "utf8");
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (!match) continue;
    const key = match[1].trim();
    const value = match[2].trim().replace(/^"|"$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
} catch {
  // keep process env as-is
}

const prisma = new PrismaClient();

const j = (value: unknown) => JSON.stringify(value);

async function main() {
  await prisma.project.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.education.deleteMany();
  await prisma.skill.deleteMany();

  await prisma.project.createMany({
    data: [
      {
        slug: "careerai",
        titleFr: "CareerAI",
        titleEn: "CareerAI",
        excerptFr: "Un seul outil pour la recherche d'emploi : assistant IA, CV, lettres et suivi des candidatures.",
        excerptEn: "One tool for job search: AI assistant, resumes, cover letters and application tracking.",
        problemFr:
          "Les candidats passent trop de temps à adapter manuellement leur CV à chaque offre, sans retour clair sur la pertinence de leur profil.",
        problemEn:
          "Candidates spend too much time manually rewriting resumes for each offer, with little signal on profile fit.",
        contextFr:
          "CareerAI est né du constat que la recherche d'emploi est fragmentée : CV, lettres, matching et suivi sont rarement réunis dans un même produit.",
        contextEn:
          "CareerAI started from a fragmented job-search experience: resume, matching and follow-up rarely live in one product.",
        featuresFr: j([
          "Génération de CV et lettres adaptés à une offre",
          "Analyse de correspondance profil / poste",
          "Tableau de bord des candidatures",
          "Authentification et espaces utilisateurs",
          "Export PDF",
        ]),
        featuresEn: j([
          "Resume and cover-letter generation tailored to a job",
          "Profile / role fit analysis",
          "Applications dashboard",
          "Authentication and user workspaces",
          "PDF export",
        ]),
        architecture: j([
          "Frontend Next.js 14 (App Router)",
          "API Routes Node.js",
          "Supabase (PostgreSQL, Auth, Storage, RLS)",
          "IA Groq (llama-3.1-8b-instant)",
          "Capacitor (mobile)",
        ]),
        techStack: j([
          { name: "Next.js", role: "Interface et App Router" },
          { name: "React", role: "UI et parcours candidat" },
          { name: "Supabase", role: "PostgreSQL, auth et storage" },
          { name: "Groq", role: "Assistant IA" },
          { name: "Docker", role: "Conteneurisation" },
        ]),
        challengesFr:
          "Concilier la qualité des contenus générés, le contrôle utilisateur et la latence des appels IA, tout en gardant un modèle de données propre.",
        challengesEn:
          "Balancing generated-content quality, user control and AI latency while keeping a clean data model.",
        solutionsFr:
          "Pipeline de génération en étapes, prompts versionnés, file d'attente pour les jobs longs, et validation stricte des payloads avant persistance.",
        solutionsEn:
          "Staged generation pipeline, versioned prompts, queued long-running jobs, and strict payload validation before persistence.",
        resultFr:
          "Un produit utilisable de bout en bout : un candidat peut créer un profil, générer un CV ciblé et suivre ses opportunités depuis un seul dashboard.",
        resultEn:
          "An end-to-end product: a candidate can create a profile, generate a targeted resume and track opportunities from one dashboard.",
        image: "/projects/careerai.png",
        demoUrl: "https://www.careerai.live",
        githubUrl: "https://github.com/ARTHURNJOUONANG/Projet_Chat_board",
        featured: true,
        sortOrder: 1,
      },
      {
        slug: "crm",
        titleFr: "Solocal CRM",
        titleEn: "Solocal CRM",
        excerptFr: "CRM avec lead scoring IA : contacts, priorités Hot/Warm/Cold et recommandations Claude.",
        excerptEn: "CRM with AI lead scoring: contacts, Hot/Warm/Cold priorities and Claude recommendations.",
        problemFr:
          "Les équipes commerciales perdent des leads : données dispersées, saisie manuelle et suivi irrégulier.",
        problemEn:
          "Sales teams lose leads: scattered data, manual entry and inconsistent follow-up.",
        contextFr:
          "Solocal CRM centralise les contacts et applique un scoring Claude à chaque nouveau prospect, avec dashboard et historique d'interactions.",
        contextEn:
          "Solocal CRM centralizes contacts and applies Claude scoring to each new lead, with a dashboard and interaction history.",
        featuresFr: j([
          "Lead scoring automatique via Claude (0–100)",
          "Priorisation Hot / Warm / Cold et recommandation d'action",
          "CRUD contacts et historique d'interactions",
          "Résumé IA des appels, emails et réunions",
          "Dashboard : totaux, sources et top leads",
        ]),
        featuresEn: j([
          "Automatic Claude lead scoring (0–100)",
          "Hot / Warm / Cold priority and next-action recommendation",
          "Contact CRUD and interaction history",
          "AI summaries for calls, emails and meetings",
          "Dashboard: totals, sources and top leads",
        ]),
        architecture: j([
          "Frontend React + Vite",
          "API FastAPI (Python)",
          "SQLAlchemy + SQLite",
          "Claude API (Anthropic) pour le scoring",
        ]),
        techStack: j([
          { name: "React", role: "Dashboard et gestion des contacts" },
          { name: "Vite", role: "Build frontend" },
          { name: "FastAPI", role: "API REST Python" },
          { name: "SQLAlchemy", role: "Modèle de données" },
          { name: "Claude API", role: "Lead scoring et recommandations" },
        ]),
        challengesFr:
          "Scorer un prospect de façon utile même si l'API Claude est indisponible, tout en gardant un CRUD simple et un dashboard lisible.",
        challengesEn:
          "Scoring a lead usefully even when Claude is unavailable, while keeping CRUD simple and the dashboard readable.",
        solutionsFr:
          "Scoring Claude avec fallback par source et poste, priorités dérivées du score, et API FastAPI découplée du frontend Vite.",
        solutionsEn:
          "Claude scoring with a source/role fallback, priorities derived from the score, and a FastAPI backend decoupled from the Vite frontend.",
        resultFr:
          "Un CRM en production : un commercial ajoute un contact, obtient un score, une priorité et une recommandation, puis suit l'historique.",
        resultEn:
          "A CRM in production: add a contact, get a score, a priority and a recommendation, then track the history.",
        image: "/projects/crm.png",
        demoUrl: "https://crm-ai-wine.vercel.app",
        githubUrl: "https://github.com/ARTHURNJOUONANG/crm-ai",
        featured: true,
        sortOrder: 2,
      },
      {
        slug: "compta-pilot",
        titleFr: "Compta Pilot",
        titleEn: "Compta Pilot",
        excerptFr: "Plateforme de gestion pour cabinets comptables : clients, tâches, OCR factures et notifications.",
        excerptEn: "Practice-management platform for accounting firms: clients, tasks, invoice OCR and notifications.",
        problemFr:
          "Les cabinets perdent du temps à suivre clients, échéances, documents et tâches entre plusieurs outils.",
        problemEn:
          "Firms lose time tracking clients, deadlines, documents and tasks across scattered tools.",
        contextFr:
          "Compta Pilot est une app Next.js en production : setup du dirigeant, équipe réelle, Prisma/SQLite, Docker et e-mails SMTP.",
        contextEn:
          "Compta Pilot is a Next.js production app: partner setup, real team, Prisma/SQLite, Docker and SMTP emails.",
        featuresFr: j([
          "Dashboard, clients, tâches et assignation",
          "Obligations automatiques et TVA portefeuille",
          "Documents + OCR (images, PDF texte, PDF scannés)",
          "Notifications in-app et e-mails SMTP",
          "Scoring collaborateurs et workflow de validation",
        ]),
        featuresEn: j([
          "Dashboard, clients, tasks and assignment",
          "Automatic obligations and portfolio VAT",
          "Documents + OCR (images, text PDFs, scanned PDFs)",
          "In-app notifications and SMTP emails",
          "Staff scoring and validation workflow",
        ]),
        architecture: j([
          "Frontend Next.js (App Router)",
          "API et sessions signées",
          "Prisma + SQLite",
          "OCR documents et SMTP",
          "Docker / Vercel",
        ]),
        techStack: j([
          { name: "Next.js", role: "Application web et API" },
          { name: "Prisma", role: "Modèle de données" },
          { name: "SQLite", role: "Persistance cabinet" },
          { name: "OCR", role: "Lecture des factures" },
          { name: "Docker", role: "Déploiement" },
        ]),
        challengesFr:
          "Couvrir un vrai flux de cabinet (équipe, documents, échéances) sans données fictives, avec session sécurisée et e-mails réels.",
        challengesEn:
          "Covering a real firm flow (team, documents, deadlines) without fake data, with signed sessions and real emails.",
        solutionsFr:
          "Setup dirigeant, gestion d'équipe, cookies HMAC, bcrypt, OCR et SMTP, déployé sur Vercel.",
        solutionsEn:
          "Partner setup, team management, HMAC cookies, bcrypt, OCR and SMTP, deployed on Vercel.",
        resultFr:
          "Un produit utilisable en production : le cabinet crée son compte, ajoute l'équipe, pilote clients et tâches.",
        resultEn:
          "A production product: the firm creates its account, adds the team, and runs clients and tasks.",
        image: "/projects/compta-pilot.png",
        demoUrl: "https://compta-pilot.vercel.app",
        githubUrl: "https://github.com/ARTHURNJOUONANG/compta-pilot-",
        featured: true,
        sortOrder: 3,
      },
      {
        slug: "protech-occitanie",
        titleFr: "Protech Occitanie",
        titleEn: "Protech Occitanie",
        excerptFr: "Réseau mobile tech en Occitanie : annuaire, besoins numériques, messagerie et événements.",
        excerptEn: "Occitanie tech network on mobile: directory, digital needs, messaging and events.",
        problemFr:
          "Les entreprises, freelances, étudiants et agences de la région n'avaient pas un même espace pour publier un besoin numérique et y répondre.",
        problemEn:
          "Companies, freelancers, students and agencies in the region had no shared space to publish a digital need and answer it.",
        contextFr:
          "M-Connect / Protech Occitanie : app Flutter Android/iOS + API Node.js/Express/SQLite, auth JWT, email de vérification et CI GitHub.",
        contextEn:
          "M-Connect / Protech Occitanie: Flutter Android/iOS app + Node.js/Express/SQLite API, JWT auth, verification email and GitHub CI.",
        featuresFr: j([
          "Connexion / inscription, CGU et mot de passe oublié",
          "Annuaire filtrable (entreprise, freelance, étudiant, agence)",
          "Besoins numériques : publier, proposer, marquer pourvu",
          "Messagerie, notifications et espace membre",
          "Rôle admin, support et événements",
        ]),
        featuresEn: j([
          "Login / signup, terms and forgot-password",
          "Filterable directory (company, freelance, student, agency)",
          "Digital needs: publish, apply, mark as filled",
          "Inbox, notifications and member home",
          "Admin role, support and events",
        ]),
        architecture: j([
          "Application mobile Flutter (Android / iOS)",
          "API REST Node.js + Express + SQLite",
          "Auth JWT, rate limiting et e-mails",
          "Docker Compose + GitHub Actions CI",
        ]),
        techStack: j([
          { name: "Flutter", role: "Application mobile Android / iOS" },
          { name: "Dart", role: "UI Material 3, charte Bleu & Blanc" },
          { name: "Node.js", role: "API Express" },
          { name: "SQLite", role: "Utilisateurs, besoins, messages" },
          { name: "Docker", role: "API conteneurisée" },
        ]),
        challengesFr:
          "Relier une app Flutter réelle à une API locale/VPS (Wi-Fi, tunnel, Play Store) tout en gardant auth, rôles et messagerie cohérents.",
        challengesEn:
          "Connecting a real Flutter app to a local/VPS API (Wi-Fi, tunnel, Play Store) while keeping auth, roles and messaging consistent.",
        solutionsFr:
          "API Express découplée, JWT, écrans Flutter (shell 5 onglets), Docker et documentation de déploiement (Play Store, iOS).",
        solutionsEn:
          "Decoupled Express API, JWT, Flutter screens (5-tab shell), Docker and deployment docs (Play Store, iOS).",
        resultFr:
          "Une app mobile simulée ici à partir du code : connexion, accueil, annuaire et besoins — le réseau Protech Occitanie.",
        resultEn:
          "A mobile app simulated here from the code: login, home, directory and needs — the Protech Occitanie network.",
        image: "/projects/protech.png",
        githubUrl: "https://github.com/ARTHURNJOUONANG/Protech-occitanie",
        featured: true,
        sortOrder: 4,
      },
      {
        slug: "symfoconnect",
        titleFr: "SymfoConnect",
        titleEn: "SymfoConnect",
        excerptFr: "Réseau social Symfony : feed, posts, likes, messagerie, profils et API Platform.",
        excerptEn: "Symfony social network: feed, posts, likes, messaging, profiles and API Platform.",
        problemFr:
          "Il manquait un socle social complet en PHP pour enchaîner auth, fil d'actualité et messages privés sur une même app.",
        problemEn:
          "There was no complete PHP social stack combining auth, a news feed and private messages in one app.",
        contextFr:
          "SymfoConnect Dark : Symfony 7.4, Twig, Stimulus, Turbo, Doctrine ORM, API Platform et Security Bundle.",
        contextEn:
          "SymfoConnect Dark: Symfony 7.4, Twig, Stimulus, Turbo, Doctrine ORM, API Platform and Security Bundle.",
        featuresFr: j([
          "Inscription, connexion et déconnexion",
          "Fil d'actualité, nouveau post et likes",
          "Messages privés entre utilisateurs",
          "Profils et notifications",
          "API REST via API Platform",
        ]),
        featuresEn: j([
          "Signup, login and logout",
          "News feed, new posts and likes",
          "Private messages between users",
          "Profiles and notifications",
          "REST API via API Platform",
        ]),
        architecture: j([
          "Symfony 7.4 + Twig / Stimulus / Turbo",
          "Doctrine ORM et migrations",
          "Security Bundle",
          "API Platform",
          "Docker Compose",
        ]),
        techStack: j([
          { name: "Symfony", role: "Framework PHP 8.2 / 7.4" },
          { name: "Twig", role: "Templates et thème Dark" },
          { name: "Doctrine", role: "Users, posts, messages" },
          { name: "API Platform", role: "API REST" },
          { name: "PHPUnit", role: "Tests" },
        ]),
        challengesFr:
          "Tenir un parcours social complet (auth, feed, likes, messages) avec un thème sombre cohérent et une API exposée.",
        challengesEn:
          "Shipping a full social journey (auth, feed, likes, messages) with a consistent dark theme and an exposed API.",
        solutionsFr:
          "Contrôleurs Symfony dédiés, entités Doctrine, Security Bundle et API Platform pour le même domaine.",
        solutionsEn:
          "Dedicated Symfony controllers, Doctrine entities, Security Bundle and API Platform on the same domain.",
        resultFr:
          "Une app sociale utilisable : Accueil, Feed, Messages, Nouveau post — le code est sur GitHub.",
        resultEn:
          "A usable social app: Home, Feed, Messages, New post — the code is on GitHub.",
        image: "/projects/symfoconnect.png",
        githubUrl: "https://github.com/ARTHURNJOUONANG/Symfoconnect",
        featured: true,
        sortOrder: 5,
      },
      {
        slug: "treevas-agents",
        titleFr: "Treevas Agents",
        titleEn: "Treevas Agents",
        excerptFr: "Agents IA TreevasGroup : Livia (sommeil / QAI) et Evans (sport), avec routeur, mémoire et voix.",
        excerptEn: "TreevasGroup AI agents: Livia (sleep / IAQ) and Evans (sport), with routing, memory and voice.",
        problemFr:
          "TreevasGroup / Sleepography avait besoin d'ambassadeurs virtuels spécialisés, sans mélanger sommeil et sport dans une seule voix.",
        problemEn:
          "TreevasGroup / Sleepography needed specialised virtual ambassadors, without mixing sleep and sport into one voice.",
        contextFr:
          "API FastAPI : Livia (sommeil, QAI, voyage) et Evans (sport, performance), au ton rassurant, pour la marque Sleepography.",
        contextEn:
          "FastAPI service: Livia (sleep, IAQ, travel) and Evans (sport, performance), reassuring tone, for the Sleepography brand.",
        featuresFr: j([
          "Routeur LIVIA / EVANS selon le sujet",
          "Chat texte POST /chat avec Groq Llama 3.3 70B",
          "Réponse vocale POST /chat/audio (ElevenLabs)",
          "Mémoire de session (20 derniers messages)",
          "Réponse dans la langue de l'utilisateur",
        ]),
        featuresEn: j([
          "LIVIA / EVANS router by topic",
          "Text chat POST /chat with Groq Llama 3.3 70B",
          "Voice reply POST /chat/audio (ElevenLabs)",
          "Session memory (last 20 messages)",
          "Replies in the user's language",
        ]),
        architecture: j([
          "FastAPI + Pydantic",
          "LangChain + ChatGroq",
          "agents/router.py (LIVIA vs EVANS)",
          "memory/session (defaultdict, cap 20)",
          "ElevenLabs TTS par avatar",
        ]),
        techStack: j([
          { name: "FastAPI", role: "API /chat et /chat/audio" },
          { name: "LangChain", role: "Messages système et historique" },
          { name: "Groq", role: "llama-3.3-70b-versatile" },
          { name: "ElevenLabs", role: "Voix Livia et Evans" },
          { name: "Python", role: "Agents, routeur, mémoire" },
        ]),
        challengesFr:
          "Router sans ambiguïté, garder le contexte de session et produire une voix distincte par avatar.",
        challengesEn:
          "Routing without ambiguity, keeping session context, and producing a distinct voice per avatar.",
        solutionsFr:
          "Prompt de routage LIVIA/EVANS, historique LangChain, TTS ElevenLabs et fallback Livia si le routeur hésite.",
        solutionsEn:
          "LIVIA/EVANS routing prompt, LangChain history, ElevenLabs TTS and Livia fallback if the router is unsure.",
        resultFr:
          "Une API agents utilisable : statut, chat texte et audio — le code est sur GitHub.",
        resultEn:
          "A usable agents API: status, text chat and audio — the code is on GitHub.",
        image: "/projects/treevas-agents.png",
        githubUrl: "https://github.com/ARTHURNJOUONANG/Treevas-agents",
        featured: true,
        sortOrder: 6,
      },
    ],
  });

  await prisma.experience.createMany({
    data: cvExperiences.map((item) => ({
      titleFr: item.titleFr,
      titleEn: item.titleEn,
      company: item.company,
      period: item.period,
      year: item.year,
      missionsFr: j([...item.missionsFr]),
      missionsEn: j([...item.missionsEn]),
      technologies: j([...item.technologies]),
      resultsFr: j([...item.resultsFr]),
      resultsEn: j([...item.resultsEn]),
      sortOrder: item.sortOrder,
    })),
  });

  await prisma.education.createMany({
    data: cvEducation.map((item) => ({
      titleFr: item.titleFr,
      titleEn: item.titleEn,
      school: item.school,
      period: item.period,
      detailFr: item.detailFr,
      detailEn: item.detailEn,
      sortOrder: item.sortOrder,
    })),
  });

  const skills = skillGroups.flatMap((group) =>
    group.items.map((name) => ({ category: group.id, name })),
  );

  await prisma.skill.createMany({
    data: skills.map((skill, index) => ({
      ...skill,
      sortOrder: index,
    })),
  });

  await prisma.setting.upsert({
    where: { key: "cvUrl" },
    update: { value: "/cv" },
    create: { key: "cvUrl", value: "/cv" },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
