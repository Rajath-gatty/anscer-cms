import type { Metadata } from "next";
import { ProductFaqSection } from "../components/robots/ProductFaqSection";
import { ProductFeaturesSection } from "../components/robots/ProductFeaturesSection";
import { ProductHeroSlider } from "../components/robots/ProductHeroSlider";
import { ProductsCta } from "../components/robots/ProductsCta";
import ProductSeriesCard from "../components/robots/ProductSeriesCard";

export const metadata: Metadata = {
  title: "Products | ANSCER Robotics",
  description:
    "Explore ANSCER Robotics platforms for lifting, pulling, grasping, and moving material across industrial workflows.",
};

export default function ProductsPage() {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      <ProductHeroSlider />
      {/* <SmartNavigationSection /> */}
      <ProductFeaturesSection />
      <div id="robot-series">
        {/* <ProductSeriesStaticMobile /> */}
        {/* <ProductSeriesStickyStack /> */}
        <ProductSeriesCard />
      </div>
      <ProductFaqSection />
      <ProductsCta />
    </main>
  );
}
