import type { Metadata } from "next";
import { ProductDetailPage } from "../../../components/product-detail/ProductDetailPage";
import { productDetails } from "../../../components/product-detail/product-detail-data";

const data = productDetails["ar-500"];

export const metadata: Metadata = {
  title: "AR 500 Industrial AMR, 500kg Payload | ANSCER",
  description:
    "Streamline mid-weight factory transport with the AR 500 mobile robot. Built for bin, tote, and cart movement with LiDAR SLAM. Get a quote.",
};

export default function Ar500Page() {
  return <ProductDetailPage data={data} />;
}
