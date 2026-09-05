import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { PageView } from "../analytics/PageView";
import { Assistant } from "../assistant/Assistant";
import { Ambient } from "../motion/Ambient";
import { CursorGlow } from "../motion/CursorGlow";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteShell({
  children,
  dict,
  locale,
}: {
  children: React.ReactNode;
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <>
      <Ambient />
      <CursorGlow />
      <Header dict={dict} locale={locale} />
      <main className="relative z-10">{children}</main>
      <Footer dict={dict} />
      <Assistant dict={dict} locale={locale} />
      <PageView />
    </>
  );
}
