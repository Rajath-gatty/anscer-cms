import Image from "next/image";
import { FadeUp } from "../../components/animation";
import { materialFlowImage, robotTypes } from "../_data/warehouse-data";

export function MaterialFlowSection() {
  return (
    <section
      id="explore"
      className="scroll-mt-32 border-b border-[#2f9bea] bg-[#fafafa] py-12 md:py-16 3xl:py-20 4xl:py-28"
    >
      <div className="site-container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <h2 className="text-[28px] font-bold leading-tight text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
              Warehouse Automation Solutions Designed Around Your Material Flow
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="text-sm leading-6 text-brand-charcoal md:text-[clamp(16px,0.8vw,30px)] md:leading-[170%] 3xl:text-[clamp(20px,0.9vw,28px)]">
              Warehouse automation with AMRs uses autonomous mobile robots to
              move cases, pallets and trolleys between receiving, storage,
              production and shipping, without fixed tracks or manual transport.{" "}
              <strong className="font-semibold text-[#011f40]">
                Built for operations, logistics and intralogistics leaders at
                warehouses, 3PLs and manufacturing sites
              </strong>
              , it takes tasks from your WMS or ERP and handles repetitive
              material movement so teams focus on higher-value work.
            </p>
          </FadeUp>
        </div>

        <div className="mt-8 grid items-center gap-8 md:mt-10 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <div className="relative aspect-[575/375] overflow-hidden rounded-[10px] bg-[#dce7ef]">
              <Image
                src={materialFlowImage}
                alt="ANSCER engineer monitoring AR 250, LBR 500 and PSR 2000 robots on a tablet in a warehouse"
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeUp>

          <div>
            <ul className="grid gap-4 sm:grid-cols-3 3xl:gap-6">
              {robotTypes.map((robot, index) => (
                <li key={robot.title}>
                  <FadeUp
                    delay={index * 0.1}
                    className="h-full rounded-[10px] bg-[#edf1f5] p-5 3xl:p-7"
                  >
                    <h3 className="text-lg font-semibold text-[#011f40] md:text-[clamp(18px,0.95vw,32px)]">
                      {robot.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.55] text-brand-charcoal md:text-[clamp(13px,0.7vw,22px)]">
                      {robot.copy}
                    </p>
                  </FadeUp>
                </li>
              ))}
            </ul>

            <FadeUp delay={0.2}>
              <p className="mt-8 text-sm leading-6 text-brand-charcoal md:text-[clamp(16px,0.8vw,30px)] md:leading-[170%] 3xl:mt-10 3xl:text-[clamp(20px,0.9vw,28px)]">
                Rather than treating warehouse automation as a
                one-size-fits-all system, ANSCER&apos;s approach starts by
                understanding the workflow, material and movement requirements
                of each operation. The appropriate robotic solution is then
                configured to support that specific requirement.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
