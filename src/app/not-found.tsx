import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-xs text-accent">404</p>
      <h1 className="display mt-4 text-4xl">Page introuvable</h1>
      <Link href="/" className="mt-6 text-sm text-mute hover:text-ink">
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
