import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { imagePath } from "./assets";

const footerColumns = [
  {
    heading: "Insights",
    links: [
      { label: "Home", href: "#" },
      { label: "Products", href: "#robots" },
      { label: "Software", href: "#software" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "AR 250", href: "#robots" },
      { label: "AR 500", href: "#robots" },
      { label: "AR 650", href: "#robots" },
      { label: "AR 1250", href: "#robots" },
      { label: "PSR G2G", href: "#robots" },
      { label: "PSR 2000", href: "#robots" },
      { label: "PSR 1000R", href: "#robots" },
      { label: "PSR 2000R", href: "#robots" },
      { label: "LBR 500", href: "#robots" },
      { label: "AGV 100", href: "#robots" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "#company" },
      { label: "Newsroom", href: "#news" },
    ],
  },
];

const legalLinks = ["Policy", "Terms & Conditions", "Cookie settings"];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#222228] text-[#fafafa]">
      <Image
        src={`${imagePath}anscer-footer-lement.svg`}
        alt=""
        width={230}
        height={405}
        className="pointer-events-none absolute right-0 top-1/2 hidden h-full w-auto -translate-y-1/2 opacity-10 lg:block"
      />

      <div className="site-container relative pt-14 md:pt-20">
        <div className="grid gap-x-4 gap-y-10 border-b border-[#fafafa99] pb-14 md:grid-cols-2 lg:grid-cols-[1fr_.35fr_.35fr_.35fr_1fr]">
          <div className="flex flex-col items-start gap-5">
            <Image
              src={`${imagePath}ANSCER-logo-light.svg`}
              alt="ANSCER Robotics"
              width={127}
              height={37}
              className="h-auto w-[127px]"
            />

            <div>
              <h3 className="text-sm font-semibold md:text-base">India Office</h3>
              <p className="mt-1 text-xs leading-6 md:text-base md:leading-[1.25]">
                28B, 4th Main, Industrial Area, Bommasandra, Bengaluru,
                <br />
                Karnataka 560099
                <br />
                Phone: <a href="tel:+919739499716" className="font-bold">(+91) 9739499716</a>
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold md:text-base">USA Office</h3>
              <p className="mt-1 text-xs leading-6 md:text-base md:leading-[1.25]">
                400 Chisholm Pl, PlanoTX 75075,
                <br />
                United States
                <br />
                Phone: <a href="tel:+19714318811" className="font-bold">(+1) 971-431-8811</a>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://youtube.com/@anscertv"
                target="_blank"
                rel="noreferrer"
                aria-label="ANSCER on YouTube"
                className="text-[#bababa] transition hover:text-white"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-7 fill-current"
                >
                  <path d="M14.2848 4.6665C14.9078 4.67 16.4665 4.68517 18.1232 4.75167L18.7112 4.77734C20.3783 4.8555 22.0443 4.99084 22.8715 5.22067C23.974 5.531 24.8397 6.434 25.1325 7.57967C25.5992 9.39967 25.6575 12.9487 25.6645 13.8085L25.6657 13.9858V14.1888C25.6575 15.0487 25.5992 18.5988 25.1325 20.4177C24.8362 21.5668 23.9693 22.471 22.8715 22.7767C22.0443 23.0065 20.3783 23.1418 18.7112 23.22L18.1232 23.2468C16.4665 23.3122 14.9078 23.3285 14.2848 23.3308L14.0107 23.332H13.7132C12.3948 23.3238 6.88116 23.2643 5.1265 22.7767C4.02516 22.4663 3.15833 21.5633 2.8655 20.4177C2.39883 18.5977 2.3405 15.0487 2.3335 14.1888V13.8085C2.3405 12.9487 2.39883 9.3985 2.8655 7.57967C3.16183 6.4305 4.02866 5.52634 5.12766 5.22184C6.88116 4.733 12.396 4.6735 13.7143 4.6665H14.2848ZM11.6657 9.9165V18.0832L18.6657 13.9998L11.6657 9.9165Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/anscer-robotics/"
                target="_blank"
                rel="noreferrer"
                aria-label="ANSCER on LinkedIn"
                className="text-[#bababa] transition hover:text-white"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-7 fill-current"
                >
                  <path d="M23.8569 23.8636H19.7093V17.3648C19.7093 15.8152 19.6813 13.8217 17.5516 13.8217C15.3924 13.8217 15.0638 15.5066 15.0638 17.252V23.8636H10.9162V10.5059H14.8995V12.33H14.9549C15.5095 11.2782 16.8646 10.167 18.8866 10.167C23.0895 10.167 23.8626 12.9338 23.8626 16.5323V23.8636H23.8569ZM6.23368 8.67653C4.89877 8.67653 3.82324 7.59527 3.82324 6.26609C3.82324 4.93692 4.9045 3.85565 6.23368 3.85565C7.56285 3.85565 8.64412 4.93692 8.64412 6.26609C8.64412 7.60099 7.56858 8.67653 6.23368 8.67653ZM8.31038 23.8636H4.15137V10.5059H8.31038V23.8636Z" />
                </svg>
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading} className="flex flex-col items-start gap-4">
              <h3 className="text-base font-semibold md:text-xl">{column.heading}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label} className="py-1">
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition hover:text-white md:text-[15px]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="relative overflow-hidden rounded-2xl bg-[#2a2a2f] px-5 py-6 md:px-7 md:py-7">
              <div className="pointer-events-none absolute -left-10 top-[-25%] h-[500px] w-[25px] rotate-45 bg-[linear-gradient(104deg,rgba(255,255,255,0.3)_42%,rgba(255,255,255,0.2))]" />
              <h2 className="text-base font-semibold md:text-xl">
                Get the latest in news about ANSCER
              </h2>
              <p className="mt-4 text-xs md:text-base">Sign up for our newsletter!</p>

              <form className="relative mt-10">
                <label htmlFor="footer-email" className="sr-only">
                  Enter your email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border-0 border-b border-[#fafafa99] bg-transparent pb-[14px] pr-12 text-sm text-[#fafafa] outline-none placeholder:text-[#fafafa4d] md:text-base"
                />
                <button
                  type="submit"
                  aria-label="Submit newsletter form"
                  className="absolute right-0 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-white text-[#222228] transition hover:opacity-80"
                >
                  <ArrowRight className="size-5" strokeWidth={2} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[34px] py-5 text-xs md:flex-row md:items-center md:justify-between md:gap-6 md:text-base">
          <p className="order-2 w-full text-center md:order-1 md:w-auto md:text-left">
            &copy; ANSCER Robotics 2026 | All rights reserved
          </p>
          <ul className="order-1 flex flex-col items-start gap-2 text-white/60 md:order-2 md:flex-row md:items-center md:gap-[30px]">
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#" className="transition hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
