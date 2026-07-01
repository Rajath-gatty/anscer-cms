import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeLeft, FadeRight, FadeUp } from "../animation";
import { newsItems } from "./home-data";
import { Kicker } from "./SectionPrimitives";

export function NewsSection() {
  return (
    <section className="overflow-hidden bg-white py-14 md:py-20">
      <div className="site-container">
        <FadeRight>
          <Kicker>We are always up to something</Kicker>
          <h2 className="mt-[10px] text-[28px] font-bold tracking-tight md:text-[38px]">Events & News</h2>
        </FadeRight>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {newsItems.map((item, index) => {
            const Wrapper = index === 0 ? FadeRight : index === 2 ? FadeLeft : FadeUp;

            return (
              <Wrapper key={item.title} delay={0.08 + index * 0.04}>
                <article className="group">
                  <div className="relative aspect-[1.32] overflow-hidden rounded-lg bg-[#dfe7ee]">
                    <Image 
                      src={item.image} 
                      alt="" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw" 
                      className="object-cover"
                      style={{ objectPosition: index < 2 ? "50% 18%" : "center" }}
                    />
                  </div>
                  <h3 className="mt-4 h-[44px] line-clamp-2 text-base font-semibold leading-[22px] text-[#4a4a4a]">{item.title}</h3>
                  <p className="mt-4 h-[44px] line-clamp-2 text-sm font-normal leading-[22px] text-[#5b5f66]">{item.copy}</p>
                  <a className="mt-7 inline-flex items-center gap-4 text-sm font-medium uppercase tracking-wide text-[#09284a] transition-colors hover:text-[#005ead]" href={item.href} target="_blank" rel="noreferrer">
                    Explore <ArrowRight aria-hidden="true" className="size-6" strokeWidth={1.8} />
                  </a>
                </article>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
