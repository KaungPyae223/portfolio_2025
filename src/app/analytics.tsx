// app/analytics.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-XX8Y6TYW6D", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
