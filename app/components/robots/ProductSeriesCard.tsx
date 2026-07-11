import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { imagePath } from "../home/assets";
import { seriesCards } from "./product-series-data";
import { cn } from "@/lib/utils";
import { ArrowButton } from "../home/SectionPrimitives";
import { FadeUp } from "../animation";

function ProductSeriesCard() {
  return (
    <section className="bg-white py-12">
      <div className="site-container">
        <div className="grid gap-5 md:grid-cols-3">
          {seriesCards.map((series) => (
            <FadeUp>
            <article
              key={series.title}
              className={cn(
                "group relative min-h-[450px] overflow-hidden rounded-md bg-[#011f40] p-5 text-white md:min-h-[485px]"
              )}
            >
              <Image
                src={`${imagePath}${series.backgroundImage}`}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-right-bottom transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                <div className="flex w-full max-w-[min(100%,32rem)] flex-1 flex-col items-start">
                  <h3 className="text-xl font-bold md:text-[32px]">
                    {series.title}
                  </h3>
                  <p className="mt-2 w-full text-base font-normal leading-[20px] text-white/86">
                    {series.copy}
                  </p>
                  <div className="mt-3 flex w-full flex-wrap gap-1.5">
                    {series.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm bg-white px-5 py-1.5 text-base font-normal leading-none text-[#011f40]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-none">
                  <ArrowButton
                    as="a"
                    href={series.href}
                    className="h-8 gap-2 px-3 text-[14px]"
                  >
                    Explore
                  </ArrowButton>
                </div>
              </div>
            </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSeriesCard;
