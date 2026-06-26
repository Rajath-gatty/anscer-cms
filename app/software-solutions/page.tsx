import type { Metadata } from "next";
import Image from "next/image";
import { imagePath } from "../components/home/assets";
import { BlueCta, FeatureTile, MarketingHero, SectionHeader } from "../components/marketing/MarketingPages";

export const metadata: Metadata = {
  title: "Software Solutions | ANSCER Robotics",
  description: "Connect robots, workflows, and operations in one platform.",
};

const softwareSections = [
  {
    eyebrow: "Fleet Management Software",
    title: "Coordinate Robots, Missions, and Traffic",
    copy: "Manage fleets, monitor missions, and keep autonomous operations synchronized from one central platform.",
    image: "Frame-427322849-2.jpg",
    cards: ["Task orchestration", "Traffic management", "Live robot monitoring"],
  },
  {
    eyebrow: "Business Application",
    title: "Connect Automation With Operations",
    copy: "Bridge robot workflows with business applications, ERP, WMS, MES, and industrial systems.",
    image: "Frame-1321317433.jpg",
    cards: ["ERP integration", "Warehouse workflows", "Industry-ready interfaces"],
  },
  {
    eyebrow: "Process Flow Manager",
    title: "Build No-Code Automation Workflows",
    copy: "Configure process flows, business logic, and work instructions that guide material movement.",
    image: "1369b1d9491c23604e01cf3a0ed8ab6fd984e0e3.jpg",
    cards: ["Workflow configuration", "No-code logic", "Operational control"],
  },
  {
    eyebrow: "Analytics",
    title: "Turn Robot Data Into Decisions",
    copy: "Understand utilization, throughput, and operating trends through reports and analytics dashboards.",
    image: "Tabletframe.png",
    cards: ["Performance dashboards", "Utilization reports", "Trend insights"],
  },
];

export default function SoftwareSolutionsPage() {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      <MarketingHero
        eyebrow="Software Solutions"
        title="Connect Robots, Workflows, and Operations in One Platform"
        copy="A software ecosystem for fleet management, business applications, process flow management, and analytics."
        image="Desktop---27.jpg"
        cta="Request Demo"
      />
      <section id="content" className="sticky top-[60px] z-20 hidden border-y border-[#dbe4ec] bg-[#fafafa]/95 backdrop-blur md:block">
        <div className="site-container flex h-14 items-center gap-8 text-sm font-semibold">
          {softwareSections.map((section) => (
            <a key={section.eyebrow} href={`#${section.eyebrow.toLowerCase().replaceAll(" ", "-")}`} className="transition hover:text-[#005ead]">
              {section.eyebrow}
            </a>
          ))}
        </div>
      </section>
      {softwareSections.map((section, index) => (
        <section
          id={section.eyebrow.toLowerCase().replaceAll(" ", "-")}
          key={section.eyebrow}
          className={`${index % 2 === 0 ? "bg-[#fafafa]" : "bg-[#e6ebf0]"} scroll-mt-28 py-14 md:py-[56px]`}
        >
          <div className="site-container grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
            <div>
              <SectionHeader eyebrow={section.eyebrow} title={section.title} copy={section.copy} />
              <div className="mt-8 grid gap-4">
                {section.cards.map((card) => (
                  <FeatureTile key={card} title={card} copy="Designed to keep automation visible, configurable, and connected across your operations." />
                ))}
              </div>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-xl bg-white">
              <Image src={`${imagePath}${section.image}`} alt={section.title} fill sizes="(max-width: 1024px) 100vw, 780px" className="object-cover" />
            </div>
          </div>
        </section>
      ))}
      <BlueCta title="Experience automation that understands your operations." copy="Connect robots, workflows, and operational intelligence through ANSCER software." />
    </main>
  );
}
