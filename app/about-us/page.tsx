import type { Metadata } from "next";
import { AboutSectionReveal } from "./AboutSectionReveal";
import { AboutHero } from "./_components/AboutHero";
import { InvestorsSection } from "./_components/InvestorsSection";
import { PathToPowerSection } from "./_components/PathToPowerSection";
import { StatsSection } from "./_components/StatsSection";
import { TeamSection } from "./_components/TeamSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";
import { WhatDrivesUsSection } from "./_components/WhatDrivesUsSection";

export const metadata: Metadata = {
  title: "About Us | ANSCER Robotics",
  description: "Built to transform industries. Driven by vision.",
};

export default function AboutUsPage() {
  return (
    <main className="bg-white text-[#011f40]">
      <AboutHero />

      {/* <AboutSectionReveal>
        <StandForSection />
      </AboutSectionReveal> */}

      <WhatDrivesUsSection />

      <PathToPowerSection />

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
