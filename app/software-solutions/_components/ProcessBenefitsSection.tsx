import {
  CircleUserRound,
  Factory,
  Layers,
  Network,
  Workflow,
} from "lucide-react";
import { Reveal } from "../../components/animation";
import { processBenefitCards } from "../_data/software-solutions-data";

export function ProcessBenefitsSection({
  imagePosition = "left",
}: {
  imagePosition?: "left" | "right";
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="bg-[#e6ebf0] py-10 md:py-14">
      <div className="site-container">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#005ead] md:text-[16px]">
          BENEFITS
        </p>
        <h2 className="mt-6 max-w-[648px] text-[28px] font-bold leading-[120%] text-[#011f40] md:text-[36px]">
          Designed for Flexible and <br /> Scalable Automation
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal
            variant={isImageLeft ? "fade-left" : "fade-right"}
            className={`order-2 flex flex-col overflow-hidden border border-[#005ead]/20 ${
              isImageLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="flex flex-col border-b border-[#005ead]/20 lg:flex-row">
              <ProcessBenefitCard
                icon={Layers}
                title={processBenefitCards[0].title}
                copy={processBenefitCards[0].copy}
                className="border-b border-[#005ead]/20 lg:border-b-0 lg:border-r"
              />
              <ProcessBenefitCard
                icon={Factory}
                title={processBenefitCards[1].title}
                copy={processBenefitCards[1].copy}
              />
            </div>

            <div className="flex flex-col border-b border-[#005ead]/20 lg:flex-row">
              <ProcessBenefitCard
                icon={Workflow}
                title={processBenefitCards[2].title}
                copy={processBenefitCards[2].copy}
                className="border-b border-[#005ead]/20 lg:border-b-0 lg:border-r"
              />
              <ProcessBenefitCard
                icon={Network}
                title={processBenefitCards[3].title}
                copy={processBenefitCards[3].copy}
              />
            </div>

            <div className="group flex flex-col gap-2 bg-white/50 p-6 lg:flex-row lg:items-center lg:gap-6">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] transition-all duration-300 group-hover:bg-[#005EAD]">
                <CircleUserRound
                  className="size-5 transition-colors duration-300 group-hover:text-white"
                  strokeWidth={1.7}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] font-semibold leading-tight text-[#011f40]">
                  {processBenefitCards[4].title}
                </h3>
                <p className="mt-2 text-[14px] leading-[130%] text-[#333333]">
                  {processBenefitCards[4].copy}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal
            variant={isImageLeft ? "fade-right" : "fade-left"}
            className={`relative order-1 min-h-[300px] overflow-hidden rounded-[12px] bg-[#dce7ef] sm:min-h-[440px] ${
              isImageLeft ? "lg:order-1" : "lg:order-2"
            }`}
            delay={0.08}
          >
            {/* <Image
              src={`${imagePath}1369b1d9491c23604e01cf3a0ed8ab6fd984e0e3.jpg`}
              alt=""
              fill
              quality={95}
              sizes="(max-width: 1024px) 100vw, 670px"
              className="object-cover"
            /> */}
            <div className="w-full h-full bg-[#005EAD]/20"></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProcessBenefitCard({
  icon: Icon,
  title,
  copy,
  className = "",
}: {
  icon: typeof Layers;
  title: string;
  copy: string;
  className?: string;
}) {
  return (
    <div
      className={`group flex flex-1 flex-col gap-2 bg-white/50 p-6 ${className}`}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] transition-all duration-300 group-hover:bg-[#005EAD]">
        <Icon
          className="size-5 transition-colors duration-300 group-hover:text-white"
          strokeWidth={1.7}
        />
      </div>
      <h3 className="text-[16px] font-semibold leading-tight text-[#011f40]">
        {title}
      </h3>
      <p className="mt-2 text-[14px] leading-[130%] text-[#333333]">{copy}</p>
    </div>
  );
}
