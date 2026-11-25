import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FadeUp } from "../../animation";
import { Kicker } from "../../home/SectionPrimitives";

/** Kicker + h2 (+ optional intro) block shared by every warehouse solution section. */
export function SectionHeading({
  kicker,
  title,
  intro,
  dark = false,
  className,
  titleClassName,
}: {
  kicker: string;
  title: string;
  intro?: ReactNode;
  /** White text for sections on the blue gradient background. */
  dark?: boolean;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <FadeUp className={cn("flex flex-col gap-4 md:gap-6", className)}>
      <Kicker className={cn(dark && "text-white")}>{kicker}</Kicker>
      <h2
        className={cn(
          "text-[28px] font-bold leading-[1.2] md:text-[clamp(32px,2.5vw,72px)]",
          dark ? "text-white" : "text-brand-navy",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "text-sm leading-6 md:text-[clamp(16px,1.25vw,30px)] md:leading-[1.5]",
            dark ? "text-white/85" : "text-brand-charcoal",
          )}
        >
          {intro}
        </p>
      ) : null}
    </FadeUp>
  );
}
