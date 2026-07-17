import { FadeUp } from "@/app/components/animation";
import Image from "next/image";
import { imagePath } from "../../components/home/assets";
import { SectionEyebrow, SectionHeading } from "./SectionPrimitives";

export function WhatDrivesUsSection() {
  return (
    <section className="bg-[#e6ebf0] py-7 md:py-20">
      <div className="site-container">
        <FadeUp>
          <SectionEyebrow>Built to Move the Future</SectionEyebrow>
        </FadeUp>
        <FadeUp>
          <SectionHeading>
            What Does <span className="text-[#005ead]">ANSCER</span> Stand For?
          </SectionHeading>
        </FadeUp>
        <FadeUp>
          <p className="mt-3 max-w-[640px] text-[12px] leading-[1.45] text-[#3a3a3a] md:mt-4 md:text-[16px] md:leading-[1.55]">
            ANSCER stands for “Autonomous Navigation Systems for Controlled Environment Robots" - reflecting our commitment to intelligent, reliable automation
          </p>
        </FadeUp>

        <FadeUp className="mt-6 grid gap-4 md:mt-11 md:gap-6 lg:grid-cols-[1fr_.25fr_.25fr_1.25fr] lg:auto-rows-[240px]">
          <InfoCard
            className="order-1 lg:order-none lg:col-span-1 lg:row-span-1"
            icon="crosshair.svg"
            title="What Drives Us"
            copy="We launched ANSCER to redefine mobile robotics delivering next-gen AMR solutions that prioritize safety, simplicity, and global scalability."
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
        </FadeUp>
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
      <h3 className="mt-4 text-[15px] font-semibold leading-tight text-[#005ead] md:mt-5 md:text-[24px]">
        {title}
      </h3>
      <p className="mt-2 max-w-[460px] text-[11px] leading-[1.45] text-[#3a3a3a] md:mt-3 md:text-[16px] md:leading-[1.55]">
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
        <h3 className="text-[13px] font-bold leading-tight md:text-[24px]">
          Redefining logistics through robotics
        </h3>
        <p className="mt-2 text-[10px] leading-[1.35] text-white/86 md:mt-3 md:text-[16px] md:leading-[1.55]">
          With an intuitive setup, configuring AMR workflows is quick start
          autonomous payload movement within hours, if not minutes.
        </p>
      </div>
    </article>
  );
}
