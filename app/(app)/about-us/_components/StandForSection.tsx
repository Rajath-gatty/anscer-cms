import Image from "next/image";
import { imagePath } from "../../components/home/assets";
import { FloatingValueText } from "../FloatingValueText";
import { values } from "../_data/about-us-data";
import { SectionEyebrow, SectionHeading } from "./SectionPrimitives";

export function StandForSection() {
  return (
    <section className="bg-white py-7 md:py-20">
      <div className="site-container">
        <SectionEyebrow>Core. Clear. Committed.</SectionEyebrow>
        <SectionHeading>What We Stand For</SectionHeading>
        <p className="mt-3 max-w-[640px] text-[12px] leading-[1.45] text-[#3a3a3a] md:mt-4 md:text-[15px] md:leading-[1.55]">
          We deliver next-gen Autonomous Mobile Robots (AMRs) from India to the
          world, prioritizing safety, ergonomics, and ease of use to meet every
          automation need with cutting-edge, user-friendly solutions.
        </p>

        <div className="relative mx-auto mt-12 hidden min-h-[680px] max-w-[1120px] lg:mt-0 lg:block">
          <div className="mx-auto grid aspect-square w-[min(78vw,430px)] place-items-center rounded-full border border-[#c9d3df] bg-white lg:absolute lg:left-1/2 lg:top-[330px] lg:-translate-x-1/2 lg:-translate-y-1/2">
            <div className="absolute inset-[11%] rounded-full border border-[#c9d3df]" />
            <div className="absolute inset-[22%] rounded-full border border-[#c9d3df]" />
            <Image
              src={`${imagePath}Group-1321315879.png`}
              alt=""
              width={330}
              height={330}
              className="relative z-10 w-[78%] object-contain"
            />
            {values.map((value) => (
              <span
                key={`${value.title}-ring-icon`}
                className={`absolute z-20 hidden size-9 place-items-center rounded-full bg-white text-[#0068b7] lg:grid ${value.iconPosition}`}
              >
                <value.Icon className="size-8" strokeWidth={2.25} />
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:contents">
            {values.map((value, index) => (
              <ValuePoint
                key={value.title}
                delay={index * 0.34}
                seed={index}
                {...value}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuePoint({
  title,
  copy,
  Icon,
  textPosition,
  delay,
  seed,
}: (typeof values)[number] & { delay: number; seed: number }) {
  return (
    <article
      className={`relative flex gap-3 rounded-md bg-white p-4 shadow-[0_12px_28px_rgba(1,31,64,.04)] lg:absolute lg:z-10 lg:block lg:bg-transparent lg:p-0 lg:shadow-none ${textPosition}`}
    >
      <FloatingValueText delay={delay} seed={seed}>
        <div className="flex gap-3 lg:block">
          <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-[#005ead] text-[#005ead] lg:hidden">
            <Icon className="size-4" strokeWidth={2.25} />
          </span>
          <div>
            <h3 className="text-[16px] font-extrabold leading-tight tracking-[0.01em] text-[#005ead] lg:text-[22px]">
              {title}
            </h3>
            <p className="mt-1 text-[12px] font-medium leading-[1.35] text-[#011f40] lg:text-[14px]">
              {copy}
            </p>
          </div>
        </div>
      </FloatingValueText>
    </article>
  );
}
