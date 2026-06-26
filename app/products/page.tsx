import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { imagePath } from "../components/home/assets";
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
    title: "Setup & Deployment",
    copy: "Lorem ipsum dolor sit amet consectetur. Lorem tincidunt et enim amet urna viverra facilisis in.",
  },
  {
    title: "Smart Support & Reliability",
    copy: "Continuous software updates and always stay up-to-date with the latest features and fixes.",
  },
  {
    title: "Flexible Ecosystem",
    copy: "True 24/7 accessory compatibility. Easily integrate with conveyors, belts, lifts and more.",
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
    <section className="bg-[#eaf2f8] py-14 md:py-20">
      <div className="site-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#005ead]">Real Solutions For Real Challenges</p>
            <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-tight md:text-[42px]">
              Smarter Navigation, <span className="text-[#005ead]">Anywhere</span>
            </h2>
            <p className="mt-4 max-w-[620px] text-sm leading-6 text-[#4b5563]">
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
      <p className="absolute bottom-6 left-6 right-6 text-sm leading-5 text-white/90">
        {title}. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
      </p>
    </article>
  );
}

function FeaturesSection() {
  return (
    <section className="bg-[#fafafa] py-14 md:py-20">
      <div className="site-container">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#005ead]">How Our Robots Deliver Excellence</p>
        <h2 className="mt-4 text-[30px] font-bold tracking-tight md:text-[40px]">Key Features of All Our Robots</h2>
        <p className="mt-4 max-w-[600px] text-sm leading-6 text-[#4b5563]">
          Never worry about maintenance. ANSCER Robotics ensures seamless software updates, reliable hardware, and ongoing support to keep your robots operating at peak performance.
        </p>

        <div className="mt-9 grid gap-5 lg:grid-cols-[0.48fr_0.52fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {featureCards.map((feature) => (
              <article key={feature.title} className="rounded-lg bg-[#eaf2f8] p-6">
                <div className="grid size-9 place-items-center rounded-md text-[#005ead]">
                  <Plus aria-hidden="true" className="size-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#005ead]">{feature.title}</h3>
                <p className="mt-3 text-xs leading-5 text-[#4b5563]">{feature.copy}</p>
              </article>
            ))}
          </div>
          <article className="relative min-h-[310px] overflow-hidden rounded-lg bg-[#011f40] p-7 text-white">
            <Image src={`${imagePath}Frame-1321316466.jpg`} alt="" fill sizes="680px" className="object-cover opacity-55" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,31,64,.72),rgba(1,31,64,.18))]" />
            <div className="relative z-10 max-w-[340px]">
              <h3 className="text-2xl font-bold">Let&apos;s Build Together</h3>
              <p className="mt-3 text-sm leading-6 text-white/84">Join us in shaping the future of robotics.</p>
            </div>
            <Image
              src={`${imagePath}agv-100-new.png`}
              alt="AGV robot"
              width={420}
              height={250}
              className="absolute bottom-0 right-6 w-[54%] max-w-[430px] object-contain"
            />
          </article>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#fafafa] py-16 md:py-20">
      <div className="site-container grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
        <div>
          <h2 className="text-[30px] font-bold tracking-tight md:text-[40px]">FAQs</h2>
          <p className="mt-4 max-w-[310px] text-sm leading-6 text-[#4b5563]">
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
    <section className="relative overflow-hidden bg-[#005ead] py-20 text-white">
      <Image src={`${imagePath}96cdc152cb608044ef4fbddf84c5978fac86d350.png`} alt="" fill sizes="100vw" className="object-cover opacity-35" />
      <div className="absolute inset-0 bg-[#005ead]/72" />
      <div className="site-container relative z-10">
        <h2 className="max-w-[760px] text-[34px] font-bold leading-tight tracking-tight md:text-[52px]">Dive Into The Future Factory</h2>
        <p className="mt-4 max-w-[560px] text-sm leading-6 text-white/85 md:text-base">
          Explore ANSCER&apos;s cutting-edge lineup: powerful, smart automation solutions engineered to transform your operations.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex h-11 items-center gap-3 rounded-sm bg-white px-5 text-[12px] font-bold uppercase tracking-wide text-[#005ead] transition hover:bg-[#edf6ff]"
        >
          Talk to our experts <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}
