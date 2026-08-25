import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { imagePath } from "../home/assets";

export function ProductSmartNavigationSection() {
  return (
    <section className="hidden bg-[#eaf2f8] py-14 md:py-20">
      <div className="site-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#005ead] md:text-base">
              Real Solutions For Real Challenges
            </p>
            <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-tight md:text-[36px]">
              Smarter Navigation,{" "}
              <span className="text-[#005ead]">Anywhere</span>
            </h2>
            <p className="mt-4 max-w-[620px] text-sm leading-5 text-[#4b5563] md:text-base md:leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="grid h-8 min-w-[62px] place-items-center rounded-full border border-[#b9c9d9] px-4 text-xs font-medium">
              01/03
            </span>
            <button
              className="grid size-8 place-items-center rounded-full border border-[#b9c9d9]"
              aria-label="Previous navigation slide"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
            </button>
            <button
              className="grid size-8 place-items-center rounded-full border border-[#b9c9d9]"
              aria-label="Next navigation slide"
            >
              <ArrowRight aria-hidden="true" className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-[0.68fr_0.32fr]">
          <NavigationCard
            large
            image="case-study-manufacturing.jpg"
            title="Lorem ipsum dolor sit amet"
          />
          <NavigationCard
            image="Frame-1321316466.jpg"
            title="Flexible robot movement"
          />
        </div>
      </div>
    </section>
  );
}

function NavigationCard({
  image,
  title,
  large = false,
}: {
  image: string;
  title: string;
  large?: boolean;
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-lg bg-[#011f40] ${large ? "min-h-[470px]" : "min-h-[470px]"}`}
    >
      <Image
        src={`${imagePath}${image}`}
        alt={title}
        fill
        sizes="(max-width: 1024px) 100vw, 900px"
        className="object-cover opacity-88"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,31,64,.04),rgba(1,31,64,.72))]" />
      <p className="absolute bottom-6 left-6 right-6 text-sm leading-5 text-white/90 md:text-base md:leading-6">
        {title}. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
        massa mi. Aliquam in hendrerit urna.
      </p>
    </article>
  );
}
