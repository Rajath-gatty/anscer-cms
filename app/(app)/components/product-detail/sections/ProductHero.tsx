"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { imagePath } from "../../home/assets";
import type { ProductDetailData } from "../product-detail-data";

const ProductHeroModel = dynamic(
  () => import("../ProductHeroModel").then((mod) => mod.ProductHeroModel),
  {
    ssr: false,
  },
);

export function ProductHero({ data }: { data: ProductDetailData }) {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] pt-10 md:pt-12 ">
      <div className="site-container flex min-h-[430px] flex-col items-center justify-center text-center md:min-h-[680px] 3xl:min-h-[850px] 4xl:min-h-[1000px]">
        <h1 className="relative z-10 text-[38px] font-bold leading-none tracking-tight md:text-[clamp(40px,2.4vw,80px)]">
          {data.title}
        </h1>
        <div className="relative mt-7 h-[240px] w-full max-w-[960px] md:h-[430px] 3xl:h-[550px] 4xl:h-[650px]">
          {data.backgroundText ? (
            <Image
              src={`${imagePath}${data.backgroundText}`}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="z-0 object-contain opacity-100"
            />
          ) : null}
          {data.modelUrl ? (
            <div className="absolute inset-0 z-10">
              <ProductHeroModel
                modelUrl={data.modelUrl}
                fallbackImage={data.heroImage}
                title={data.title}
                config={data.modelViewerConfig}
              />
            </div>
          ) : (
            <Image
              src={`${imagePath}${data.heroImage}`}
              alt={data.title}
              priority
              width={600}
              height={400}
              className="z-10 absolute top-1/2 left-1/2 h-[90%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_26px_44px_rgba(1,31,64,.16)]"
            />
          )}
          {/* <Image
            src={`${imagePath}${data.heroImage}`}
            alt={data.title}
            priority
            width={600}
            height={400}
            className="z-10 absolute top-1/2 left-1/2 h-[90%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_26px_44px_rgba(1,31,64,.16)]"
          /> */}
        </div>
      </div>
    </section>
  );
}
