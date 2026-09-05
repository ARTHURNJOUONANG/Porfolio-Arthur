export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`rise ${className ?? ""}`}>{children}</div>;
}
