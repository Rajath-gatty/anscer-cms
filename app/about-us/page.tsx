import { Compass, HeartHandshake, Lightbulb, Medal, Smile } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { imagePath } from "../components/home/assets";
import { AboutSectionReveal } from "./AboutSectionReveal";
import { FloatingValueText } from "./FloatingValueText";
import { PathToPowerInteractive } from "./PathToPowerInteractive";
import { StatsAnimatedSection } from "./StatsAnimatedSection";
import { TeamSlider } from "./TeamSlider";

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
    iconPosition:
      "lg:left-1/2 lg:top-0 lg:-translate-x-1/2 lg:-translate-y-1/2",
  },
  {
    title: "Wonder & Discovery",
    copy: "Curiosity fuels us - driving breakthroughs, fresh thinking, and relentless exploration.",
    Icon: Compass,
    textPosition:
      "lg:left-[12px] lg:top-[250px] lg:w-[300px] lg:-translate-y-1/2 lg:text-right",
    iconPosition:
      "lg:left-0 lg:top-[36%] lg:-translate-x-1/2 lg:-translate-y-1/2",
  },
  {
    title: "Innovation & Authenticity",
    copy: "Bold ideas meet real-world relevance to deliver meaningful, future-ready solutions.",
    Icon: Lightbulb,
    textPosition:
      "lg:right-[-28px] lg:top-[250px] lg:w-[330px] lg:-translate-y-1/2",
    iconPosition:
      "lg:right-0 lg:top-[36%] lg:translate-x-1/2 lg:-translate-y-1/2",
  },
  {
    title: "Compassion & Empathy",
    copy: "We build with care for people, partners, and the world we automate.",
    Icon: HeartHandshake,
    textPosition: "lg:bottom-[28px] lg:left-[92px] lg:w-[310px] lg:text-right",
    iconPosition:
      "lg:bottom-[9%] lg:left-[21%] lg:-translate-x-1/2 lg:translate-y-1/2",
  },
  {
    title: "Positivity & Delight",
    copy: "We lead with optimism and craft experiences that spark confidence and joy.",
    Icon: Smile,
    textPosition: "lg:bottom-[18px] lg:right-[84px] lg:w-[310px]",
    iconPosition:
      "lg:bottom-[9%] lg:right-[21%] lg:translate-x-1/2 lg:translate-y-1/2",
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
    value: "85",
    label: "Projects Delivered",
    copy: "Successfully deployed automation solutions across 4+ continents, helping customers in diverse industries achieve operational excellence.",
  },
  {
    value: "800,000",
    label: "Autonomous Trips Completed",
    copy: "Proven reliability across real-world manufacturing and warehouse environments.",
  },
  {
    value: "100",
    label: "Robots Deployed Worldwide",
    copy: "Delivering reliable automation across multiple industries and geographies",
  },
] as const;

const teamSlides = [
  {
    image: "about-team-ribin.jpg",
    name: "Ribin Mathew",
    role: "Global CEO, Co-founder",
    alt: "Ribin Mathew portrait",
  },
  {
    image: "about-team-mark.jpg",
    name: "Mark Messina",
    role: "MD & CEO ANSCER AMERICAS",
    alt: "Mark Messina portrait",
  },
  {
    image: "about-team-ebin.jpg",
    name: "Ebin Sunny",
    role: "COO, Co-founder",
    alt: "Ebin Sunny portrait",
  },
  {
    image: "about-team-raghu.jpg",
    name: "Raghu Venkatesh",
    role: "CBO, Co-founder",
    alt: "Raghu Venkatesh portrait",
  },
  {
    image: "about-team-raj.jpg",
    name: "Raj Mohan",
    role: "CTO & Co-founder",
    alt: "Raj Mohan portrait",
  },
] as const;

const investorLogos = [
  { image: "Frame-1321317158.png", className: "lg:col-start-1 lg:row-start-1" },
  { image: "Frame-1321317160.png", className: "lg:col-start-2 lg:row-start-2" },
  { image: "IKP-Eden-Logo-1.png", className: "lg:col-start-3 lg:row-start-1" },
] as const;

export default function AboutUsPage() {
  return (
    <main className="bg-white text-[#011f40]">
      <AboutSectionReveal>
        <AboutHero />
      </AboutSectionReveal>
      <AboutSectionReveal>
        <StandForSection />
      </AboutSectionReveal>
      <AboutSectionReveal>
        <WhatDrivesUsSection />
      </AboutSectionReveal>
      <AboutSectionReveal>
        <PathToPowerSection />
      </AboutSectionReveal>
      <AboutSectionReveal>
        <TestimonialsSection />
      </AboutSectionReveal>
      <AboutSectionReveal>
        <StatsSection />
      </AboutSectionReveal>
      <AboutSectionReveal>
        <TeamSection />
      </AboutSectionReveal>
      <AboutSectionReveal>
        <InvestorsSection />
      </AboutSectionReveal>
    </main>
  );
}

function AboutHero() {
  return (
    <section className="relative h-[220px] overflow-hidden bg-[#011f40] text-white md:h-[720px]">
      <Image
        src={`${imagePath}Desktop---28.jpg`}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[64%_50%] md:object-[58%_50%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(59deg,rgba(0,0,0,.82),rgba(0,0,0,.18)_66%,rgba(0,0,0,0))]" />
      <div className="site-container relative z-10 flex h-full items-end pb-8 md:items-center md:pb-0">
        <div className="max-w-[680px] md:pt-10">
          <h1 className="max-w-[270px] text-[28px] font-extrabold leading-[1.08] text-white md:max-w-none md:text-[60px]">
            Powering What&rsquo;s Next, Today
          </h1>
          <p className="mt-3 text-[9px] font-semibold leading-4 text-white/92 md:mt-6 md:text-base md:leading-6">
            Built to transform industries. Driven by vision
          </p>
        </div>
      </div>
    </section>
  );
}

function StandForSection() {
  return (
    <section className="bg-white py-7 md:py-20">
      <div className="site-container">
        <SectionEyebrow>Core. Clear. Committed.</SectionEyebrow>
        <SectionHeading>What We Stand For</SectionHeading>
        <p className="mt-3 max-w-[640px] text-[12px] leading-[1.45] text-[#3a3a3a] md:mt-4 md:text-[15px] md:leading-[1.55]">
          We deliver next-gen Autonomous Mobile Robots (AMRs) from India to the
          world, prioritizing safety, ergonomics, and ease of use to meet every
          automation need with cutting-edge, user-friendly solutions.
        </p>

        <div className="relative mx-auto mt-12 hidden min-h-[680px] max-w-[1120px] lg:mt-0 lg:block">
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
    <section className="bg-[#e6ebf0] py-7 md:py-20">
      <div className="site-container">
        <SectionEyebrow>Built to Move the Future</SectionEyebrow>
        <SectionHeading>
          What Drives <span className="text-[#005ead]">Us</span>
        </SectionHeading>
        <p className="mt-3 max-w-[640px] text-[12px] leading-[1.45] text-[#3a3a3a] md:mt-4 md:text-[15px] md:leading-[1.55]">
          We launched ANSCER to redefine mobile robotics—delivering next-gen AMR
          solutions that prioritize safety, simplicity, and global scalability.
        </p>

        <div className="mt-6 grid gap-4 md:mt-11 md:gap-6 lg:grid-cols-[1fr_.25fr_.25fr_1.25fr] lg:auto-rows-[240px]">
          <InfoCard
            className="order-1 lg:order-none lg:col-span-1 lg:row-span-1"
            icon="crosshair.svg"
            title="What Drives Us"
            copy="We launched ANSCER to redefine mobile robotics—delivering next-gen AMR solutions that prioritize safety, simplicity, and global scalability."
          />
          <FeatureImageCard />
          <div className="order-4 relative flex min-h-[62px] items-center justify-center overflow-hidden rounded-md bg-transparent lg:order-none lg:col-span-2 lg:min-h-[190px]">
            <Image
              src={`${imagePath}ar650.png`}
              alt="ANSCER AR 650 autonomous mobile robot"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
          <InfoCard
            className="order-3 lg:order-none lg:col-span-2"
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
    <article className={`rounded-md bg-white p-4 md:p-6 ${className}`}>
      <Image
        src={`${imagePath}${icon}`}
        alt=""
        width={34}
        height={34}
        className="size-7 md:size-[34px]"
      />
      <h3 className="mt-4 text-[15px] font-extrabold leading-tight text-[#005ead] md:mt-5 md:text-[20px]">
        {title}
      </h3>
      <p className="mt-2 max-w-[460px] text-[11px] leading-[1.45] text-[#3a3a3a] md:mt-3 md:text-[14px] md:leading-[1.55]">
        {copy}
      </p>
    </article>
  );
}

function FeatureImageCard() {
  return (
    <article className="order-2 relative min-h-[190px] overflow-hidden rounded-md bg-[#011f40] text-white lg:order-none lg:col-span-3 lg:row-span-1 lg:min-h-[240px]">
      <Image
        src={`${imagePath}Frame-1321316393.jpg`}
        alt="ANSCER robots in a warehouse"
        fill
        sizes="(min-width: 1024px) 70vw, 100vw"
        className="object-cover object-[50%_70%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.68),rgba(0,0,0,0))]" />
      <div className="absolute left-4 right-4 top-4 max-w-[640px] md:left-6 md:right-auto md:top-6">
        <h3 className="text-[13px] font-extrabold leading-tight md:text-[22px]">
          Redefining logistics through robotics
        </h3>
        <p className="mt-2 text-[10px] leading-[1.35] text-white/86 md:mt-3 md:text-[14px] md:leading-[1.55]">
          With an intuitive setup, configuring AMR workflows is quick—start
          autonomous payload movement within hours, if not minutes.
        </p>
      </div>
    </article>
  );
}

function PathToPowerSection() {
  return (
    <section hidden className="bg-white py-7 md:py-20">
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
    <section className="bg-[#e6ebf0] py-7 md:py-20">
      <div className="site-container">
        <SectionEyebrow>Testimonials</SectionEyebrow>
        <SectionHeading>
          What Our Client <span className="text-[#005ead]">Says</span>
        </SectionHeading>
        <p className="mt-3 max-w-[620px] text-[11px] leading-[1.45] text-[#3a3a3a] md:hidden">
          Lorem ipsum dolor sit amet consectetur. Vivamus eget iaculis nulla ut
          interdum pharetra sagittis lacus luctus.
        </p>

        <div className="-mx-5 mt-5 flex gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:mt-10 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex min-h-[190px] w-[255px] shrink-0 flex-col rounded-md bg-white p-4 shadow-[0_12px_30px_rgba(1,31,64,.04)] md:min-h-[260px] md:w-auto md:p-6"
            >
              <Image
                src={`${imagePath}Frame-1321316653.svg`}
                alt=""
                width={90}
                height={18}
                className="h-4 w-auto md:h-5"
              />
              <p className="mt-3 flex-1 text-[10px] font-medium leading-[1.45] text-[#011f40] md:mt-4 md:text-[14px] md:leading-[1.55]">
                {testimonial.quote}
              </p>
              <div className="mt-4 flex items-center gap-3 md:mt-5">
                <Image
                  src={`${imagePath}${testimonial.avatar}`}
                  alt=""
                  width={44}
                  height={44}
                  className="size-8 rounded-full object-cover md:size-11"
                />
                <div>
                  <h3 className="text-[10px] font-extrabold text-[#011f40] md:text-[13px]">
                    {testimonial.name}
                  </h3>
                  <p className="text-[9px] text-[#3a3a3a]/72 md:text-[12px]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <a
          href="#"
          className="mt-4 inline-flex h-9 items-center rounded-[3px] bg-[#005ead] px-4 text-[10px] font-extrabold uppercase tracking-wide text-white md:hidden"
        >
          Read all 56+ reviews
        </a>
      </div>
    </section>
  );
}

function StatsSection() {
  return <StatsAnimatedSection stats={stats} />;
}

function TeamSection() {
  return (
    <section id="team-section" className="bg-[#fafafa] py-7 md:py-20">
      <TeamSlider
        slides={teamSlides}
        eyebrow="The Team Behind the Tech"
        title="Built by"
        highlightedTitle="Believers"
        copy="All the Answers You Need About Anscer Robotics—Right at Your Fingertips. From how our autonomous robots transform industries to what makes our tech stand out—your journey into the future of smart automation starts here."
      />
    </section>
  );
}

function InvestorsSection() {
  return (
    <section className="bg-white pb-10 pt-4 md:pb-28 md:pt-8">
      <div className="site-container grid gap-10 lg:grid-cols-[260px_1fr] lg:items-center">
        <SectionHeading>
          Our <span className="text-[#005ead]">Investors</span>
        </SectionHeading>

        <div className="grid min-h-[210px] grid-cols-2 place-items-center gap-x-8 gap-y-7 sm:grid-cols-3 lg:min-h-[260px] lg:grid-cols-3 lg:grid-rows-2 lg:gap-10">
          {[...investorLogos, ...investorLogos].map((logo, index) => (
            <div
              key={`${logo.image}-${index}`}
              className={`flex min-h-[42px] items-center justify-center md:min-h-[52px] ${index < investorLogos.length ? logo.className : "lg:hidden"}`}
            >
              <Image
                src={`${imagePath}${logo.image}`}
                alt="Investor logo"
                width={190}
                height={90}
                className="max-h-[42px] w-auto max-w-[118px] object-contain md:max-h-[72px] md:max-w-[180px]"
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
    <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#005ead] md:text-[12px]">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-2 text-[20px] font-extrabold leading-tight text-[#011f40] md:mt-3 md:text-[36px]">
      {children}
    </h2>
  );
}
