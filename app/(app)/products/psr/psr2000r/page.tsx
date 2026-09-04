import type { Metadata } from "next";
import { ProductDetailPage } from "../../components/product-detail/ProductDetailPage";
import { productDetails } from "../../components/product-detail/product-detail-data";

const data = productDetails["psr-2000r"];

export const metadata: Metadata = {
  title: "PSR 2000R Autonomous Reach Stacker, 2000kg | ANSCER",
  description:
    "Scale high-density vertical pallet storage up to 2000kg. The PSR 2000R autonomous reach truck ensures zero-accident racking and retrieval.",
};

export default function Psr2000rPage() {
  return <ProductDetailPage data={data} />;
}
