import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  CircleUserRound,
  Code,
  Expand,
  ExternalLink,
  Factory,
  Gauge,
  Layers,
  LayoutGrid,
  Network,
  PlugZap,
  ShieldCheck,
  TrendingUp,
  UserCircle2,
  Workflow,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { FadeLeft, FadeRight, FadeUp } from "../components/animation";
import { imagePath } from "../components/home/assets";
import { ScrollReveal } from "../components/home/ScrollReveal";
import { AnalyticsBenefitsSection } from "./AnalyticsBenefitsSection";
import { AnalyticsSection } from "./AnalyticsSection";
import { InteractiveWorkflow } from "./InteractiveWorkflow";
import { SoftwareTabs } from "./SoftwareTabs";
import { TabbedCapabilities } from "./TabbedCapabilities";
import { ArrowButton } from "../components/home/SectionPrimitives";

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
    image: "software_Multi-Robot_Traffic_Control.png",
  },
  {
    title: "Intelligent Task Allocation",
    copy: "Automatically assign transport missions and operational tasks to available robots based on factors such as robot location, battery status, workload, and task priority.",
    image: "software_intelligent_task_allocations.png",
  },
  {
    title: "Charging Management",
    copy: "Maintain continuous robot availability with automated charging management. The system monitors battery levels and autonomously dispatches robots to charging stations when required.",
    image: "software_charging-management.png",
  },
  {
    title: "Mission Scheduling & Execution",
    copy: "Configure, schedule, and monitor robot missions through a centralized management interface with priorities and execution tracking across the fleet.",
    image: "software_mission_scheduling_execution.png",
  },
  {
    title: "Autonomous Fleet Orchestration",
    copy: "Manage robot operations autonomously across production lines, warehouses, staging zones, and logistics areas to keep material flow uninterrupted.",
    image: "software_Autonomous_Fleet_Orchestration.png",
  },
  {
    title: "Real-Time Monitoring & Control",
    copy: "Gain complete visibility into fleet performance through live dashboards and operational monitoring tools for status, missions, traffic, and system health.",
    image: "software_realtimme_monitoring_control.png",
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
    image: "Rectangle-18010.png",
  },
  {
    title: "Industry-Specific Customization",
    copy: "Adapt workflows to meet the operational requirements of Electrical & Electronics, Automotive, Textile, Warehousing & 3PL, and Pharmaceuticals.",
    image: "Rectangle-18007-1.png",
  },
  {
    title: "Intuitive User Experience",
    copy: "Simplify automation for operators with user-friendly interfaces, calling stations, dashboards, and APIs that enable single-click task execution.",
    image: "Rectangle-18008.png",
  },
  {
    title: "Task Abstraction",
    copy: "Convert high-level operational commands into executable robotic actions, including navigation, routing, material handling, and load transfers.",
    image: "Rectangle-18009.png",
  },
];

const processBenefitCards = [
  {
    title: "Flexible Workflow Configuration",
    copy: "Create and modify process flows quickly to adapt to changing operational requirements.",
    icon: Layers,
    wide: false,
  },
  {
    title: "Industry-Specific Adaptability",
    copy: "Support diverse material handling workflows across manufacturing, warehousing, and logistics environments.",
    icon: Factory,
    wide: false,
  },
  {
    title: "Simplified Automation",
    copy: "Transform complex operational activities into easy-to-manage robotic workflows.",
    icon: Workflow,
    wide: false,
  },
  {
    title: "Scalable Operations",
    copy: "Standardize and replicate workflows across multiple plants, production lines, or facilities.",
    icon: Network,
    wide: false,
  },
  {
    title: "Reduced Operational Dependency",
    copy: "Minimize manual coordination and improve process consistency through automated task execution.",
    icon: CircleUserRound,
    wide: true,
  },
] as const;

export default function SoftwareSolutionsPage() {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      <FadeUp>
        <SoftwareHero />
      </FadeUp>
      <SoftwareTabs />
      <FadeUp>
        <FleetManagementSection />
      </FadeUp>
      <FadeUp>
        <TabbedCapabilities
          eyebrow="Key Capabilities"
          title="Core Fleet Management Capabilities"
          items={fleetCapabilities}
          pale={true}
          variant="accordion"
        />
      </FadeUp>
      <FadeUp>
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
      </FadeUp>
      <FadeUp>
        <ProductModule
          id="business-application"
          index="02"
          title="Business Application"
          intro="Transform operational workflows into structured, automated processes that seamlessly integrate with robotic operations."
          image="Frame-1321317433.png"
          body="The ANSCER Business Application Layer bridges operational requirements and robotic execution, translating business processes into executable robotic workflows. Built on a library of configurable, industry-specific applications, it enables operators to interact through familiar business actions while automatically managing workflow execution and robot coordination. Organizations can automate material movement without complex software development or extensive engineering effort."
          chipsTitle="Supported Industries"
          chips={[
            "Electrical & Electronics",
            "Automotive",
            "Textile",
            "Warehousing & 3PL",
            "Pharmaceuticals",
          ]}
        />
      </FadeUp>
      <FadeUp>
        <TabbedCapabilities
          eyebrow="Key Capabilities"
          title="Core Business Application Capabilities"
          items={businessCapabilities}
          pale
          variant="cards"
        />
      </FadeUp>
      <FadeUp>
        <BusinessBenefitsSection />
      </FadeUp>
      <FadeUp>
        <ProductModule
          id="process-flow-manager"
          index="03"
          title="Process Flow Manager"
          intro="Build, configure, and modify robot workflows using a visual drag-and-drop interface without writing code."
          image="Frame-1321317565.png"
          body="The Process Flow Manager enables users to create, configure, and modify operational workflows for different business use cases within a facility. Designed for industries such as electrical and electronics, textiles, industrial automation, warehousing, and 3PL, the platform helps standardize and automate repetitive material handling operations across facilities."
          chipsTitle="Key Features"
          chips={[
            "Drag & Drop Configuration",
            "No-Code Logic Design",
            "Visual Workflow Builder",
            "Multi-Robot Coordination",
          ]}
        />
      </FadeUp>
      <FadeUp>
        <InteractiveWorkflow />
      </FadeUp>
      <FadeUp>
        <ProcessBenefitsSection imagePosition="left" />
      </FadeUp>
      <FadeUp>
        <AnalyticsPlatformSection />
      </FadeUp>
      <AnalyticsSection />
      <FadeUp>
        <AnalyticsBenefitsSection />
      </FadeUp>
      <FadeUp>
        <SoftwareCta />
      </FadeUp>
    </main>
  );
}

function FleetManagementSection() {
  return (
    <section
      id="fleet-management"
      className="scroll-mt-32 bg-[#fafafa] py-10 md:py-15"
    >
      <div className="site-container">
        <ScrollReveal>
          <p className="mb-2.5 flex items-baseline text-[32px] font-medium text-[#005ead]">
            <span className="text-xl md:text-[28px]">01 </span>
            <span className="text-[12px] md:text-[16px] text-[#005ead]/50">/ 04</span>
          </p>
          <h2 className="mt-4 max-w-[648px] text-[28px] font-bold leading-tight md:text-4xl">
            Fleet Management System
          </h2>
          <p className="mt-4 max-w-[648px] text-xl leading-6 text-[#363636]">
            Centralized intelligence for monitoring, controlling, and optimizing
            every robot operation from a single platform.
          </p>
        </ScrollReveal>
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.52fr_0.48fr] lg:items-start">
          <FadeRight className="relative w-full aspect-[16/10] overflow-hidden rounded-[18px] bg-[#dce7ef] shadow-[0_18px_50px_rgba(1,31,64,.08)]">
            <Image
              src={`${imagePath}Frame-1321317564.png`}
              alt="ANSCER fleet management system in operation"
              fill
              priority
              quality={95}
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover"
            />
          </FadeRight>
          <FadeLeft className="pt-1 lg:pt-2" delay={0.08}>
            <p className="max-w-170 text-sm md:text-base leading-6 text-brand-charcoal md:leading-6">
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
                  <article key={item.title} className="flex flex-col gap-3 w-full">
                    <span className="flex size-11 items-center justify-center rounded-md bg-[#011f40]/5 text-[#011f40]">
                      <Icon
                        aria-hidden="true"
                        className="size-5"
                        strokeWidth={1.8}
                      />
                    </span>
                    <h3 className="text-sm md:text-base font-semibold leading-snug text-[#011f40]">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base leading-6 text-brand-charcoal">
                      {item.copy}
                    </p>
                  </article>
                );
              })}
            </div>
          </FadeLeft>
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
    <section className="relative min-h-[calc(100svh-60px)] overflow-hidden bg-[#011f40] text-white md:min-h-[calc(100svh-110px)]">
      <Image
        src={`${imagePath}Desktop---27.jpg`}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(0,0,0,.86)_0%,rgba(0,0,0,.58)_42%,rgba(0,0,0,0)_86%)]" />
      <div className="site-container relative z-10 flex min-h-[calc(100svh-60px)] items-center py-16 md:min-h-[calc(100svh-110px)]">
        <FadeRight className="max-w-[807px]">
          {/* <p className="text-sm md:text-base font-medium uppercase tracking-[0.14em] text-brand-blue">
            Software solutions
          </p> */}
          <h1 className="mt-4 max-w-[807px] text-[40px] font-bold leading-[1.12] text-white md:text-[60px] md:leading-[1.15]">
            Connect Robots, Workflows, and Operations in One Platform
          </h1>
          <p className="mt-5 max-w-[680px] text-sm md:text-lg font-bold leading-[1.3] text-[#fafafa]">
            ANSCER&apos;s software suite transforms autonomous mobile robots
            into synchronized, facility-wide operations - from real-time fleet
            control to industry-specific workflow automation.
          </p>
          <ArrowButton
            target="mailto:sales@anscer.com"
            className="mt-8 h-[46px] px-5"
          >
            Request demo
          </ArrowButton>
        </FadeRight>
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
    <section id={id} className="scroll-mt-32 bg-white py-10 md:py-14">
      <div className="site-container">
        <p className="mb-2.5 flex items-baseline text-[32px] font-medium text-[#005ead]">
          <span className="text-xl md:text-[28px]">{index} </span>
          <span className="text-[12px] md:text-[16px] text-[#005ead]/50">/ 04</span>
        </p>
        <h2 className="mt-4 max-w-[648px] text-[28px] md:text-4xl font-bold leading-tight">
          {title}
        </h2>
        <p className="mt-4 max-w-[648px] text-base md:text-xl leading-[120%] text-[#333333]">
          {intro}
        </p>
        <div className="mt-9 grid gap-10 lg:grid-cols-2 lg:items-start">
          <FadeRight className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-[#dce7ef]">
            <Image
              src={`${imagePath}${image}`}
              alt=""
              fill
              quality={95}
              sizes="680px"
              className="object-cover"
            />
          </FadeRight>
          <FadeLeft delay={0.08}>
            <p className="text-base leading-6 text-brand-charcoal">{body}</p>
            {chipsTitle && (
              <p className="mb-4 mt-8 text-base font-medium text-brand-charcoal">
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
          </FadeLeft>
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
      <section className="bg-[#fafafa] py-10 md:pt-[60px] md:pb-[40px]">
        <div className="site-container">
          <div className="flex flex-col gap-6">
            <p className="text-[12px] md:text-[16px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
              {eyebrow}
            </p>
            <h2 className="max-w-[760px] text-[28px] font-bold leading-[1.2] text-[28px] md:text-4xl">
              {title}
            </h2>
            {copy ? (
              <p className="max-w-[690px] text-sm md:text-base leading-6 text-[#333333]">
                {copy}
              </p>
            ) : null}
            <FleetBenefitsMap />
            <div className="grid gap-x-7 gap-y-8 sm:grid-cols-2 lg:hidden">
              {fleetBenefits.map((benefit) => (
                <FleetBenefitCard key={benefit.title} benefit={benefit} mobile />
              ))}
            </div>
            {/* <Image
              src={`${imagePath}benefirs-svg-element-2.svg`}
              alt=""
              width={173}
              height={38}
              className="w-[168px]"
            /> */}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${pale ? "bg-[#e6ebf0]" : "bg-[#fafafa]"} md:pt-[60px] md:pb-[40px]`}>
      <div className="site-container">
        <p className="text-[16px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
          {eyebrow}
        </p>
        <h2 className="mt-10 max-w-[720px] text-[30px] font-bold leading-tight md:text-4xl">
          {title}
        </h2>
        {copy ? (
          <p className="mt-10 max-w-[680px] text-base leading-6 text-[#333333]">
            {copy}
          </p>
        ) : null}
        <div
          className={`mt-10 grid gap-5 ${image ? "lg:grid-cols-[0.58fr_0.42fr]" : ""}`}
        >
          <FadeRight className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          </FadeRight>
          {image ? (
            <FadeLeft
              className="relative min-h-[340px] overflow-hidden rounded-xl bg-[#dce7ef]"
              delay={0.08}
            >
              <Image
                src={`${imagePath}${image}`}
                alt=""
                fill
                sizes="560px"
                className="object-cover"
              />
            </FadeLeft>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function FleetBenefitsMap() {
  // Robot paths (invisible — used only for robot animateMotion, no track lines)
  const robotPaths = [
    { id: "fleet-route-purple", d: "M0 332H471.125V120H913.625V332H1479.62" },
    { id: "fleet-route-green", d: "M2 620H445.625V420H897.125V645H1505.12" },
    { id: "fleet-route-red", d: "M907.125 699.818V332H1379.12V0" },
    { id: "fleet-route-blue", d: "M1401.62 22V332H906.125V120H462.125V712" },
  ];

  const TOTAL_DUR = 22;
  const robotsAnim = [
    { id: "r1", pathId: "fleet-route-purple", start: 0, dur: 7.8 },
    { id: "r2", pathId: "fleet-route-green", start: 1, dur: 7.8 },
    { id: "r3", pathId: "fleet-route-red", start: 8.2, dur: 6.2 },
    { id: "r4", pathId: "fleet-route-blue", start: 14, dur: 7.6 },
  ];

  return (
    <div className="relative mt-6 hidden min-h-[714px] overflow-x-clip lg:block">
      {/* <Image
        src={`${imagePath}benefits-svg-element.svg`}
        alt=""
        width={76}
        height={173}
        className="absolute bottom-[76px] right-8 w-[58px] xl:w-[76px]"
      /> */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-70px] top-0 z-20 h-full w-[calc(100%+140px)]"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1506 714"
      >
        {/* Hidden path defs — robots follow these paths but the strokes are invisible */}
        <defs>
          {robotPaths.map((path) => (
            <path key={path.id} id={path.id} d={path.d} />
          ))}
        </defs>
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
                  transform="rotate(-90)"
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
  const activeStyles = benefit.isActive ? "active" : "";
  const cardDepthStyles = mobile ? "mobile" : "";
  const positionStyles = mobile
    ? "relative"
    : `absolute ${benefit.position} w-[min(300px,23.08vw)]`;

  return (
    <article
      className={`group card3d ${cardDepthStyles} ${activeStyles} flex flex-col items-start gap-3 bg-white p-6 transition duration-300 ${positionStyles} ${mobile
          ? "min-h-[204px]"
          : "min-h-[186px]"
        }`}
    >
      <span
        className={`flex size-10 items-center justify-center rounded-[8px] transition ${benefit.isActive
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
      className="scroll-mt-32 bg-[#fafafa] py-10 md:py-14"
    >
      <div className="site-container">
        <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
          <FadeRight>
            <p className="mb-2.5 flex items-baseline text-[32px] font-medium text-[#005ead]">
              <span className="text-xl md:text-[28px]">04 </span>
              <span className="text-sm md:text-[16px] text-[#005ead]/50">/ 04</span>
            </p>
            <h2 className="mt-4 text-[28px] font-bold leading-tight text-[#011f40] md:text-4xl">
              Analytics Platform
            </h2>
            <p className="mt-2.5 text-base md:text-[20px] leading-normal text-brand-charcoal">
              Turn Operational Data Into Actionable Intelligence
            </p>

            {/* Inline Image for Mobile (< lg) */}
            <div className="relative mt-6 w-full aspect-[1288/816] overflow-hidden rounded-[12px] bg-[#dce7ef] lg:hidden">
              <Image
                src={`${imagePath}Frame-427322850.png`}
                alt="ANSCER analytics platform in use"
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
              />
            </div>

            <p className="mt-6 text-[14px] leading-[150%] text-brand-charcoal lg:mt-8 lg:text-[16px]">
              The ANSCER Analytics Platform provides comprehensive operational
              insights into robot fleets, missions, and facility workflows.
              Designed to support data-driven decision-making, the Analytics
              layer transforms real-time operational data into actionable
              intelligence that helps optimize robot performance, improve
              workflow efficiency, and enhance overall facility productivity.
            </p>
            <p className="mt-5 text-[14px] leading-[150%] text-brand-charcoal lg:text-[16px]">
              By continuously collecting and analyzing data from robot
              operations, mission requests, traffic flow, and system events, the
              platform enables users to monitor key performance indicators,
              identify operational bottlenecks, and proactively improve
              automation performance across facilities.
            </p>
          </FadeRight>

          {/* Right Column Image for Desktop (>= lg) */}
          <FadeLeft
            className="relative hidden w-full aspect-[1288/816] overflow-hidden rounded-[12px] bg-[#dce7ef] lg:block"
            delay={0.08}
          >
            <Image
              src={`${imagePath}Frame-427322850.png`}
              alt="ANSCER analytics platform in use"
              fill
              quality={95}
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover"
            />
          </FadeLeft>
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
        <FadeRight className="flex max-w-[970px] flex-col items-start gap-6 max-[991px]:gap-2">
          <h2 className="max-w-[970px] text-[48px] font-semibold leading-[60px] text-white md:text-[60px] md:leading-[110%]">
            Experience automation that understands your operations.
          </h2>
          <p className="max-w-[850px] text-[14px] font-medium leading-5 text-white md:text-[18px] md:leading-8">
            Book your demo now and experience ANSCER in action.
          </p>
          <ArrowButton
            target="mailto:sales@anscer.com"
            className="h-[46px] px-5"
          >
            Book a demo
          </ArrowButton>
        </FadeRight>
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
    <section className="bg-white py-10 md:py-14">
      <div className="site-container">
        <p className="text-[12px] md:text-[16px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
          BENEFITS
        </p>
        <h2 className="mt-3 max-w-[648px] text-[30px] font-bold leading-tight md:text-4xl text-[#011f40]">
          Turning Industry Workflows Into
          Autonomous Operations
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {/* Left Side: Grid */}
          <FadeRight className="order-2 flex flex-col overflow-hidden border border-[#005ead]/20 lg:order-1">
            <div className="flex flex-col lg:flex-row border-b border-[#005ead]/20">
              {/* Card 1 */}
              <div className="flex flex-col gap-2.5 flex-1 border-b border-[#005ead]/20 p-6 lg:border-b-0 lg:border-r group">
                <div className="flex size-10 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] group-hover:bg-[#005EAD] transition-all duration-300">
                  <Layers className="size-5 group-hover:text-white transition-colors duration-300" strokeWidth={1.7} />
                </div>
                <h3 className="text-base font-semibold text-[#000000]">
                  Operational Abstraction
                </h3>
                <p className="text-sm font-bold leading-[130%] text-[#000000]">
                  Separates business logic from robot control logic
                </p>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col gap-2.5 flex-1 p-6 group">
                <div className="flex size-10 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] group-hover:bg-[#005EAD] transition-all duration-300">
                  <ExternalLink className="size-5 group-hover:text-white transition-colors duration-300" strokeWidth={1.7} />
                </div>
                <h3 className="text-base font-semibold text-[#000000]">
                  Scalability
                </h3>
                <p className="text-sm font-bold leading-[130%] text-[#000000]">
                  Supports multi-industry deployments
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row border-b border-[#005ead]/20">
              {/* Card 3 */}
              <div className="flex flex-col gap-2.5 flex-1 border-b border-[#005ead]/20 p-6 lg:border-b-0 lg:border-r group">
                <div className="flex size-10 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] group-hover:bg-[#005EAD] transition-all duration-300">
                  <Network className="size-5 group-hover:text-white transition-colors duration-300" strokeWidth={1.7} />
                </div>
                <h3 className="text-base font-semibold text-[#000000]">
                  Flexibility
                </h3>
                <p className="text-sm font-bold leading-[130%] text-[#000000]">
                  Multiple implementation approaches (prebuilt, low-code,
                  integrated)
                </p>
              </div>
              {/* Card 4 */}
              <div className="flex flex-col gap-2.5 flex-1 p-6 group">
                <div className="flex size-10 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] group-hover:bg-[#005EAD] transition-all duration-300">
                  <Code className="size-5 group-hover:text-white transition-colors duration-300" strokeWidth={1.7} />
                </div>
                <h3 className="text-base font-semibold text-[#000000]">
                  Reduced Engineering Effort
                </h3>
                <p className="text-sm font-bold leading-[130%] text-[#000000]">
                  Minimizes need for custom coding
                </p>
              </div>
            </div>

            {/* Card 5 (Full width) */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 group">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] group-hover:bg-[#005EAD] transition-all duration-300">
                <UserCircle2 className="size-5 group-hover:text-white transition-colors duration-300" strokeWidth={1.7} />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-base font-semibold text-[#000000]">
                  User-Centric Design
                </h3>
                <p className="text-sm font-bold leading-[130%] text-[#000000]">
                  Simplifies interaction for non-technical operators
                </p>
              </div>
            </div>
          </FadeRight>

          {/* Right Side: Image */}
          <FadeLeft
            className="relative order-1 min-h-[300px] overflow-hidden rounded-xl bg-[#dce7ef] sm:min-h-[440px] lg:order-2"
            delay={0.08}
          >
            <Image
              src={`${imagePath}1369b1d9491c23604e01cf3a0ed8ab6fd984e0e3.jpg`}
              alt=""
              fill
              quality={95}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </FadeLeft>
        </div>
      </div>
    </section>
  );
}

function ProcessBenefitsSection({
  imagePosition = "left",
}: {
  imagePosition?: "left" | "right";
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="bg-[#e6ebf0] py-10 md:py-14">
      <div className="site-container">
        <p className="text-sm md:text-[16px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
          BENEFITS
        </p>
        <h2 className="mt-6 max-w-[648px] text-[28px] font-bold leading-[120%] text-[#011f40] md:text-[36px]">
          Turning Industry Workflows Into
          <br />
          Autonomous Operations
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {/* Cards */}
          <FadeRight
            className={`order-2 flex flex-col overflow-hidden border border-[#005ead]/20 ${isImageLeft ? "lg:order-2" : "lg:order-1"
              }`}
          >
            <div className="flex flex-col lg:flex-row border-b border-[#005ead]/20">
              {/* Card 0 */}
              <div className="flex flex-col gap-2 flex-1 border-b group border-[#005ead]/20 bg-white/50 p-6 lg:border-b-0 lg:border-r">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] group-hover:bg-[#005EAD] transition-all duration-300">
                  <Layers className="size-5 group-hover:text-white transition-colors duration-300" strokeWidth={1.7} />
                </div>
                <h3 className="text-[16px] font-semibold leading-tight text-[#011f40]">
                  {processBenefitCards[0].title}
                </h3>
                <p className="mt-2 text-[14px] font-bold leading-[130%] text-[#333333]">
                  {processBenefitCards[0].copy}
                </p>
              </div>
              {/* Card 1 */}
              <div className="flex flex-col gap-2 flex-1 bg-white/50 p-6 group">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] group-hover:bg-[#005EAD] transition-all duration-300">
                  <Factory className="size-5 group-hover:text-white transition-colors duration-300" strokeWidth={1.7} />
                </div>
                <h3 className="text-[16px] font-semibold leading-tight text-[#011f40]">
                  {processBenefitCards[1].title}
                </h3>
                <p className="mt-2 text-[14px] font-bold leading-[130%] text-[#333333]">
                  {processBenefitCards[1].copy}
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row border-b border-[#005ead]/20">
              {/* Card 2 */}
              <div className="flex flex-col gap-2 flex-1 border-b border-[#005ead]/20 group bg-white/50 p-6 lg:border-b-0 lg:border-r">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] group-hover:bg-[#005EAD] transition-all duration-300">
                  <Workflow className="size-5 group-hover:text-white transition-colors duration-300" strokeWidth={1.7} />
                </div>
                <h3 className="text-[16px] font-semibold leading-tight text-[#011f40]">
                  {processBenefitCards[2].title}
                </h3>
                <p className="mt-2 text-[14px] font-bold leading-[130%] text-[#333333]">
                  {processBenefitCards[2].copy}
                </p>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col gap-2 flex-1 bg-white/50 p-6 group">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] group-hover:bg-[#005EAD] transition-all duration-300">
                  <Network className="size-5 group-hover:text-white transition-colors duration-300" strokeWidth={1.7} />
                </div>
                <h3 className="text-[16px] font-semibold leading-tight text-[#011f40]">
                  {processBenefitCards[3].title}
                </h3>
                <p className="mt-2 text-[14px] font-bold leading-[130%] text-[#333333]">
                  {processBenefitCards[3].copy}
                </p>
              </div>
            </div>

            {/* Card 4 (Wide) */}
            <div className="flex flex-col gap-2 bg-white/50 p-6 lg:flex-row lg:items-center lg:gap-6 group">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] group-hover:bg-[#005EAD] transition-all duration-300">
                <CircleUserRound className="size-5 group-hover:text-white transition-colors duration-300" strokeWidth={1.7} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] font-semibold leading-tight text-[#011f40]">
                  {processBenefitCards[4].title}
                </h3>
                <p className="mt-2 text-[14px] font-bold leading-[130%] text-[#333333]">
                  {processBenefitCards[4].copy}
                </p>
              </div>
            </div>
          </FadeRight>

          {/* Image */}
          <FadeLeft
            className={`relative order-1 min-h-[300px] overflow-hidden rounded-[12px] bg-[#dce7ef] sm:min-h-[440px] ${isImageLeft ? "lg:order-1" : "lg:order-2"
              }`}
            delay={0.08}
          >
            <Image
              src={`${imagePath}1369b1d9491c23604e01cf3a0ed8ab6fd984e0e3.jpg`}
              alt=""
              fill
              quality={95}
              sizes="(max-width: 1024px) 100vw, 670px"
              className="object-cover"
            />
          </FadeLeft>
        </div>
      </div>
    </section>
  );
}
