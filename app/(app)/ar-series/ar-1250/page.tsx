import type { Metadata } from "next";
import { ProductDetailPage } from "../../components/product-detail/ProductDetailPage";
import { productDetails } from "../../components/product-detail/product-detail-data";

const data = productDetails["ar-1250"];

export const metadata: Metadata = {
  title: "AR 1250 Heavy Payload AMR, 1250kg Capacity | ANSCER",
  description:
    "Move heavy industrial payloads up to 1250kg safely. The AR 1250 features industrial-grade LiDAR SLAM and robust chassis engineering. Learn more.",
};

export default function Ar1250Page() {
  return <ProductDetailPage data={data} />;
}
