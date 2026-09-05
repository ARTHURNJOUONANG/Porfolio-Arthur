type Props = { src: string | null; alt: string; className?: string };

export function Cover({ src, alt, className }: Props) {
  if (!src) {
    return (
      <div className={`flex items-center justify-center bg-muted-bg display text-3xl text-accent/40 ${className ?? ""}`}>
        {alt}
      </div>
    );
  }

  return (
    // SVGs are served from /public; native img avoids next/image SVG limitations.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className ?? "h-full w-full object-cover"} />
  );
}
