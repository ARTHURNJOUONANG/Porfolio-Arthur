import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Contact } from "@/components/sections/Contact";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = { title: "Contact" };

export default async function ContactPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <SiteShell dict={dict} locale={locale}>
      <div className="pt-20">
        <Contact dict={dict} />
      </div>
    </SiteShell>
  );
}
