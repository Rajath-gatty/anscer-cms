"use client";

import { imagePath } from "@/app/components/home/assets";
import Image from "next/image";
import { useState } from "react";

function MoveIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path
        d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z"
        fill={active ? "#005EAD" : "#011F40"}
        fillOpacity={active ? 1 : 0.05}
        className="transition-colors duration-300"
      />
      <path
        d="M20.6901 11.8168C20.473 11.7178 20.2371 11.6665 19.9984 11.6665C19.7598 11.6665 19.5239 11.7178 19.3068 11.8168L12.1651 15.0668C12.0172 15.132 11.8915 15.2388 11.8032 15.3742C11.715 15.5096 11.668 15.6677 11.668 15.8293C11.668 15.9909 11.715 16.149 11.8032 16.2844C11.8915 16.4198 12.0172 16.5266 12.1651 16.5918L19.3151 19.8501C19.5322 19.9492 19.7681 20.0004 20.0068 20.0004C20.2454 20.0004 20.4813 19.9492 20.6984 19.8501L27.8484 16.6001C27.9963 16.5349 28.122 16.4281 28.2103 16.2928C28.2986 16.1574 28.3455 15.9992 28.3455 15.8376C28.3455 15.676 28.2986 15.5179 28.2103 15.3825C28.122 15.2471 27.9963 15.1403 27.8484 15.0751L20.6901 11.8168Z"
        stroke={active ? "white" : "#011F40"}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
      <path
        d="M11.668 20C11.6676 20.1594 11.7129 20.3155 11.7986 20.45C11.8842 20.5844 12.0067 20.6914 12.1513 20.7583L19.318 24.0167C19.534 24.1145 19.7684 24.1651 20.0055 24.1651C20.2426 24.1651 20.477 24.1145 20.693 24.0167L27.843 20.7667C27.9905 20.7004 28.1155 20.5926 28.2028 20.4564C28.2901 20.3203 28.3359 20.1617 28.3346 20"
        stroke={active ? "white" : "#011F40"}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
      <path
        d="M11.668 24.1665C11.6676 24.3259 11.7129 24.4821 11.7986 24.6165C11.8842 24.7509 12.0067 24.8579 12.1513 24.9248L19.318 28.1832C19.534 28.281 19.7684 28.3316 20.0055 28.3316C20.2426 28.3316 20.477 28.281 20.693 28.1832L27.843 24.9332C27.9905 24.8669 28.1155 24.7591 28.2028 24.6229C28.2901 24.4868 28.3359 24.3282 28.3346 24.1665"
        stroke={active ? "white" : "#011F40"}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
    </svg>
  );
}

function PickIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path
        d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z"
        fill={active ? "#005EAD" : "#011F40"}
        fillOpacity={active ? 1 : 0.05}
        className="transition-colors duration-300"
      />
      <path
        d="M20 12.5H14.1667C13.7246 12.5 13.3007 12.6756 12.9882 12.9882C12.6756 13.3007 12.5 13.7246 12.5 14.1667V25.8333C12.5 26.2754 12.6756 26.6993 12.9882 27.0118C13.3007 27.3244 13.7246 27.5 14.1667 27.5H25.8333C26.2754 27.5 26.6993 27.3244 27.0118 27.0118C27.3244 26.6993 27.5 26.2754 27.5 25.8333V20"
        stroke={active ? "white" : "#011F40"}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
      <path
        d="M21.6667 22.5002H17.5V18.3335"
        stroke={active ? "white" : "#011F40"}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
      <path
        d="M23.332 12.5H27.4987V16.6667"
        stroke={active ? "white" : "#011F40"}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
      <path
        d="M27.5 12.5L17.5 22.5"
        stroke={active ? "white" : "#011F40"}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
    </svg>
  );
}

function WaitIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path
        d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z"
        fill={active ? "#005EAD" : "#011F40"}
        fillOpacity={active ? 1 : 0.05}
        className="transition-colors duration-300"
      />
      <path
        d="M17.5 12.5H14.1667C13.2462 12.5 12.5 13.2462 12.5 14.1667V17.5C12.5 18.4205 13.2462 19.1667 14.1667 19.1667H17.5C18.4205 19.1667 19.1667 18.4205 19.1667 17.5V14.1667C19.1667 13.2462 18.4205 12.5 17.5 12.5Z"
        stroke={active ? "white" : "#011F40"}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
      <path
        d="M15.832 19.1665V22.4998C15.832 22.9419 16.0076 23.3658 16.3202 23.6783C16.6327 23.9909 17.0567 24.1665 17.4987 24.1665H20.832"
        stroke={active ? "white" : "#011F40"}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
      <path
        d="M25.832 20.8335H22.4987C21.5782 20.8335 20.832 21.5797 20.832 22.5002V25.8335C20.832 26.754 21.5782 27.5002 22.4987 27.5002H25.832C26.7525 27.5002 27.4987 26.754 27.4987 25.8335V22.5002C27.4987 21.5797 26.7525 20.8335 25.832 20.8335Z"
        stroke={active ? "white" : "#011F40"}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
    </svg>
  );
}

function DropIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path
        d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z"
        fill={active ? "#005EAD" : "#011F40"}
        fillOpacity={active ? 1 : 0.05}
        className="transition-colors duration-300"
      />
      <path
        d="M25 23.3332L28.3333 19.9998L25 16.6665"
        stroke={active ? "white" : "#011F40"}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
      <path
        d="M15.0013 16.6665L11.668 19.9998L15.0013 23.3332"
        stroke={active ? "white" : "#011F40"}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
      <path
        d="M22.0846 13.3335L17.918 26.6668"
        stroke={active ? "white" : "#011F40"}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
    </svg>
  );
}

const steps = [
  {
    title: "Move",
    copy: "Navigate the robot between locations.",
    Icon: MoveIcon,
    image: "img-1.png",
  },
  {
    title: "Pick",
    copy: "Execute material pickup operations.",
    Icon: PickIcon,
    image: "img-4.png",
  },
  {
    title: "Wait",
    copy: "Pause operations based on process conditions or timing requirements.",
    Icon: WaitIcon,
    image: "img-3.png",
  },
  {
    title: "Drop",
    copy: "Perform material delivery or unloading actions.",
    Icon: DropIcon,
    image: "img-2.png",
  },
];

function InteractiveWorkflowV2() {
  const [active, setActive] = useState(0);

  function isActive(index: number) {
    return index === active; // For demonstration, only the first step is active
  }
  return (
    <section className="bg-[#fafafa] py-10 md:py-14">
      <div className="site-container">
        <div className="grid gap-0 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="text-[12px] md:text-base font-medium uppercase tracking-[0.14em] text-[#005ead]">
              WORKFLOW CONFIGURATION
            </p>
            <h2 className="mt-6 max-w-[648px] text-[28px] font-bold leading-[120%] text-[#011f40] md:text-[36px]">
              Build Robot Workflows Without Writing Code
            </h2>
          </div>
          <p className="mt-5 text-base leading-[130%] text-[#333333] lg:mt-0 lg:text-xl">
            The Process Flow Manager enables users to create robotic workflows
            through a drag-and-drop, block-based interface, allowing teams to
            automate processes without complex programming.
          </p>
        </div>
        <div className="grid relative md:grid-cols-2 gap-6 mt-8">
          <div className="absolute top-0 left-2.5 h-full w-0.5 rounded bg-[#011f40] opacity-30"></div>
          <div
            className="absolute top-0 left-2.5  w-0.5 rounded bg-[#005EAD] transition-all duration-600"
            style={{ height: `${(active + 1) * (100 / steps.length)}%` }}
          ></div>
          <div className="flex flex-col h-full justify-between gap-4 z-10">
            {steps.map((step, index) => (
              <div
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => setActive(index)}
                key={index}
              >
                <div id={`step-${index}`}>
                  <div className="relative flex size-6 items-center justify-center">
                    <div
                      className={`absolute z-0 size-[25px] rounded-full bg-white`}
                    />
                    <div
                      className={`absolute size-[23px] z-1 rounded-full border border-[#005EAD] transition-all duration-300 ${
                        isActive(index)
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-90"
                      }`}
                    />
                    <div
                      className={`size-[11.33px] z-1 rounded-full transition-all duration-300 ${
                        isActive(index)
                          ? "bg-[#005EAD] opacity-100"
                          : "bg-[#011f40] opacity-30"
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`flex md:items-center w-full cursor-pointer gap-3 rounded-[12px] px-3 py-5 text-left transition-all duration-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005ead] ${
                    isActive(index)
                      ? "bg-linear-to-r from-[#005EAD1A] to-[#005EAD00] md:h-[94px] h-[260px]"
                      : "bg-transparent h-[94px]"
                  }`}
                >
                  <step.Icon active={isActive(index)} />
                  <div className="flex flex-col gap-1 w-full">
                    <h3
                      className={`text-sm md:text-base font-semibold transition-all duration-300 ${
                        isActive(index)
                          ? "text-[#005ead] transform translate-y-0"
                          : "font-medium text-[#000000] translate-y-3"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p className="text-[12px] md:text-sm leading-[150%] min-h-6 text-[#011F40] w-full pb-3 md:pb-0">
                      {isActive(index) && step.copy}
                    </p>
                    {isActive(index) && (
                      <div className="md:hidden overflow-hidden h-[150px] w-full rounded-xl">
                        <div className="relative aspect-[668/424] w-full scale-110 rounded-xl">
                          <Image
                            src={`${imagePath}${step.image}`}
                            alt={`${step.title} workflow - Process Flow Manager`}
                            fill
                            quality={95}
                            sizes="(max-width: 1024px) 100vw, 800px"
                            className={`object-cover ${
                              isActive(index) ? "active" : "inactive"
                            }`}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative col-span-1 h-[424px] w-full overflow-hidden rounded-xl bg-[#dfe7ee] hidden md:block">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-600 absolute top-0 left-0 w-full h-full ${isActive(index) ? "opacity-100 scale-110" : "opacity-0 scale-100"}`}
              >
                <div className="relative aspect-[668/424] w-full">
                  <Image
                    src={`${imagePath}${step.image}`}
                    alt={`${step.title} workflow - Process Flow Manager`}
                    fill
                    quality={100}
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className={`object-cover ${
                      isActive(index) ? "active" : "inactive"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveWorkflowV2;
