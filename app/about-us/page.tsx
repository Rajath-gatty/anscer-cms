import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  HeartHandshake,
  Lightbulb,
  Medal,
  Smile,
} from "lucide-react";
import { imagePath } from "../components/home/assets";
import { FloatingValueText } from "./FloatingValueText";
import { PathToPowerInteractive } from "./PathToPowerInteractive";

export const metadata: Metadata = {
  title: "About Us | ANSCER Robotics",
  description: "Built to transform industries. Driven by vision.",
};

const values = [
  {
    title: "Honesty & Integrity",
    copy: "We act with transparency, own our actions, and stay true to our word.",
    Icon: Medal,
    textPosition:
      "lg:left-1/2 lg:top-[16px] lg:w-[300px] lg:-translate-x-1/2 lg:text-center",
    iconPosition: "lg:left-1/2 lg:top-0 lg:-translate-x-1/2 lg:-translate-y-1/2",
  },
  {
    title: "Wonder & Discovery",
    copy: "Curiosity fuels us - driving breakthroughs, fresh thinking, and relentless exploration.",
    Icon: Compass,
    textPosition:
      "lg:left-[12px] lg:top-[250px] lg:w-[300px] lg:-translate-y-1/2 lg:text-right",
    iconPosition: "lg:left-0 lg:top-[36%] lg:-translate-x-1/2 lg:-translate-y-1/2",
  },
  {
    title: "Innovation & Authenticity",
    copy: "Bold ideas meet real-world relevance to deliver meaningful, future-ready solutions.",
    Icon: Lightbulb,
    textPosition:
      "lg:right-[-28px] lg:top-[250px] lg:w-[330px] lg:-translate-y-1/2",
    iconPosition: "lg:right-0 lg:top-[36%] lg:translate-x-1/2 lg:-translate-y-1/2",
  },
  {
    title: "Compassion & Empathy",
    copy: "We build with care for people, partners, and the world we automate.",
    Icon: HeartHandshake,
    textPosition:
      "lg:bottom-[28px] lg:left-[92px] lg:w-[310px] lg:text-right",
    iconPosition: "lg:bottom-[9%] lg:left-[21%] lg:-translate-x-1/2 lg:translate-y-1/2",
  },
  {
    title: "Positivity & Delight",
    copy: "We lead with optimism and craft experiences that spark confidence and joy.",
    Icon: Smile,
    textPosition: "lg:bottom-[18px] lg:right-[84px] lg:w-[310px]",
    iconPosition: "lg:bottom-[9%] lg:right-[21%] lg:translate-x-1/2 lg:translate-y-1/2",
  },
] as const;

const testimonials = [
  {
    quote:
      "“ANSCER consistently demonstrated exceptional customer service, meticulous attention to detail, and outstanding accountability throughout our project. Their deployment team’s perseverance and enthusiasm were instrumental to a successful implementation. We greatly value their professionalism and collaborative approach.”",
    name: "Sarath",
    role: "Automation Head",
    avatar: "Ellipse-369.jpg",
  },
  {
    quote:
      "“ANSCER’s robots have become an integral part ofour team, working tirelessly and reliably. In the first three months, we saw a clear drop in manual errors and our through put went up. The safety features are excellent, and our staff quickly grew comfortable working alongside the robots.”",
    name: "Ganesh P",
    role: "Sr.Manager",
    avatar: "Ellipse-369.jpg",
  },
  {
    quote:
      '"They\'ve helped us scale and expand  across multiple APAC international plants with satisfactory support and timely issue resolution. What started as FG movement has evolved into multiple use cases for our smart factroy  and warehouses. One standout deplomyent is Kanban material repenishment in our Chennai Plant"',
    name: "Vishnu",
    role: "Regional Lead - Automation and AI",
    avatar: "Ellipse-369.jpg",
  },
] as const;

const stats = [
  {
    value: "85+",
    label: "Projects Delivered",
    copy: "Successfully deployed automation solutions across 4+ continents, helping customers in diverse industries achieve operational excellence.",
  },
  {
    value: "800,000+",
    label: "Autonomous Trips Completed",
    copy: "Proven reliability across real-world manufacturing and warehouse environments.",
  },
  {
    value: "100+",
    label: "Robots Deployed Worldwide",
    copy: "Delivering reliable automation across multiple industries and geographies",
  },
] as const;

const teamImages = [
  "1af2086220affecd5f498aeca93f64918a91bf86.jpg",
  "Frame-1321317238-2.jpg",
  "Frame-1321317240-1.jpg",
  "Frame-1321317239-1.jpg",
] as const;

const investorLogos = [
  { image: "Frame-1321317158.png", className: "lg:col-start-1 lg:row-start-1" },
  { image: "Frame-1321317160.png", className: "lg:col-start-2 lg:row-start-2" },
  { image: "IKP-Eden-Logo-1.png", className: "lg:col-start-3 lg:row-start-1" },
] as const;

export default function AboutUsPage() {
  return (
    <main className="bg-white text-[#011f40]">
      <AboutHero />
      <StandForSection />
      <WhatDrivesUsSection />
      <PathToPowerSection />
      <TestimonialsSection />
      <StatsSection />
      <TeamSection />
      <InvestorsSection />
    </main>
  );
}

function AboutHero() {
  return (
    <section className="relative h-[520px] overflow-hidden bg-[#011f40] text-white md:h-[720px]">
      <Image
        src={`${imagePath}Desktop---28.jpg`}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_50%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(59deg,rgba(0,0,0,.82),rgba(0,0,0,.18)_66%,rgba(0,0,0,0))]" />
      <div className="site-container relative z-10 flex h-full items-center">
        <div className="max-w-[680px] pt-10">
          <h1 className="text-[42px] font-extrabold leading-[1.06] text-white md:text-[60px]">
            Powering What&rsquo;s Next, Today
          </h1>
          <p className="mt-6 text-sm font-semibold leading-6 text-white/92 md:text-base">
            Built to transform industries. Driven by vision
          </p>
        </div>
      </div>
    </section>
  );
}

function StandForSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="site-container">
        <SectionEyebrow>Core. Clear. Committed.</SectionEyebrow>
        <SectionHeading>What We Stand For</SectionHeading>
        <p className="mt-4 max-w-[640px] text-[15px] leading-[1.55] text-[#3a3a3a]">
          We deliver next-gen Autonomous Mobile Robots (AMRs) from India to the
          world, prioritizing safety, ergonomics, and ease of use to meet every
          automation need with cutting-edge, user-friendly solutions.
        </p>

        <div className="relative mx-auto mt-12 min-h-[680px] max-w-[1120px] lg:mt-0">
          <div className="mx-auto grid aspect-square w-[min(78vw,430px)] place-items-center rounded-full border border-[#c9d3df] bg-white lg:absolute lg:left-1/2 lg:top-[330px] lg:-translate-x-1/2 lg:-translate-y-1/2">
            <div className="absolute inset-[11%] rounded-full border border-[#c9d3df]" />
            <div className="absolute inset-[22%] rounded-full border border-[#c9d3df]" />
            <Image
              src={`${imagePath}Group-1321315879.png`}
              alt=""
              width={330}
              height={330}
              className="relative z-10 w-[78%] object-contain"
            />
            {values.map((value) => (
              <span
                key={`${value.title}-ring-icon`}
                className={`absolute z-20 hidden size-9 place-items-center rounded-full bg-white text-[#0068b7] lg:grid ${value.iconPosition}`}
              >
                <value.Icon className="size-8" strokeWidth={2.25} />
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:contents">
            {values.map((value, index) => (
              <ValuePoint
                key={value.title}
                delay={index * 0.34}
                seed={index}
                {...value}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuePoint({
  title,
  copy,
  Icon,
  textPosition,
  delay,
  seed,
}: (typeof values)[number] & { delay: number; seed: number }) {
  return (
    <article
      className={`relative flex gap-3 rounded-md bg-white p-4 shadow-[0_12px_28px_rgba(1,31,64,.04)] lg:absolute lg:z-10 lg:block lg:bg-transparent lg:p-0 lg:shadow-none ${textPosition}`}
    >
      <FloatingValueText delay={delay} seed={seed}>
        <div className="flex gap-3 lg:block">
          <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-[#005ead] text-[#005ead] lg:hidden">
            <Icon className="size-4" strokeWidth={2.25} />
          </span>
          <div>
            <h3 className="text-[16px] font-extrabold leading-tight tracking-[0.01em] text-[#005ead] lg:text-[22px]">
              {title}
            </h3>
            <p className="mt-1 text-[12px] font-medium leading-[1.35] text-[#011f40] lg:text-[14px]">
              {copy}
            </p>
          </div>
        </div>
      </FloatingValueText>
    </article>
  );
}

function WhatDrivesUsSection() {
  return (
    <section className="bg-[#e6ebf0] py-14 md:py-20">
      <div className="site-container">
        <SectionEyebrow>Built to Move the Future</SectionEyebrow>
        <SectionHeading>
          What Drives <span className="text-[#005ead]">Us</span>
        </SectionHeading>
        <p className="mt-4 max-w-[640px] text-[15px] leading-[1.55] text-[#3a3a3a]">
          We launched ANSCER to redefine mobile robotics—delivering next-gen
          AMR solutions that prioritize safety, simplicity, and global
          scalability.
        </p>

        <div className="mt-11 grid gap-6 lg:grid-cols-[1fr_.25fr_.25fr_1.25fr] lg:auto-rows-[240px]">
          <InfoCard
            className="lg:col-span-1 lg:row-span-1"
            icon="crosshair.svg"
            title="What Drives Us"
            copy="We launched ANSCER to redefine mobile robotics—delivering next-gen AMR solutions that prioritize safety, simplicity, and global scalability."
          />
          <FeatureImageCard />
          <div className="relative flex min-h-[190px] items-center justify-center overflow-hidden rounded-md bg-transparent lg:col-span-2">
            <Image
              src={`${imagePath}ar650.png`}
              alt="ANSCER AR 650 autonomous mobile robot"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
          <InfoCard
            className="lg:col-span-2"
            icon="binoculars.svg"
            title="Vision in Motion"
            copy="We harness mobile robotics to empower people, enabling seamless collaboration where both thrive, grow, and reach full potential."
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  copy,
  className = "",
}: {
  icon: string;
  title: string;
  copy: string;
  className?: string;
}) {
  return (
    <article className={`rounded-md bg-white p-6 ${className}`}>
      <Image src={`${imagePath}${icon}`} alt="" width={34} height={34} />
      <h3 className="mt-5 text-[20px] font-extrabold leading-tight text-[#005ead]">
        {title}
      </h3>
      <p className="mt-3 max-w-[460px] text-[14px] leading-[1.55] text-[#3a3a3a]">
        {copy}
      </p>
    </article>
  );
}

function FeatureImageCard() {
  return (
    <article className="relative min-h-[240px] overflow-hidden rounded-md bg-[#011f40] text-white lg:col-span-3 lg:row-span-1">
      <Image
        src={`${imagePath}Frame-1321316393.jpg`}
        alt="ANSCER robots in a warehouse"
        fill
        sizes="(min-width: 1024px) 70vw, 100vw"
        className="object-cover object-[50%_70%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.68),rgba(0,0,0,0))]" />
      <div className="absolute left-6 top-6 max-w-[640px]">
        <h3 className="text-[22px] font-extrabold leading-tight">
          Redefining logistics through robotics
        </h3>
        <p className="mt-3 text-[14px] leading-[1.55] text-white/86">
          With an intuitive setup, configuring AMR workflows is quick—start
          autonomous payload movement within hours, if not minutes.
        </p>
      </div>
    </article>
  );
}

function PathToPowerSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="site-container">
        <SectionHeading>
          Path to <span className="text-[#005ead]">Power</span>
        </SectionHeading>
        <PathToPowerInteractive />
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-[#e6ebf0] py-14 md:py-20">
      <div className="site-container">
        <SectionEyebrow>Testimonials</SectionEyebrow>
        <SectionHeading>
          What Our Client <span className="text-[#005ead]">Says</span>
        </SectionHeading>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="flex min-h-[260px] flex-col rounded-md bg-white p-6 shadow-[0_12px_30px_rgba(1,31,64,.04)]"
            >
              <Image
                src={`${imagePath}Frame-1321316653.svg`}
                alt=""
                width={90}
                height={18}
                className="h-5 w-auto"
              />
              <p className="mt-4 flex-1 text-[14px] font-medium leading-[1.55] text-[#011f40]">
                {testimonial.quote}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <Image
                  src={`${imagePath}${testimonial.avatar}`}
                  alt=""
                  width={44}
                  height={44}
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-[13px] font-extrabold text-[#011f40]">
                    {testimonial.name}
                  </h3>
                  <p className="text-[12px] text-[#3a3a3a]/72">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20">
      <div className="absolute left-0 right-0 top-10 hidden h-px bg-[#ccd2d9] md:block" />
      <div className="site-container relative">
        <div className="grid gap-9 md:grid-cols-3">
          {stats.map((stat, index) => (
            <article key={stat.label} className="relative text-center">
              <Image
                src={`${imagePath}robot.png`}
                alt=""
                width={58}
                height={58}
                className={`mx-auto mb-8 h-[58px] w-auto object-contain ${
                  index === 2 ? "md:-translate-y-5" : ""
                }`}
              />
              <h3 className="text-[32px] font-extrabold leading-none text-[#011f40] md:text-[40px]">
                <span className="text-[#005ead]">{stat.value}</span>
              </h3>
              <p className="mt-4 text-[14px] font-extrabold text-[#011f40]">
                {stat.label}
              </p>
              <p className="mx-auto mt-3 max-w-[340px] text-[13px] leading-[1.6] text-[#3a3a3a]">
                {stat.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section id="team-section" className="bg-white py-14 md:py-20">
      <div className="site-container">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionEyebrow>The Team Behind the Tech</SectionEyebrow>
            <SectionHeading>
              Built by <span className="text-[#005ead]">Believers</span>
            </SectionHeading>
            <p className="mt-4 max-w-[640px] text-[15px] leading-[1.55] text-[#3a3a3a]">
              All the Answers You Need About Anscer Robotics—Right at Your
              Fingertips. From how our autonomous robots transform industries to
              what makes our tech stand out—your journey into the future of
              smart automation starts here.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full border border-[#ccd2d9] px-4 py-2 text-[12px] font-bold text-[#011f40]">
              04/16
            </span>
            <button
              type="button"
              aria-label="Previous team member"
              className="grid size-10 place-items-center rounded-full border border-[#ccd2d9] text-[#011f40]"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next team member"
              className="grid size-10 place-items-center rounded-full border border-[#ccd2d9] text-[#011f40]"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="site-container flex min-w-max gap-6">
          {teamImages.map((image) => (
            <article
              key={image}
              className="relative h-[350px] w-[285px] shrink-0 overflow-hidden rounded-md bg-[#011f40] text-white md:w-[300px]"
            >
              <Image
                src={`${imagePath}${image}`}
                alt=""
                fill
                sizes="320px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,31,64,0),rgba(0,0,0,.88))]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestorsSection() {
  return (
    <section className="bg-white pb-20 pt-8 md:pb-28">
      <div className="site-container grid gap-10 lg:grid-cols-[260px_1fr] lg:items-center">
        <SectionHeading>
          Our <span className="text-[#005ead]">Investors</span>
        </SectionHeading>

        <div className="grid min-h-[260px] grid-cols-1 place-items-center gap-10 sm:grid-cols-3 lg:grid-cols-3 lg:grid-rows-2">
          {investorLogos.map((logo, index) => (
            <div
              key={`${logo.image}-${index}`}
              className={`flex min-h-[52px] items-center justify-center ${logo.className}`}
            >
              <Image
                src={`${imagePath}${logo.image}`}
                alt="Investor logo"
                width={190}
                height={90}
                className="max-h-[72px] w-auto max-w-[180px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#005ead]">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 text-[32px] font-extrabold leading-tight text-[#011f40] md:text-[36px]">
      {children}
    </h2>
  );
}
