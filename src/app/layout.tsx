import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { siteUrl } from "@/lib/utils";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "Arthur Njouonang — Développeur Fullstack Java, Web & IA",
    template: "%s · Arthur Njouonang",
  },
  description:
    "Développeur fullstack Java, web et IA. Spring, React, APIs, bases de données et IA générative.",
  openGraph: {
    title: "Arthur Njouonang — Développeur Fullstack Java, Web & IA",
    description:
      "Portfolio : Java / Spring, frontend web, architecture, data, DevOps et IA générative.",
    url: siteUrl(),
    siteName: "Arthur Njouonang",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Njouonang — Développeur Fullstack Java, Web & IA",
    description: "Applications, API et IA générative, de l'idée à la production.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} ${syne.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
