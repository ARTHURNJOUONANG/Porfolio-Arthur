import type { Dictionary } from "@/i18n/dictionaries";
import { Container } from "../ui/Container";
import { SocialLinks } from "./SocialLinks";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="relative z-10 border-t border-line py-10 text-sm text-mute">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="display text-ink">Arthur Njouonang</p>
          <p className="mt-2 max-w-sm">{dict.footer.built}</p>
        </div>
        <SocialLinks className="justify-start sm:justify-end" />
      </Container>
      <Container className="mt-6">
        <p>© {new Date().getFullYear()} Arthur Njouonang. {dict.footer.rights}</p>
      </Container>
    </footer>
  );
}
