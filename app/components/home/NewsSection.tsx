import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeRight, FadeUp } from "../animation";
import { imagePath } from "./assets";
import { newsItems } from "./home-data";
import { Kicker } from "./SectionPrimitives";

export function NewsSection() {
  return (
    <section className="bg-white py-20">
      <div className="site-container">
        <FadeRight>
          <Kicker>We are always up to something</Kicker>
          <h2 className="mt-[10px] text-[28px] font-semibold tracking-tight md:text-[38px]">Events & News</h2>
        </FadeRight>
        <FadeUp className="mt-9 grid gap-6 md:grid-cols-3" delay={0.08}>
          {newsItems.map((item) => (
            <article key={item.title}>
              <div className="relative aspect-[1.48] overflow-hidden rounded-lg bg-[#dfe7ee]">
                <Image src={`${imagePath}${item.image}`} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-6">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5b6674]">{item.copy}</p>
              <a className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-[#005ead]" href="#">
                Explore <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
              </a>
            </article>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
