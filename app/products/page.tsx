import type { Metadata } from "next";
import { ProductFaqSection } from "../components/products/ProductFaqSection";
import { ProductFeaturesSection } from "../components/products/ProductFeaturesSection";
import { ProductHeroSlider } from "../components/products/ProductHeroSlider";
import {
  ProductSeriesStaticMobile,
  ProductSeriesStickyStack,
} from "../components/products/ProductSeriesStickyStack";
import { ProductsCta } from "../components/products/ProductsCta";

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
        <ProductSeriesStaticMobile />
        <ProductSeriesStickyStack />
      </div>
      <ProductFaqSection />
      <ProductsCta />
    </main>
  );
}
