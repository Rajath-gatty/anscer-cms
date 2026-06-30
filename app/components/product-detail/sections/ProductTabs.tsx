"use client";

import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useMemo, useState } from "react";

export function ProductTabs({ hasModules }: { hasModules: boolean }) {
  const tabs = useMemo(
    () => [
      { label: "Overview", href: "#overview", id: "overview" },
      { label: "Advantages", href: "#advantages", id: "advantages" },
      { label: "Features", href: "#features", id: "features" },
      ...(hasModules
        ? [{ label: "Top Modules", href: "#attachments", id: "attachments" }]
        : []),
      { label: "Applications", href: "#applications", id: "applications" },
      // { label: "Case Studies", href: "#case-studies", id: "case-studies" },
    ],
    [hasModules],
  );
  const [activeTab, setActiveTab] = useState("overview");

  const activeTabLabel =
    tabs.find((tab) => tab.id === activeTab)?.label ?? tabs[0]?.label;

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
    <div className="sticky top-15 z-30 border-y border-[#dbe4ec] bg-[#fafafa]/96 backdrop-blur">
      <div className="site-container">
        <div className="flex items-stretch md:hidden justify-center align-center">
          <Select
            items={tabs.map((tab) => ({ value: tab.id, label: tab.label }))}
            name="product-sections"
            value={activeTab}
            onValueChange={(value) => {
              if (value) handleTabClick(value);
            }}
          >
            <SelectTrigger className="h-full w-full rounded-none border-0 bg-transparent px-0 py-2 text-[14px] font-normal text-[#1d1d1d] shadow-none focus-visible:ring-0">
              <SelectValue>{activeTabLabel}</SelectValue>
            </SelectTrigger>
            <SelectContent align="start" className="w-[calc(100vw-2rem)] min-w-0 rounded-none border-x-0 border-t-0 shadow-lg">
              <SelectGroup>
                {tabs.map((tab) => (
                  <SelectItem key={tab.id} value={tab.id}>
                    {tab.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <nav className="hidden h-13 items-center justify-center gap-4 overflow-x-auto text-[12px] font-normal text-[#3a3a3a] md:flex md:gap-14 md:text-base">
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
