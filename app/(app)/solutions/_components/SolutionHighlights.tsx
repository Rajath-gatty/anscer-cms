import Image from "next/image";
import { FadeUp } from "../../components/animation";
import { solutionHighlights } from "../_data/solutions-data";

export function SolutionHighlights() {
  return (
    <section id="explore" className="scroll-mt-32 bg-[#fafafa] pt-8 md:pt-10 3xl:pt-14">
      <div className="site-container">
        <ul className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutionHighlights.map((item, index) => (
            <li
              key={item.title}
              className="lg:border-l lg:border-[#011f40]/15 lg:first:border-l-0"
            >
              <FadeUp
                delay={index * 0.08}
                className="flex items-center gap-4 lg:justify-center lg:px-6"
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={32}
                  height={32}
                  unoptimized
                  className="size-8 shrink-0 object-contain 3xl:size-10"
                />
                <div>
                  <p className="text-sm font-medium text-[#011f40] md:text-[clamp(16px,0.8vw,26px)]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-[#011f40]/80 md:text-[clamp(12px,0.6vw,20px)]">
                    {item.copy}
                  </p>
                </div>
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
