import { CaseStudiesSection } from "./components/home/CaseStudiesSection";
import { CtaSection } from "./components/home/CtaSection";
import { ExploreMoreSection } from "./components/home/ExploreMoreSection";
import { HeroSection } from "./components/home/HeroSection";
import { NewsSection } from "./components/home/NewsSection";
import { ProductsSection } from "./components/home/ProductsSection";
import { SolutionsSection } from "./components/home/SolutionsSection";
import { TechnologySection } from "./components/home/TechnologySection";
import { TrustSection } from "./components/home/TrustSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#011f40]">
      <HeroSection />
      <TrustSection />
      <SolutionsSection />
      {/* <SolutionsCardDeckSection />
      <SolutionsFadeSection /> */}
      <ProductsSection />
      <TechnologySection />
      <CaseStudiesSection />
      <ExploreMoreSection />
      <NewsSection />
      <CtaSection />
    </main>
  );
}
