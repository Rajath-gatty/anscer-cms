import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  LayoutGrid,
  Network,
  ShieldCheck,
  Layers,
  ExternalLink,
  Code,
  UserCircle2,
  TrendingUp,
  Expand,
  PlugZap,
} from "lucide-react";
import { imagePath } from "../components/home/assets";
import { TabbedCapabilities } from "./TabbedCapabilities";
import { InteractiveWorkflow } from "./InteractiveWorkflow";
import { AnalyticsSection } from "./AnalyticsSection";
import { AnalyticsBenefitsSection } from "./AnalyticsBenefitsSection";
import { SoftwareTabs } from "./SoftwareTabs";
import { ScrollReveal } from "../components/home/ScrollReveal";

export const metadata: Metadata = {
  title: "Software Solutions | ANSCER Robotics",
  description:
    "ANSCER software transforms autonomous mobile robots into synchronized, facility-wide operations.",
};

const fleetBenefits: {
  title: string;
  copy: string;
  icon: LucideIcon;
  isActive?: boolean;
  position: string;
}[] = [
  {
    title: "Centralized Fleet Control",
    copy: "Manage multiple robots and workflows from a single unified platform.",
    icon: Network,
    position: "left-[0%] top-[89px]",
  },
  {
    title: "Scalable Automation",
    copy: "Easily expand robot fleets and operational workflows as facility requirements grow.",
    icon: Expand,
    position: "left-[33.08%] top-[179px]",
  },
  {
    title: "Flexible Integration",
    copy: "Supports integration with MES, WMS, ERP, and other industrial software systems.",
    icon: PlugZap,
    position: "left-[64.62%] top-[89px]",
  },
  {
    title: "Enhanced Safety",
    copy: "Controlled robot traffic flow reduces congestion and improves operational safety within shared environments.",
    icon: ShieldCheck,
    position: "left-[0%] top-[370px]",
  },
  {
    title: "User-Friendly Operation",
    copy: "The intuitive web-based interface simplifies fleet management for operators and supervisors without requiring advanced technical expertise.",
    icon: LayoutGrid,
    position: "left-[32.31%] top-[456px]",
  },
  {
    title: "Improved Operational Efficiency",
    copy: "Optimize robot utilization and availability through automated opportunistic charging and intelligent task scheduling.",
    icon: Gauge,
    position: "left-[64.62%] top-[376px]",
  },
];

const fleetCapabilities = [
  {
    title: "Multi-Robot Traffic Control",
    copy: "Coordinate and manage the movement of multiple robots operating simultaneously within the same environment. The ANSCER FMS intelligently controls robot traffic, optimizes routing paths, prevents congestion, and ensures safe navigation throughout the facility.",
    image: "Frame-1321317434.jpg",
  },
  {
    title: "Intelligent Task Allocation",
    copy: "Automatically assign transport missions and operational tasks to available robots based on factors such as robot location, battery status, workload, and task priority.",
    image: "Frame-1321317429-1.jpg",
  },
  {
    title: "Charging Management",
    copy: "Maintain continuous robot availability with automated charging management. The system monitors battery levels and autonomously dispatches robots to charging stations when required.",
    image: "Frame-1321317427.jpg",
  },
  {
    title: "Mission Scheduling & Execution",
    copy: "Configure, schedule, and monitor robot missions through a centralized management interface with priorities and execution tracking across the fleet.",
    image: "Frame-1321317431-1.jpg",
  },
  {
    title: "Autonomous Fleet Orchestration",
    copy: "Manage robot operations autonomously across production lines, warehouses, staging zones, and logistics areas to keep material flow uninterrupted.",
    image: "Frame-1321317432.jpg",
  },
  {
    title: "Real-Time Monitoring & Control",
    copy: "Gain complete visibility into fleet performance through live dashboards and operational monitoring tools for status, missions, traffic, and system health.",
    image: "Frame-1321317430-1.jpg",
  },
  {
    title: "Web-Based User Interface",
    copy: "Access the ANSCER FMS through a modern browser-based interface without specialized software installation.",
    image: "Frame-1321317428.jpg",
  },
];

const businessCapabilities = [
  {
    title: "Workflow Orchestration",
    copy: "Configure and manage operational workflows with ease. The platform translates business processes into structured robotic task sequences.",
    image: "Rectangle-18010.jpg",
  },
  {
    title: "Industry-Specific Customization",
    copy: "Adapt workflows to meet the operational requirements of Electrical & Electronics, Automotive, Textile, Warehousing & 3PL, and Pharmaceuticals.",
    image: "Rectangle-18007-1.jpg",
  },
  {
    title: "Intuitive User Experience",
    copy: "Simplify automation for operators with user-friendly interfaces, calling stations, dashboards, and APIs that enable single-click task execution.",
    image: "Rectangle-18008.jpg",
  },
  {
    title: "Task Abstraction",
    copy: "Convert high-level operational commands into executable robotic actions, including navigation, routing, material handling, and load transfers.",
    image: "Rectangle-18009.jpg",
  },
];

const processBenefitCards = [
  {
    title: "Flexible Workflow Configuration",
    copy: "Create and modify process flows quickly to adapt to changing operational requirements.",
    icon: "Frame-1321316939.svg",
    wide: false,
  },
  {
    title: "Industry-Specific Adaptability",
    copy: "Support diverse material handling workflows across manufacturing, warehousing, and logistics environments.",
    icon: "Frame-1321316939-4.svg",
    wide: false,
  },
  {
    title: "Simplified Automation",
    copy: "Transform complex operational activities into easy-to-manage robotic workflows.",
    icon: "Frame-1321316939-3.svg",
    wide: false,
  },
  {
    title: "Scalable Operations",
    copy: "Standardize and replicate workflows across multiple plants, production lines, or facilities.",
    icon: "Frame-1321316938.svg",
    wide: false,
  },
  {
    title: "Reduced Operational Dependency",
    copy: "Minimize manual coordination and improve process consistency through automated task execution.",
    icon: "Frame-1321316951.svg",
    wide: true,
  },
] as const;

export default function SoftwareSolutionsPage() {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      <SoftwareHero />
      <SoftwareTabs />
      <FleetManagementSection />
      <TabbedCapabilities
        eyebrow="Key Capabilities"
        title="Core Fleet Management Capabilities"
        items={fleetCapabilities}
        pale={true}
        variant="accordion"
      />
      <BenefitsSection
        eyebrow="Benefits"
        title={
          <>
            Benefits of Intelligent <br /> Fleet Management
          </>
        }
        fleetMap
        cards={fleetBenefits.map((benefit) => benefit.title)}
      />
      <ProductModule
        id="business-application"
        index="02"
        title="Business Application"
        intro="Transform operational workflows into structured, automated processes that seamlessly integrate with robotic operations."
        image="Frame-1321317433.jpg"
        body="The ANSCER Business Application Layer bridges operational requirements and robotic execution, translating business processes into executable robotic workflows. Built on a library of configurable, industry-specific applications, it enables operators to interact through familiar business actions while automatically managing workflow execution and robot coordination."
        chipsTitle="Supported Industries"
        chips={[
          "Electrical & Electronics",
          "Automotive",
          "Textile",
          "Warehousing & 3PL",
          "Pharmaceuticals",
        ]}
      />
      <TabbedCapabilities
        eyebrow="Key Capabilities"
        title="Core Business Application Capabilities"
        items={businessCapabilities}
        pale
        variant="cards"
      />
      <BusinessBenefitsSection />
      <ProductModule
        id="process-flow-manager"
        index="03"
        title="Process Flow Manager"
        intro="Build, configure, and modify robot workflows using a visual drag-and-drop interface without writing code."
        image="1369b1d9491c23604e01cf3a0ed8ab6fd984e0e3.jpg"
        body="The Process Flow Manager enables users to create, configure, and modify operational workflows for different business use cases within a facility. Designed for industries such as electrical and electronics, textiles, industrial automation, warehousing, and 3PL, the platform helps standardize and automate repetitive material handling operations across facilities."
        chipsTitle="Key Features"
        chips={[
          "Drag & Drop Configuration",
          "No-Code Logic Design",
          "Visual Workflow Builder",
          "Multi-Robot Coordination",
        ]}
      />
      <InteractiveWorkflow />
      <ProcessBenefitsSection />
      <AnalyticsPlatformSection />
      <AnalyticsSection />
      <AnalyticsBenefitsSection />
      <SoftwareCta />
    </main>
  );
}

function FleetManagementSection() {
  return (
    <section
      id="fleet-management"
      className="scroll-mt-32 bg-[#fafafa] py-14 md:py-18"
    >
      <div className="site-container">
        <ScrollReveal>
          <p className="mb-2.5 flex items-baseline text-[32px] font-medium text-[#005ead]">
            <span className="text-[28px]">01 </span>
            <span className="text-[16px]">/ 04</span>
          </p>
          <h2 className="mt-4 max-w-[648px] text-[32px] font-bold leading-tight md:text-4xl">
            Fleet Management System
          </h2>
          <p className="mt-4 max-w-[648px] text-[18px] leading-6 text-[#333333]">
            Centralized intelligence for monitoring, controlling, and optimizing
            every robot operation from a single platform.
          </p>
        </ScrollReveal>
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.52fr_0.48fr] lg:items-start">
          <div className="relative min-h-80 overflow-hidden rounded-[18px] bg-[#dce7ef] shadow-[0_18px_50px_rgba(1,31,64,.08)] lg:min-h-107.5">
            <Image
              src={`${imagePath}Frame-427322849-2.jpg`}
              alt="ANSCER fleet management system in operation"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover"
            />
          </div>
          <div className="pt-1 lg:pt-2">
            <p className="max-w-170 text-base leading-6 text-[#333333] md:text-[16px] md:leading-6">
              The ANSCER Fleet Management System (FMS) is the intelligent
              orchestration platform that coordinates, monitors, and manages the
              operations of multiple autonomous mobile robots (AMRs) within a
              facility. Acting as the central control layer for robotic
              operations, the ANSCER FMS enables seamless automation of material
              movement workflows across manufacturing plants, warehouses, and
              intralogistics environments.
            </p>
            <div className="mt-11 grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-12">
              {fleetHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="w-full">
                    <span className="flex size-11 items-center justify-center rounded-[10px] bg-[#011f40]/5 text-[#011f40]">
                      <Icon
                        aria-hidden="true"
                        className="size-4.5"
                        strokeWidth={1.8}
                      />
                    </span>
                    <h3 className="mt-4 text-[16px] font-semibold leading-snug text-[#011f40]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-6 text-[#333333]">
                      {item.copy}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const fleetHighlights = [
  {
    title: "Centralized Visibility and Control:",
    copy: "Monitor and manage robot fleets through a unified platform that optimizes traffic flow, task execution, and robot availability.",
    icon: Network,
  },
  {
    title: "Synchronized Fleet Operations:",
    copy: "Coordinate individual robot actions into facility-wide operations that enhance efficiency, safety, and productivity.",
    icon: TrendingUp,
  },
] as const;

function SoftwareHero() {
  return (
    <section className="relative min-h-[calc(100svh-108px)] overflow-hidden bg-[#011f40] text-white">
      <Image
        src={`${imagePath}Desktop---27.jpg`}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(0,0,0,.86)_0%,rgba(0,0,0,.58)_42%,rgba(0,0,0,0)_86%)]" />
      <div className="site-container relative z-10 flex min-h-[calc(100svh-108px)] items-center py-16">
        <div className="max-w-[807px]">
          <p className="text-[16px] font-medium uppercase tracking-[0.14em] text-brand-blue">
            Software solutions
          </p>
          <h1 className="mt-4 max-w-[807px] text-[40px] font-bold leading-[1.12] text-white md:text-[60px] md:leading-[1.15]">
            Connect Robots, Workflows, and Operations in One Platform
          </h1>
          <p className="mt-5 max-w-[680px] text-[18px] font-medium leading-[1.3] text-[#fafafa]">
            ANSCER&apos;s software suite transforms autonomous mobile robots
            into synchronized, facility-wide operations - from real-time fleet
            control to industry-specific workflow automation.
          </p>
          <Link
            href="mailto:sales@anscer.com"
            className="group mt-8 inline-flex h-[46px] items-center gap-4 rounded-[3px] bg-brand-blue px-5 text-[14px] font-medium uppercase tracking-wide text-white"
          >
            Request demo{" "}
            <span className="relative flex size-4 overflow-hidden">
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition group-hover:translate-x-5"
                strokeWidth={2}
              />
              <ArrowRight
                aria-hidden="true"
                className="absolute size-4 -translate-x-5 transition group-hover:translate-x-0"
                strokeWidth={2}
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductModule({
  id,
  index,
  title,
  intro,
  image,
  body,
  chips,
  chipsTitle,
}: {
  id: string;
  index: string;
  title: string;
  intro: string;
  image: string;
  body: string;
  chips: string[];
  chipsTitle?: string;
}) {
  return (
    <section id={id} className="scroll-mt-32 bg-white py-14">
      <div className="site-container">
        <p className="mb-2.5 flex items-baseline text-[32px] font-medium text-[#005ead]">
          <span className="text-[28px]">{index} </span>
          <span className="text-[16px] text-[#005ead]/80">/ 04</span>
        </p>
        <h2 className="mt-4 max-w-[648px] text-[32px] font-bold leading-tight md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-[648px] text-[18px] leading-[120%] text-[#333333]">
          {intro}
        </p>
        <div className="mt-9 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="relative min-h-[300px] overflow-hidden rounded-xl bg-[#dce7ef]">
            <Image
              src={`${imagePath}${image}`}
              alt=""
              fill
              sizes="680px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[16px] leading-6 text-[#333333]">{body}</p>
            {chipsTitle && (
              <p className="mb-4 mt-8 text-base font-medium text-[#333333]">
                {chipsTitle}
              </p>
            )}
            <div
              className={`flex flex-wrap gap-3 pr-10 ${chipsTitle ? "mt-0" : "mt-6"}`}
            >
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-[8px] bg-[#e6ebf0] px-5 py-[7px] text-base font-normal text-[#011f40]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection({
  eyebrow,
  title,
  copy,
  cards,
  image,
  pale = false,
  fleetMap = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  cards: string[];
  image?: string;
  pale?: boolean;
  fleetMap?: boolean;
}) {
  if (fleetMap) {
    return (
      <section className="bg-[#fafafa] pt-14 pb-4">
        <div className="site-container">
          <p className="text-[16px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
            {eyebrow}
          </p>
          <h2 className="mt-6 max-w-[760px] text-[28px] font-bold leading-[1.2] sm:text-[30px] md:text-4xl">
            {title}
          </h2>
          {copy ? (
            <p className="mt-4 max-w-[690px] text-base leading-6 text-[#333333]">
              {copy}
            </p>
          ) : null}
          <FleetBenefitsMap />
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:hidden">
            {fleetBenefits.map((benefit) => (
              <FleetBenefitCard key={benefit.title} benefit={benefit} mobile />
            ))}
          </div>
          <Image
            src={`${imagePath}benefirs-svg-element-2.svg`}
            alt=""
            width={173}
            height={38}
            className="mt-4 w-[168px]"
          />
        </div>
      </section>
    );
  }

  return (
    <section className={`${pale ? "bg-[#e6ebf0]" : "bg-[#fafafa]"} py-14`}>
      <div className="site-container">
        <p className="text-[16px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-[720px] text-[30px] font-bold leading-tight md:text-4xl">
          {title}
        </h2>
        {copy ? (
          <p className="mt-4 max-w-[680px] text-base leading-6 text-[#333333]">
            {copy}
          </p>
        ) : null}
        <div
          className={`mt-8 grid gap-5 ${image ? "lg:grid-cols-[0.58fr_0.42fr]" : ""}`}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card}
                className="rounded-xl bg-white p-5 shadow-[0_12px_30px_rgba(1,31,64,.06)]"
              >
                <CheckCircle2
                  className="size-8 text-[#005ead]"
                  strokeWidth={1.8}
                />
                <h3 className="mt-5 text-lg font-bold text-[#005ead]">
                  {card}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#333333]">
                  {benefitCopy(card)}
                </p>
              </article>
            ))}
          </div>
          {image ? (
            <div className="relative min-h-[340px] overflow-hidden rounded-xl bg-[#dce7ef]">
              <Image
                src={`${imagePath}${image}`}
                alt=""
                fill
                sizes="560px"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function FleetBenefitsMap() {
  const paths = [
    {
      id: "fleet-route-purple",
      d: "M0 314.5H471.125V105H913.625V300H1479.62",
      color: "#2600ff",
    },
    {
      id: "fleet-route-green",
      d: "M2 612H445.625V410.5H897.125V637.5H1505.12",
      color: "#3cff00",
    },
    {
      id: "fleet-route-red",
      d: "M907.125 699.818V345H1379.12V0",
      color: "#ff0000",
    },
    {
      id: "fleet-route-blue",
      d: "M1401.62 22V318H906.125V119.5H462.125V712",
      color: "#00b3ff",
    },
  ];

  const TOTAL_DUR = 22;
  const robotsAnim = [
    { id: "r1", pathId: "fleet-route-purple", start: 0, dur: 7.8 },
    { id: "r2", pathId: "fleet-route-green", start: 1, dur: 7.8 },
    { id: "r3", pathId: "fleet-route-red", start: 8.2, dur: 6.2 },
    { id: "r4", pathId: "fleet-route-blue", start: 14, dur: 7.6 },
  ];

  return (
    <div className="relative mt-[60px] hidden min-h-[714px] overflow-hidden lg:block">
      <div className="absolute left-1/2 top-0 h-2 w-60 -translate-x-1/2 bg-[#bfbfbf]" />
      <Image
        src={`${imagePath}benefits-svg-element.svg`}
        alt=""
        width={76}
        height={173}
        className="absolute bottom-[76px] right-8 w-[58px] xl:w-[76px]"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-70px] top-0 z-20 h-full w-[calc(100%+140px)]"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1506 714"
      >
        <defs>
          {paths.map((path) => (
            <marker
              key={`${path.id}-arrow`}
              id={`${path.id}-arrow`}
              markerHeight="14"
              markerWidth="14"
              orient="auto"
              refX="10"
              refY="4"
              viewBox="0 0 12 8"
            >
              <path
                d="M0 0L12 4L0 8"
                fill="none"
                stroke={path.color}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          ))}
        </defs>
        {paths.map((path) => (
          <path
            key={path.id}
            id={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth="1.7"
            vectorEffect="non-scaling-stroke"
            markerEnd={`url(#${path.id}-arrow)`}
          />
        ))}
        <g className="motion-reduce:hidden">
          {robotsAnim.map((robot) => {
            const t1 = robot.start / TOTAL_DUR;
            const t2 = (robot.start + robot.dur) / TOTAL_DUR;

            let keyTimes = "";
            let keyPoints = "";
            let opKeyTimes = "";
            let opValues = "";

            if (robot.start === 0) {
              keyTimes = `0; ${t2.toFixed(4)}; 1`;
              keyPoints = "0; 1; 1";
              opKeyTimes = `0; ${Math.max(0, t2 - 0.02).toFixed(4)}; ${t2.toFixed(4)}; 1`;
              opValues = "1; 1; 0; 0";
            } else if (robot.start + robot.dur === TOTAL_DUR) {
              keyTimes = `0; ${t1.toFixed(4)}; 1`;
              keyPoints = "0; 0; 1";
              opKeyTimes = `0; ${Math.max(0, t1 - 0.01).toFixed(4)}; ${t1.toFixed(4)}; 0.98; 1`;
              opValues = "0; 0; 1; 1; 0";
            } else {
              keyTimes = `0; ${t1.toFixed(4)}; ${t2.toFixed(4)}; 1`;
              keyPoints = "0; 0; 1; 1";
              opKeyTimes = `0; ${Math.max(0, t1 - 0.01).toFixed(4)}; ${t1.toFixed(4)}; ${Math.max(0, t2 - 0.02).toFixed(4)}; ${t2.toFixed(4)}; 1`;
              opValues = "0; 0; 1; 1; 0; 0";
            }

            return (
              <g key={robot.id} opacity="0">
                <animateMotion
                  dur={`${TOTAL_DUR}s`}
                  keyPoints={keyPoints}
                  keyTimes={keyTimes}
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath href={`#${robot.pathId}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  dur={`${TOTAL_DUR}s`}
                  keyTimes={opKeyTimes}
                  repeatCount="indefinite"
                  values={opValues}
                />
                <image
                  href={`${imagePath}robot.png`}
                  width="52"
                  height="52"
                  x="-26"
                  y="-26"
                  transform="rotate(90)"
                />
              </g>
            );
          })}
        </g>
      </svg>
      <div className="relative z-10 h-[714px]">
        {fleetBenefits.map((benefit) => (
          <FleetBenefitCard key={benefit.title} benefit={benefit} />
        ))}
      </div>
    </div>
  );
}

function FleetBenefitCard({
  benefit,
  mobile = false,
}: {
  benefit: (typeof fleetBenefits)[number];
  mobile?: boolean;
}) {
  const Icon = benefit.icon;
  const activeStyles = benefit.isActive
    ? mobile
      ? "shadow-[6px_6px_0px_6px_rgba(0,94,173,0.2)]"
      : "shadow-[10px_10px_0px_10px_rgba(0,94,173,0.2)]"
    : mobile
      ? "shadow-[6px_6px_0px_6px_rgba(0,0,0,0.2)]"
      : "shadow-[10px_10px_0px_10px_rgba(0,0,0,0.2)]";
  const positionStyles = mobile
    ? ""
    : `absolute ${benefit.position} w-[min(300px,23.08vw)]`;

  return (
    <article
      className={`group flex flex-col items-start gap-3 bg-white p-6 transition duration-300 hover:shadow-[10px_10px_0px_10px_rgba(0,94,173,0.2)] ${activeStyles} ${positionStyles} ${
        mobile
          ? "min-h-[204px] hover:shadow-[6px_6px_0px_6px_rgba(0,94,173,0.2)]"
          : "min-h-[186px]"
      }`}
    >
      <span
        className={`flex size-10 items-center justify-center rounded-[8px] transition ${
          benefit.isActive
            ? "bg-[#005ead] text-white"
            : "bg-[#011f40]/5 text-[#011f40] group-hover:bg-[#005ead] group-hover:text-white"
        }`}
      >
        <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
      </span>
      <h3 className="text-[16px] font-semibold leading-snug text-black">
        {benefit.title}
      </h3>
      <p className="text-[14px] leading-[1.5] text-[#333333]">{benefit.copy}</p>
    </article>
  );
}

function AnalyticsPlatformSection() {
  return (
    <section
      id="analytics-platform"
      className="scroll-mt-32 bg-[#fafafa] py-14"
    >
      <div className="site-container">
        <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-2.5 flex items-baseline text-[32px] font-medium text-[#005ead]">
              <span className="text-[28px]">04 </span>
              <span className="text-[16px]">/ 04</span>
            </p>
            <h2 className="mt-4 text-[32px] font-bold leading-tight text-[#011f40] md:text-4xl">
              Analytics Platform
            </h2>
            <p className="mt-2.5 text-[20px] leading-normal text-[#333333]">
              Turn Operational Data Into Actionable Intelligence
            </p>

            {/* Inline Image for Mobile (< lg) */}
            <div className="relative mt-6 min-h-[260px] w-full overflow-hidden rounded-[12px] bg-[#dce7ef] sm:min-h-[360px] lg:hidden">
              <Image
                src={`${imagePath}1369b1d9491c23604e01cf3a0ed8ab6fd984e0e3.jpg`}
                alt="ANSCER analytics platform in use"
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
              />
            </div>

            <p className="mt-6 text-[14px] leading-[150%] text-[#333333] lg:mt-8 lg:text-[16px]">
              The ANSCER Analytics Platform provides comprehensive operational
              insights into robot fleets, missions, and facility workflows.
              Designed to support data-driven decision-making, the Analytics
              layer transforms real-time operational data into actionable
              intelligence that helps optimize robot performance, improve
              workflow efficiency, and enhance overall facility productivity.
            </p>
            <p className="mt-5 text-[14px] leading-[150%] text-[#333333] lg:text-[16px]">
              By continuously collecting and analyzing data from robot
              operations, mission requests, traffic flow, and system events, the
              platform enables users to monitor key performance indicators,
              identify operational bottlenecks, and proactively improve
              automation performance across facilities.
            </p>
          </div>

          {/* Right Column Image for Desktop (>= lg) */}
          <div className="relative hidden min-h-[420px] overflow-hidden rounded-[12px] bg-[#dce7ef] lg:block">
            <Image
              src={`${imagePath}1369b1d9491c23604e01cf3a0ed8ab6fd984e0e3.jpg`}
              alt="ANSCER analytics platform in use"
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SoftwareCta() {
  return (
    <section className="relative flex h-[580px] items-center overflow-hidden bg-[#005ead] text-white max-[991px]:mt-5">
      <Image
        src={`${imagePath}Frame-1321317289.jpg`}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 z-10 bg-[#005ead] mix-blend-color" />
      <div className="absolute inset-0 z-10 bg-black/80" />
      <div className="site-container relative z-20">
        <div className="flex max-w-[970px] flex-col items-start gap-6 max-[991px]:gap-2">
        <h2 className="max-w-[970px] text-[48px] font-semibold leading-[60px] text-white md:text-[60px] md:leading-[110%]">
          Experience automation that understands your operations.
        </h2>
        <p className="max-w-[850px] text-[14px] font-medium leading-5 text-white md:text-[18px] md:leading-8">
          Book your demo now and experience ANSCER in action.
        </p>
        <Link
          href="mailto:sales@anscer.com"
          className="group inline-flex h-[46px] items-center gap-3 rounded-[3px] bg-[#005ead] py-[13px] pl-5 pr-1 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-[#005ead]/90"
        >
          Book a demo{" "}
          <span className="relative flex size-4 overflow-hidden">
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition group-hover:translate-x-5"
              strokeWidth={2}
            />
            <ArrowRight
              aria-hidden="true"
              className="absolute size-4 -translate-x-5 transition group-hover:translate-x-0"
              strokeWidth={2}
            />
          </span>
        </Link>
        </div>
      </div>
    </section>
  );
}

function benefitCopy(title: string) {
  const copy: Record<string, string> = {
    "Centralized Fleet Control":
      "Manage multiple robots and workflows from a single unified platform.",
    "Scalable Automation":
      "Easily expand robot fleets and operational workflows as facility requirements grow.",
    "Reduced Downtime":
      "Automated charging management and intelligent task scheduling help maintain robot availability.",
    "Enhanced Safety":
      "Controlled robot traffic flow reduces congestion and improves operational safety.",
    "User-Friendly Operation":
      "Browser-based controls make robot operations easier for non-technical teams.",
    "Improved Operational Efficiency":
      "Optimize task flow, routing, availability, and throughput across your facility.",
    "Operational Abstraction":
      "Separate business logic from robot control logic.",
    Scalability:
      "Support multi-industry deployments and growing automation footprints.",
    Flexibility:
      "Use prebuilt, low-code, or integrated implementation approaches.",
    "Reduced Engineering Effort":
      "Minimize the need for custom coding and long engineering cycles.",
    "User-Centric Design": "Simplify interaction for non-technical operators.",
    "Flexible Workflow Configuration":
      "Create and adjust operational flows as requirements change.",
    "Industry-Specific Adaptability":
      "Configure workflows for the way each facility actually works.",
    "Simplified Automation":
      "Turn repeatable operations into clear robot instructions.",
    "Scalable Operations":
      "Extend workflows across robots, lines, sites, and use cases.",
    "Reduced Operational Dependency":
      "Lower dependence on manual coordination and custom engineering.",
    "Improved Operational Visibility":
      "Gain real-time and historical insight into robot operations.",
    "Data-Driven Optimization":
      "Use analytics to identify bottlenecks and improve traffic flow.",
    "Increased Fleet Efficiency":
      "Monitor utilization rates and mission trends to maximize productivity.",
    "Faster Issue Identification":
      "Heatmaps and predictive alerts help detect recurring system events.",
    "Enhanced Decision Making":
      "KPI dashboards support informed operational planning.",
    "Scalable Performance Monitoring":
      "Analyze performance across single or multi-site deployments.",
    "Continuous Improvement":
      "Use historical data to refine workflows and improve reliability.",
  };

  return (
    copy[title] ??
    "Designed to improve automation visibility, reliability, and operational performance."
  );
}

function BusinessBenefitsSection() {
  return (
    <section className="bg-white py-14">
      <div className="site-container">
        <p className="text-[16px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
          BENEFITS
        </p>
        <h2 className="mt-3 max-w-[648px] text-[30px] font-bold leading-tight md:text-4xl text-[#011f40]">
          Turning Industry Workflows Into
          <br />
          Autonomous Operations
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {/* Left Side: Grid */}
          <div className="order-2 flex flex-col overflow-hidden border border-[#005ead]/20 lg:order-1">
            <div className="flex flex-col lg:flex-row border-b border-[#005ead]/20">
              {/* Card 1 */}
              <div className="flex-1 border-b border-[#005ead]/20 p-6 lg:border-b-0 lg:border-r">
                <div className="flex size-10 items-center justify-center rounded bg-brand-navy/5 text-[#011f40]">
                  <Layers className="size-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-[16px] font-semibold text-[#011f40]">
                  Operational Abstraction
                </h3>
                <p className="mt-2 text-[14px] leading-[130%] text-[#333333]">
                  Separates business logic from robot control logic
                </p>
              </div>
              {/* Card 2 */}
              <div className="flex-1 p-6">
                <div className="flex size-10 items-center justify-center rounded bg-brand-navy/5 text-[#011f40]">
                  <ExternalLink className="size-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-[16px] font-semibold text-[#011f40]">
                  Scalability
                </h3>
                <p className="mt-2 text-[14px] leading-[130%] text-[#333333]">
                  Supports multi-industry deployments
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row border-b border-[#005ead]/20">
              {/* Card 3 */}
              <div className="flex-1 border-b border-[#005ead]/20 p-6 lg:border-b-0 lg:border-r">
                <div className="flex size-10 items-center justify-center rounded bg-brand-navy/5 text-[#011f40]">
                  <Network className="size-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-[16px] font-semibold text-[#011f40]">
                  Flexibility
                </h3>
                <p className="mt-2 text-[14px] leading-[130%] text-[#333333]">
                  Multiple implementation approaches (prebuilt, low-code,
                  integrated)
                </p>
              </div>
              {/* Card 4 */}
              <div className="flex-1 p-6">
                <div className="flex size-10 items-center justify-center rounded bg-brand-navy/5 text-[#011f40]">
                  <Code className="size-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-[16px] font-semibold text-[#011f40]">
                  Reduced Engineering Effort
                </h3>
                <p className="mt-2 text-[14px] leading-[130%] text-[#333333]">
                  Minimizes need for custom coding
                </p>
              </div>
            </div>

            {/* Card 5 (Full width) */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-6">
              <div className="flex size-10 shrink-0 items-center justify-center rounded bg-brand-navy/5 text-[#011f40]">
                <UserCircle2 className="size-5" strokeWidth={1.7} />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-[#011f40]">
                  User-Centric Design
                </h3>
                <p className="mt-1 text-[14px] leading-[130%] text-[#333333]">
                  Simplifies interaction for non-technical operators
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative order-1 min-h-[300px] sm:min-h-[440px] overflow-hidden rounded-xl bg-[#dce7ef] lg:order-2">
            <Image
              src={`${imagePath}1369b1d9491c23604e01cf3a0ed8ab6fd984e0e3.jpg`}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessBenefitsSection() {
  return (
    <section className="bg-[#e6ebf0] py-14">
      <div className="site-container">
        <p className="text-[16px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
          BENEFITS
        </p>
        <h2 className="mt-6 max-w-[648px] text-[28px] font-bold leading-[120%] text-[#011f40] md:text-[36px]">
          Turning Industry Workflows Into
          <br />
          Autonomous Operations
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:items-stretch">
          <div className="grid overflow-hidden border border-[#005ead]/20 lg:grid-cols-2 lg:auto-rows-[180px]">
            {processBenefitCards.map((card, index) => (
              <article
                key={card.title}
                className={`flex gap-2 bg-white/50 p-6 ${
                  card.wide ? "flex-col lg:col-span-2 lg:flex-row lg:items-center lg:gap-6" : "flex-col"
                } ${
                  index === 0 || index === 2 ? "border-r-0 lg:border-r border-[#005ead]/20" : ""
                } ${index < 4 ? "border-b border-[#005ead]/20" : ""}`}
              >
                <Image
                  src={`${imagePath}${card.icon}`}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 shrink-0"
                />
                <div className={card.wide ? "flex flex-col gap-2" : ""}>
                  <h3 className="text-[16px] font-semibold leading-tight text-[#011f40]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] font-normal leading-[130%] text-[#333333]">
                    {card.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-[12px] bg-[#dce7ef] sm:min-h-[440px]">
            <Image
              src={`${imagePath}1369b1d9491c23604e01cf3a0ed8ab6fd984e0e3.jpg`}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 670px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
