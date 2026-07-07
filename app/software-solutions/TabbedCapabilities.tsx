"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type Ref } from "react";
import { FadeLeft, FadeRight } from "../components/animation";
import { imagePath } from "../components/home/assets";

type CapabilityItem = {
  title: string;
  copy: string;
  image: string;
};

const layeredCapabilityImages: Record<
  string,
  { background: string; foreground: string; edge?: "left" | "right" }
> = {
  "Intelligent Task Allocation": {
    background: "software_allocation_bg.png",
    foreground: "software_allocation_img.png",
  },
  "Mission Scheduling & Execution": {
    background: "software_scheduling_bg.png",
    foreground: "software_scheduling_img.png",
    edge: "right",
  },
  "Real-Time Monitoring & Control": {
    background: "software_monitoring_bg.png",
    foreground: "software_monitoring_img.png",
  },
};

export function TabbedCapabilities({
  eyebrow,
  title,
  items,
  pale = false,
  variant = "cards",
}: {
  eyebrow: string;
  title: string;
  items: CapabilityItem[];
  pale?: boolean;
  variant?: "accordion" | "cards";
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [accordionHeight, setAccordionHeight] = useState<number>();
  const accordionListRef = useRef<HTMLDivElement>(null);
  const activeItem = items[activeIndex];

  useEffect(() => {
    if (variant !== "accordion" || !accordionListRef.current) return;

    const accordionList = accordionListRef.current;
    const updateAccordionHeight = () => {
      setAccordionHeight(
        Math.round(accordionList.getBoundingClientRect().height),
      );
    };

    updateAccordionHeight();

    const resizeObserver = new ResizeObserver(updateAccordionHeight);
    resizeObserver.observe(accordionList);

    return () => resizeObserver.disconnect();
  }, [variant]);

  return (
    <section
      className={`${pale ? "bg-[#e6ebf0]" : "bg-[#fafafa]"} py-10 md:py-20`}
    >
      <style>{`
        @keyframes fade-image {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slide-card {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-image {
          animation: fade-image 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-card {
          animation: slide-card 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes layered-foreground-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.2); }
        }
        .animate-layered-foreground {
          animation: layered-foreground-zoom 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .layered-foreground-left {
          transform-origin: top left;
        }
        .layered-foreground-right {
          transform-origin: top right;
        }
      `}</style>
      <div className="site-container">
        <p className="text-[12px] md:text-base font-medium uppercase tracking-[0.14em] text-[#005ead]">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-[28px] md:text-4xl font-bold capitalize leading-tight">
          {title}
        </h2>

        {variant === "accordion" ? (
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <FadeRight>
              <AccordionList
                listRef={accordionListRef}
                items={items}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                aspectRatio="aspect-[4/3]"
                listClassName="min-h-[980px] sm:min-h-[980px] md:min-h-[1080px] lg:min-h-0"
              />
            </FadeRight>
            <FadeLeft>
              <div
                className="relative hidden w-full overflow-hidden rounded-[18px] bg-[#dce7ef] lg:block"
                style={
                  accordionHeight ? { height: accordionHeight } : undefined
                }
              >
                {items.map((item, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <div
                      key={item.title}
                      aria-hidden={!isActive}
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <CapabilityImage item={item} isActive={isActive} />
                    </div>
                  );
                })}
              </div>
            </FadeLeft>
          </div>
        ) : (
          <>
            <FadeRight className="mt-10 lg:hidden">
              <AccordionList
                items={items}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                mobileOnly
                aspectRatio="aspect-[721/464]"
                listClassName="min-h-[600px] sm:min-h-[680px] md:min-h-[820px]"
              />
            </FadeRight>

            <div className="mt-10 hidden gap-4 lg:grid lg:grid-cols-2 lg:items-center">
              <FadeRight className="flex max-w-100 flex-col gap-3">
                {items.map((item, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      type="button"
                      key={item.title}
                      onClick={() => setActiveIndex(index)}
                      className={`cursor-pointer rounded-xl p-5 text-left text-xl transition-colors duration-300 ${
                        isActive
                          ? "bg-white font-semibold text-[#005ead]"
                          : "bg-white font-normal text-[#011f40] hover:bg-white/90"
                      }`}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </FadeRight>

              <FadeLeft className="relative mt-8 lg:mt-0 mb-12">
                <div className="relative aspect-[721/464] w-full overflow-visible">
                  {items.map((item, index) => (
                    <div
                      key={item.title}
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                        activeIndex === index
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-[0.98] pointer-events-none"
                      }`}
                    >
                      <Image
                        src={`${imagePath}${item.image}`}
                        alt={item.title}
                        fill
                        quality={95}
                        sizes="(max-width: 1024px) 100vw, 720px"
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>
                  ))}

                  {/* Floating info card matching Webflow's overlap effect */}
                  <div
                    key={`card-${activeIndex}`}
                    className="absolute -bottom-10 -right-6 z-10 w-90 max-w-[calc(100%-3rem)] rounded-xl bg-white p-5 shadow-[0_12px_30px_rgba(1,31,64,.12)] animate-card"
                    style={{ animationDelay: "0.1s", opacity: 0 }}
                  >
                    <h3 className="text-lg font-semibold text-[#005ead]">
                      {activeItem.title}
                    </h3>
                    <p className="mt-3 leading-normal text-brand-charcoal text-base">
                      {activeItem.copy}
                    </p>
                  </div>
                </div>
              </FadeLeft>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function AccordionList({
  listRef,
  items,
  activeIndex,
  setActiveIndex,
  mobileOnly = false,
  aspectRatio = "aspect-[4/3]",
  listClassName = "",
}: {
  listRef?: Ref<HTMLDivElement>;
  items: CapabilityItem[];
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
  mobileOnly?: boolean;
  aspectRatio?: string;
  listClassName?: string;
}) {
  function handleSelect(index: number) {
    if (activeIndex === index) return;
    setActiveIndex(index);
  }

  return (
    <div ref={listRef} className={`flex flex-col gap-3 ${listClassName}`}>
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <article
            key={item.title}
            id={`software-accordion-item-${index}`}
            className={`shrink-0 transition-all duration-500 ease-in-out scroll-mt-32 overflow-hidden rounded-[12px] bg-white px-5 shadow-sm ${
              isActive ? "py-4 lg:py-6" : "py-3 lg:py-5"
            }`}
          >
            <button
              type="button"
              onClick={() => handleSelect(index)}
              aria-expanded={isActive}
              className={`flex w-full items-center justify-between gap-4 text-left outline-none transition focus-visible:ring-3 focus-visible:ring-[#005ead]/30 ${
                isActive ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <span className="text-base font-semibold leading-5 text-[#005ead] md:text-xl md:leading-7">
                {item.title}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={`size-5 shrink-0 text-[#011f40] transition-opacity duration-300 ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                strokeWidth={2}
              />
            </button>

            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isActive
                  ? "grid-rows-[1fr] opacity-100 mt-2"
                  : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pt-[12px]">
                  <p className="max-w-140 text-sm leading-4 text-[#3a3a3a] md:text-base md:leading-6">
                    {item.copy}
                  </p>
                  <div
                    className={`relative mt-4 ${aspectRatio} w-full overflow-hidden rounded-[12px] bg-[#dce7ef] ${
                      mobileOnly ? "" : "lg:hidden"
                    }`}
                  >
                    <CapabilityImage item={item} isActive={isActive} />
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function CapabilityImage({
  item,
  isActive,
}: {
  item: CapabilityItem;
  isActive: boolean;
}) {
  const layeredImage = layeredCapabilityImages[item.title];

  if (!layeredImage) {
    return (
      <Image
        src={`${imagePath}${item.image}`}
        alt={item.title}
        fill
        sizes="(max-width: 1024px) 100vw, 720px"
        className="object-cover object-[50%_20%]"
      />
    );
  }

  const isRightEdge = layeredImage.edge === "right";
  const foregroundPlacement = isRightEdge
    ? "right-[1%] layered-foreground-right"
    : "left-[-1%] layered-foreground-left";

  return (
    <>
      <Image
        src={`${imagePath}${layeredImage.background}`}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 720px"
        className="object-cover object-[50%_20%]"
      />
      <div
        className={`absolute top-[1%] h-full w-full ${foregroundPlacement} ${
          isActive ? "animate-layered-foreground" : ""
        }`}
      >
        <Image
          src={`${imagePath}${layeredImage.foreground}`}
          alt={item.title}
          fill
          sizes="(max-width: 1024px) 100vw, 720px"
          className="object-cover object-[50%_20%]"
        />
      </div>
    </>
  );
}
