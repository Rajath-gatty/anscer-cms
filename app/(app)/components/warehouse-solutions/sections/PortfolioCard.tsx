import Image from "next/image";
import { FadeUp } from "../../animation";
import { ArrowButton } from "../../home/SectionPrimitives";
import type { WarehouseSolutionData } from "../warehouse-solutions-data";

export type PortfolioItem = WarehouseSolutionData["portfolio"]["items"][number];

export function PortfolioCard({
  item,
  index,
  sizes,
}: {
  item: PortfolioItem;
  index: number;
  sizes: string;
}) {
  return (
    <FadeUp
      delay={index * 0.06}
      className="flex h-full flex-col rounded-[12px] bg-white p-4 3xl:p-6"
    >
      <div className="relative aspect-[5/3] w-full">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          quality={90}
          sizes={sizes}
          className="object-contain"
        />
      </div>

      <h3 className="mt-4 text-base font-bold text-brand-blue md:text-[clamp(16px,1vw,26px)]">
        {item.name}
      </h3>
      <p className="mb-5 mt-3 text-sm leading-[1.5] text-brand-charcoal md:text-[clamp(14px,0.8vw,22px)]">
        {item.copy}
      </p>

      <ArrowButton
        target={item.href}
        className="mt-auto self-start"
        aria-label={`Explore ${item.name}`}
      >
        Explore
      </ArrowButton>
    </FadeUp>
  );
}
