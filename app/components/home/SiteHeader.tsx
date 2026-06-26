"use client";

import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { imagePath } from "./assets";
import { navItems } from "./home-data";

const CONTACT_HREF = "mailto:sales@anscer.com";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [robotsOpen, setRobotsOpen] = useState(true);
  const navHref = (item: string) => {
    if (item === "Home") return "/";
    if (item === "Software") return "/software-solutions";
    if (item === "Company") return "/about-us";
    return `/#${item.toLowerCase()}`;
  };
  const navActive = (item: string) => {
    if (item === "Home") return pathname === "/";
    if (item === "Software") return pathname.startsWith("/software-solutions");
    if (item === "Company") return pathname.startsWith("/about-us");
    return false;
  };
  const isRobotsActive = [
    "/products",
    "/ar-series",
    "/psr-series",
    "/agv-series",
  ].some((path) => pathname === path || pathname.startsWith(`${path}/`));

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#e5e5e5]/95 backdrop-blur-xl">
      <div className="site-container flex h-[60px] items-center justify-between">
        <Link href="/" aria-label="ANSCER Robotics home" onClick={closeMenu}>
          <Image
            src={`${imagePath}ANSCER-logo-1.svg`}
            alt="ANSCER Robotics"
            width={124}
            height={33}
            priority
          />
        </Link>
        <div className="hidden items-center gap-9 lg:flex">
          <nav className="flex items-center gap-[52px] text-sm font-medium text-[#2f2f2f]">
            {navItems.map((item) =>
              item === "Robots" ? (
                <RobotsDropdown key={item} active={isRobotsActive} />
              ) : (
                <Link
                  key={item}
                  className={`transition hover:text-[#005ead] ${
                    navActive(item) ? "font-bold text-[#005ead]" : ""
                  }`}
                  href={navHref(item)}
                >
                  {item}
                </Link>
              ),
            )}
          </nav>
          <a
            className="inline-flex py-2 px-3 items-center justify-center gap-6 rounded-sm bg-[#005ead] text-sm font-bold uppercase tracking-wide text-white"
            href={CONTACT_HREF}
          >
            Contact us{" "}
            <ArrowRight aria-hidden="true" className="size-5" strokeWidth={2} />
          </a>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-sm text-[#011f40] transition hover:bg-white/70 lg:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X aria-hidden="true" className="size-6" />
          ) : (
            <Menu aria-hidden="true" className="size-6" />
          )}
        </button>
      </div>
      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full overflow-hidden border-t border-black/5 bg-[#e5e5e5]/98 shadow-[0_18px_38px_rgba(1,31,64,.16)] transition-[max-height,opacity] duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[calc(100vh-60px)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="site-container max-h-[calc(100vh-60px)] overflow-y-auto py-5">
          <nav className="flex flex-col text-base font-semibold text-[#011f40]">
            {navItems.map((item) =>
              item === "Robots" ? (
                <div key={item} className="border-b border-[#cfd7df] py-1">
                  <button
                    type="button"
                    className={`flex min-h-12 w-full items-center justify-between text-left ${
                      isRobotsActive
                        ? "font-bold text-[#005ead]"
                        : "text-[#011f40]"
                    }`}
                    aria-expanded={robotsOpen}
                    onClick={() => setRobotsOpen((open) => !open)}
                  >
                    Robots
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-5 transition-transform ${robotsOpen ? "rotate-180" : ""}`}
                      strokeWidth={2}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      robotsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-4 pt-2">
                        <Link
                          href="/products"
                          onClick={closeMenu}
                          className="flex items-center gap-3 text-xl font-bold text-[#011f40]"
                        >
                          Robot Overview
                          <ArrowRight
                            aria-hidden="true"
                            className="size-5"
                            strokeWidth={2}
                          />
                        </Link>
                        <p className="mt-2 max-w-[310px] text-xs leading-5 text-[#657382]">
                          Explore ANSCER&apos;s robotic platforms for flexible
                          industrial automation
                        </p>
                        <p className="mt-5 text-[10px] font-medium uppercase tracking-wide text-[#8b96a3]">
                          Robot Series
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4 text-sm font-medium">
                          {[
                            ["AR Series", "/ar-series"],
                            ["PSR Series", "/psr-series"],
                            ["AGV Series", "/agv-series"],
                          ].map(([series, href]) => (
                            <Link
                              key={series}
                              className="transition hover:text-[#005ead]"
                              href={href}
                              onClick={closeMenu}
                            >
                              {series}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item}
                  className={`flex min-h-12 items-center border-b border-[#cfd7df] transition hover:text-[#005ead] ${
                    navActive(item) ? "font-bold text-[#005ead]" : ""
                  }`}
                  href={navHref(item)}
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              ),
            )}
          </nav>
          <a
            className="mt-5 inline-flex px-2 h-8 w-full items-center justify-center gap-3 rounded-sm bg-[#005ead] text-sm font-bold uppercase tracking-wide text-white"
            href={CONTACT_HREF}
            onClick={closeMenu}
          >
            Contact us{" "}
            <ArrowRight aria-hidden="true" className="size-5" strokeWidth={2} />
          </a>
        </div>
      </div>
    </header>
  );
}

function RobotsDropdown({ active }: { active: boolean }) {
  return (
    <div className="group relative flex h-[60px] items-center">
      <Link
        className={`flex h-full items-center border-b-[3px] px-0 pt-[3px] transition group-hover:border-[#005ead] group-hover:text-[#005ead] ${
          active
            ? "border-[#005ead] font-bold text-[#005ead]"
            : "border-transparent text-[#2f2f2f]"
        }`}
        href="/products"
      >
        Robots
      </Link>
      <div className="invisible absolute left-1/2 top-[60px] z-50 w-[400px] -translate-x-1/2 rounded-xl bg-white opacity-0 shadow-[0_18px_45px_rgba(1,31,64,.22)] transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="p-5">
          <Link
            href="/products"
            className="group/link flex items-center gap-3 text-xl font-bold text-[#011f40]"
          >
            Robot Overview
            <ArrowRight
              aria-hidden="true"
              className="size-5 transition group-hover/link:translate-x-1"
              strokeWidth={2}
            />
          </Link>
          <p className="mt-2 text-xs leading-5 text-[#7b8794]">
            Explore ANSCER&apos;s robotic platforms for flexible industrial
            automation
          </p>
        </div>
        <div className="border-t border-[#e7eaf0] px-5 pb-7 pt-4">
          <p className="text-[10px] font-medium uppercase tracking-wide text-[#9aa3ad]">
            Robot Series
          </p>
          <div className="mt-6 grid grid-cols-2 gap-x-14 gap-y-7 text-base font-medium text-[#011f40]">
            <Link className="transition hover:text-[#005ead]" href="/ar-series">
              AR Series
            </Link>
            <Link className="transition hover:text-[#005ead]" href="/psr-series">
              PSR Series
            </Link>
            <Link className="transition hover:text-[#005ead]" href="/agv-series">
              AGV Series
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
