import Image from "next/image";
import { FadeLeft, FadeUp } from "../../components/animation";
import { imagePath } from "../../components/home/assets";

type ProductModuleProps = {
  id: string;
  index: string;
  title: string;
  intro: string;
  image: string;
  body: string;
  chips: readonly string[];
  chipsTitle?: string;
};

export function ProductModule({
  id,
  index,
  title,
  intro,
  image,
  body,
  chips,
  chipsTitle,
}: ProductModuleProps) {
  return (
    <section id={id} className="scroll-mt-32 bg-white py-10 md:py-14">
      <div className="site-container">
        <p className="mb-2.5 flex items-baseline text-[32px] font-medium text-[#005ead]">
          <span className="text-xl md:text-[28px]">{index} </span>
          <span className="text-[12px] md:text-[16px] text-[#005ead]/50">
            / 04
          </span>
        </p>
        <h2 className="mt-4 max-w-[648px] text-[28px] font-bold leading-tight md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-[648px] text-base leading-[120%] text-[#333333] md:text-xl">
          {intro}
        </p>
        <div className="mt-9 grid gap-10 lg:grid-cols-2 lg:items-start">
          <FadeUp className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#dce7ef]">
            <Image
              src={`${imagePath}${image}`}
              alt=""
              fill
              quality={95}
              sizes="680px"
              className="object-cover"
            />
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="text-base leading-6 text-brand-charcoal">{body}</p>
            {chipsTitle ? (
              <p className="mb-4 mt-8 text-base font-medium text-brand-charcoal">
                {chipsTitle}
              </p>
            ) : null}
            <div
              className={`flex flex-wrap gap-3 pr-10 ${
                chipsTitle ? "mt-0" : "mt-6"
              }`}
            >
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-[8px] bg-[#e6ebf0] px-5 py-[7px] text-base font-normal text-[#011f40]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
