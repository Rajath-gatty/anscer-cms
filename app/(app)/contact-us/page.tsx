import type { Metadata } from "next";
import { ArrowButton } from "../components/home/SectionPrimitives";
import { ContactForm } from "./ContactForm";
import { FadeUp } from "../components/animation";

export const metadata: Metadata = {
  title: "Contact ANSCER Robotics | Request a Demo",
  description:
    "Get in touch with ANSCER's automation experts. Request a site evaluation, book a live robot demo, or ask about custom fleet solutions today.",
};

const contactCards = [
  {
    title: "Talk to Our Team",
    copy: "For product inquiries, demonstrations, and deployment discussions:",
    items: [{ label: "+91 9739499716", href: "tel:+919739499716" }],
  },
  {
    title: "Technical Support",
    copy: "For troubleshooting, software assistance, and operational support:",
    items: [
      { label: "+91 9739499716", href: "tel:+919739499716" },
      { label: "support@anscer.com", href: "mailto:support@anscer.com" },
    ],
  },
  {
    title: "Service & Maintenance Requests",
    copy: "For preventive maintenance, repairs, spare parts, and warranty assistance:",
    items: [{ label: "service@anscer.com", href: "mailto:service@anscer.com" }],
    cta: "Submit Service Request",
  },
];

export default function ContactUsPage() {
  return (
    <main className="bg-white text-[#011f40]">
      <section className="pb-14 pt-12 md:pb-14 md:pt-15">
        <FadeUp className="site-container">
          <div className="flex max-w-[760px] 3xl:max-w-[900px] 4xl:max-w-[1100px] flex-col gap-6 pt-10">
            <p className="text-base md:text-[clamp(16px,0.8vw,30px)] font-medium uppercase tracking-[0.16em] text-[#005ead]">
              Contact us
            </p>
            <h1 className="max-w-[760px] 3xl:max-w-[900px] 4xl:max-w-[1100px] text-[36px] md:text-[clamp(40px,2.4vw,80px)] font-bold leading-[1.12] text-[#011f40]">
              Every question has an{" "}
              <span className="text-[#005ead]">ANSCER</span>
            </h1>
            <p className="max-w-[640px] 3xl:max-w-[780px] 4xl:max-w-[950px] text-base md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] leading-[22px] text-[#3a3a3a]">
              Need technical support, warranty help, or advice on the best
              automation solution? Our team is here to keep your operations
              running smoothly. Just fill out the form below, and we&apos;ll get
              back to you promptly.
            </p>
          </div>

          <div className="contact-form-layout mt-10">
            <ContactForm />

            <aside className="contact-info-column flex flex-col gap-3">
              {contactCards.map(({ title, copy, items, cta }) => (
                <article
                  key={title}
                  className="rounded-lg bg-[#f5f7fa] px-6 py-[25px] text-[#011f40]"
                >
                  <h2 className="text-[17px] md:text-[clamp(20px,0.9vw,30px)] 3xl:text-[clamp(24px,1.3vw,36px)] font-bold leading-tight text-[#011f40]">
                    {title}
                  </h2>
                  <p className="mt-2.5 max-w-[360px] text-[13px] md:text-[clamp(14px,0.7vw,22px)] leading-[1.35] text-[#3a3a3a]">
                    {copy}
                  </p>
                  <div className="mt-3.5 flex flex-col gap-2">
                    {items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="text-[14px] font-bold leading-tight text-[#011f40] transition hover:text-[#005ead]"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                  {cta ? (
                    <ArrowButton
                      as="a"
                      href="mailto:service@anscer.com"
                      className="mt-3.5 h-8 gap-4 rounded-[2px] border border-[#005ead] bg-transparent px-4 text-[12px] font-medium text-[#005ead] hover:bg-[#005ead] hover:text-white"
                    >
                      {cta}
                    </ArrowButton>
                  ) : null}
                </article>
              ))}
            </aside>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
