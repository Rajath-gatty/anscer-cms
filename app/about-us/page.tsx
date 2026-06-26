import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Lightbulb, ShieldCheck, Sparkles, Telescope } from "lucide-react";
import { imagePath } from "../components/home/assets";

export const metadata: Metadata = {
  title: "About Us | ANSCER Robotics",
  description: "Built to transform industries. Driven by vision.",
};

const values = [
  ["Honesty & Integrity", "We act with transparency, own our actions, and stay true to our word.", ShieldCheck],
  ["Wonder & Discovery", "Curiosity fuels us - driving breakthroughs, fresh thinking, and relentless exploration.", Telescope],
  ["Innovation & Authenticity", "Bold ideas meet real-world relevance to deliver meaningful, future-ready solutions.", Lightbulb],
  ["Compassion & Empathy", "We build with care for people, partners, and the world we automate.", Heart],
  ["Positivity & Delight", "We lead with optimism and craft experiences that spark confidence and joy.", Sparkles],
] as const;

const testimonials = [
  {
    quote:
      "ANSCER consistently demonstrated exceptional customer service, meticulous attention to detail, and outstanding accountability throughout our project. Their deployment team's perseverance and enthusiasm were instrumental to a successful implementation. We greatly value their professionalism and collaborative approach.",
    name: "Sarath",
    role: "Automation Head",
  },
  {
    quote:
      "ANSCER's robots have become an integral part of our team, working tirelessly and reliably. In the first three months, we saw a clear drop in manual errors and our throughput went up. The safety features are excellent, and our staff quickly grew comfortable working alongside the robots.",
    name: "Ganesh P",
    role: "Sr.Manager",
  },
  {
    quote:
      "They've helped us scale and expand across multiple APAC international plants with satisfactory support and timely issue resolution. What started as FG movement has evolved into multiple use cases for our smart factory and warehouses.",
    name: "Vishnu",
    role: "Regional Lead - Automation and AI",
  },
];

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
    copy: "Delivering reliable automation across multiple industries and geographies.",
  },
];

const years = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];

export default function AboutUsPage() {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
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
    <section className="relative min-h-[calc(100svh-108px)] overflow-hidden bg-[#011f40] text-white">
      <Image src={`${imagePath}Desktop---28.jpg`} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(59deg,rgba(0,0,0,.76),rgba(0,0,0,.12)_68%,rgba(0,0,0,0))]" />
      <div className="site-container relative z-10 flex min-h-[calc(100svh-108px)] items-center py-16">
        <div className="max-w-[680px]">
          <h1 className="text-[42px] font-extrabold leading-[1.1] text-white md:text-[60px]">
            Powering What&apos;s Next, Today
          </h1>
          <p className="mt-5 text-sm font-medium leading-6 text-white/90 md:text-lg">
            Built to transform industries. Driven by vision
          </p>
        </div>
      </div>
    </section>
  );
}

function StandForSection() {
  return (
    <section className="bg-[#fafafa] py-14">
      <div className="site-container">
        <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#005ead]">Core. Clear. Committed.</p>
        <h2 className="mt-3 text-[32px] font-extrabold leading-tight md:text-4xl">What We Stand For</h2>
        <p className="mt-4 max-w-[760px] text-base leading-6 text-[#3a3a3a]">
          We deliver next-gen Autonomous Mobile Robots (AMRs) from India to the world, prioritizing safety, ergonomics, and ease of use to meet every automation need with cutting-edge, user-friendly solutions.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.1fr_0.95fr] lg:items-center">
          <div className="space-y-5">
            {values.slice(0, 2).map(([title, copy, Icon]) => (
              <ValueCard key={title} title={title} copy={copy} Icon={Icon} />
            ))}
          </div>
          <div className="relative mx-auto grid aspect-square w-full max-w-[430px] place-items-center rounded-full border border-[#cfd8e2] bg-white">
            <div className="absolute inset-10 rounded-full border border-[#d8e1ea]" />
            <div className="absolute inset-20 rounded-full border border-[#d8e1ea]" />
            <Image src={`${imagePath}robot.png`} alt="" width={260} height={260} className="relative z-10 w-[58%] rotate-[-18deg] object-contain" />
          </div>
          <div className="space-y-5">
            {values.slice(2).map(([title, copy, Icon]) => (
              <ValueCard key={title} title={title} copy={copy} Icon={Icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  title,
  copy,
  Icon,
}: {
  title: string;
  copy: string;
  Icon: typeof ShieldCheck;
}) {
  return (
    <article className="rounded-xl bg-white p-5 shadow-[0_12px_30px_rgba(1,31,64,.05)]">
      <Icon className="size-7 text-[#005ead]" strokeWidth={1.8} />
      <h3 className="mt-4 text-lg font-bold text-[#005ead]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#3a3a3a]">{copy}</p>
    </article>
  );
}

function WhatDrivesUsSection() {
  return (
    <section className="bg-[#e6ebf0] py-14">
      <div className="site-container">
        <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#005ead]">Built to Move the Future</p>
        <h2 className="mt-3 text-[32px] font-extrabold leading-tight md:text-4xl">
          What Drives <span className="text-[#005ead]">Us</span>
        </h2>
        <p className="mt-4 max-w-[760px] text-base leading-6 text-[#3a3a3a]">
          We launched ANSCER to redefine mobile robotics - delivering next-gen AMR solutions that prioritize safety, simplicity, and global scalability.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.25fr]">
          <div className="grid gap-5">
            <InfoCard icon="crosshair.svg" title="What Drives Us" copy="We launched ANSCER to redefine mobile robotics - delivering next-gen AMR solutions that prioritize safety, simplicity, and global scalability." />
            <div className="relative min-h-[230px] overflow-hidden rounded-xl bg-white">
              <Image src={`${imagePath}ar650.png`} alt="" fill sizes="560px" className="object-contain p-4" />
            </div>
          </div>
          <div className="grid gap-5">
            <article className="relative min-h-[330px] overflow-hidden rounded-xl bg-[#011f40] text-white">
              <Image src={`${imagePath}Frame-1321316393.jpg`} alt="" fill sizes="760px" className="object-cover opacity-88" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,31,64,0),rgba(1,31,64,.76))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-extrabold">Redefining logistics through robotics</h3>
                <p className="mt-3 max-w-[640px] text-sm leading-6 text-white/88">
                  With an intuitive setup, configuring AMR workflows is quick - start autonomous payload movement within hours, if not minutes.
                </p>
              </div>
            </article>
            <InfoCard icon="binoculars.svg" title="Vision in Motion" copy="We harness mobile robotics to empower people, enabling seamless collaboration where both thrive, grow, and reach full potential." />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, copy }: { icon: string; title: string; copy: string }) {
  return (
    <article className="rounded-xl bg-white p-5">
      <Image src={`${imagePath}${icon}`} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
      <h3 className="mt-5 text-xl font-extrabold text-[#005ead]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#3a3a3a]">{copy}</p>
    </article>
  );
}

function PathToPowerSection() {
  return (
    <section className="bg-[#fafafa] py-14">
      <div className="site-container">
        <h2 className="text-[32px] font-extrabold leading-tight md:text-4xl">
          Path to <span className="text-[#005ead]">Power</span>
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[120px_1fr]">
          <div className="flex gap-4 overflow-x-auto lg:flex-col lg:overflow-visible">
            {years.map((year) => (
              <span key={year} className={`shrink-0 text-sm font-semibold ${year === "2022" ? "text-[22px] text-[#005ead]" : "text-[#32323266]"}`}>
                {year}
              </span>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-[1fr_0.32fr]">
            <article className="relative min-h-[420px] overflow-hidden rounded-xl bg-[#011f40] text-white">
              <Image src={`${imagePath}1caa4163dc3f1c3c3c49b87e9ad9c750db3f30df-1.jpg`} alt="" fill sizes="900px" className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,31,64,.08),rgba(1,31,64,.72))]" />
              <h3 className="absolute left-6 right-6 top-6 text-lg font-semibold md:text-2xl">
                ANSCER raises $2M to expand its AMR solutions and strengthen in US.
              </h3>
            </article>
            <div className="hidden gap-5 md:grid">
              {["slider-img-2.jpg", "1850236eda6ba48b3a4bfe7084528816a27e9c32.jpg"].map((image) => (
                <div key={image} className="relative overflow-hidden rounded-xl bg-[#dce7ef]">
                  <Image src={`${imagePath}${image}`} alt="" fill sizes="320px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-[#e6ebf0] py-14">
      <div className="site-container">
        <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#005ead]">Testimonials</p>
        <h2 className="mt-3 text-[32px] font-extrabold leading-tight md:text-4xl">
          What Our Client <span className="text-[#005ead]">Says</span>
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-xl bg-white p-5 shadow-[0_12px_30px_rgba(1,31,64,.05)]">
              <Image src={`${imagePath}Frame-1321316653.svg`} alt="" width={88} height={18} />
              <p className="mt-5 min-h-[180px] text-sm leading-6 text-[#3a3a3a] md:text-base">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Image src={`${imagePath}Ellipse-369.jpg`} alt="" width={42} height={42} className="size-11 rounded-full object-cover" />
                <div>
                  <h3 className="text-sm font-bold text-[#011f40]">{testimonial.name}</h3>
                  <p className="text-xs text-[#3a3a3a]/70">{testimonial.role}</p>
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
    <section className="bg-[#fafafa] py-14">
      <div className="site-container">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <article key={stat.label} className="relative overflow-hidden rounded-xl bg-white p-6 text-center shadow-[0_12px_30px_rgba(1,31,64,.05)]">
              <Image src={`${imagePath}robot.png`} alt="" width={74} height={74} className="mx-auto mb-5 h-16 w-auto object-contain" />
              <h3 className="text-[36px] font-extrabold text-[#005ead]">{stat.value}</h3>
              <p className="mt-2 text-lg font-bold text-[#011f40]">{stat.label}</p>
              <p className="mt-3 text-sm leading-6 text-[#3a3a3a]">{stat.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="bg-[#fafafa] py-14">
      <div className="site-container">
        <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#005ead]">The Team Behind the Tech</p>
        <h2 className="mt-3 text-[32px] font-extrabold leading-tight md:text-4xl">
          Built by <span className="text-[#005ead]">Believers</span>
        </h2>
        <p className="mt-4 max-w-[760px] text-base leading-6 text-[#3a3a3a]">
          All the Answers You Need About Anscer Robotics - Right at Your Fingertips. From how our autonomous robots transform industries to what makes our tech stand out - your journey into the future of smart automation starts here.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {["Mark Messina", "Emily Chen", "Mikhail Smith", "Mark Messina"].map((name, index) => (
            <article key={`${name}-${index}`} className="relative min-h-[330px] overflow-hidden rounded-xl bg-[#011f40] text-white">
              <Image src={`${imagePath}1af2086220affecd5f498aeca93f64918a91bf86.jpg`} alt="" fill sizes="320px" className="object-cover opacity-90" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,31,64,0),rgba(1,31,64,.76))]" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/72">ANSCER Robotics</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestorsSection() {
  return (
    <section className="bg-[#fafafa] py-14">
      <div className="site-container grid gap-10 lg:grid-cols-[0.28fr_0.72fr] lg:items-center">
        <h2 className="text-[32px] font-extrabold leading-tight">
          Our <span className="text-[#005ead]">Investors</span>
        </h2>
        <div className="grid min-h-[260px] place-items-center gap-6 rounded-xl bg-white p-8 sm:grid-cols-3">
          {["Frame-1321317158.png", "Frame-1321317160.png", "IKP-Eden-Logo-1.png"].map((logo) => (
            <Image key={logo} src={`${imagePath}${logo}`} alt="Investor logo" width={220} height={100} className="max-h-24 w-auto object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}
