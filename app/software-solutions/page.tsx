import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { imagePath } from "../components/home/assets";

export const metadata: Metadata = {
  title: "Software Solutions | ANSCER Robotics",
  description:
    "ANSCER software transforms autonomous mobile robots into synchronized, facility-wide operations.",
};

const tabs = [
  ["Fleet Management Software", "fleet-management"],
  ["Business Application", "business-application"],
  ["Process Flow Manager", "process-flow-manager"],
  ["Analytics", "analytics-platform"],
] as const;

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

const workflowSteps = [
  {
    title: "Move",
    copy: "Define robot movement between source, destination, staging, and storage points.",
    image: "img-1.png",
  },
  {
    title: "Pick",
    copy: "Configure pickup logic for carts, pallets, bins, or process-specific material carriers.",
    image: "img-2.png",
  },
  {
    title: "Wait",
    copy: "Add conditional waiting, operator checkpoints, and synchronization points.",
    image: "img-3.png",
  },
  {
    title: "Drop",
    copy: "Complete workflows with drop-off logic, confirmations, and downstream task triggers.",
    image: "img-4.png",
  },
];

const analyticsCapabilities = [
  ["Utilization Reports", "Track robot usage, mission execution, idle time, charging, and route activity across operations.", "0a650615d6addc613e5e73d23c9a69411bf9f542.png.jpg"],
  ["KPI Dashboards", "Access centralized dashboards that display critical operational metrics and performance indicators in real time.", "Group-1321315891.jpg"],
  ["Request Overview Analytics", "Analyze all mission and transport requests generated across stations, production areas, and storage locations.", "Group-1321315892.jpg"],
  ["Heatmaps", "Visualize operational incidents and traffic patterns across facility maps using intelligent heatmap analytics.", "Group-1321315893.jpg"],
  ["Predictive Alerts", "Receive proactive notifications related to robot performance, traffic congestion, operational anomalies, and system issues.", "Group-1321315894.jpg"],
  ["Historical Data Filtering", "Filter analytics and operational reports by date range, robots, locations, missions, or event types.", "Group-1321315895.jpg"],
] as const;

export default function SoftwareSolutionsPage() {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      <SoftwareHero />
      <SoftwareTabs />
      <ProductModule
        id="fleet-management"
        index="01"
        title="Fleet Management System"
        intro="Centralized intelligence for monitoring, controlling, and optimizing every robot operation from a single platform."
        image="Frame-427322849-2.jpg"
        body="The ANSCER Fleet Management System (FMS) is the intelligent orchestration platform that coordinates, monitors, and manages the operations of multiple autonomous mobile robots (AMRs) within a facility. Acting as the central control layer for robotic operations, the ANSCER FMS enables seamless automation of material movement workflows across manufacturing plants, warehouses, and intralogistics environments."
        chips={["Centralized Visibility and Control", "Synchronized Fleet Operations"]}
      />
      <CapabilitiesSection
        eyebrow="Key Capabilities"
        title="Core Fleet Management Capabilities"
        items={fleetCapabilities}
      />
      <BenefitsSection
        eyebrow="Benefits"
        title="Benefits of Intelligent Fleet Management"
        copy="From tugging and lifting to robotic arm integration and conveyor automation, our AMRs are designed to streamline operations, enhance safety, and maximize efficiency."
        cards={[
          "Centralized Fleet Control",
          "Scalable Automation",
          "Reduced Downtime",
          "Enhanced Safety",
          "User-Friendly Operation",
          "Improved Operational Efficiency",
        ]}
      />
      <ProductModule
        id="business-application"
        index="02"
        title="Business Application"
        intro="Transform operational workflows into structured, automated processes that seamlessly integrate with robotic operations."
        image="Frame-1321317433.jpg"
        body="The ANSCER Business Application Layer bridges operational requirements and robotic execution, translating business processes into executable robotic workflows. Built on a library of configurable, industry-specific applications, it enables operators to interact through familiar business actions while automatically managing workflow execution and robot coordination."
        chips={[
          "Electrical & Electronics",
          "Automotive",
          "Textile",
          "Warehousing & 3PL",
          "Pharmaceuticals",
        ]}
      />
      <CapabilitiesSection
        eyebrow="Key Capabilities"
        title="Core Business Application Capabilities"
        items={businessCapabilities}
        pale
      />
      <BenefitsSection
        eyebrow="Benefits"
        title="Turning Industry Workflows into Autonomous Operations"
        image="1369b1d9491c23604e01cf3a0ed8ab6fd984e0e3.jpg"
        cards={[
          "Operational Abstraction",
          "Scalability",
          "Flexibility",
          "Reduced Engineering Effort",
          "User-Centric Design",
        ]}
      />
      <ProductModule
        id="process-flow-manager"
        index="03"
        title="Process Flow Manager"
        intro="Build, configure, and modify robot workflows using a visual drag-and-drop interface without writing code."
        image="1369b1d9491c23604e01cf3a0ed8ab6fd984e0e3.jpg"
        body="The Process Flow Manager enables users to create, configure, and modify operational workflows for different business use cases within a facility. Designed for industries such as electrical and electronics, textiles, industrial automation, warehousing, and 3PL, the platform helps standardize and automate repetitive material handling operations across facilities."
        chips={[
          "Drag & Drop Configuration",
          "No-Code Logic Design",
          "Visual Workflow Builder",
          "Multi-Robot Coordination",
        ]}
      />
      <WorkflowSection />
      <BenefitsSection
        eyebrow="Benefits"
        title="Designed For Flexible And Scalable Automation"
        cards={[
          "Flexible Workflow Configuration",
          "Industry-Specific Adaptability",
          "Simplified Automation",
          "Scalable Operations",
          "Reduced Operational Dependency",
        ]}
        pale
      />
      <ProductModule
        id="analytics-platform"
        index="04"
        title="Analytics Platform"
        intro="Turn Operational Data Into Actionable Intelligence"
        image="Frame-1321317433.jpg"
        body="ANSCER analytics provides comprehensive operational insights that support data-driven decision-making, KPI monitoring, bottleneck identification, and proactive improvement across automated workflows."
        chips={["KPI Monitoring", "Bottleneck Insights", "Performance Reports"]}
      />
      <AnalyticsSection />
      <BenefitsSection
        eyebrow="Benefits"
        title="Turning Operational Data Into Actionable Insights"
        image="783ae8688601ff1806be870305aedfcf9b385868.jpg"
        cards={[
          "Improved Operational Visibility",
          "Data-Driven Optimization",
          "Increased Fleet Efficiency",
          "Faster Issue Identification",
          "Enhanced Decision Making",
          "Scalable Performance Monitoring",
          "Continuous Improvement",
        ]}
      />
      <SoftwareCta />
    </main>
  );
}

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
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-white/85">
            Software solutions
          </p>
          <h1 className="mt-4 max-w-[760px] text-[40px] font-extrabold leading-[1.12] text-white md:text-[60px] md:leading-[1.15]">
            Connect Robots, Workflows, and Operations in One Platform
          </h1>
          <p className="mt-5 max-w-[680px] text-sm font-medium leading-[1.5] text-white/90 md:text-lg md:leading-[1.3]">
            ANSCER&apos;s software suite transforms autonomous mobile robots into
            synchronized, facility-wide operations - from real-time fleet control
            to industry-specific workflow automation.
          </p>
          <Link
            href="mailto:sales@anscer.com"
            className="mt-8 inline-flex h-11 items-center gap-4 rounded-[3px] bg-[#005ead] px-5 text-[12px] font-bold uppercase tracking-wide text-white"
          >
            Request demo <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SoftwareTabs() {
  return (
    <nav className="sticky top-[108px] z-30 hidden border-b border-[#d6e0e8] bg-[#fafafa]/95 backdrop-blur lg:block">
      <div className="site-container flex h-[58px] items-center justify-center gap-16 text-[13px] font-semibold text-[#3a3a3a]">
        {tabs.map(([label, id]) => (
          <a key={id} href={`#${id}`} className="transition hover:text-[#005ead]">
            {label}
          </a>
        ))}
      </div>
    </nav>
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
}: {
  id: string;
  index: string;
  title: string;
  intro: string;
  image: string;
  body: string;
  chips: string[];
}) {
  return (
    <section id={id} className="scroll-mt-32 bg-[#fafafa] py-14">
      <div className="site-container">
        <p className="text-[18px] font-bold text-[#005ead]">
          {index} <span className="text-[#011f40]/35">/ 04</span>
        </p>
        <h2 className="mt-4 max-w-[720px] text-[32px] font-extrabold leading-tight md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-[720px] text-base leading-6 text-[#3a3a3a]">
          {intro}
        </p>
        <div className="mt-9 grid gap-8 lg:grid-cols-[0.48fr_0.52fr] lg:items-start">
          <div className="relative min-h-[300px] overflow-hidden rounded-xl bg-[#dce7ef]">
            <Image src={`${imagePath}${image}`} alt="" fill sizes="680px" className="object-cover" />
          </div>
          <div>
            <p className="text-base leading-7 text-[#3a3a3a]">{body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span key={chip} className="rounded-[4px] bg-[#e6ebf0] px-4 py-2 text-sm font-medium text-[#011f40]">
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

function CapabilitiesSection({
  eyebrow,
  title,
  items,
  pale = false,
}: {
  eyebrow: string;
  title: string;
  items: { title: string; copy: string; image: string }[];
  pale?: boolean;
}) {
  return (
    <section className={`${pale ? "bg-[#e6ebf0]" : "bg-[#fafafa]"} py-14`}>
      <div className="site-container">
        <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#005ead]">{eyebrow}</p>
        <h2 className="mt-3 text-[30px] font-extrabold leading-tight md:text-4xl">{title}</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="space-y-3">
            {items.map((item, index) => (
              <details key={item.title} open={index === 0} className="group rounded-lg bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[18px] font-bold text-[#005ead]">
                  {item.title}
                  <ChevronDown className="size-5 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-6 text-[#3a3a3a] md:text-base">{item.copy}</p>
                <div className="relative mt-4 min-h-[210px] overflow-hidden rounded-lg bg-[#dce7ef] lg:hidden">
                  <Image src={`${imagePath}${item.image}`} alt="" fill sizes="100vw" className="object-cover" />
                </div>
              </details>
            ))}
          </div>
          <div className="relative hidden min-h-[440px] overflow-hidden rounded-xl bg-white lg:block">
            <Image src={`${imagePath}${items[0]?.image}`} alt="" fill sizes="720px" className="object-cover" />
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
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  cards: string[];
  image?: string;
  pale?: boolean;
}) {
  return (
    <section className={`${pale ? "bg-[#e6ebf0]" : "bg-[#fafafa]"} py-14`}>
      <div className="site-container">
        <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#005ead]">{eyebrow}</p>
        <h2 className="mt-3 max-w-[720px] text-[30px] font-extrabold leading-tight md:text-4xl">{title}</h2>
        {copy ? <p className="mt-4 max-w-[680px] text-base leading-6 text-[#3a3a3a]">{copy}</p> : null}
        <div className={`mt-8 grid gap-5 ${image ? "lg:grid-cols-[0.58fr_0.42fr]" : ""}`}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <article key={card} className="rounded-xl bg-white p-5 shadow-[0_12px_30px_rgba(1,31,64,.06)]">
                <CheckCircle2 className="size-8 text-[#005ead]" strokeWidth={1.8} />
                <h3 className="mt-5 text-lg font-bold text-[#005ead]">{card}</h3>
                <p className="mt-3 text-sm leading-6 text-[#3a3a3a]">
                  {benefitCopy(card)}
                </p>
              </article>
            ))}
          </div>
          {image ? (
            <div className="relative min-h-[340px] overflow-hidden rounded-xl bg-[#dce7ef]">
              <Image src={`${imagePath}${image}`} alt="" fill sizes="560px" className="object-cover" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="bg-[#fafafa] py-14">
      <div className="site-container">
        <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#005ead]">Workflow Configuration</p>
        <div className="mt-3 grid gap-6 lg:grid-cols-[0.48fr_0.52fr] lg:items-end">
          <h2 className="text-[30px] font-extrabold leading-tight md:text-4xl">Build Robot WorkflowsWithout Writing Code</h2>
          <p className="text-base leading-6 text-[#3a3a3a]">
            The Process Flow Manager enables users to create robotic workflows through a drag-and-drop, block-based interface, allowing teams to automate processes without complex programming.
          </p>
        </div>
        <div className="mt-9 grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="space-y-4">
            {workflowSteps.map((step, index) => (
              <article key={step.title} className={`rounded-xl p-5 ${index === 0 ? "bg-[#005ead] text-white" : "bg-[#e6ebf0] text-[#011f40]"}`}>
                <p className="text-xs font-bold uppercase tracking-wide opacity-70">Step {index + 1}</p>
                <h3 className="mt-2 text-xl font-extrabold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 opacity-85">{step.copy}</p>
              </article>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {workflowSteps.map((step) => (
              <div key={step.image} className="relative min-h-[210px] overflow-hidden rounded-xl bg-white">
                <Image src={`${imagePath}${step.image}`} alt="" fill sizes="360px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AnalyticsSection() {
  return (
    <section className="bg-[#e6ebf0] py-14">
      <div className="site-container">
        <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#005ead]">Key Capabilities</p>
        <h2 className="mt-3 max-w-[720px] text-[30px] font-extrabold leading-tight md:text-4xl">
          Turning Industry Workflows into Autonomous Operations
        </h2>
        <div className="mt-10 space-y-12">
          {analyticsCapabilities.map(([title, copy, image], index) => (
            <article key={title} className={`grid gap-8 lg:grid-cols-2 lg:items-center ${index % 2 ? "" : "lg:[&>*:first-child]:order-2"}`}>
              <div className="relative min-h-[300px] overflow-hidden rounded-xl bg-white p-4">
                <Image src={`${imagePath}${image}`} alt="" fill sizes="650px" className="object-contain p-4" />
              </div>
              <div className="max-w-[520px]">
                <h3 className="text-2xl font-extrabold text-[#011f40]">{title}</h3>
                <p className="mt-4 text-base leading-7 text-[#3a3a3a]">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SoftwareCta() {
  return (
    <section className="relative overflow-hidden bg-[#005ead] py-20 text-white">
      <Image src={`${imagePath}Frame-1321317289.jpg`} alt="" fill sizes="100vw" className="object-cover opacity-45" />
      <div className="absolute inset-0 bg-[#005ead]/76" />
      <div className="site-container relative z-10">
        <h2 className="max-w-[760px] text-[40px] font-extrabold leading-[1.08] md:text-[60px]">
          Experience automation that understands your operations.
        </h2>
        <p className="mt-5 max-w-[560px] text-base leading-7 text-white/88">
          Book your demo now and experience ANSCER in action.
        </p>
        <Link href="mailto:sales@anscer.com" className="mt-8 inline-flex h-11 items-center gap-3 rounded-sm bg-white px-5 text-xs font-bold uppercase tracking-wide text-[#005ead]">
          Book a demo <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
}

function benefitCopy(title: string) {
  const copy: Record<string, string> = {
    "Centralized Fleet Control": "Manage multiple robots and workflows from a single unified platform.",
    "Scalable Automation": "Easily expand robot fleets and operational workflows as facility requirements grow.",
    "Reduced Downtime": "Automated charging management and intelligent task scheduling help maintain robot availability.",
    "Enhanced Safety": "Controlled robot traffic flow reduces congestion and improves operational safety.",
    "User-Friendly Operation": "Browser-based controls make robot operations easier for non-technical teams.",
    "Improved Operational Efficiency": "Optimize task flow, routing, availability, and throughput across your facility.",
    "Operational Abstraction": "Separate business logic from robot control logic.",
    "Scalability": "Support multi-industry deployments and growing automation footprints.",
    "Flexibility": "Use prebuilt, low-code, or integrated implementation approaches.",
    "Reduced Engineering Effort": "Minimize the need for custom coding and long engineering cycles.",
    "User-Centric Design": "Simplify interaction for non-technical operators.",
    "Flexible Workflow Configuration": "Create and adjust operational flows as requirements change.",
    "Industry-Specific Adaptability": "Configure workflows for the way each facility actually works.",
    "Simplified Automation": "Turn repeatable operations into clear robot instructions.",
    "Scalable Operations": "Extend workflows across robots, lines, sites, and use cases.",
    "Reduced Operational Dependency": "Lower dependence on manual coordination and custom engineering.",
    "Improved Operational Visibility": "Gain real-time and historical insight into robot operations.",
    "Data-Driven Optimization": "Use analytics to identify bottlenecks and improve traffic flow.",
    "Increased Fleet Efficiency": "Monitor utilization rates and mission trends to maximize productivity.",
    "Faster Issue Identification": "Heatmaps and predictive alerts help detect recurring system events.",
    "Enhanced Decision Making": "KPI dashboards support informed operational planning.",
    "Scalable Performance Monitoring": "Analyze performance across single or multi-site deployments.",
    "Continuous Improvement": "Use historical data to refine workflows and improve reliability.",
  };

  return copy[title] ?? "Designed to improve automation visibility, reliability, and operational performance.";
}
