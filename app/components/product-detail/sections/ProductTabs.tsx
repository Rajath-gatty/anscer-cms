"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

export function ProductTabs({ hasModules }: { hasModules: boolean }) {
  const tabs = useMemo(
    () => [
      { label: "Overview", href: "#overview", id: "overview" },
      { label: "Advantages", href: "#advantages", id: "advantages" },
      { label: "Features", href: "#features", id: "features" },
      ...(hasModules
        ? [{ label: "Attachments", href: "#attachments", id: "attachments" }]
        : []),
      { label: "Applications", href: "#applications", id: "applications" },
      { label: "Case Studies", href: "#case-studies", id: "case-studies" },
    ],
    [hasModules],
  );
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const sections = tabs
      .map((tab) => document.getElementById(tab.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveTab(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.18, 0.34, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [tabs]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const target = document.getElementById(id);
    if (!target) return;

    const y = target.getBoundingClientRect().top + window.scrollY - 113;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="sticky top-[60px] z-30 border-y border-[#dbe4ec] bg-[#fafafa]/96 backdrop-blur">
      <div className="site-container">
        <nav className="flex h-[52px] items-center justify-center gap-4 overflow-x-auto text-[12px] font-normal text-[#3a3a3a] md:gap-14 md:text-base">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={cn(
                "flex h-full shrink-0 items-center border-b-2 px-1 transition hover:text-[#005ead]",
                activeTab === tab.id
                  ? "border-[#005ead] text-[#005ead]"
                  : "border-transparent",
              )}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
