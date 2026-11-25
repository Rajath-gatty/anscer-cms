import Image from "next/image";
import { cn } from "@/lib/utils";
import { FadeUp } from "../../animation";
import type { WarehouseSolutionData } from "../warehouse-solutions-data";
import { SectionHeading } from "./SectionHeading";

const bodyText =
  "text-sm leading-6 text-brand-charcoal md:text-[clamp(16px,0.8vw,30px)] md:leading-[1.5] 3xl:text-[clamp(20px,0.9vw,28px)]";

export function SolutionOverview({ data }: { data: WarehouseSolutionData }) {
  const { overview } = data;

  return (
    <section id="overview" className="scroll-mt-24 bg-[#fafafa] py-12 md:py-16 3xl:py-20 4xl:py-28">
      <div className="site-container">
        <SectionHeading
          kicker={overview.kicker}
          title={overview.title}
          titleClassName="max-w-[18em]"
        />

        <div className="mt-6 grid gap-6 md:mt-6 lg:grid-cols-2 lg:gap-10 3xl:gap-14">
          <FadeUp className="relative aspect-[4/3] overflow-hidden rounded-[12px] bg-[#dce7ef] lg:aspect-auto lg:min-h-[399px]">
            <Image
              src={overview.image.src}
              alt={overview.image.alt}
              fill
              quality={95}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </FadeUp>

          <FadeUp delay={0.1} className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              {overview.paragraphs.map((paragraph) => (
                <p key={paragraph} className={bodyText}>
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="rounded-[10px] bg-[#e6ebf0] px-4 py-5 text-center text-lg font-semibold leading-[1.3] text-brand-blue md:text-[clamp(20px,1.1vw,32px)]">
              {overview.callout.map((segment) => (
                <span
                  key={segment.text}
                  className={cn(segment.emphasis && "text-brand-navy")}
                >
                  {segment.text}
                </span>
              ))}
            </p>

            <p className={bodyText}>{overview.closing}</p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
