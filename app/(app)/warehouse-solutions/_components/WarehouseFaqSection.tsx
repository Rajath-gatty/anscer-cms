import { FadeUp } from "../../components/animation";
import { SolutionsFaqAccordion } from "../../solutions/_components/SolutionsFaqAccordion";
import { warehouseFaqs } from "../_data/warehouse-data";

export function WarehouseFaqSection() {
  return (
    <section className="bg-[#fafafa] py-12 md:py-16 3xl:py-20 4xl:py-28">
      <div className="site-container">
        <FadeUp>
          <h2 className="text-center text-[28px] font-bold leading-tight text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
            FAQ
          </h2>
        </FadeUp>
        <FadeUp delay={0.1} className="mx-auto mt-8 max-w-[960px] md:mt-10 3xl:max-w-[1300px]">
          <SolutionsFaqAccordion
            items={warehouseFaqs}
            idPrefix="warehouse-faq"
            className="divide-y divide-[#011f40]/10 border-y border-[#011f40]/10"
          />
        </FadeUp>
      </div>
    </section>
  );
}
