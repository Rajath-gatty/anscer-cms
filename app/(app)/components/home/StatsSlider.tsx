"use client";

import { useEffect, useMemo, useState } from "react";

function StatsSlider() {
  const stats = useMemo(
    () =>
      [
        {
          value: "85+",
          label: "Projects Delivered",
          copy: "Successfully deployed automation solutions across 4+ continents, helping customers in diverse industries achieve operational excellence.",
        },
        {
          value: "800,000+",
          label: "Autonomous Trips Completed",
          copy: "Proven reliability across real-world manufacturing and warehouse environments.",
        },
        {
          value: "100+",
          label: "Robots Deployed Worldwide",
          copy: "Delivering reliable automation across multiple industries and geographies",
        },
      ] as const,
    [],
  );

  const [activeSlide, setActiveSlide] = useState(0);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % stats.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [stats.length]);

  useEffect(() => {
    const targetValue = Number.parseInt(
      stats[activeSlide].value.replace(/[^\d]/g, ""),
      10,
    );
    const suffix = stats[activeSlide].value.includes("+") ? "+" : "";
    const duration = 900;
    const startTime = window.performance.now();

    let animationFrame = 0;

    const updateValue = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(targetValue * easedProgress);

      setDisplayValue(
        `${new Intl.NumberFormat("en-US").format(currentValue)}${suffix}`,
      );

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(updateValue);
      }
    };

    animationFrame = window.requestAnimationFrame(updateValue);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [activeSlide, stats]);

  return (
    <div className="mx-auto w-full max-w-180 text-center">
      <div className="relative min-h-36 md:min-h-36 ">
        {stats.map((stat, index) => {
          const isActive = index === activeSlide;

          return (
            <div
              key={stat.label}
              className={`transition-all duration-500 ${
                isActive
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none absolute inset-0 translate-y-4 opacity-0"
              }`}
            >
              <h3 className="text-[18px] font-extrabold leading-none text-[#011f40] md:text-[40px]">
                <span className="text-[#005ead]">
                  {index === activeSlide ? displayValue : stat.value}
                </span>
              </h3>
              <p className="mt-2 text-[10px] font-extrabold text-[#011f40] md:mt-4 md:text-[14px]">
                {stat.label}
              </p>
              {/* <p className="mx-auto mt-2 max-w-65 text-[9px] leading-[1.45] text-[#3a3a3a] md:mt-3 md:max-w-85 md:text-[13px] md:leading-[1.6]">
                {stat.copy}
              </p> */}
            </div>
          );
        })}
      </div>

      <div
        className="mt-1 flex items-center justify-center gap-2"
        aria-label="Stats slider navigation"
      >
        {stats.map((stat, index) => (
          <button
            key={stat.label}
            type="button"
            aria-label={`Show ${stat.label}`}
            aria-current={index === activeSlide ? "true" : undefined}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              index === activeSlide ? "scale-110 bg-[#005ead]" : "bg-[#c9d8e6]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default StatsSlider;
