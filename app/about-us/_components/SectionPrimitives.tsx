import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#005ead] md:text-[16px]">
      {children}
    </p>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-2 text-[20px] font-bold leading-tight text-[#011f40] md:mt-3 md:text-[36px]">
      {children}
    </h2>
  );
}
