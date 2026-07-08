import type { Metadata } from "next";
import { FadeUp } from "../components/animation";
import { AnalyticsBenefitsSection } from "./AnalyticsBenefitsSection";
import { AnalyticsSection } from "./AnalyticsSection";
import { InteractiveWorkflow } from "./InteractiveWorkflow";
import { SoftwareTabs } from "./SoftwareTabs";
import { TabbedCapabilities } from "./TabbedCapabilities";
import { AnalyticsPlatformSection } from "./_components/AnalyticsPlatformSection";
import { BenefitsSection } from "./_components/BenefitsSection";
import { BusinessBenefitsSection } from "./_components/BusinessBenefitsSection";
import { FleetManagementSection } from "./_components/FleetManagementSection";
import InteractiveWorkflowV2 from "./_components/InteractiveWorkflowV2";
import { ProcessBenefitsSection } from "./_components/ProcessBenefitsSection";
import { ProductModule } from "./_components/ProductModule";
import { SoftwareCta } from "./_components/SoftwareCta";
import { SoftwareHero } from "./_components/SoftwareHero";
import {
  businessApplicationModule,
  businessCapabilities,
  fleetBenefits,
  fleetCapabilities,
  processFlowManagerModule,
} from "./_data/software-solutions-data";

export const metadata: Metadata = {
  title: "Software Solutions | ANSCER Robotics",
  description:
    "ANSCER software transforms autonomous mobile robots into synchronized, facility-wide operations.",
};

export default function SoftwareSolutionsPage() {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      <SoftwareHero />

      <SoftwareTabs />
      <FadeUp>
        <FleetManagementSection />
      </FadeUp>
      <FadeUp>
        <TabbedCapabilities
          eyebrow="Key Capabilities"
          title="Core Fleet Management Capabilities"
          items={fleetCapabilities}
          pale={true}
          variant="accordion"
        />
      </FadeUp>
      <FadeUp>
        <BenefitsSection
          eyebrow="Benefits"
          title={
            <>
              Benefits of Intelligent <br /> Fleet Management
            </>
          }
          fleetMap
          cards={fleetBenefits.map((benefit) => benefit.title)}
        />
      </FadeUp>
      <FadeUp>
        <ProductModule {...businessApplicationModule} />
      </FadeUp>
      <FadeUp>
        <TabbedCapabilities
          eyebrow="Key Capabilities"
          title="Core Business Application Capabilities"
          items={businessCapabilities}
          pale
          variant="cards"
        />
      </FadeUp>
      <FadeUp>
        <BusinessBenefitsSection />
      </FadeUp>
      <FadeUp>
        <ProductModule {...processFlowManagerModule} />
      </FadeUp>
      <FadeUp>
        <InteractiveWorkflow />
      </FadeUp>

      <InteractiveWorkflowV2 />
      <FadeUp>
        <ProcessBenefitsSection imagePosition="left" />
      </FadeUp>
      <FadeUp>
        <AnalyticsPlatformSection />
      </FadeUp>
      <AnalyticsSection />

      <AnalyticsBenefitsSection />

      <SoftwareCta />
    </main>
  );
}
