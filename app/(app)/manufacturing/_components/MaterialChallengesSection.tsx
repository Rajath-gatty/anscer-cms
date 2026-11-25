import Image from "next/image";
import { FadeUp } from "../../components/animation";
import { challengesImage, materialChallenges } from "../_data/manufacturing-data";

export function MaterialChallengesSection() {
  return (
    <section className="bg-[#edf1f5] py-12 md:py-16 3xl:py-20 4xl:py-28">
      <div className="site-container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <h2 className="text-[28px] font-bold leading-tight text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
              Overcome the Material Movement Challenges Holding Your Warehouse
              Back
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="text-sm leading-6 text-brand-charcoal md:text-[clamp(16px,0.8vw,30px)] md:leading-[150%] 3xl:text-[clamp(20px,0.9vw,28px)]">
              Warehouse efficiency depends on more than picking and packing. The
              movement of materials between operational areas has a direct
              impact on productivity, throughput and the utilization of
              warehouse teams. As operations grow, repetitive transportation
              tasks become increasingly difficult to manage manually.
            </p>
          </FadeUp>
        </div>

        <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr] 3xl:gap-6">
          <FadeUp className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-[#dce7ef] md:col-span-2 lg:col-span-1 lg:row-span-3 lg:aspect-auto">
            <Image
              src={challengesImage}
              alt="Forklift carrying a pallet of cartons between warehouse racks"
              fill
              quality={95}
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover"
            />
          </FadeUp>

          {materialChallenges.map((challenge, index) => (
            <FadeUp
              key={challenge.title}
              delay={index * 0.08}
              className={`h-full ${index === materialChallenges.length - 1 ? "md:col-span-2" : ""}`}
            >
              <article
                className={`group h-full rounded-[10px] p-6 transition-colors duration-300 hover:bg-[#011f40] md:p-7 3xl:p-9 ${
                  index === 0 ? "bg-[#011f40]" : "bg-white"
                }`}
              >
                <h3
                  className={`text-lg font-semibold transition-colors duration-300 group-hover:text-white md:text-[clamp(18px,1vw,34px)] ${
                    index === 0 ? "text-white" : "text-[#011f40]"
                  }`}
                >
                  {challenge.title}
                </h3>
                <p
                  className={`mt-4 text-sm leading-[1.55] transition-colors duration-300 group-hover:text-white/85 md:text-[clamp(14px,0.75vw,24px)] ${
                    index === 0 ? "text-white/85" : "text-brand-charcoal"
                  }`}
                >
                  {challenge.copy}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
