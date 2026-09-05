import { cookies } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

export async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  const fromCookie = jar.get("locale")?.value;
  if (isLocale(fromCookie)) return fromCookie;
  return defaultLocale;
}
