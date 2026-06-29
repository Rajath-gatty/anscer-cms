import { ArrowRight, ChevronDown } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ANSCER Robotics",
  description:
    "Contact ANSCER Robotics for product inquiries, demonstrations, technical support, service, maintenance, and deployment discussions.",
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

const inputClass =
  "mt-2 h-[48px] w-full rounded-md border border-[#011f404d] bg-white px-4 text-[15px] text-[#011f40] outline-none transition duration-150 focus:border-[#005ead] focus:ring-2 focus:ring-[#005ead]/15";

const labelClass =
  "text-[14px] font-medium uppercase tracking-[0.08em] text-[#011f40]";

export default function ContactUsPage() {
  return (
    <main className="bg-white text-[#011f40]">
      <section className="pb-14 pt-12 md:pb-[56px] md:pt-[58px]">
        <div className="site-container">
          <div className="flex max-w-[760px] flex-col gap-6">
            <p className="text-base font-medium uppercase tracking-[0.16em] text-[#005ead]">
              Contact us
            </p>
            <h1 className="max-w-[760px] text-[36px] font-bold leading-[1.12] text-[#011f40]">
              Every question has an{" "}
              <span className="text-[#005ead]">ANSCER</span>
            </h1>
            <p className="max-w-[640px] text-base leading-[22px] text-[#3a3a3a]">
              Need technical support, warranty help, or advice on the best
              automation solution? Our team is here to keep your operations
              running smoothly. Just fill out the form below, and we&apos;ll get
              back to you promptly.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            <form
              action="mailto:sales@anscer.com"
              method="post"
              encType="text/plain"
              className="flex w-full flex-col gap-6 lg:flex-1"
            >
              <div className="grid gap-6 md:grid-cols-2 md:gap-x-7">
                <div>
                  <label htmlFor="first_name" className={labelClass}>
                    First Name *
                  </label>
                  <input
                    id="first_name"
                    name="first_name"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className={labelClass}>
                    Last Name *
                  </label>
                  <input
                    id="last_name"
                    name="last_name"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className={labelClass}>
                  COMPANY NAME *
                </label>
                <input
                  id="company"
                  name="company"
                  required
                  className={inputClass}
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2 md:gap-x-7">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    PHONE NUMBER
                  </label>
                  <input id="phone" name="phone" className={inputClass} />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="inquiry_type" className={labelClass}>
                  INQUIRY TYPE*
                </label>
                <select
                  id="inquiry_type"
                  name="inquiry_type"
                  required
                  defaultValue=""
                  className={`${inputClass} appearance-none pr-12`}
                >
                  <option value="" disabled />
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="service-maintenance">
                    Service & Maintenance
                  </option>
                  <option value="deployment">Deployment Discussion</option>
                </select>
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-3.5 right-4 size-5 text-[#8392a3]"
                  strokeWidth={1.7}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-2 h-[100px] w-full resize-none rounded-md border border-[#011f404d] bg-white px-4 py-3 text-base text-[#011f40] outline-none transition focus:border-[#005ead] focus:ring-2 focus:ring-[#005ead]/15"
                />
              </div>

              <div className="pt-1 md:pt-0">
                <div className="flex h-[76px] w-[304px] max-w-full items-center justify-between rounded-[3px] border border-[#d5d5d5] bg-[#f9f9f9] px-4 shadow-[0_1px_3px_rgba(0,0,0,.12)]">
                  <div className="flex items-center gap-3">
                    <span className="block size-7 rounded-sm border-2 border-[#6b7785] bg-white" />
                    <span className="text-sm font-semibold text-[#111]">
                      I&apos;m not a robot
                    </span>
                  </div>
                  <div className="text-right text-[9px] leading-tight text-[#777]">
                    <div className="mx-auto mb-1 size-8 rounded-sm bg-[linear-gradient(135deg,#4385f4,#8ab4f8)]" />
                    reCAPTCHA
                    <br />
                    Privacy - Terms
                  </div>
                </div>
              </div>

              <div className="pt-1 md:pt-0">
                <button
                  type="submit"
                  className="inline-flex h-11 items-center gap-4 rounded-[3px] bg-[#005ead] px-6 text-[12px] font-bold uppercase tracking-wide text-white transition hover:bg-[#004f91]"
                >
                  Submit <ArrowRight aria-hidden="true" className="size-4" />
                </button>
              </div>
            </form>

            <aside className="flex w-full flex-col gap-4 lg:w-[320px] lg:shrink-0">
              {contactCards.map(({ title, copy, items, cta }) => (
                <article
                  key={title}
                  className="rounded-lg bg-[#f5f7fa] p-5 text-[#011f40]"
                >
                  <h2 className="text-[15px] font-bold leading-tight text-[#011f40]">
                    {title}
                  </h2>
                  <p className="mt-3 text-[13px] leading-[1.5] text-[#555]">
                    {copy}
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    {items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="text-[14px] font-semibold text-[#011f40] transition hover:text-[#005ead]"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                  {cta ? (
                    <a
                      href="mailto:service@anscer.com"
                      className="mt-4 inline-flex h-9 items-center gap-2 rounded border border-[#005ead] px-3 text-[12px] font-semibold uppercase tracking-wide text-[#005ead] transition hover:bg-[#005ead] hover:text-white"
                    >
                      {cta}{" "}
                      <ArrowRight aria-hidden="true" className="size-3.5" />
                    </a>
                  ) : null}
                </article>
              ))}
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
