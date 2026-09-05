import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "line";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
  onClick,
}: Props) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors disabled:opacity-50",
    variant === "primary" && "bg-accent text-black hover:brightness-110",
    variant === "ghost" && "bg-muted-bg text-ink hover:bg-line",
    variant === "line" && "border border-line text-ink hover:border-accent hover:text-accent",
    className,
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={styles}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
