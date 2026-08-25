import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FadeUp } from "../components/animation";
import { ArrowButton } from "../components/home/SectionPrimitives";

export const metadata: Metadata = {
  title: "PSR TRail | Autonomous Trailer Unloading | ANSCER Robotics",
  description:
    "ANSCER TRail is the next generation autonomous trailer unloading robot. Built on the proven TRail platform — it enters the trailer, picks every pallet, and exits.",
};

const trustLogos = [
  "SCHNEIDER ELECTRIC",
  "MOTHERSON GROUP",
  "UPS",
  "TATA GROUP",
  "BOSCH",
  "MOLEX",
];

const platformSpecs = [
  { label: "Model", value: "TRail CB 2000" },
  { label: "Trailer Target", value: "53 ft Dry Van" },
  { label: "Sensors", value: "3D LiDAR + Cam" },
  { label: "Safety", value: "Designed around ISO 3691-4" },
  { label: "Pallet Types", value: "GMA, EURO, CHEP" },
  // { label: "IP Rating", value: "IP54+" },
  { label: "Integration", value: "VDA5050 / WMS" },
  { label: "Deployments", value: "Global deployments" },
];

const technologyFeatures = [
  {
    icon: "🎯",
    title: "Hybrid Sensor Fusion Localization",
    description:
      "3D LiDAR + depth camera + IMU gives robust positioning inside dark, featureless trailers with reflective shrink-wrap and uneven floors — environments that defeat standard AMRs.",
  },
  {
    icon: "🧠",
    title: "Deep Learning Pallet Perception",
    description:
      "Trained visual models detect pallet pose, fork pocket gap, and load state in any orientation — from trailers never previously mapped. Handles shifted, damaged, and partially visible pallets.",
  },
  {
    icon: "🛡️",
    title: "Safety-Certified Architecture",
    description:
      "Safety PLC, front & rear LiDAR scanners, E-stops, human detection inside trailer, and mandatory dock interlock checks before every single cycle entry.",
  },
  {
    icon: "📊",
    title: "Fleet & Dock Orchestration",
    description:
      "Multi-robot traffic management, trailer queue scheduling, live dock utilization analytics, and VDA5050-compliant WMS/ERP integration out of the box.",
  },
  {
    icon: "🔄",
    title: "Real-World Exception Handling",
    description:
      "Missed pallet recovery, partial insertion retry, no-pallet detection, dock plate condition monitoring — all handled autonomously with configurable retry logic.",
  },
];

const techStackPills = [
  { name: "3D LiDAR", bold: true },
  { name: "Depth Camera", bold: true },
  { name: "IMU Fusion", bold: true },
  { name: "Safety PLC", bold: true },
  { name: "Neural AI", bold: true },
  { name: "SLAM", bold: true },
  { name: "VDA5050", bold: false },
  { name: "WMS / ERP", bold: false },
  { name: "IP54+", bold: false },
];

const performanceStats = [
  {
    value: "26-30",
    unit: "/hr",
    label: "Pallets / Hour",
    subtext: "Target throughput",
  },
  {
    value: "98",
    unit: "%",
    label: "Docking Success",
    subtext: "Alignment accuracy",
  },
  {
    value: "99",
    unit: "%",
    label: "Trailer Entry",
    subtext: "First-attempt success",
  },
  // {
  //   value: "<5",
  //   unit: "%",
  //   label: "Human Interventions",
  //   subtext: "Per cycle",
  // },
  // {
  //   value: "0",
  //   unit: "",
  //   label: "Safety Incidents",
  //   subtext: "Target per deployment",
  // },
];

const useCases = [
  {
    image: "/anscer/images/trial-product/application-1.webp",
    title: "Trailer Loading & Unloading",
    description:
      "Unload a full 53 ft trailer in 55 minutes or less — 24 hours a day, every day. No forklift operator, no dock attendant, no waiting for shift change.",
    stats: [
      { num: "55min", label: "Full trailer" },
      { num: "24/7", label: "Operation" },
      // { num: "Zero", label: "Operators" },
    ],
  },
  {
    image: "/anscer/images/trial-product/application-2.webp",
    title: "Warehouse Labor Augmentation",
    description:
      "Meet peak demand at any time. Build resiliency against labor shortages with clear ROI potential compared with manual dock operations and imported automation alternatives.",
    stats: [
      { num: "50%", label: "Cost savings" },
      { num: "< 2yr", label: "Payback" },
      // { num: "850", label: "Hrs of Operation" },
    ],
  },
  {
    image: "/anscer/images/trial-product/application-3.webp",
    title: "Workforce Enhancement",
    description:
      "Move workers away from high-injury dock unloading into higher-value roles. Dock operations are a high-risk area in warehouses; TRail is designed to move people away from repetitive dock unloading tasks into higher-value roles.",
    stats: [
      // { num: "0%", label: "Incident" },
      { num: "Higher", label: "Skill jobs" },
      { num: "Better", label: "Retention" },
    ],
  },
];

const whyTrailBenefits = [
  {
    icon: "👥",
    title: "Augment Your People",
    description:
      "Reduce manual dock driving with autonomous pallet retrieval, supervised exception handling, and 24/7-ready operation planning.",
  },
  {
    icon: "🛡️",
    title: "Improve Safety",
    description:
      "360° sensing, mandatory interlocks, and controlled operating zones help reduce dock safety risks and equipment damage.",
  },
  {
    icon: "⚡",
    title: "Simplify Automation",
    description:
      "Designed for pilot deployment with minimal disruption, structured training, and site-specific commissioning.",
  },
  {
    icon: "🔗",
    title: "Optimize Workflows",
    description:
      "Seamless WMS/WES/MES integration and real-time dock analytics orchestrate your inbound and outbound operations automatically.",
  },
  {
    icon: "🏗️",
    title: "Less On Infrastructure",
    description:
      "Designed to reduce dependency on floor markers or QR codes, subject to site validation and safety requirements.",
  },
];

const safetyFeatures = [
  {
    num: "01",
    title: "Trailer Restraint Interlock",
    description:
      "Robot will not enter unless trailer restraint is confirmed — prevents trailer drift during operation.",
  },
  {
    num: "02",
    title: "Trailer Entry Monitoring",
    description:
      "Continuous monitoring of the robot&apos;s entry and traversal conditions helps maintain safe and controlled movement inside the trailer.",
  },
  {
    num: "03",
    title: "Front & Rear Safety Scanners",
    description:
      "Continuous 360° monitoring. Zone-based speed reduction and full stop on obstacle detection.",
  },
  {
    num: "04",
    title: "Emergency Stop System",
    description:
      "Physical E-stops plus remote capability. Safe Torque Off (STO) on all drive systems.",
  },
  {
    num: "05",
    title: "Dock Leveler Status Check",
    description:
      "Deployment confirmed before entry. Dock plate condition monitored throughout traversal.",
  },
  {
    num: "06",
    title: "Auto-Stop On System Fault",
    description:
      "Automatic safe stop on localization loss, network drop, battery low, or any safety sensor fault.",
  },
];

const deploymentCards = [
  {
    stat: "Phased",
    title: "Pilot Deployment",
    description:
      "Assess dock geometry, validate pallet conditions, map operating zones, connect to WMS/WES where required, and commission through a controlled pilot process.",
  },
  {
    stat: "8hr+",
    title: "Opportunity Charging",
    description:
      "TRail uses opportunity charging during staging cycles to stay ready all shift — reliably on call beyond 8 continuous hours of operation.",
  },
  {
    stat: "Zero",
    title: "Infrastructure Changes",
    description:
      "Designed to minimize infrastructure dependency. Final requirements are confirmed after dock assessment, pallet audit, and safety review.",
  },
  {
    stat: "80%",
    title: "Less Manual Driving",
    description:
      "Redeploy dock operators to higher-value warehouse roles. TRail handles every unloading cycle — no human needed at the dock.",
  },
];

export default function PsrTrailPage() {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#011f40] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/anscer/images/trial-product/hero.webp"
            alt="ANSCER TRail autonomous trailer unloading robot"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-70"
          />
        </div>
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(90deg, rgba(1,31,64,0.84) 0%, rgba(1,31,64,0.38) 52%, rgba(1,31,64,0.08) 100%)",
          }}
        />
        <div className="site-container relative z-[2] py-24 md:py-32">
          <div className="max-w-[720px]">
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs md:text-sm font-medium uppercase tracking-[0.14em] text-white mb-6 backdrop-blur-md">
                <span className="size-2 rounded-full bg-[#005ead] animate-pulse" />
                Your Mobility, Our ANSCER
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h1 className="text-[38px] font-bold leading-[1.05] tracking-tight text-white md:text-[clamp(44px,3.8vw,76px)] mb-6">
                Unload Every Trailer.
                <span className="block">Autonomously.</span>
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="text-base text-white/80 leading-relaxed md:text-[clamp(16px,0.85vw,22px)] max-w-[580px] mb-8">
                ANSCER TRail is the next generation autonomous trailer unloading robot. Built on the proven TRail platform — it enters the trailer, picks every pallet, and exits. No operator. No downtime. No limits.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <ArrowButton
                  target="/contact-us"
                  className="w-full sm:w-auto justify-center h-11 px-6 text-sm font-bold"
                >
                  Request a Pilot
                </ArrowButton>
                <ArrowButton
                  as="a"
                  href="#how"
                  variant="ghost"
                  dark
                  className="w-full sm:w-auto justify-center h-11 px-6 border border-white/20 rounded-sm hover:bg-white/10 text-sm font-medium"
                >
                  See How It Works
                </ArrowButton>
              </div>
            </FadeUp>

            {/* Glass stats bar */}
            <FadeUp delay={400}>
              <div className="grid grid-cols-2 sm:grid-cols-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md overflow-hidden max-w-[580px]">
                <div className="p-4 border-r border-b sm:border-b-0 border-white/10 text-center">
                  <span className="text-2xl md:text-3xl font-bold text-white block">
                    26–30<sup className="text-xs font-normal text-white/70">/hr</sup>
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-white/70 mt-1 block">
                    Pallets
                  </span>
                </div>
                <div className="p-4 border-b sm:border-b-0 sm:border-r border-white/10 text-center">
                  <span className="text-2xl md:text-3xl font-bold text-white block">
                    98<sup className="text-xs font-normal text-white/70">%</sup>
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-white/70 mt-1 block">
                    Dock Success
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1 p-4 text-center">
                  <span className="text-2xl md:text-3xl font-bold text-white block">
                    24<sup className="text-xs font-normal text-white/70">/7</sup>
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-white/70 mt-1 block">
                    Operation
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* TRUST BANNER */}
      <section className="border-b border-[#dfe6ee] bg-[#e6ebf0] py-6">
        <div className="site-container flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-center sm:justify-between text-center sm:text-left">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#005ead]">
            Trusted By
          </span>
          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 flex-wrap">
            {trustLogos.map((logo) => (
              <span
                key={logo}
                className="text-xs md:text-sm font-bold tracking-wider text-[#011f40]/50 hover:text-[#011f40] transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE ROBOT */}
      <section className="py-16 md:py-24 bg-[#fafafa]" id="meet">
        <div className="site-container">
          <FadeUp>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-[clamp(16px,0.8vw,30px)]">
              The Product
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.15] text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
              Meet The <span className="text-[#005ead]">ANSCER TRail</span>
            </h2>
            <p className="mt-4 max-w-[640px] 3xl:max-w-[750px] text-sm leading-relaxed text-[#3a3a3a] md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] md:leading-[150%]">
              TRail is an ANSCER solution for autonomous trailer unloading, built on ANSCER&apos;s proven mobile robot platform and fleet intelligence for dock and warehouse operations.
            </p>
          </FadeUp>

          <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#dfe6ee] bg-[#e6ebf0] shadow-sm">
                <Image
                  src="/anscer/images/trial-product/platform-section.webp"
                  alt="ANSCER TRail CB2000 autonomous forklift front view"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 rounded-lg bg-[#011f40]/90 backdrop-blur-md px-3.5 py-2 text-white text-xs font-medium flex items-center gap-2 border border-white/10">
                  <span className="size-2 rounded-full bg-green-500 animate-ping" />
                  ANSCER TRail 2000 · Active
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={150}>
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-[clamp(16px,0.8vw,30px)]">
                  Platform
                </p>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold text-[#011f40] leading-snug">
                  A Proven Forklift.<br />An Extraordinary Brain.
                </h3>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-[#4b5563]">
                  We start with the battle-tested ANSCER TRail CB 2000 and equip it with Safety certified LiDARs, Navigation Sensor, depth cameras, and our autonomy stack to enable it to navigate unmapped trailer interiors and retrieve every pallet without human direction.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {platformSpecs.map((spec) => (
                    <div
                      key={spec.label}
                      className="rounded-xl border border-[#dfe6ee] bg-white p-3.5 transition-all hover:border-[#005ead]/30 hover:shadow-sm"
                    >
                      <div className="text-[11px] font-medium uppercase tracking-wider text-[#3a3a3a]/65">
                        {spec.label}
                      </div>
                      <div className="text-sm font-semibold text-[#011f40] mt-1">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* MODEL COMPARISON */}
      {/* <section className="py-16 md:py-24 bg-white border-t border-b border-[#dfe6ee]" id="models">
        <div className="site-container">
          <FadeUp>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-[clamp(16px,0.8vw,30px)]">
              Platform Options
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.15] text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
              One autonomy stack.<br />
              <span className="text-[#005ead]">Two payload options.</span>
            </h2>
            <p className="mt-4 max-w-[640px] 3xl:max-w-[750px] text-sm leading-relaxed text-[#3a3a3a] md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] md:leading-[150%]">
              Both models are presented as trailer-unloading options running the ANSCER autonomy and fleet-management stack. Final configuration can be matched to customer payload, pallet type, trailer condition, and dock environment.
            </p>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Standard Model */}
      {/* <FadeUp delay={100}>
              <div className="rounded-2xl border border-[#dfe6ee] bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="p-6 md:p-8 bg-[#e6ebf0] border-b border-[#dfe6ee]">
                  <span className="inline-block bg-white text-[#005ead] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3">
                    Standard Payload
                  </span>
                  <div className="text-2xl md:text-3xl font-bold text-[#011f40]">TRail CB 2000</div>
                  <div className="text-sm text-[#4b5563] mt-1">2,000 kg payload · Most deployments</div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex gap-8 mb-6 flex-wrap border-b border-[#dfe6ee] pb-6">
                    <div>
                      <div className="text-3xl font-bold text-[#011f40]">
                        2,000<span className="text-lg font-normal text-[#3a3a3a]/70">kg</span>
                      </div>
                      <div className="text-xs uppercase tracking-wider text-[#3a3a3a]/70 mt-1">
                        Payload Capacity
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#011f40]">26–30</div>
                      <div className="text-xs uppercase tracking-wider text-[#3a3a3a]/70 mt-1">
                        Pallets / Hour
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#011f40]">
                        8<span className="text-lg font-normal text-[#3a3a3a]/70">hr+</span>
                      </div>
                      <div className="text-xs uppercase tracking-wider text-[#3a3a3a]/70 mt-1">
                        Runtime
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-[#4b5563]">
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 text-[#005ead] shrink-0 mt-0.5" />
                      <span>Ideal for standard GMA, EURO, CHEP pallets and 53 ft dry van trailers</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 text-[#005ead] shrink-0 mt-0.5" />
                      <span>Built for controlled trailer unloading up to 2,000 kg payload</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 text-[#005ead] shrink-0 mt-0.5" />
                      <span>Compact profile — navigates tight trailer interiors</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 text-[#005ead] shrink-0 mt-0.5" />
                      <span>Best suited for 3PL, retail DC, and FMCG operations</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 text-[#005ead] shrink-0 mt-0.5" />
                      <span>Autonomy stack included</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeUp> */}

      {/* Heavy Model */}
      {/* <FadeUp delay={200}>
              <div className="rounded-2xl border border-[#005ead]/30 bg-white overflow-hidden shadow-md transition-all">
                <div className="p-6 md:p-8 bg-[#011f40] text-white border-b border-[#011f40]">
                  <span className="inline-block bg-[#005ead] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3">
                    Heavy Payload
                  </span>
                  <div className="text-2xl md:text-3xl font-bold text-white">TRail CB 3000</div>
                  <div className="text-sm text-white/70 mt-1">3,000 kg payload · High-density loads</div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex gap-8 mb-6 flex-wrap border-b border-[#dfe6ee] pb-6">
                    <div>
                      <div className="text-3xl font-bold text-[#011f40]">
                        3,000<span className="text-lg font-normal text-[#3a3a3a]/70">kg</span>
                      </div>
                      <div className="text-xs uppercase tracking-wider text-[#3a3a3a]/70 mt-1">
                        Payload Capacity
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#011f40]">26–30</div>
                      <div className="text-xs uppercase tracking-wider text-[#3a3a3a]/70 mt-1">
                        Pallets / Hour
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#011f40]">
                        8<span className="text-lg font-normal text-[#3a3a3a]/70">hr+</span>
                      </div>
                      <div className="text-xs uppercase tracking-wider text-[#3a3a3a]/70 mt-1">
                        Runtime
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-[#4b5563]">
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 text-[#005ead] shrink-0 mt-0.5" />
                      <span>Handles heavy industrial and manufacturing pallet loads</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 text-[#005ead] shrink-0 mt-0.5" />
                      <span>Built for controlled trailer unloading up to 3,000 kg payload</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 text-[#005ead] shrink-0 mt-0.5" />
                      <span>Suited for automotive, manufacturing, and heavy FMCG</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 text-[#005ead] shrink-0 mt-0.5" />
                      <span>Enhanced stability design for higher payload operations</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="size-4 text-[#005ead] shrink-0 mt-0.5" />
                      <span>Autonomy stack included</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeUp> 
          </div>
        </div>
      </section> */}

      {/* HOW IT WORKS */}
      <section id="how" className="py-16 md:py-24 bg-[#fafafa]">
        <div className="site-container">
          <FadeUp>
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-end mb-12">
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-[clamp(16px,0.8vw,30px)]">
                  How It Works
                </p>
                <h2 className="mt-3 text-[28px] font-bold leading-[1.15] text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
                  Autonomous Trailer Unloading,<br />
                  From Dock Check To Pallet <span className="text-[#005ead]">Drop.</span>
                </h2>
              </div>
              <p className="text-sm md:text-base leading-relaxed text-[#4b5563]">
                TRail combines dock interlocks, trailer-aware navigation, pallet perception, fork alignment, and safe reverse travel into one clear dock-to-staging workflow.
              </p>
            </div>
          </FadeUp>

          {/* 3-Column Architecture */}
          <div className="grid grid-cols-[minmax(280px,360px)_minmax(540px,1fr)_minmax(285px,360px)] gap-5 items-stretch max-lg:grid-cols-[1fr_1.25fr] max-md:grid-cols-1">
            {/* Story Panel */}
            <FadeUp delay={0.1} className="h-full">
              <div className="border border-[#dfe6ee] bg-white shadow-[0_18px_60px_rgba(1,31,64,0.06)] rounded-[24px] p-[1.65rem] flex flex-col justify-between gap-[1.35rem] h-full">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#005ead] block">
                    System Overview
                  </span>
                  <h3 className="text-xl font-bold text-[#011f40] mt-3 leading-snug">
                    One Command Starts A Controlled Dock-To-Staging Workflow.
                  </h3>
                  <p className="text-sm text-[#4b5563] mt-3 leading-relaxed">
                    The system verifies the bay, understands the trailer and pallet position, aligns the equipment, confirms pickup, and delivers the pallet to the assigned staging lane.
                  </p>
                </div>
                <div className="rounded-[18px] p-[1.1rem_1.15rem] border border-[#005ead]/20 bg-[#edf6ff]">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#005ead]">
                    Operator Command
                  </span>
                  <strong className="block my-1.5 text-[#011f40] font-bold text-base">
                    Unload Trailer · Bay 03
                  </strong>
                  <span className="block text-xs font-medium text-[#005ead]">
                    Dock verified · trailer restrained · robot ready
                  </span>
                </div>
                <div className="grid gap-2.5">
                  {["Dock Safety Verified", "Trailer Geometry Acquired", "Pallet Pose Confirmed", "Pickup And Exit Monitored"].map(
                    (step, i) => (
                      <div
                        key={step}
                        className="flex items-center gap-3 p-[0.75rem_0.85rem] border border-[#dfe6ee] rounded-[14px] bg-[#fafafa]"
                      >
                        <span className="text-xs font-bold text-[#005ead]">0{i + 1}</span>
                        <strong className="text-xs font-semibold text-[#011f40]">{step}</strong>
                      </div>
                    )
                  )}
                </div>
              </div>
            </FadeUp>

            {/* Visual Stage */}
            <FadeUp delay={0.2} className="h-full">
              <div className="border border-[#dfe6ee] bg-white shadow-[0_18px_60px_rgba(1,31,64,0.06)] rounded-[28px] overflow-hidden flex flex-col h-full">
                <div className="h-[52px] flex items-center justify-between px-[1.1rem] bg-gradient-to-r from-white to-[#f4f8fb] border-b border-[#dfe6ee]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#005ead] shadow-[0_0_0_5px_rgba(0,94,173,0.12)]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#011f40]">
                      TRail Perception Stack
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#4b5563]">Live Sensor View</span>
                </div>
                <div className="bg-white p-2 flex-1 flex items-center justify-center">
                  <Image
                    src="/anscer/images/trial-product/system-overview.webp"
                    alt="ANSCER TRail CB2000 sensor canopy and trailer-unloading perception stack"
                    width={720}
                    height={460}
                    className="w-full h-auto object-contain block"
                  />
                </div>
                <div className="p-[1.2rem_1.35rem] bg-[#fafafa] border-t border-[#dfe6ee]">
                  <strong className="block text-sm font-bold text-[#011f40] mb-1">
                    Real-time understanding of trailer, pallet, fork pockets, walls and people.
                  </strong>
                  <p className="text-xs text-[#4b5563] leading-relaxed">
                    Sensor data is fused locally on the robot so the mission can continue safely even when dock WiFi quality changes inside the trailer.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Control Layers */}
            <FadeUp delay={0.3} className="h-full max-lg:col-span-full">
              <div className="border border-[#dfe6ee] bg-white shadow-[0_18px_60px_rgba(1,31,64,0.06)] rounded-[24px] p-[1.4rem] flex flex-col gap-3.5 h-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005ead]">
                  Control Layers
                </span>
                {[
                  {
                    layer: "Layer 01",
                    title: "Dock Readiness",
                    desc: "Checks trailer presence, restraint, door, dock leveler and operator enable before entry.",
                  },
                  {
                    layer: "Layer 02",
                    title: "Trailer Navigation",
                    desc: "Tracks trailer walls, dock plate transition, pitch, roll and available reverse path.",
                  },
                  {
                    layer: "Layer 03",
                    title: "Pallet Engagement",
                    desc: "Detects pallet face, fork pockets, yaw angle, insertion depth and load confirmation.",
                  },
                  {
                    layer: "Layer 04",
                    title: "Safety Supervision",
                    desc: "Human detection, obstacle stop, speed zones, localization fault stop and recovery mode.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.layer}
                    className={`p-4 rounded-[16px] border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,94,173,0.08)] ${index === 0
                        ? "bg-[#edf6ff] border-[#005ead]/30"
                        : "bg-white border-[#dfe6ee] hover:bg-[#edf6ff]/40 hover:border-[#005ead]/25"
                      }`}
                  >
                    <span className="text-[10px] font-bold text-[#005ead] uppercase tracking-wider block">
                      {item.layer}
                    </span>
                    <strong className="block text-sm font-bold text-[#011f40] my-1">
                      {item.title}
                    </strong>
                    <p className="text-xs text-[#4b5563] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* 6 Step Cards */}
          <div className="mt-5 grid grid-cols-6 gap-3.5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {[
              { num: "01", title: "Verify Dock", desc: "Trailer restraint, dock leveler and door state are confirmed before the robot moves." },
              { num: "02", title: "Enter Trailer", desc: "Robot crosses the dock plate slowly while monitoring pitch, roll and traction." },
              { num: "03", title: "Scan Pallet", desc: "3D perception estimates pallet position, yaw angle, fork pockets and load condition." },
              { num: "04", title: "Align Forks", desc: "Robot body and fork approach are corrected for safe, repeatable pallet entry." },
              { num: "05", title: "Pick & Reverse", desc: "Load presence is confirmed before reversing through a monitored safety corridor." },
              { num: "06", title: "Drop & Repeat", desc: "Pallet is placed at staging, WMS/FMS is updated and the next cycle begins." },
            ].map((step, idx) => (
              <FadeUp key={step.num} delay={idx * 0.05} className="h-full">
                <div className="relative overflow-hidden rounded-[18px] p-[1.1rem] bg-white border border-[#dfe6ee] min-h-[170px] transition-all duration-200 shadow-[0_8px_26px_rgba(1,31,64,0.05)] before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:bg-[#005ead] before:opacity-60 hover:-translate-y-1 hover:border-[#005ead]/40 hover:shadow-[0_14px_36px_rgba(0,94,173,0.10)] h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[2.15rem] font-extrabold text-[#dfe6ee] leading-none block font-montserrat">{step.num}</span>
                    <strong className="block mt-3.5 mb-1.5 text-sm font-bold text-[#011f40] font-montserrat">{step.title}</strong>
                    <p className="text-xs text-[#4b5563] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES / TECHNOLOGY */}
      <section className="py-16 md:py-24 bg-white border-t border-[#dfe6ee]" id="capabilities">
        <div className="site-container">
          <FadeUp>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-[clamp(16px,0.8vw,30px)]">
              Technology
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.15] text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
              Built For The Hardest<br />
              Environment In <span className="text-[#005ead]">Logistics</span>
            </h2>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="divide-y divide-[#dfe6ee]">
              {technologyFeatures.map((feat, i) => (
                <FadeUp key={feat.title} delay={i * 70}>
                  <div className="py-5 flex gap-4 items-start group">
                    <div className="size-11 rounded-xl bg-[#e6ebf0] border border-[#dfe6ee] flex items-center justify-center text-xl shrink-0 group-hover:border-[#005ead]/40 transition-colors">
                      {feat.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#011f40] mb-1">{feat.title}</h3>
                      <p className="text-sm text-[#4b5563] leading-relaxed">{feat.description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={200}>
              <div className="sticky top-28 space-y-6">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#dfe6ee] bg-[#e6ebf0] shadow-sm">
                  <Image
                    src="/anscer/images/trial-product/technology-section.webp"
                    alt="ANSCER TRail CB2000 side profile with forks lowered"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#011f40] mb-3">
                    Core Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techStackPills.map((pill) => (
                      <span
                        key={pill.name}
                        className={
                          pill.bold
                            ? "rounded-md bg-[#011f40] px-3 py-1.5 text-xs font-semibold text-white shadow-xs"
                            : "rounded-md bg-[#e6ebf0] px-3 py-1.5 text-xs font-semibold text-[#011f40] border border-[#dfe6ee]"
                        }
                      >
                        {pill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* PERFORMANCE BENCHMARKS */}
      <section className="py-16 md:py-24 bg-[#011f40] text-white" id="performance">
        <div className="site-container">
          <FadeUp>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-[clamp(16px,0.8vw,30px)]">
              Performance Benchmarks
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.15] text-white md:text-[clamp(40px,2.4vw,80px)]">
              Real Numbers.<br />
              <span>Not Estimates.</span>
            </h2>
          </FadeUp>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {performanceStats.map((stat, i) => (
              <FadeUp
                key={stat.label}
                delay={i * 80}
                className={`h-full ${i === 2 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <div className="h-full rounded-xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-sm hover:border-[#005ead] transition-all flex flex-col justify-center">
                  <div className="text-3xl md:text-4xl font-bold text-white leading-none">
                    {stat.value}
                    {stat.unit && <span className="text-lg font-normal text-white/70">{stat.unit}</span>}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/80 mt-3">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-white/50 mt-1">{stat.subtext}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS / USE CASES */}
      <section className="py-16 md:py-24 bg-[#fafafa]" id="usecases">
        <div className="site-container">
          <FadeUp>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-[clamp(16px,0.8vw,30px)]">
              Applications
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.15] text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
              Three Ways TRail <span className="text-[#005ead]">Transforms</span><br />
              Your Operation
            </h2>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <FadeUp key={uc.title} delay={i * 100}>
                <div className="rounded-2xl border border-[#dfe6ee] bg-white overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                  <div className="relative h-56 w-full overflow-hidden bg-[#e6ebf0]">
                    <Image
                      src={uc.image}
                      alt={uc.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#011f40]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex justify-around text-white">
                      {uc.stats.map((s) => (
                        <div key={s.label} className="text-center">
                          <div className="text-base font-bold text-white">{s.num}</div>
                          <div className="text-[10px] uppercase tracking-wider text-white/70">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#011f40] mb-2">{uc.title}</h3>
                      <p className="text-sm text-[#4b5563] leading-relaxed">{uc.description}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRAIL BENEFITS */}
      <section className="py-16 md:py-24 bg-white border-t border-[#dfe6ee]" id="benefits">
        <div className="site-container">
          <FadeUp>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-[clamp(16px,0.8vw,30px)]">
              Why TRail
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.15] text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
              Built For <span className="text-[#005ead]">Best Performance</span>
            </h2>
            <p className="mt-4 max-w-[640px] 3xl:max-w-[750px] text-sm leading-relaxed text-[#3a3a3a] md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] md:leading-[150%]">
              Five measurable outcomes every TRail deployment delivers — from day one.
            </p>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyTrailBenefits.map((item, i) => (
              <FadeUp key={item.title} delay={i * 70}>
                <div className="rounded-xl border border-[#dfe6ee] bg-[#fafafa] p-6 text-center hover:bg-white hover:border-[#005ead]/30 hover:shadow-sm transition-all h-full">
                  <div className="size-12 rounded-xl bg-[#e6ebf0] border border-[#dfe6ee] flex items-center justify-center text-xl mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#011f40] mb-2">{item.title}</h3>
                  <p className="text-xs text-[#4b5563] leading-relaxed">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY & COMPLIANCE */}
      <section className="py-16 md:py-24 bg-[#e6ebf0]" id="safety">
        <div className="site-container">
          <FadeUp>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-[clamp(16px,0.8vw,30px)]">
              Safety & Compliance
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.15] text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
              Engineered <span className="text-[#005ead]">Safer.</span>
            </h2>
            <p className="mt-4 max-w-[640px] 3xl:max-w-[750px] text-sm leading-relaxed text-[#3a3a3a] md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] md:leading-[150%]">
              TRail should be deployed with safety architecture designed around ISO 3691-4 principles for unmanned industrial vehicles.
            </p>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {safetyFeatures.map((feat, i) => (
              <FadeUp key={feat.title} delay={i * 60}>
                <div className="rounded-xl border border-[#dfe6ee] bg-white p-6 flex gap-4 items-start shadow-sm h-full">
                  <span className="text-2xl font-bold text-[#005ead]/40 leading-none shrink-0">{feat.num}</span>
                  <div>
                    <h3 className="text-base font-bold text-[#011f40] mb-1">{feat.title}</h3>
                    <p className="text-xs text-[#4b5563] leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT & CHARGING */}
      <section className="py-16 md:py-24 bg-white" id="deployment">
        <div className="site-container">
          <FadeUp>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-[clamp(16px,0.8vw,30px)]">
              Deployment Approach
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.15] text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
              Up And Running<br />
              <span className="text-[#005ead]">In Hours - Not Months.</span>
            </h2>
            <p className="mt-4 max-w-[640px] 3xl:max-w-[750px] text-sm leading-relaxed text-[#3a3a3a] md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] md:leading-[150%]">
              TRail is positioned for low-disruption pilot deployments, with site mapping, WMS coordination, safety validation, and operator training planned as part of commissioning.
            </p>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentCards.map((c, i) => (
              <FadeUp key={c.title} delay={i * 80}>
                <div className="rounded-xl border border-[#dfe6ee] bg-[#fafafa] p-6 hover:bg-white hover:border-[#005ead]/30 hover:shadow-sm transition-all h-full">
                  <div className="text-3xl font-bold text-[#005ead] mb-2">{c.stat}</div>
                  <h3 className="text-base font-bold text-[#011f40] mb-2">{c.title}</h3>
                  <p className="text-xs text-[#4b5563] leading-relaxed">{c.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={350}>
            <div className="mt-12 rounded-2xl bg-[#011f40] p-6 md:p-8 text-white flex items-center gap-6 flex-col md:flex-row">
              <div className="size-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl shrink-0">
                🏆
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  Designed To Reduce Operator Dependency From The First Pallet To The Last.
                </h3>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                  TRail is positioned as a complete-cycle autonomous trailer unloading, with exception handling, dock interlocks, and controlled validation during pilot deployment.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 md:py-24 bg-[#011f40] text-white relative overflow-hidden" id="contact">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #011f40 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="site-container relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center justify-between">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-[clamp(16px,0.8vw,30px)]">
              Get Started
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.15] text-white md:text-[clamp(40px,2.4vw,80px)]">
              Ready To Automate<br />
              <span>Your Trailer Dock?</span>
            </h2>
            <p className="mt-4 max-w-[540px] text-sm text-white/70 leading-relaxed">
              We work with 3PL operators, retail DCs, and manufacturers globally. Talk to our team about a pilot deployment at your facility.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <ArrowButton target="/contact-us" className="h-12 px-8 text-sm font-bold">
              Request a Pilot
            </ArrowButton>
            <Link
              href="https://anscer.com"
              target="_blank"
              className="text-sm font-medium text-white/70 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              Visit anscer.com
              <ExternalLink className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
