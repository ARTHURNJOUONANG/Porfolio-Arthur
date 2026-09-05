type Props = {
  kicker: string;
  title: string;
  subtitle?: string;
  id?: string;
};

export function SectionHeading({ kicker, title, subtitle, id }: Props) {
  return (
    <header className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-accent">{kicker}</p>
      <h2 id={id} className="display text-3xl leading-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-mute">{subtitle}</p> : null}
    </header>
  );
}
