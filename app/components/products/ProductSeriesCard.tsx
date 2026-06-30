import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { imagePath } from "../home/assets";
import { seriesCards } from "./product-series-data";

function ProductSeriesCard() {
  return (
    <section className="bg-white py-12">
      <div className="site-container">
        <div className="grid gap-5 md:grid-cols-3">
          {seriesCards.map((series) => (
            <article
              key={series.title}
              className="relative min-h-[250px] overflow-hidden rounded-md bg-[#011f40] p-5 text-white md:min-h-[485px]"
            >
              <Image
                src={`${imagePath}${series.backgroundImage}`}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-right-bottom"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
              <div className="relative z-10 flex  flex-col items-start justify-between h-full">
                <div className="grow h-0 flex flex-col items-start">
                  <h3 className="text-[22px] font-semibold leading-[1.15]">
                    {series.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 max-w-[300px] text-[11px] font-normal leading-[15px] text-white/86">
                    {series.copy}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {series.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm bg-white px-3 py-1 text-[11px] font-medium leading-none text-[#011f40]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-none">
                  <a
                    href={series.href}
                    className="group inline-flex mt-auto h-8 items-center gap-2 rounded-sm bg-[#005ead] px-3 text-[10px] font-medium uppercase tracking-wide text-white transition hover:bg-[#014f91]"
                  >
                    Explore
                    <span className="relative flex size-3 overflow-hidden">
                      <ArrowRight
                        aria-hidden="true"
                        className="size-3 transition group-hover:translate-x-4"
                        strokeWidth={2}
                      />
                      <ArrowRight
                        aria-hidden="true"
                        className="absolute size-3 -translate-x-4 transition group-hover:translate-x-0"
                        strokeWidth={2}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSeriesCard;
