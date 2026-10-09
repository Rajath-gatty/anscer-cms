import Image from "next/image";
import { FadeUp } from "../../components/animation";
import { imagePath } from "../../components/home/assets";
import { ArrowButton } from "../../components/home/SectionPrimitives";

const stats = [
  { value: "50+", label: "Warehouse Deployments" },
  { value: "60+", label: "Manufacturing Deployments" },
  { value: "100+", label: "AMRs Installed" },
  { value: "85+", label: "Automation Projects Delivered" },
];

export function SolutionsHero() {
  return (
    <section className="relative min-h-[calc(100svh-60px)] overflow-hidden bg-[#011f40] text-white md:min-h-[calc(100svh-110px)]">
      <Image
        src={`${imagePath}solutions/hero.png`}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(0,0,0,.82)_0%,rgba(0,0,0,.6)_45%,rgba(0,0,0,.25)_100%)]" />
      <div className="site-container relative z-10 flex min-h-[calc(100svh-60px)] flex-col justify-center py-16 md:min-h-[calc(100svh-110px)]">
        <FadeUp className="max-w-[807px] xl:max-w-[950px] 2xl:max-w-[1000px] 3xl:max-w-[1150px] 4xl:max-w-[1300px]">
          <h1 className="text-[40px] font-bold leading-[1.12] text-white md:text-[clamp(48px,4vw,80px)] md:leading-[1.15]">
            Intelligent Automation Solutions Engineered For Your Workflows
          </h1>
          <p className="mt-5 max-w-[700px] text-sm font-medium leading-[1.3] text-[#fafafa] md:text-[clamp(16px,0.8vw,30px)] 3xl:max-w-[850px] 3xl:text-[clamp(20px,0.9vw,28px)] 4xl:max-w-[1000px]">
            Transform complex warehouse workflows with ANSCER. Autonomous
            robotics designed for seamless integration, scalable deployment, and
            measurable operational gains.
          </p>
          <ArrowButton target="#explore" className="mt-8 h-[46px] px-5">
            Explore more
          </ArrowButton>
        </FadeUp>

        <FadeUp delay={0.15} className="mt-12 md:mt-14">
          <h2 className="text-xl font-medium text-white md:text-[clamp(22px,1.2vw,36px)]">
            Powering Smarter Automation
          </h2>
          <dl className="mt-6 grid max-w-[900px] grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 3xl:max-w-[1100px]">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-2 max-w-[160px] text-sm font-medium leading-[1.5] text-[#fafafa] md:text-[clamp(16px,0.8vw,26px)] 3xl:max-w-[220px]">
                  {stat.label}
                </dt>
                <dd className="font-montserrat text-2xl font-bold leading-none text-white md:text-[clamp(24px,1.3vw,40px)]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeUp>
      </div>
    </section>
  );
}
