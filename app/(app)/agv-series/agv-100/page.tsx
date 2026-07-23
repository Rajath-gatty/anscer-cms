import type { Metadata } from "next";
import { ProductDetailPage } from "../../components/product-detail/ProductDetailPage";
import { productDetails } from "../../components/product-detail/product-detail-data";

const data = productDetails["agv-100"];

export const metadata: Metadata = {
  title: `${data.title} | ANSCER Robotics`,
  description: data.overview,
};

export default function Agv100Page() {
  return <ProductDetailPage data={data} />;
}
