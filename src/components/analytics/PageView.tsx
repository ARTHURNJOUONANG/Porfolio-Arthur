"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function PageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    void fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname, referrer: document.referrer }),
    });
  }, [pathname]);

  return null;
}
