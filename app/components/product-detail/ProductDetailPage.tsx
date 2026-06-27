"use client";

import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ChevronDown,
  Layers,
  LocateFixed,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { imagePath } from "../home/assets";
import { ProductFaqAccordion } from "../products/ProductFaqAccordion";
import type { ProductDetailData } from "./product-detail-data";

const ProductHeroModel = dynamic(
  () => import("./ProductHeroModel").then((mod) => mod.ProductHeroModel),
  {
    ssr: false,
  },
);

export function ProductDetailPage({ data }: { data: ProductDetailData }) {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      <ProductHero data={data} />
      <ProductTabs hasModules={Boolean(data.modules)} />
      <ProductOverview data={data} />
      <AdvantagesSection data={data} />
      <FeaturesSection data={data} />
      {data.modules ? <ModulesSection data={data} /> : null}
      <ApplicationsSection data={data} />
      <CaseStudiesSection data={data} />
      <FaqSection data={data} />
      <ProductCta data={data} />
    </main>
  );
}

function ProductHero({ data }: { data: ProductDetailData }) {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] pt-10 md:pt-12">
      <div className="site-container flex min-h-[430px] flex-col items-center justify-center text-center md:min-h-[680px]">
        <h1 className="relative z-10 text-[38px] font-bold leading-none tracking-tight md:text-[40px]">
          {data.title}
        </h1>
        <div className="relative mt-7 h-[240px] w-full max-w-[960px] md:h-[430px]">
          {data.backgroundText ? (
            <Image
              src={`${imagePath}${data.backgroundText}`}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className="z-0 object-contain opacity-100"
            />
          ) : null}
          {data.modelUrl ? (
            <div className="absolute inset-0 z-10">
              <ProductHeroModel
                modelUrl={data.modelUrl}
                fallbackImage={data.heroImage}
                title={data.title}
              />
            </div>
          ) : (
            <Image
              src={`${imagePath}${data.heroImage}`}
              alt={data.title}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 760px"
              className="z-10 object-contain drop-shadow-[0_26px_44px_rgba(1,31,64,.16)]"
            />
          )}
        </div>
      </div>
    </section>
  );
}

function ProductTabs({ hasModules }: { hasModules: boolean }) {
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
        <nav className="flex h-[52px] items-center justify-center gap-4 overflow-x-auto text-sm font-normal text-[#3a3a3a] md:gap-14 md:text-base">
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

function ProductOverview({ data }: { data: ProductDetailData }) {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const isImperial = unit === "imperial";

  return (
    <section
      id="overview"
      className="scroll-mt-28 bg-[#fafafa] py-12 md:py-[56px]"
    >
      <div className="site-container grid gap-9 lg:grid-cols-[0.56fr_0.44fr]">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-base">
            Overview
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.15] md:text-4xl">
            {data.subtitle}
          </h2>
          <p className="mt-4 max-w-[620px] text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-[22px]">
            {data.overview}
          </p>
          <div className="relative mt-8 aspect-[1.72] overflow-hidden rounded-[12px] bg-[#e6ebf0]">
            <Image
              src={`${imagePath}${data.overviewImage ?? data.useCases[0]?.image ?? data.heroImage}`}
              alt={`${data.title} overview`}
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="pt-1">
          <div className="mb-7">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-base">
              Key Applications
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {data.applications.map((application) => (
                <span
                  key={application}
                  className="rounded-[4px] bg-[#e6ebf0] px-4 py-1.5 text-xs font-medium text-[#011f40]"
                >
                  {application}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-2 flex items-center justify-between gap-4">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-base">
              Key Specifications
            </p>
            <button
              type="button"
              aria-pressed={isImperial}
              className="flex items-center gap-2 text-xs font-semibold uppercase text-[#011f40]"
              onClick={() => setUnit(isImperial ? "metric" : "imperial")}
            >
              <span
                className={cn(
                  "transition-opacity duration-200",
                  isImperial && "opacity-45",
                )}
              >
                Metric
              </span>
              <span className="relative h-5 w-9 rounded-full bg-[#011f40]">
                <span
                  className={cn(
                    "absolute left-0.5 top-0.5 size-4 rounded-full bg-white transition-transform duration-300 ease-out",
                    isImperial && "translate-x-[18px]",
                  )}
                />
              </span>
              <span
                className={cn(
                  "transition-opacity duration-200",
                  !isImperial && "opacity-45",
                )}
              >
                Imperial
              </span>
            </button>
          </div>
          <dl>
            {data.specs.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-[0.75fr_1fr] border-b border-[#dfe6ee] py-[14px]"
              >
                <dt className="text-[12px] font-semibold uppercase leading-5 text-[#3a3a3a]/65">
                  {spec.label}
                </dt>
                <dd
                  key={`${spec.label}-${unit}`}
                  className="text-base font-medium leading-6 text-[#011f40] transition duration-200 md:text-[18px]"
                >
                  {isImperial ? (spec.imperial ?? spec.value) : spec.value}
                </dd>
              </div>
            ))}
          </dl>
          <a
            className="mt-6 inline-flex items-center gap-3 rounded-[3px] bg-[#005ead] py-[10px] pl-4 pr-2 text-[11px] font-semibold uppercase tracking-wide text-white"
            href="#contact"
          >
            {data.overviewCtaLabel ?? "Product Details"}
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

type ProductAccordionItem = {
  title: string;
  copy: string;
};

function ProductAccordionRows({
  items,
  activeIndex,
  onActiveChange,
  surface = "white",
  titleClassName,
}: {
  items: ProductAccordionItem[];
  activeIndex: number;
  onActiveChange: (index: number) => void;
  surface?: "white" | "muted";
  titleClassName?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <article
            key={item.title}
            className={cn(
              "overflow-hidden rounded-[12px] transition-all duration-300 ease-out",
              surface === "white" ? "bg-white" : "bg-[#fafafa]",
              isOpen
                ? "p-5 shadow-[0_12px_30px_rgba(1,31,64,.08)]"
                : "px-5 py-4 shadow-[0_12px_30px_rgba(1,31,64,.08)]",
            )}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              onClick={() => onActiveChange(index)}
            >
              <h3
                className={cn(
                  "font-semibold text-[#005ead]",
                  titleClassName ?? "text-base md:text-xl",
                )}
              >
                {item.title}
              </h3>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "size-4 shrink-0 transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="mt-4 text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-[22px]">
                  {item.copy}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function AdvantagesSection({ data }: { data: ProductDetailData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAdvantage = data.advantages[activeIndex] ?? data.advantages[0];

  return (
    <section
      id="advantages"
      className="scroll-mt-28 bg-[#e6ebf0] py-12 md:py-[56px]"
    >
      <div className="site-container">
        <div className="max-w-[760px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-base">
            Advantages
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.2] md:text-4xl">
            Why <span className="text-[#005ead]">Choose</span> {data.title}
          </h2>
          <p className="mt-4 max-w-[680px] text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-[22px]">
            {data.advantageIntro ??
              `Choose the ${data.title} to standardize automation with an adaptable platform that reduces complexity, improves throughput, and supports evolving material handling needs.`}
          </p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.48fr_0.52fr] lg:items-start">
          <ProductAccordionRows
            items={data.advantages}
            activeIndex={activeIndex}
            onActiveChange={setActiveIndex}
            surface="white"
          />
          <div className="relative aspect-[1.75] overflow-hidden rounded-[12px] bg-white">
            <Image
              key={activeAdvantage?.title}
              src={`${imagePath}${data.advantageImage ?? data.overviewImage ?? data.heroImage}`}
              alt={`${data.title} advantage`}
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ data }: { data: ProductDetailData }) {
  const icons = [Layers, Workflow, LocateFixed, ShieldCheck];

  return (
    <section
      id="features"
      className="scroll-mt-28 bg-[#fafafa] py-12 md:py-[56px]"
    >
      <div className="site-container">
        <div className="max-w-[760px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-base">
            Features
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.2] md:text-4xl">
            Engineered For <span className="text-[#005ead]">Intelligent</span>{" "}
            Material Handling
          </h2>
          <p className="mt-4 max-w-[690px] text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-[22px]">
            The {data.title} combines intelligent navigation with purpose-built
            hardware to automate material handling while enabling rapid
            deployment and scalable operations.
          </p>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {data.features.slice(0, 2).map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              copy={feature.copy}
              Icon={icons[index]}
            />
          ))}
          <article className="relative row-span-2 min-h-[320px] overflow-hidden rounded-[12px] bg-[#011f40] p-5 text-white lg:min-h-[380px]">
            <Image
              src={`${imagePath}Frame-1321317289.jpg`}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 430px"
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,31,64,.04),rgba(1,31,64,.86))]" />
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-3xl font-bold leading-[1.1]">
                Ready To Automate Your Workflow?
              </h3>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-3 rounded-[3px] bg-[#005ead] py-[10px] pl-4 pr-2 text-[11px] font-semibold uppercase tracking-wide text-white"
              >
                Talk to an Expert{" "}
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </article>
          {data.features.slice(2, 4).map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              copy={feature.copy}
              Icon={icons[index + 2]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  copy,
  Icon,
}: {
  title: string;
  copy: string;
  Icon: typeof Layers;
}) {
  return (
    <article className="min-h-[170px] rounded-[12px] bg-[#FFFFFF] p-5">
      <Icon
        aria-hidden="true"
        className="size-8 text-[#005ead]"
        strokeWidth={1.7}
      />
      <h3 className="mt-5 text-base font-semibold leading-5 text-[#005ead] md:text-xl md:leading-7">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-5 text-[#3a3a3a]">{copy}</p>
    </article>
  );
}

function ModulesSection({ data }: { data: ProductDetailData }) {
  const modules = data.modules ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const active = modules[activeIndex] ?? modules[0];
  const activeModuleImage = active?.image ?? data.heroImage;
  const baseImage = data.modulesBaseImage;
  const isLayeredModule = Boolean(baseImage && active?.image);

  if (!modules.length || !active) return null;

  return (
    <section
      id="attachments"
      className="relative scroll-mt-28 overflow-hidden bg-[#e6ebf0] py-16 md:py-[84px]"
    >
      {data.backgroundText ? (
        <img
          src={`${imagePath}${data.backgroundText}`}
          alt=""
          className="pointer-events-none absolute left-1/2 top-2/3 z-0 h-[220px] w-[600px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.72]"
        />
      ) : null}
      <div className="site-container relative z-10">
        <div className="max-w-[760px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-base">
            Attachments
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.2] md:text-4xl">
            {data.title} <span className="text-[#005ead]">Compatible</span> With
            The Top Modules
          </h2>
          <p className="mt-4 max-w-[670px] text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-[22px]">
            The {data.title} seamlessly integrates with leading top modules and
            attachments, enabling flexible material handling for diverse
            warehouse and industrial operations.
          </p>
        </div>
	        <div className="mt-10 grid gap-8 lg:grid-cols-[0.25fr_0.5fr_0.25fr] lg:items-center">
	          <div className="flex flex-col gap-2 text-[12px] font-medium text-[#3a3a3a]">
	            {modules.map((module, index) => (
	              <button
	                key={module.title}
	                type="button"
	                className={cn(
	                  "px-2 py-1 text-left transition-colors hover:text-[#005ead]",
	                  activeIndex === index && "font-bold text-[#005ead]",
	                )}
	                onClick={() => setActiveIndex(index)}
	              >
                {module.title}
              </button>
            ))}
          </div>
          <div className="relative mx-auto h-[200px] w-[300px]">

            {baseImage ? (
              <Image
                src={`${imagePath}${baseImage}`}
	                alt=""
	                fill
	                sizes="(max-width: 1024px) 100vw, 540px"
	                className="z-10 translate-y-28 object-contain"
	              />
	            ) : null}
            <Image
              key={activeModuleImage}
              src={`${imagePath}${activeModuleImage}`}
              alt={active.title}
              fill
              sizes="(max-width: 1024px) 100vw, 240px"
              className={cn(
                "z-20 object-contain transition-opacity duration-300",
                isLayeredModule && "object-top",
              )}
            />
          </div>
	          <div className="pt-10 lg:pl-10 lg:pt-48 xl:pl-16">
	            <h3 className="text-xl font-semibold text-[#005ead]">
	              {active.title}
            </h3>
            <p className="mt-3 text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-[22px]">
              {active.copy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ApplicationsSection({ data }: { data: ProductDetailData }) {
  const items = data.applicationRows ?? data.useCases;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0];

  return (
    <section
      id="applications"
      className="scroll-mt-28 bg-[#fafafa] py-12 md:py-[56px]"
    >
      <div className="site-container">
        <div className="max-w-[760px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-base">
            Applications
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.2] md:text-4xl">
            Built For Smart <span className="text-[#005ead]">Material</span> Movement
          </h2>
          <p className="mt-4 max-w-[670px] text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-[22px]">
            Designed to automate internal transport across warehouses,
            production floors, and distribution environments with safe and
            efficient autonomous navigation.
          </p>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-[0.55fr_0.45fr]">
          <article className="relative aspect-[1.43] overflow-hidden rounded-[12px] bg-[#011f40] text-white">
            <Image
              key={active?.image}
              src={`${imagePath}${active?.image ?? data.overviewImage ?? data.heroImage}`}
              alt={active?.title ?? "Application"}
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover opacity-85 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-[linear-gradient(360deg,rgba(0,0,0,.86),rgba(255,255,255,0)_60%)]" />
            <h3 className="absolute bottom-6 left-6 text-2xl font-semibold">
              {active?.title}
            </h3>
          </article>
          <ProductAccordionRows
            items={items}
            activeIndex={activeIndex}
            onActiveChange={setActiveIndex}
            surface="muted"
            titleClassName="text-sm"
          />
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection({ data }: { data: ProductDetailData }) {
  return (
    <section
      id="case-studies"
      className="scroll-mt-28 bg-[#fafafa] py-12 md:py-[56px]"
    >
      <div className="site-container">
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead]">
          Case Studies
        </p>
        <h2 className="mt-3 text-[28px] font-bold leading-[1.2] md:text-4xl">
          {data.title} <span className="text-[#005ead]">Success</span> Stories
        </h2>
        <p className="mt-4 max-w-[700px] text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-[22px]">
          Discover how manufacturers, warehouses, and industrial facilities use
          ANSCER robots to improve workflow efficiency and reduce manual
          handling.
        </p>
        <article className="relative mt-8 aspect-[2.04] overflow-hidden rounded-[12px] bg-[#011f40] text-white">
          <Image
            src={`${imagePath}${data.caseStudyImage ?? "case-study-manufacturing.jpg"}`}
            alt="Manufacturing case study"
            fill
            sizes="100vw"
            className="object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,31,64,.48),rgba(1,31,64,.08))]" />
          <h3 className="absolute left-7 top-7 text-3xl font-bold">
            Manufacturing
          </h3>
          <div className="absolute bottom-7 right-7 w-[270px] rounded-[12px] bg-white p-5 text-[#011f40]">
            <p className="text-xl font-bold text-[#66bd6a]">
              Schneider
              <br />
              Electric
            </p>
            <p className="mt-4 text-xs leading-5 text-[#3a3a3a]">
              Address the change and scale of your warehouse operations with
              robotic automation.
            </p>
            <a
              className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-[3px] bg-[#005ead] py-3 text-[11px] font-semibold uppercase text-white"
              href="#"
            >
              Read Their Story{" "}
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

function FaqSection({ data }: { data: ProductDetailData }) {
  return (
    <section id="faqs" className="scroll-mt-28 bg-[#fafafa] py-14">
      <div className="site-container grid gap-4 md:grid-cols-[0.6fr_1fr] xl:grid-cols-[0.5fr_1fr]">
        <div>
          <h2 className="mt-5 text-[32px] font-bold leading-9 text-[#011f40]">
            FAQs
          </h2>
          <p className="mt-4 max-w-[380px] text-base leading-6 text-[#3a3a3a]">
            We&apos;ve heard it all - here&apos;s what people are really asking
            behind the scenes.
          </p>
        </div>
        <ProductFaqAccordion items={data.faqs} />
      </div>
    </section>
  );
}

function ProductCta({ data }: { data: ProductDetailData }) {
  return (
    <section className="relative overflow-hidden bg-[#005ead] py-20 text-white">
      <Image
        src={`${imagePath}footer-banner.png`}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[#005ead]/60" />
      <div className="site-container relative z-10">
        <h2 className="max-w-[760px] text-[40px] font-semibold leading-[1.1] md:text-[60px]">
          {data.ctaTitle ??
            `Know More About The ${data.title.replaceAll(" ", "")}`}
        </h2>
        <p className="mt-5 max-w-[560px] text-sm leading-6 text-white/85 md:text-lg">
          Access detailed specifications, features, and performance data for the{" "}
          {data.title} in one compact product datasheet.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-[3px] bg-[#0048ad] py-[13px] pl-5 pr-2 text-xs font-semibold uppercase tracking-wide text-white"
          >
            Download Product Datasheet{" "}
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
          <Link
            href={`/${data.seriesSlug}`}
            className="inline-flex items-center gap-3 rounded-[3px] border border-white/50 py-[13px] pl-5 pr-2 text-xs font-semibold uppercase tracking-wide text-white"
          >
            Back to {data.seriesLabel}{" "}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
