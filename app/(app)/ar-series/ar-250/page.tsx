import type { Metadata } from "next";
import { ProductDetailPage } from "../../components/product-detail/ProductDetailPage";
import { productDetails } from "../../components/product-detail/product-detail-data";

const data = productDetails["ar-250"];

export const metadata: Metadata = {
  title: `${data.title} | ANSCER Robotics`,
  description: data.overview,
};

export default function Ar250Page() {
  return <ProductDetailPage data={data} />;
}
