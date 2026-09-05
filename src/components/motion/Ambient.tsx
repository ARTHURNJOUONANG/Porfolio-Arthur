export function Ambient() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
      <div className="particles">
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} className={`particle particle-${i}`} />
        ))}
      </div>
    </div>
  );
}
