import { Hero } from "@/components/sections/Hero";
import { NeuralMap } from "@/components/motion/NeuralMap";
import { SiteShell } from "@/components/layout/SiteShell";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "@/lib/locale";
import { JsonLd } from "@/components/seo/JsonLd";

export default async function HomePage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <SiteShell dict={dict} locale={locale}>
      <JsonLd locale={locale} />
      <Hero dict={dict} />
      <NeuralMap dict={dict} />
    </SiteShell>
  );
}
