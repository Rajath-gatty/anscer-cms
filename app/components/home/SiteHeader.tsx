import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { imagePath } from "./assets";
import { navItems } from "./home-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#e5e5e5]/95 backdrop-blur-xl">
      <div className="site-container flex h-[60px] items-center justify-between">
        <a href="#" aria-label="ANSCER Robotics home">
          <Image src={`${imagePath}ANSCER-logo-1.svg`} alt="ANSCER Robotics" width={124} height={33} priority />
        </a>
        <div className="hidden items-center gap-9 lg:flex">
          <nav className="flex items-center gap-[52px] text-sm font-medium text-[#2f2f2f]">
            {navItems.map((item) =>
              item === "Robots" ? (
                <RobotsDropdown key={item} />
              ) : (
                <a
                  key={item}
                  className={`transition hover:text-[#005ead] ${item === "Home" ? "font-bold text-[#005ead]" : ""}`}
                  href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ),
            )}
          </nav>
          <a className="inline-flex h-[46px] w-[156px] items-center justify-center gap-6 rounded-sm bg-[#005ead] text-sm font-bold uppercase tracking-wide text-white" href="#contact">
            Contact us <ArrowRight aria-hidden="true" className="size-5" strokeWidth={2} />
          </a>
        </div>
      </div>
    </header>
  );
}

function RobotsDropdown() {
  return (
    <div className="group relative flex h-[60px] items-center">
      <a
        className="flex h-full items-center border-b-[3px] border-transparent px-0 pt-[3px] text-[#005ead] transition group-hover:border-[#005ead]"
        href="#robots"
      >
        Robots
      </a>
      <div className="invisible absolute left-1/2 top-[60px] z-50 w-[400px] -translate-x-1/2 rounded-xl bg-white opacity-0 shadow-[0_18px_45px_rgba(1,31,64,.22)] transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="p-5">
          <a href="#robots" className="group/link flex items-center gap-3 text-xl font-bold text-[#011f40]">
            Robot Overview
            <ArrowRight aria-hidden="true" className="size-5 transition group-hover/link:translate-x-1" strokeWidth={2} />
          </a>
          <p className="mt-2 text-xs leading-5 text-[#7b8794]">
            Explore ANSCER&apos;s robotic platforms for flexible industrial automation
          </p>
        </div>
        <div className="border-t border-[#e7eaf0] px-5 pb-7 pt-4">
          <p className="text-[10px] font-medium uppercase tracking-wide text-[#9aa3ad]">Robot Series</p>
          <div className="mt-6 grid grid-cols-2 gap-x-14 gap-y-7 text-base font-medium text-[#011f40]">
            <a className="transition hover:text-[#005ead]" href="#robots">
              AR Series
            </a>
            <a className="transition hover:text-[#005ead]" href="#robots">
              PSR Series
            </a>
            <a className="transition hover:text-[#005ead]" href="#robots">
              AGV Series
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
