"use client";

import { useEffect, useState } from "react";

const tabs = [
  { label: "Fleet Management Software", id: "fleet-management" },
  { label: "Business Application", id: "business-application" },
  { label: "Process Flow Manager", id: "process-flow-manager" },
  { label: "Analytics", id: "analytics-platform" },
] as const;

export function SoftwareTabs() {
  const [activeId, setActiveId] = useState<string>("fleet-management");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = tabs.length - 1; i >= 0; i--) {
        const section = document.getElementById(tabs[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 113;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-[60px] z-30 bg-white border-t border-[#363636]/10 shadow-sm">
      <div className="site-container flex items-center justify-between overflow-x-auto no-scrollbar">
        {tabs.map(({ label, id }) => {
          const isActive = activeId === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`flex-1 min-w-[200px] lg:min-w-0 text-center py-4 px-3 text-[16px] transition-all duration-200 border-b whitespace-nowrap cursor-pointer ${
                isActive
                  ? "border-[#005ead] text-[#005ead] font-medium"
                  : "border-transparent text-[#3a3a3a] hover:text-[#005ead] hover:border-[#005ead]/30 font-normal"
              }`}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
