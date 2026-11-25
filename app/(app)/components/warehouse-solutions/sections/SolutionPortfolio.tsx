import type { WarehouseSolutionData } from "../warehouse-solutions-data";
import { PortfolioCard } from "./PortfolioCard";
import { PortfolioCarousel } from "./PortfolioCarousel";
import { SectionHeading } from "./SectionHeading";

/** Up to this many robots fit side by side on desktop; more switch to a carousel. */
const MAX_GRID_ITEMS = 5;

export function SolutionPortfolio({ data }: { data: WarehouseSolutionData }) {
  const { portfolio } = data;
  const isCarousel = portfolio.items.length > MAX_GRID_ITEMS;

  return (
    <section className="overflow-hidden bg-[#e6ebf0] py-12 md:py-14 3xl:py-20 4xl:py-28">
      <div className="site-container">
        <SectionHeading
          kicker={portfolio.kicker}
          title={portfolio.title}
          intro={portfolio.intro}
        />

        {isCarousel ? null : (
          /* Swipeable row below xl; all cards side by side from xl up. */
          <ul className="-mx-6 mt-8 flex snap-x snap-mandatory gap-4 scroll-px-6 overflow-x-auto px-6 pb-2 md:scroll-px-5 [scrollbar-width:none] md:-mx-5 md:mt-10 md:px-5 xl:mx-0 xl:grid xl:grid-cols-5 xl:overflow-visible xl:px-0 xl:pb-0 3xl:gap-6 [&::-webkit-scrollbar]:hidden">
            {portfolio.items.map((item, index) => (
              <li
                key={item.name}
                className="w-[min(76vw,300px)] shrink-0 snap-start xl:w-auto"
              >
                <PortfolioCard
                  item={item}
                  index={index}
                  sizes="(max-width: 1280px) 76vw, 20vw"
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Full-bleed like the Applications slider, so it sits outside the container. */}
      {isCarousel ? (
        <PortfolioCarousel items={portfolio.items} label={portfolio.title} />
      ) : null}
    </section>
  );
}
