"use client";

import { useState } from "react";
import Image from "next/image";
import { imagePath } from "../components/home/assets";

/* ─── Exact SVG icons from anscer.com ─── */
function MoveIcon({ active }: { active: boolean }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill={active ? "#005EAD" : "#011F40"} fillOpacity={active ? 1 : 0.05} className="transition-colors duration-300" />
      <path d="M20.6901 11.8168C20.473 11.7178 20.2371 11.6665 19.9984 11.6665C19.7598 11.6665 19.5239 11.7178 19.3068 11.8168L12.1651 15.0668C12.0172 15.132 11.8915 15.2388 11.8032 15.3742C11.715 15.5096 11.668 15.6677 11.668 15.8293C11.668 15.9909 11.715 16.149 11.8032 16.2844C11.8915 16.4198 12.0172 16.5266 12.1651 16.5918L19.3151 19.8501C19.5322 19.9492 19.7681 20.0004 20.0068 20.0004C20.2454 20.0004 20.4813 19.9492 20.6984 19.8501L27.8484 16.6001C27.9963 16.5349 28.122 16.4281 28.2103 16.2928C28.2986 16.1574 28.3455 15.9992 28.3455 15.8376C28.3455 15.676 28.2986 15.5179 28.2103 15.3825C28.122 15.2471 27.9963 15.1403 27.8484 15.0751L20.6901 11.8168Z" stroke={active ? "white" : "#011F40"} strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
      <path d="M11.668 20C11.6676 20.1594 11.7129 20.3155 11.7986 20.45C11.8842 20.5844 12.0067 20.6914 12.1513 20.7583L19.318 24.0167C19.534 24.1145 19.7684 24.1651 20.0055 24.1651C20.2426 24.1651 20.477 24.1145 20.693 24.0167L27.843 20.7667C27.9905 20.7004 28.1155 20.5926 28.2028 20.4564C28.2901 20.3203 28.3359 20.1617 28.3346 20" stroke={active ? "white" : "#011F40"} strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
      <path d="M11.668 24.1665C11.6676 24.3259 11.7129 24.4821 11.7986 24.6165C11.8842 24.7509 12.0067 24.8579 12.1513 24.9248L19.318 28.1832C19.534 28.281 19.7684 28.3316 20.0055 28.3316C20.2426 28.3316 20.477 28.281 20.693 28.1832L27.843 24.9332C27.9905 24.8669 28.1155 24.7591 28.2028 24.6229C28.2901 24.4868 28.3359 24.3282 28.3346 24.1665" stroke={active ? "white" : "#011F40"} strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
    </svg>
  );
}

function PickIcon({ active }: { active: boolean }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill={active ? "#005EAD" : "#011F40"} fillOpacity={active ? 1 : 0.05} className="transition-colors duration-300" />
      <path d="M20 12.5H14.1667C13.7246 12.5 13.3007 12.6756 12.9882 12.9882C12.6756 13.3007 12.5 13.7246 12.5 14.1667V25.8333C12.5 26.2754 12.6756 26.6993 12.9882 27.0118C13.3007 27.3244 13.7246 27.5 14.1667 27.5H25.8333C26.2754 27.5 26.6993 27.3244 27.0118 27.0118C27.3244 26.6993 27.5 26.2754 27.5 25.8333V20" stroke={active ? "white" : "#011F40"} strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
      <path d="M21.6667 22.5002H17.5V18.3335" stroke={active ? "white" : "#011F40"} strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
      <path d="M23.332 12.5H27.4987V16.6667" stroke={active ? "white" : "#011F40"} strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
      <path d="M27.5 12.5L17.5 22.5" stroke={active ? "white" : "#011F40"} strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
    </svg>
  );
}

function WaitIcon({ active }: { active: boolean }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill={active ? "#005EAD" : "#011F40"} fillOpacity={active ? 1 : 0.05} className="transition-colors duration-300" />
      <path d="M17.5 12.5H14.1667C13.2462 12.5 12.5 13.2462 12.5 14.1667V17.5C12.5 18.4205 13.2462 19.1667 14.1667 19.1667H17.5C18.4205 19.1667 19.1667 18.4205 19.1667 17.5V14.1667C19.1667 13.2462 18.4205 12.5 17.5 12.5Z" stroke={active ? "white" : "#011F40"} strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
      <path d="M15.832 19.1665V22.4998C15.832 22.9419 16.0076 23.3658 16.3202 23.6783C16.6327 23.9909 17.0567 24.1665 17.4987 24.1665H20.832" stroke={active ? "white" : "#011F40"} strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
      <path d="M25.832 20.8335H22.4987C21.5782 20.8335 20.832 21.5797 20.832 22.5002V25.8335C20.832 26.754 21.5782 27.5002 22.4987 27.5002H25.832C26.7525 27.5002 27.4987 26.754 27.4987 25.8335V22.5002C27.4987 21.5797 26.7525 20.8335 25.832 20.8335Z" stroke={active ? "white" : "#011F40"} strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
    </svg>
  );
}

function DropIcon({ active }: { active: boolean }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill={active ? "#005EAD" : "#011F40"} fillOpacity={active ? 1 : 0.05} className="transition-colors duration-300" />
      <path d="M25 23.3332L28.3333 19.9998L25 16.6665" stroke={active ? "white" : "#011F40"} strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
      <path d="M15.0013 16.6665L11.668 19.9998L15.0013 23.3332" stroke={active ? "white" : "#011F40"} strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
      <path d="M22.0846 13.3335L17.918 26.6668" stroke={active ? "white" : "#011F40"} strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
    </svg>
  );
}

const steps = [
  { title: "Move", copy: "Navigate the robot between locations.",                                 Icon: MoveIcon, image: "img-1.png" },
  { title: "Pick", copy: "Execute material pickup operations.",                                    Icon: PickIcon, image: "img-2.png" },
  { title: "Wait", copy: "Pause operations based on process conditions or timing requirements.",   Icon: WaitIcon, image: "img-3.png" },
  { title: "Drop", copy: "Perform material delivery or unloading actions.",                       Icon: DropIcon, image: "img-4.png" },
];

/* 
  The Webflow layout has:
  - A dedicated 48px-wide "timeline-navigation-track" column on the far left
  - Each step card aligned beside its corresponding dot, height ~100px
  - Active dot = blue filled 11.33px circle + 23px blue ring around it
  - Inactive dot = dark 11.33px circle at 0.2 opacity
  - Connecting lines between dots turn blue (#005EAD) for completed/active, grey (#011F40 at 0.2) for inactive
  - Active card: light blue bg (rgba(0,94,173,0.10)), 12px radius, full width
  - Inactive card: transparent bg, description hidden
*/
export function InteractiveWorkflow() {
  const [active, setActive] = useState(0);

  // Heights that mirror the Webflow design:
  // line-top: 30px, step-node: 24px, connecting-line: 80px, line-bottom: 30px
  // Each card is 28px padding top+bottom + ~44px content = ~100px total
  const LINE_TOP = 30;
  const DOT_HEIGHT = 24;
  const LINE_H = 80; // connecting line between dots, matches card height

  return (
    <section className="bg-[#fafafa] py-16 md:py-20">
      <div className="site-container">

        {/* ── Top two-column header (matches Webflow exactly) ── */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-[16px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
              WORKFLOW CONFIGURATION
            </p>
            <h2 className="mt-3 text-[32px] font-bold leading-tight text-[#011f40] md:text-[36px]">
              Build Robot Workflows Without Writing Code
            </h2>
          </div>
          <p className="text-base leading-7 text-[#333333]">
            The Process Flow Manager enables users to create robotic workflows through a drag-and-drop,
            block-based interface, allowing teams to automate processes without complex programming.
          </p>
        </div>

        {/* ── Main interactive area ── */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">

          {/* ── Left: stepper track + cards ── */}
          <div className="flex flex-col w-full">
            {steps.map((step, i) => {
              const isActive = active === i;
              const isPast = i < active;
              const padTop = isActive ? 28 : 12;
              const padBottom = isActive ? 28 : 12;

              return (
                <div
                  key={step.title}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => e.key === "Enter" && setActive(i)}
                  className="flex cursor-pointer group focus:outline-none"
                >
                  {/* Timeline Track Column — dot vertically centered to icon */}
                  <div className="relative flex flex-col items-center w-12 flex-shrink-0">
                    {/* Top line segment — same height as card padding-top + half icon (20px) */}
                    <div
                      className={`w-[2px] transition-colors duration-300 ${
                        i === 0
                          ? "bg-transparent"
                          : (i <= active ? "bg-[#005ead]" : "bg-[#011f40]/20")
                      }`}
                      style={{ height: `${padTop + 20}px` }}
                    />

                    {/* Dot — aligns with the vertical center of the 40px icon */}
                    <div className="flex items-center justify-center w-full flex-shrink-0" style={{ height: '0px' }}>
                      <div className="relative flex items-center justify-center size-6">
                        {isActive && (
                          <div className="absolute inset-0 rounded-full border border-[#005ead] animate-in fade-in zoom-in-95 duration-200" />
                        )}
                        <div
                          className={`rounded-full transition-all duration-300 ${
                            isActive || isPast
                              ? "size-3 bg-[#005ead]"
                              : "size-3 bg-[#011f40]/20 group-hover:bg-[#011f40]/40"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Bottom line segment — fills remaining space */}
                    <div
                      className={`w-[2px] flex-1 transition-colors duration-300 ${
                        i === steps.length - 1
                          ? "bg-transparent"
                          : (i < active ? "bg-[#005ead]" : "bg-[#011f40]/20")
                      }`}
                    />
                  </div>

                  {/* Card Content Column */}
                  <div
                    className={`flex-1 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-[rgba(0,94,173,0.10)]"
                        : "bg-transparent hover:bg-black/[0.03]"
                    }`}
                    style={{ padding: `${padTop}px 20px ${padBottom}px` }}
                  >
                    <div className="flex items-center gap-3.5">
                      <step.Icon active={isActive} />
                      <h3
                        className={`text-[16px] font-medium transition-colors duration-200 ${
                          isActive ? "text-[#005ead]" : "text-[#011f40]"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isActive ? "mt-2.5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pl-[54px] text-sm leading-6 text-[#333333]">{step.copy}</p>
                        
                        {/* Inline Image for Mobile (< lg) */}
                        <div className="mt-4 overflow-hidden rounded-xl bg-[#0f1724] shadow-md lg:hidden">
                          <div className="relative aspect-[16/10] w-full">
                            <Image
                              src={`${imagePath}${step.image}`}
                              alt={`${step.title} workflow – Process Flow Manager`}
                              fill
                              sizes="(max-width: 1024px) 100vw, 600px"
                              className="object-cover object-top"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Right: app screenshot image (Desktop only) ── */}
          <div className="hidden lg:block overflow-hidden rounded-2xl bg-[#0f1724] shadow-2xl">
            <div className="relative aspect-[16/10] w-full">
              <Image
                key={active}
                src={`${imagePath}${steps[active].image}`}
                alt={`${steps[active].title} workflow – Process Flow Manager`}
                fill
                sizes="(max-width: 1024px) 100vw, 750px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
