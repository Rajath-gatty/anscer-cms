import type { Metadata } from "next";
import { ProductDetailPage } from "../../components/product-detail/ProductDetailPage";
import { productDetails } from "../../components/product-detail/product-detail-data";

const data = productDetails["psr-2000r"];

export const metadata: Metadata = {
  title: `${data.title} | ANSCER Robotics`,
  description: data.overview,
};

export default function Psr2000rPage() {
  return <ProductDetailPage data={data} />;
}
