import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Methodology } from "@/components/sections/Methodology";
import { Services } from "@/components/sections/Services";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = { title: "Services" };

export default async function ServicesPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <SiteShell dict={dict} locale={locale}>
      <div className="pt-20">
        <Services dict={dict} locale={locale} />
        <Methodology dict={dict} locale={locale} />
      </div>
    </SiteShell>
  );
}
