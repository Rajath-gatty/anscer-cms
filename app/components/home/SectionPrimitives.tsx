import { ArrowRight } from "lucide-react";

export function ArrowButton({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <a
      href="#contact"
      className={`group inline-flex h-10 items-center gap-3 rounded-sm px-4 text-[11px] font-bold uppercase tracking-wide transition ${
        dark ? "bg-white text-[#005ead] hover:bg-[#edf6ff]" : "bg-[#005ead] text-white hover:bg-[#014f91]"
      }`}
    >
      {children}
      <span className="relative flex size-4 overflow-hidden">
        <ArrowRight aria-hidden="true" className="size-4 transition group-hover:translate-x-5" strokeWidth={2} />
        <ArrowRight aria-hidden="true" className="absolute size-4 -translate-x-5 transition group-hover:translate-x-0" strokeWidth={2} />
      </span>
    </a>
  );
}

export function Kicker({ children }: { children: string }) {
  return <p className="text-xs font-medium uppercase text-[#005ead] md:text-base">{children}</p>;
}

export function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-[#011f40] md:px-4 md:py-2 md:text-sm">
          {tag}
        </span>
      ))}
    </div>
  );
}
