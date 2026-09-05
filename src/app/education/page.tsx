import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Education } from "@/components/sections/Education";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "@/lib/locale";
import { getEducation } from "@/lib/queries";

export const metadata: Metadata = { title: "Parcours" };

export default async function EducationPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const items = await getEducation(locale);

  return (
    <SiteShell dict={dict} locale={locale}>
      <div className="pt-20">
        <Education dict={dict} items={items} />
      </div>
    </SiteShell>
  );
}
