import type { Metadata } from "next";
import Image from "next/image";
import { imagePath } from "../components/home/assets";
import { BlueCta, FeatureTile, MarketingHero, SectionHeader } from "../components/marketing/MarketingPages";

export const metadata: Metadata = {
  title: "About Us | ANSCER Robotics",
  description: "Built to transform industries. Driven by vision.",
};

export default function AboutUsPage() {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      <MarketingHero
        eyebrow="About ANSCER"
        title="Powering What's Next, Today"
        copy="Built to transform industries. Driven by vision."
        image="Desktop---28.jpg"
        cta="Explore"
      />
      <section id="content" className="py-14 md:py-[56px]">
        <div className="site-container">
          <SectionHeader
            eyebrow="What Drives Us"
            title="Vision In Motion"
            copy="ANSCER Robotics builds autonomous mobile robots and software platforms that help industries move smarter, safer, and faster."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-[0.5fr_0.5fr]">
            <FeatureTile title="What Drives Us" copy="We engineer practical automation that works inside real industrial environments." image="Frame-1321316393.jpg" />
            <FeatureTile title="Vision in Motion" copy="Our teams bring robotics, software, and systems thinking together to transform material movement." image="ar650.png" />
          </div>
        </div>
      </section>
      <section className="bg-[#e6ebf0] py-14 md:py-[56px]">
        <div className="site-container grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <SectionHeader eyebrow="Path to Power" title="Built by Believers" copy="From engineering milestones to customer deployments, ANSCER's story is shaped by teams focused on automation that delivers." />
            <div className="mt-8 grid grid-cols-3 gap-4">
              {["85+", "800,000+", "100+"].map((stat) => (
                <div key={stat} className="rounded-xl bg-white p-5">
                  <p className="text-3xl font-bold text-[#005ead]">{stat}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#3a3a3a]/70">Milestone</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[430px]">
            <Image src={`${imagePath}robot.png`} alt="ANSCER robot" fill sizes="(max-width: 1024px) 100vw, 660px" className="object-contain" />
          </div>
        </div>
      </section>
      <section className="py-14 md:py-[56px]">
        <div className="site-container">
          <SectionHeader eyebrow="Investors" title="Backed by Partners Who Believe in Industrial Automation" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Frame-1321317158.png", "Frame-1321317160.png", "IKP-Eden-Logo-1.png"].map((image) => (
              <div key={image} className="grid min-h-[180px] place-items-center rounded-xl bg-white p-8 shadow-[0_16px_38px_rgba(1,31,64,.07)]">
                <Image src={`${imagePath}${image}`} alt="Investor logo" width={220} height={100} className="max-h-24 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <BlueCta title="Dive Into The Future Factory" copy="Explore ANSCER's cutting-edge lineup: powerful, smart automation solutions engineered to transform your operations." />
    </main>
  );
}
