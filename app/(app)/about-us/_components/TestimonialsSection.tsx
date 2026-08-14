import Image from "next/image";
import { imagePath } from "../../components/home/assets";
import { testimonials } from "../_data/about-us-data";
import { SectionEyebrow, SectionHeading } from "./SectionPrimitives";

export function TestimonialsSection() {
  return (
    <section className="bg-[#e6ebf0] py-7 md:py-20">
      <div className="site-container">
        <SectionEyebrow>Testimonials</SectionEyebrow>
        <SectionHeading>
          What Our Client <span className="text-[#005ead]">Says</span>
        </SectionHeading>
        <p className="mt-3 max-w-[620px] text-[11px] leading-[1.45] text-[#3a3a3a] md:hidden">
          Lorem ipsum dolor sit amet consectetur. Vivamus eget iaculis nulla ut
          interdum pharetra sagittis lacus luctus.
        </p>

        <div className="-mx-5 mt-5 flex gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:mt-10 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex min-h-[190px] w-[255px] shrink-0 flex-col rounded-md bg-white p-4 shadow-[0_12px_30px_rgba(1,31,64,.04)] md:min-h-[260px] 3xl:min-h-[320px] 4xl:min-h-[400px] md:w-auto md:p-6 3xl:p-8 4xl:p-10"
            >
              <p className="mt-3 flex-1 text-[10px] font-normal leading-[1.45] text-[#011f40] md:mt-4 md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] md:leading-[150%]">
                {testimonial.quote}
              </p>
              <div className="mt-4 flex items-center gap-3 md:mt-5">
                <Image
                  src={`${imagePath}${testimonial.avatar}`}
                  alt=""
                  width={44}
                  height={44}
                  className="size-8 rounded-full object-cover md:size-11"
                />
                <div>
                  <h3 className="text-[10px] font-medium text-[#011f40] md:text-[clamp(16px,0.8vw,30px)]">
                    {testimonial.name}
                  </h3>
                  <p className="text-[9px] text-[#3a3a3a]/72 md:text-[clamp(14px,0.7vw,24px)]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
