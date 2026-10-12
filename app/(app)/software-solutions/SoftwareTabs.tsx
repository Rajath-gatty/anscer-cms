"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const tabs = [
  { label: "Fleet Management Software", id: "fleet-management" },
  { label: "Business Application", id: "business-application" },
  { label: "Process Flow Manager", id: "process-flow-manager" },
  { label: "Analytics", id: "analytics-platform" },
] as const;

export function SoftwareTabs() {
  const [activeId, setActiveId] = useState<string>("fleet-management");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = tabs.length - 1; i >= 0; i--) {
        const section = document.getElementById(tabs[i].id);
        if (section) {
          const elementTop = section.getBoundingClientRect().top + window.scrollY;
          if (elementTop <= scrollPosition) {
            setActiveId(tabs[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const isMobile = window.innerWidth < 1024;
      const headerOffset = isMobile ? 115 : 113;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const activeTabLabel =
    tabs.find((tab) => tab.id === activeId)?.label ||
    "Fleet Management Software";

  return (
    <nav className="sticky top-[56px] lg:top-[60px] z-30 bg-white border-t border-[#363636]/10 shadow-sm">
      {/* Mobile Dropdown View */}
      <div className="lg:hidden site-container py-3" ref={dropdownRef}>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full px-4 py-3 bg-white text-[#3a3a3a] text-[15px] font-medium border border-[#e5e5e5] rounded-sm cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Select software solution section"
          >
            <span>{activeTabLabel}</span>
            <ChevronDown
              className={`size-4 text-[#3a3a3a] transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-[#e5e5e5] shadow-lg rounded-sm p-2 z-50 flex flex-col gap-1">
              {tabs.map(({ label, id }) => {
                const isActive = activeId === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => {
                      handleClick(e, id);
                      setIsOpen(false);
                    }}
                    className={`block px-3 py-2.5 text-left text-[14px] transition-colors rounded-md cursor-pointer ${
                      isActive
                        ? "bg-[#f2f2f2] font-medium text-[#3a3a3a]"
                        : "text-[#555555] hover:bg-[#f8f8f8] hover:text-[#3a3a3a]"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Horizontal Tabs View */}
      <div className="hidden lg:flex site-container items-center justify-between overflow-x-auto no-scrollbar">
        {tabs.map(({ label, id }) => {
          const isActive = activeId === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`flex-1 min-w-[200px] lg:min-w-0 text-center py-4 px-3 text-[16px] transition-all duration-200 border-b whitespace-nowrap cursor-pointer ${
                isActive
                  ? "border-[#005ead] text-[#3A3A3A] font-semibold"
                  : "border-transparent text-[#3a3a3a] hover:border-[#005ead] hover:text-[#3A3A3A] hover:font-semibold"
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
