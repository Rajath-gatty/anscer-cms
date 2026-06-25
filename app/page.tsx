import { CaseStudiesSection } from "./components/home/CaseStudiesSection";
import { CtaSection } from "./components/home/CtaSection";
import { ExploreMoreSection } from "./components/home/ExploreMoreSection";
import { HeroSection } from "./components/home/HeroSection";
import { NewsSection } from "./components/home/NewsSection";
import { ProductsSection } from "./components/home/ProductsSection";
import { ScrollReveal } from "./components/home/ScrollReveal";
import { SolutionsCardDeckSection } from "./components/home/SolutionsCardDeckSection";
import { SolutionsFadeSection } from "./components/home/SolutionsFadeSection";
import { SolutionsSection } from "./components/home/SolutionsSection";
import { TechnologySection } from "./components/home/TechnologySection";
import { TrustSection } from "./components/home/TrustSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#011f40]">
      <HeroSection />
      <ScrollReveal>
        <TrustSection />
      </ScrollReveal>
      <ScrollReveal>
        <SolutionsSection />
      </ScrollReveal>
      <ScrollReveal>
        <SolutionsCardDeckSection />
      </ScrollReveal>
      <ScrollReveal>
        <SolutionsFadeSection />
      </ScrollReveal>
      <ScrollReveal>
        <ProductsSection />
      </ScrollReveal>
      <ScrollReveal>
        <TechnologySection />
      </ScrollReveal>
      <ScrollReveal>
        <CaseStudiesSection />
      </ScrollReveal>
      <ScrollReveal>
        <ExploreMoreSection />
      </ScrollReveal>
      <ScrollReveal>
        <NewsSection />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>
    </main>
  );
}
