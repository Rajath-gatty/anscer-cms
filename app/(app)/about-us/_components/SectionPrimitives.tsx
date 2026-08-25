import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#005ead] md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)]">
      {children}
    </p>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-2 text-[20px] font-bold leading-tight text-[#011f40] md:mt-3 md:text-[clamp(40px,2.4vw,80px)]">
      {children}
    </h2>
  );
}
