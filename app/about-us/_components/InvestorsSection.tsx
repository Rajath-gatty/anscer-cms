import Image from "next/image";
import { imagePath } from "../../components/home/assets";
import { investorLogos } from "../_data/about-us-data";
import { SectionHeading } from "./SectionPrimitives";

export function InvestorsSection() {
  return (
    <section className="bg-white pb-10 pt-4 md:pb-28 md:pt-8">
      <div className="site-container grid gap-10 pt-10 lg:grid-cols-[260px_1fr] lg:items-center">
        <SectionHeading>
          Our <span className="text-[#005ead]">Investors</span>
        </SectionHeading>

        <div className="grid min-h-[100px] grid-cols-3 place-items-center gap-x-8 gap-y-7 md:min-h-[210px] md:translate-y-4 lg:min-h-[260px] lg:grid-cols-3 lg:grid-rows-1 lg:gap-10">
          {[...investorLogos].map((logo, index) => (
            <div
              key={`${logo.image}-${index}`}
              className="flex min-h-[42px] items-center justify-center md:min-h-[52px]"
            >
              <Image
                src={`${imagePath}${logo.image}`}
                alt="Investor logo"
                width={190}
                height={90}
                className="max-h-[42px] w-auto max-w-[118px] object-contain md:max-h-[72px] md:max-w-[180px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
