import { ProductFaqAccordion } from "./ProductFaqAccordion";

const faqs = [
  {
    question: "What industries can ANSCER robots be used in?",
    answer:
      "ANSCER robots are designed for manufacturing, warehousing, automotive, electronics, FMCG, logistics, and other material-handling applications. Our solutions can automate pallet movement, line feeding, goods transport, put-away, staging, and outbound operations.",
  },
  {
    question: "Can ANSCER robots integrate with our existing systems?",
    answer:
      "Yes. ANSCER robots can integrate with WMS, MES, ERP, conveyors, elevators, automatic doors, and other warehouse or factory systems. This enables seamless automation across your facility without disrupting existing operations.",
  },
  {
    question: "How long does it take to deploy an ANSCER solution?",
    answer:
      "Deployment timelines depend on the application, facility size, and level of integration required. After assessing your workflow and operational requirements, our team provides a detailed deployment plan, testing process, and go-live schedule.",
  },
  {
    question: "Are ANSCER robots safe to operate alongside people?",
    answer:
      "Yes. Our robots are designed to operate safely in environments where people and machines work together. Advanced safety sensors, obstacle detection, and compliance with international safety standards help ensure safe and reliable operation.",
  },
];

export function ProductFaqSection() {
  return (
    <section className="bg-[#fafafa] py-14">
      <div className="site-container grid gap-4 md:grid-cols-[0.6fr_1fr] xl:grid-cols-[0.5fr_1fr]">
        <div>
          <h2 className="mt-5 text-[28px] font-bold tracking-tight md:text-[36px]">
            FAQs
          </h2>
          <p className="mt-4 max-w-[380px] text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-6">
            We&apos;ve heard it all - here&apos;s what people are really asking
            behind the scenes.
          </p>
        </div>
        <ProductFaqAccordion items={faqs} />
      </div>
    </section>
  );
}
