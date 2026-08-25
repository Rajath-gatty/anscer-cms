import type { Metadata } from "next";
import { ProductDetailPage } from "../../components/product-detail/ProductDetailPage";
import { productDetails } from "../../components/product-detail/product-detail-data";

const data = productDetails["psr-1000r"];

export const metadata: Metadata = {
  title: `${data.title} | ANSCER Robotics`,
  description: data.overview,
};

export default function Psr1000rPage() {
  return <ProductDetailPage data={data} />;
}
