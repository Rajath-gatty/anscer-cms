"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Disables smooth scroll during cross-page navigation so Next.js's
 * scroll-to-top is instant, then restores it once the new page has rendered
 * so in-page anchor links (`#section`, `/#section`) stay smooth.
 */
export function ScrollBehaviorManager() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const restoreTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Step 1: On any cross-page link click, immediately disable smooth scroll.
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";

      // Hash links (same-page or cross-page section targets) — keep smooth.
      if (href.includes("#")) return;

      // Cancel any pending restore so we don't accidentally re-enable
      // smooth scroll before the navigation scroll-to-top has fired.
      if (restoreTimer.current) {
        clearTimeout(restoreTimer.current);
        restoreTimer.current = null;
      }

      document.documentElement.style.scrollBehavior = "auto";
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Step 2: Once the new page has fully rendered (pathname changed),
  // restore smooth scroll with a small delay so Next.js's scroll-to-top
  // has already fired before we re-enable it.
  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;

    if (restoreTimer.current) clearTimeout(restoreTimer.current);
    restoreTimer.current = setTimeout(() => {
      document.documentElement.style.scrollBehavior = "";
      restoreTimer.current = null;
    }, 100);

    return () => {
      if (restoreTimer.current) clearTimeout(restoreTimer.current);
    };
  }, [pathname]);

  return null;
}
