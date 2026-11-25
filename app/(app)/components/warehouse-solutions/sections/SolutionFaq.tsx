import { FadeUp } from "../../animation";
import { WarehouseAccordion } from "../WarehouseAccordion";
import type { WarehouseSolutionData } from "../warehouse-solutions-data";

export function SolutionFaq({ data }: { data: WarehouseSolutionData }) {
  const { faq } = data;
  const items = faq.items.map(({ question, answer }) => ({
    title: question,
    copy: answer,
  }));

  return (
    <section
      id="faqs"
      className="scroll-mt-24 bg-[#fafafa] py-12 md:py-[60px] 3xl:py-20 4xl:py-28"
    >
      <div className="site-container">
        <div className="mx-auto max-w-[1080px] 3xl:max-w-[1400px]">
          <FadeUp>
            <h2 className="text-center text-[28px] font-bold leading-[1.2] text-brand-navy md:text-[clamp(32px,2.5vw,72px)]">
              {faq.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="mt-6 md:mt-8">
            <WarehouseAccordion
              items={items}
              idPrefix={`${data.slug}-faq`}
              defaultIndex={null}
              icon="plus-minus"
              className="gap-2 3xl:gap-3"
              cardClassName="rounded-[8px] border border-[#011f40]/6 bg-white"
              titleClassName="font-medium text-brand-navy md:text-[clamp(16px,1.1vw,28px)]"
              copyClassName="md:text-[clamp(15px,1.1vw,26px)]"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
