"use client";

import { useState } from "react";

export const PORTRAIT_SRC = "/arthur.jpg";

const sizes = {
  core: "h-[72px] w-[72px] text-lg",
  md: "h-24 w-24 text-2xl",
  lg: "h-56 w-56 text-5xl sm:h-64 sm:w-64",
} as const;

export function Portrait({
  size = "md",
  alt = "Arthur Njouonang",
  showHint = false,
}: {
  size?: keyof typeof sizes;
  alt?: string;
  showHint?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`portrait portrait-${size} ${sizes[size]}`}>
      {failed ? (
        <div className="portrait-fallback">
          <span className="display">AN</span>
          {showHint ? <span className="portrait-hint">public/arthur.jpg</span> : null}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={PORTRAIT_SRC} alt={alt} onError={() => setFailed(true)} />
      )}
    </div>
  );
}
