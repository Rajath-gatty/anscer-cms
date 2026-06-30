import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, ArrowRight, GitFork, Route, Workflow } from "lucide-react";
import { imagePath } from "../components/home/assets";
import { ScrollReveal } from "../components/home/ScrollReveal";
import { ProductFaqAccordion } from "../components/products/ProductFaqAccordion";
import { ProductHeroSlider } from "../components/products/ProductHeroSlider";
import { ProductSeriesStaticMobile, ProductSeriesStickyStack } from "../components/products/ProductSeriesStickyStack";


export const metadata: Metadata = {
  title: "Products | ANSCER Robotics",
  description:
    "Explore ANSCER Robotics platforms for lifting, pulling, grasping, and moving material across industrial workflows.",
};

const featureCards = [
  {
    title: "Interoperable Architecture",
    copy: "VDA 5050-compliant architecture for scalable multi-vendor fleet integration.",
    Icon: GitFork,
    iconClassName: "rotate-180",
  },
  {
    title: "Business Application Layer",
    copy: "Execute industry-specific workflows with predefined modules and low-code customization.",
    Icon: Route,
  },
  {
    title: "Built-In Fleet & Mission Management",
    copy: "Configure missions, routes, and fleets through an intuitive interface.",
    Icon: Workflow,
  },
];

const faqs = [
  {
    question: "What industries can ANSCER robots be used in?",
    answer:
      "ANSCER robots are designed for manufacturing, warehousing, automotive, electronics, FMCG, logistics, and other material-handling applications. Our solutions can automate pallet movement, line feeding, goods transport, put-away, staging, and outbound operations.",
  },
  {
    question: "Can ANSCER robots integrate with our existing systems?",
    answer:
      "Yes. ANSCER robots can integrate with WMS, MES, ERP, conveyors, elevators, automatic doors, and other warehouse or factory systems. This enables seamless automation across your facility without disrupting existing operations.",
  },
  {
    question: "How long does it take to deploy an ANSCER solution?",
    answer:
      "Deployment timelines depend on the application, facility size, and level of integration required. After assessing your workflow and operational requirements, our team provides a detailed deployment plan, testing process, and go-live schedule.",
  },
  {
    question: "Are ANSCER robots safe to operate alongside people?",
    answer:
      "Yes. Our robots are designed to operate safely in environments where people and machines work together. Advanced safety sensors, obstacle detection, and compliance with international safety standards help ensure safe and reliable operation.",
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      <ProductHeroSlider />
      <SmartNavigationSection />
      <FeaturesSection />
      <div id="robot-series">
        <ProductSeriesStaticMobile />
        <ProductSeriesStickyStack />
      </div>
      <FaqSection />
      <ProductsCta />
    </main>
  );
}

function SmartNavigationSection() {
  return (
    <section className="hidden bg-[#eaf2f8] py-14 md:py-20">
      <div className="site-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#005ead] md:text-base">Real Solutions For Real Challenges</p>
            <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-tight md:text-[36px]">
              Smarter Navigation, <span className="text-[#005ead]">Anywhere</span>
            </h2>
            <p className="mt-4 max-w-[620px] text-sm leading-5 text-[#4b5563] md:text-base md:leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="grid h-8 min-w-[62px] place-items-center rounded-full border border-[#b9c9d9] px-4 text-xs font-medium">
              01/03
            </span>
            <button className="grid size-8 place-items-center rounded-full border border-[#b9c9d9]" aria-label="Previous navigation slide">
              <ArrowLeft aria-hidden="true" className="size-4" />
            </button>
            <button className="grid size-8 place-items-center rounded-full border border-[#b9c9d9]" aria-label="Next navigation slide">
              <ArrowRight aria-hidden="true" className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-[0.68fr_0.32fr]">
          <NavigationCard large image="case-study-manufacturing.jpg" title="Lorem ipsum dolor sit amet" />
          <NavigationCard image="Frame-1321316466.jpg" title="Flexible robot movement" />
        </div>
      </div>
    </section>
  );
}

function NavigationCard({ image, title, large = false }: { image: string; title: string; large?: boolean }) {
  return (
    <article className={`relative overflow-hidden rounded-lg bg-[#011f40] ${large ? "min-h-[470px]" : "min-h-[470px]"}`}>
      <Image src={`${imagePath}${image}`} alt={title} fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover opacity-88" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,31,64,.04),rgba(1,31,64,.72))]" />
      <p className="absolute bottom-6 left-6 right-6 text-sm leading-5 text-white/90 md:text-base md:leading-6">
        {title}. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
      </p>
    </article>
  );
}

function FeaturesSection() {
  return (
    <section className="bg-[#fafafa] py-14 md:py-20">
      <div className="site-container">
        <ScrollReveal className="max-w-[600px]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#005ead] md:text-base">How Our Robots Deliver Excellence</p>
          <h2 className="mt-4 text-[28px] font-bold tracking-tight md:text-[36px]">Key Features of All Our <span className="text-[#005ead]">Robots</span></h2>
          <p className="mt-4 text-sm leading-5 text-[#4b5563] md:text-base md:leading-6">
            Never worry about maintenance. ANSCER Robotics ensures seamless software updates, reliable hardware, and ongoing support to keep your robots operating at peak performance.
          </p>
        </ScrollReveal>

        <div className="mt-9 grid gap-5 lg:grid-cols-[0.48fr_0.52fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {featureCards.map((feature, index) => (
              <ScrollReveal
                key={feature.title}
                delay={90 + index * 70}
                className={index === 2 ? "sm:col-span-2" : undefined}
              >
                <article className="h-full rounded-lg bg-[#eaf2f8] p-6">
                  <div className="grid size-9 place-items-center rounded-md text-[#005ead]">
                    <feature.Icon
                      aria-hidden="true"
                      className={`size-6 ${feature.iconClassName ?? ""}`}
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#005ead] md:text-2xl">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-5 text-[#4b5563] md:text-base md:leading-6">{feature.copy}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={160} className="h-full">
            <article className="relative h-full min-h-[310px] overflow-hidden rounded-lg bg-[#011f40] p-7 text-white">
              <Image src={`${imagePath}de9a09864e6cf7999d592447391655110840a585.png`} alt="" fill sizes="680px" className="object-cover opacity-55" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,31,64,.72),rgba(1,31,64,.18))]" />
              <div className="relative z-10 max-w-[340px]">
                <h3 className="text-xl font-bold md:text-2xl">Let&apos;s Build Together</h3>
                <p className="mt-3 text-sm leading-5 text-white/84 md:text-base md:leading-6">Join us in shaping the future of robotics.</p>
              </div>
              <Image
                src={`${imagePath}agv-100-new.png`}
                alt="AGV robot"
                width={420}
                height={250}
                className="absolute bottom-0 right-6 w-[54%] max-w-[430px] object-contain"
              />
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#fafafa] py-14">
      <div className="site-container grid gap-4 md:grid-cols-[0.6fr_1fr] xl:grid-cols-[0.5fr_1fr]">
        <div>
          <h2 className="mt-5 text-[28px] font-bold leading-[1.2] text-[#011f40] md:text-[36px] md:leading-[1.15]">FAQs</h2>
          <p className="mt-4 max-w-[380px] text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-6">
            We&apos;ve heard it all — here&apos;s what people are really asking behind the scenes.
          </p>
        </div>
        <ProductFaqAccordion items={faqs} />
      </div>
    </section>
  );
}

function ProductsCta() {
  return (
    <section className="relative flex min-h-[556px] items-center overflow-hidden bg-[#005ead] py-20 text-white">
      <Image src="/anscer/images/dive-into-future/bg.png" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 z-10 bg-black/55" />
      <div className="absolute inset-0 z-20 bg-[#005ead] mix-blend-color" />
      <div className="site-container relative z-30 flex flex-col items-start gap-6">
        <h2 className="max-w-[970px] text-[48px] font-semibold leading-[60px] tracking-normal md:leading-[70px] lg:text-[60px] lg:leading-[1.1]">Dive Into The Future Factory</h2>
        <p className="max-w-[850px] text-[14px] font-medium leading-[20px] text-white md:leading-[32px] lg:text-[18px] lg:leading-[32px]">
          Explore ANSCER&apos;s cutting-edge lineup: powerful, smart automation solutions engineered to transform your operations.
        </p>
        <a
          href="#contact"
          className="group inline-flex h-11 items-center gap-3 rounded-sm bg-[#015EAD] px-5 text-[14px] font-medium uppercase tracking-wide text-white transition hover:bg-[#046bc5]"
        >
          Talk to our experts
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
        </a>
      </div>
    </section>
  );
}
