import type { ElementType, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ArrowButton({
  children,
  dark = false,
  target = "/contact-us",
  className = "",
  onClick,
  asButton = false,
  as = null,
  variant = "solid",
  newTab = false,
  ...props
}: {
  children: ReactNode;
  dark?: boolean;
  target?: string;
  className?: string;
  onClick?: any;
  asButton?: boolean;
  as?: ElementType | null;
  variant?: "solid" | "ghost";
  newTab?: boolean;
  [key: string]: any;
}) {
  const Component = as || (asButton ? "button" : Link);

  // Only treat a bare bg- class (not a hover:/focus:/etc. variant) as a custom background
  const hasCustomBg = /(?<![a-z]:)bg-/.test(className);

  let colorClasses = "";
  if (variant === "solid" && !hasCustomBg) {
    colorClasses = dark
      ? "bg-white text-[#005ead] hover:bg-[#edf6ff]"
      : "bg-[#005ead] text-white hover:bg-[#014f91]";
  } else if (variant === "ghost" && !hasCustomBg) {
    colorClasses = dark
      ? "text-white hover:text-gray-200"
      : "text-[#005ead] hover:text-[#014f91]";
  }

  const baseClasses = variant === "solid"
    ? "h-10 px-4 gap-3 rounded-sm"
    : "gap-2"; // for ghost

  const sharedClassName = `relative z-10 group/btn cursor-pointer inline-flex items-center text-[14px] font-medium uppercase tracking-wide transition ${baseClasses} ${colorClasses} ${className}`
    .replace(/\s+/g, " ")
    .trim();

  const arrow = (
    <span className="relative flex size-4 overflow-hidden">
      <ArrowRight aria-hidden="true" className="size-4 transition group-hover/btn:translate-x-5" strokeWidth={2} />
      <ArrowRight aria-hidden="true" className="absolute size-4 -translate-x-5 transition group-hover/btn:translate-x-0" strokeWidth={2} />
    </span>
  );

  const finalProps = {
    className: sharedClassName,
    onClick,
    ...props,
  };

  if (Component === "button") {
    return (
      <button type="button" {...finalProps}>
        {children}
        {arrow}
      </button>
    );
  }

  if (Component === Link || Component === "a") {
    const linkHref = props.href || target;
    return (
      <Component href={linkHref} target={newTab ? "_blank" : "_self"} {...finalProps}>
        {children}
        {arrow}
      </Component>
    );
  }

  return (
    <Component {...finalProps}>
      {children}
      {arrow}
    </Component>
  );
}

export function Kicker({ children }: { children: string }) {
  return <p className="text-xs font-medium uppercase text-[#005ead] md:text-base">{children}</p>;
}

export function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-md bg-white px-3 py-1.5 text-xs font-normal text-[#011f40] md:px-4 md:py-2 md:text-base">
          {tag}
        </span>
      ))}
    </div>
  );
}
