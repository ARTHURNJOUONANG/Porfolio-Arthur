"use client";

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-black hover:brightness-110"
    >
      {label}
    </button>
  );
}
