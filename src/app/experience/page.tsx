import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Experience } from "@/components/sections/Experience";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "@/lib/locale";
import { getExperiences } from "@/lib/queries";

export const metadata: Metadata = { title: "Expériences" };

export default async function ExperiencePage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const items = await getExperiences(locale);

  return (
    <SiteShell dict={dict} locale={locale}>
      <div className="pt-20">
        <Experience dict={dict} items={items} />
      </div>
    </SiteShell>
  );
}
