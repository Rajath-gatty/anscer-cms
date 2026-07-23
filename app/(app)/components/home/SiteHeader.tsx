"use client";

import { ArrowRight, ChevronDown, ExternalLink, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { imagePath } from "./assets";
import { navItems } from "./home-data";
import { ArrowButton } from "./SectionPrimitives";

const CONTACT_HREF = "/contact-us";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [robotsOpen, setRobotsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const navHref = (item: string) => {
    if (item === "Home") return "/";
    if (item === "Software") return "/software-solutions";
    if (item === "Company") return "/about-us";
    return `/#${item.toLowerCase()}`;
  };
  const navActive = (item: string) => {
    if (item === "Home") return pathname === "/";
    if (item === "Software") return pathname.startsWith("/software-solutions");
    if (item === "Company")
      return (
        pathname.startsWith("/about-us") || pathname.startsWith("/newsroom")
      );
    return false;
  };
  const isRobotsActive = [
    "/robots",
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
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#e5e5e5]/95 backdrop-blur-xl mobile-navbar-bg">
      <div className="site-container flex h-[60px] items-center justify-between mobile-navbar-container">
        <Link href="/" aria-label="ANSCER Robotics home" onClick={closeMenu}>
          <Image
            src={`${imagePath}Anscer-logo-final-dark.png`}
            alt="ANSCER Robotics"
            width={120}
            height={32}
            priority
          />
        </Link>
        <div className="hidden items-center gap-[40px] lg:flex">
          <nav className="flex items-center gap-[40px] text-sm font-normal text-[#2f2f2f]">
            {navItems.map((item) => {
              if (item === "Robots") {
                return <RobotsDropdown key={pathname} active={isRobotsActive} />;
              }
              if (item === "Company") {
                return <CompanyDropdown key={item} active={navActive(item)} />;
              }
              return (
                <Link
                  key={item}
                  className={`relative flex h-[60px] items-center cursor-pointer transition-colors duration-200 hover:text-[#005ead] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#005ead] after:transition-transform after:duration-200 after:origin-bottom after:scale-x-0 hover:after:scale-x-100 ${
                    navActive(item)
                      ? "font-bold text-[#005ead]"
                      : "text-[#2f2f2f]"
                  }`}
                  href={navHref(item)}
                >
                  {item}
                </Link>
              );
            })}
          </nav>
            <ArrowButton


            >
              Contact us
            </ArrowButton>
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
            ? "max-h-[calc(100vh-56px)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="site-container max-h-[calc(100vh-60px)] overflow-y-auto py-5">
          <nav className="flex flex-col text-base font-normal text-[#011f40]">
            {navItems.map((item) => {
              if (item === "Robots") {
                return (
                  <div key={item} className="border-b border-[#cfd7df] py-1">
                    <button
                      type="button"
                      className={`cursor-pointer flex min-h-12 w-full items-center justify-between text-left ${
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
                          <ArrowButton
                            as={Link}
                            href="/robots"
                            onClick={closeMenu}
                            variant="ghost"
                            className="text-[16px] gap-3 text-[#011f40] hover:underline px-0 h-auto font-bold"
                          >
                            Robot Overview
                          </ArrowButton>
                          <p className="mt-2 max-w-[310px] text-[10px] leading-5 text-[#657382]">
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
                                className="cursor-pointer transition hover:text-[#005ead]"
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
                );
              }
              if (item === "Company") {
                return (
                  <div key={item} className="border-b border-[#cfd7df] py-1">
                    <button
                      type="button"
                      className={`cursor-pointer flex min-h-12 w-full items-center justify-between text-left ${
                        navActive(item)
                          ? "font-bold text-[#005ead]"
                          : "text-[#011f40]"
                      }`}
                      aria-expanded={companyOpen}
                      onClick={() => setCompanyOpen((open) => !open)}
                    >
                      Company
                      <ChevronDown
                        aria-hidden="true"
                        className={`size-5 transition-transform ${companyOpen ? "rotate-180" : ""}`}
                        strokeWidth={2}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ${
                        companyOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-4 pt-2 pl-2">
                          <p className="mt-2 mb-4 text-[10px] font-medium uppercase tracking-wide text-[#8b96a3]">
                            Company
                          </p>
                          <div className="flex flex-col gap-4 text-sm font-medium text-[#011f40]">
                            <Link
                              href="/about-us"
                              onClick={closeMenu}
                              className="cursor-pointer transition hover:text-[#005ead]"
                            >
                              About us
                            </Link>
                            <Link
                              href="/newsroom"
                              onClick={closeMenu}
                              className="cursor-pointer transition hover:text-[#005ead]"
                            >
                              Newsroom
                            </Link>
                            <Link
                              href="https://career.anscer.com/jobs/Careers"
                              onClick={closeMenu}
                              className="cursor-pointer transition hover:text-[#005ead] flex items-center gap-2"
                            >
                              Careers
                              <ExternalLink className="size-4 text-[#011f40]" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item}
                  className={`cursor-pointer flex min-h-12 items-center border-b border-[#cfd7df] transition hover:text-[#005ead] ${
                    navActive(item) ? "font-bold text-[#005ead]" : ""
                  }`}
                  href={navHref(item)}
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              );
            })}
          </nav>
            <div className="mt-5">
              <ArrowButton
                target={CONTACT_HREF}
                onClick={closeMenu}
                className="h-12 w-full justify-center"
              >
                Contact us
              </ArrowButton>
            </div>
        </div>
      </div>
    </header>
  );
}

function RobotsDropdown({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside the dropdown
  useEffect(() => {
    if (!open) return;
    function handleOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[60px] items-center"
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/robots"
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen((o) => !o)}
        className={`relative cursor-pointer flex h-[60px] items-center px-0 transition-colors duration-200 hover:text-[#005ead] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#005ead] after:transition-transform after:duration-200 after:origin-bottom after:scale-x-0 hover:after:scale-x-100 ${
          open || active
            ? "font-bold text-[#005ead] after:scale-x-100"
            : "text-[#2f2f2f]"
        }`}
      >
        Robots
      </Link>
      <div
        className={`absolute left-1/2 top-[60px] z-50 w-[400px] -translate-x-1/2 rounded-xl bg-white shadow-[0_18px_45px_rgba(1,31,64,.22)] transition-[opacity,visibility,transform] duration-200 ${
          open
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-2"
        }`}
      >
        <div className="p-5">
          <ArrowButton
            as={Link}
            href="/robots"
            onClick={() => setOpen(false)}
            variant="ghost"
            className="text-lg gap-3 font-bold text-[#011f40] hover:underline underline-offset-4 px-0 h-auto"
          >
            Robot Overview
          </ArrowButton>
          <p className="mt-2 text-[10px] leading-5 text-[#7b8794]">
            Explore ANSCER&apos;s robotic platforms for flexible industrial
            automation
          </p>
        </div>
        <div className="border-t border-[#e7eaf0] px-5 pb-7 pt-4">
          <p className="text-[10px] font-medium uppercase tracking-wide text-[#9aa3ad]">
            Robot Series
          </p>
          <div className="mt-6 grid grid-cols-2 gap-x-10 gap-y-3 text-sm font-medium text-[#011f40]">
            <Link
              className="block cursor-pointer rounded-xl p-2 transition-colors hover:bg-[#011f40]/[0.05]"
              href="/ar-series"
              onClick={() => setOpen(false)}
            >
              AR Series
            </Link>
            <Link
              className="block cursor-pointer rounded-xl p-2 transition-colors hover:bg-[#011f40]/[0.05]"
              href="/psr-series"
              onClick={() => setOpen(false)}
            >
              PSR Series
            </Link>
            <Link
              className="block cursor-pointer rounded-xl p-2 transition-colors hover:bg-[#011f40]/[0.05]"
              href="/agv-series"
              onClick={() => setOpen(false)}
            >
              AGV Series
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyDropdown({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside the dropdown
  useEffect(() => {
    if (!open) return;
    function handleOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  return (
    <div ref={containerRef} className="relative flex h-[60px] items-center">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`relative cursor-pointer flex h-[60px] items-center gap-1 px-0 transition-colors duration-200 hover:text-[#005ead] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#005ead] after:transition-transform after:duration-200 after:origin-bottom after:scale-x-0 hover:after:scale-x-100 ${
          open || active ? "font-bold text-[#005ead]" : "text-[#2f2f2f]"
        }`}
      >
        Company
        <ChevronDown
          aria-hidden="true"
          className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>
      <div
        className={`absolute left-1/2 top-[60px] z-50 w-[220px] -translate-x-1/2 rounded-xl bg-white shadow-[0_18px_45px_rgba(1,31,64,.22)] transition-[opacity,visibility,transform] duration-200 ${
          open
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-2"
        }`}
      >
        <div className="p-6">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-wide text-[#9aa3ad]">
            Company
          </p>
          <div className="flex flex-col text-sm font-medium text-[#011f40]">
            <Link
              href="/about-us"
              onClick={() => setOpen(false)}
              className="block cursor-pointer rounded-xl p-2 transition-colors hover:bg-[#011f40]/[0.05]"
            >
              About us
            </Link>
            <Link
              href="/newsroom"
              onClick={() => setOpen(false)}
              className="block cursor-pointer rounded-xl p-2 transition-colors hover:bg-[#011f40]/[0.05]"
            >
              Newsroom
            </Link>
            <Link
              href="https://career.anscer.com/jobs/Careers"
              target="_blank"
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-xl flex justify-between group items-center w-full p-2 transition-colors hover:bg-[#011f40]/[0.05]"
            >
              Career
              <ExternalLink className="size-4 text-[#011f40]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
