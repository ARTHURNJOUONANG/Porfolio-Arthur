import type { Locale } from "@/i18n/config";
import { social } from "@/data/content";
import { siteUrl } from "@/lib/utils";

export function JsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arthur Njouonang",
    jobTitle: locale === "en" ? "Fullstack Java, Web & AI Developer" : "Développeur Fullstack Java, Web & IA",
    url: siteUrl(),
    sameAs: [social.github, social.linkedin, social.whatsapp].filter(Boolean),
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Symfony",
      "React",
      "Next.js",
      "Flutter",
      "Dart",
      "TypeScript",
      "PostgreSQL",
      "RAG",
      "Claude API",
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
