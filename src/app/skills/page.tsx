import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Skills } from "@/components/sections/Skills";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "@/lib/locale";
import { getSkills } from "@/lib/queries";

export const metadata: Metadata = { title: "Compétences" };

export default async function SkillsPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const groups = await getSkills();

  return (
    <SiteShell dict={dict} locale={locale}>
      <div className="pt-20">
        <Skills dict={dict} locale={locale} groups={groups} />
      </div>
    </SiteShell>
  );
}
