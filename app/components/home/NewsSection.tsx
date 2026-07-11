import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeLeft, FadeRight, FadeUp } from "../animation";
import { newsItems } from "./home-data";
import { Kicker, ArrowButton } from "./SectionPrimitives";

export function NewsSection() {
  return (
    <section className="overflow-hidden bg-white py-14 md:py-20">
      <div className="site-container">
        <FadeUp>
          <Kicker>We are always up to something</Kicker>
          <h2 className="mt-[10px] text-[28px] font-bold tracking-tight md:text-[38px]">Events & News</h2>
        </FadeUp>
        <div className="mt-9 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {newsItems.map((item, index) => {
            // const Wrapper = index === 0 ? FadeRight : index === 2 ? FadeLeft : FadeUp;

            return (
              <FadeUp
                key={item.title}
                className={index === 2 ? "md:col-span-2 lg:col-span-1" : undefined}
                delay={0.08 + index * 0.04}
              >
                <article className="group">
                  <div className={`relative overflow-hidden rounded-lg bg-[#dfe7ee] lg:h-[300px] ${getNewsImageFrameClass(index)}`}>
                    <Image 
                      src={item.image} 
                      alt="" 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                      className="object-contain lg:object-cover"
                      style={{ objectPosition: index < 2 ? "50% 18%" : "center" }}
                    />
                  </div>
                  <h3 className="mt-4 h-[44px] line-clamp-2 text-base font-semibold leading-[22px] text-[#4a4a4a]">{item.title}</h3>
                  <p className="mt-4 h-[44px] line-clamp-2 text-sm font-normal leading-[22px] text-[#5b5f66]">{item.copy}</p>
                  <ArrowButton
                    as="a"
                    variant="ghost"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 gap-4 text-sm text-[#09284a] hover:text-[#005ead]"
                  >
                    Explore
                  </ArrowButton>
                </article>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function getNewsImageFrameClass(index: number) {
  return index === 2
    ? "aspect-[1649/941] lg:aspect-auto"
    : "aspect-square lg:aspect-auto";
}
