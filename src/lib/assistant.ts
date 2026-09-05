import type { Locale } from "@/i18n/config";

export type Knowledge = {
  projects: { slug: string; title: string; excerpt: string; stack: string[] }[];
  skills: string[];
  experiences: { title: string; company: string }[];
};

export function answerQuestion(question: string, locale: Locale, knowledge: Knowledge) {
  const q = question.toLowerCase();
  const fr = locale === "fr";

  const projectNames = knowledge.projects.map((p) => `${p.title} — ${p.excerpt}`).join("\n");
  const skills = knowledge.skills.join(", ");

  if (/(projet|project|réalis|built|careerai|crm|compta|protech|symfo|treevas|livia|evans)/i.test(q)) {
    if (fr) {
      return `Arthur a notamment réalisé :\n${projectNames}\n\nChaque projet est détaillé (problème, architecture, stack, difficultés et solutions) dans la section Projets.`;
    }
    return `Arthur has built:\n${projectNames}\n\nEach project is documented in depth (problem, architecture, stack, challenges and solutions) on the Projects pages.`;
  }

  if (/(ia|ai|claude|mistral|rag|copilot|générativ)/i.test(q)) {
    return fr
      ? "Arthur a un vrai volet IA : Claude API, Mistral, RAG, GitHub Copilot et IA générative, intégrés dans des applications fullstack."
      : "Arthur also works on AI: Claude API, Mistral, RAG, GitHub Copilot and generative AI, integrated into fullstack applications.";
  }

  if (/(techno|stack|compétence|skill|maîtrise|react|node|java|spring|symfony|flutter|dart)/i.test(q)) {
    return fr
      ? `Stack : ${skills}. Profil fullstack Java / web, avec architecture, bases de données, tests, DevOps et IA générative.`
      : `Stack: ${skills}. Fullstack Java / web profile, plus architecture, databases, testing, DevOps and generative AI.`;
  }

  if (/(expérience|experience|poste|job|travail|work)/i.test(q)) {
    const lines = knowledge.experiences.map((e) => `${e.title} · ${e.company}`).join("\n");
    return fr
      ? `Parcours récent :\n${lines}\n\nIl recherche un poste ou des missions fullstack avec une vraie responsabilité produit.`
      : `Recent path:\n${lines}\n\nHe is looking for fullstack roles or missions with real product ownership.`;
  }

  if (/(contact|email|joindre|recrut|hire|disponible)/i.test(q)) {
    return fr
      ? "Vous pouvez le contacter via le formulaire, WhatsApp, LinkedIn ou GitHub. Un CV est également téléchargeable depuis le site."
      : "You can reach him via the contact form, WhatsApp, LinkedIn or GitHub. A resume is also available for download.";
  }

  if (/(qui|who|profil|about|présentation)/i.test(q)) {
    return fr
      ? "Arthur Njouonang est développeur fullstack Java, web et IA. Il conçoit des applications de l'idée jusqu'au déploiement : Spring, APIs, frontend, bases de données et IA générative."
      : "Arthur Njouonang is a fullstack Java, web and AI developer. He designs applications from idea to production: Spring, APIs, frontend, databases and generative AI.";
  }

  return fr
    ? `Je peux répondre sur le profil, les projets (${knowledge.projects.map((p) => p.title).join(", ")}), les technologies ou le contact. Reformulez votre question.`
    : `I can answer about the profile, projects (${knowledge.projects.map((p) => p.title).join(", ")}), technologies or contact. Try rephrasing.`;
}
