import Image from "next/image";
import { imagePath } from "../../components/home/assets";
import { investorLogos } from "../_data/about-us-data";
import { SectionHeading } from "./SectionPrimitives";
import { FadeUp } from "@/app/(app)/components/animation";

export function InvestorsSection() {
  return (
    <section className="bg-white pb-10 pt-4 md:pb-28 md:pt-8">
      <FadeUp className="site-container grid gap-10 pt-10 lg:grid-cols-[260px_1fr] lg:items-center">
        <SectionHeading>
          Our <span className="text-[#005ead]">Investors</span>
        </SectionHeading>

        <div className="grid min-h-[100px] grid-cols-3 items-center md:min-h-[210px] md:translate-y-4 lg:min-h-[260px] 3xl:min-h-[340px] 4xl:min-h-[420px] lg:grid-cols-3 lg:grid-rows-1 md:divide-x md:divide-foreground/20">
          {[...investorLogos].map((logo, index) => (
            <div
              key={`${logo.image}-${index}`}
              className="flex min-h-[42px] w-full items-center justify-center px-4 md:min-h-[52px] md:px-6"
            >
              <Image
                src={`${imagePath}${logo.image}`}
                alt="Investor logo"
                width={190}
                height={90}
                className="max-h-[42px] w-auto max-w-[118px] object-contain md:max-h-[72px] 3xl:max-h-[90px] 4xl:max-h-[110px] md:max-w-[180px]"
              />
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
