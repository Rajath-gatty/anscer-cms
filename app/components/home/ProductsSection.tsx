import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FadeLeft, FadeRight } from "../animation";
import { seriesCards as productCards } from "../robots/product-series-data";
import { imagePath } from "./assets";
import { ArrowButton, Kicker, Tags } from "./SectionPrimitives";

export function ProductsSection() {
  const featuredProduct = productCards.find((product) => product.featured);
  const secondaryProducts = productCards.filter((product) => !product.featured);

  return (
    <section
      id="robots"
      className="scroll-mt-10 overflow-hidden bg-[#fafafa] pb-10 pt-10 md:scroll-mt-16 md:pb-14 md:pt-14 lg:pb-16 lg:pt-16 xl:pb-20 xl:pt-8"
    >
      <div className="site-container">
        <FadeRight className="max-w-3xl">
          <Kicker>Robots Designed to Deliver</Kicker>
          <h2 className="mt-5 text-[28px] font-bold tracking-tight md:text-[36px]">
            Our products <span className="text-[#005ead]">Line-Up</span>
          </h2>
          <p className="mt-4 max-w-[640px] text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-[22px]">
            At ANSCER Robotics, we offer specialized robot series tailored to
            meet different operational needs. Explore our innovative solutions
            designed for seamless automation and efficiency.
          </p>
        </FadeRight>
        <div className="mt-7 grid gap-3 md:gap-4 lg:grid-cols-2 lg:items-stretch">
          {featuredProduct ? (
            <FadeRight className="lg:h-full" delay={0.08}>
              <ProductCard product={featuredProduct} />
            </FadeRight>
          ) : null}
          <FadeLeft
            className="grid gap-3 md:gap-4 lg:h-full lg:grid-rows-2"
            delay={0.14}
          >
            {secondaryProducts.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </FadeLeft>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof productCards)[number] }) {
  const media = getHomeProductMedia(product);
  const isFeatured = product.featured;

  return (
    <article
      className={`group relative flex overflow-hidden rounded-lg bg-[#e6edf3] p-4 md:p-5 ${
        isFeatured
          ? "min-h-[430px] flex-col md:min-h-[560px] lg:h-full lg:min-h-[620px]"
          : "min-h-[340px] flex-col md:min-h-[350px] lg:min-h-0 lg:flex-row lg:items-center lg:gap-5"
      }`}
    >
      <div
        className={`relative z-10 ${isFeatured ? "" : "lg:w-[52%] lg:shrink-0"}`}
      >
        <h3 className="text-xl font-semibold md:text-[24px]">
          {product.title}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-4 text-[#27384b] md:mt-3 md:text-base md:leading-6">
          {product.copy}
        </p>
        <Tags tags={product.tags} />
        <div className="mt-3 opacity-100 transition-opacity duration-300 md:mt-4 lg:opacity-0 lg:group-hover:opacity-100">
          <ArrowButton 
            target={product.href}
            className="h-8 text-xs font-medium px-4 md:h-10 md:text-[14px]"
          >
            Explore
          </ArrowButton>
        </div>
      </div>
      <div className={media.wrapperClass}>
        <Image
          src={`${imagePath}${media.image}`}
          alt=""
          fill
          sizes={media.sizes}
          className={media.imageClass}
        />
      </div>
    </article>
  );
}

function getHomeProductMedia(product: (typeof productCards)[number]) {
  if (product.featured) {
    return {
      image: "psr-image-final.png",
      wrapperClass:
        "relative mt-auto h-[235px] w-full overflow-visible sm:h-[275px] md:h-[350px] lg:h-[410px]",
      imageClass:
        "object-contain object-bottom transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110",
      sizes: "(max-width: 640px) 80vw, (max-width: 1024px) 55vw, 33vw",
    };
  }

  return {
    image:
      product.marker === "AGV"
        ? "eca609825c9ed12d6eab777cf34ae51efee25114.png"
        : "60ea9badfafa109779007ff36fd0cf87881840a1.png",
    wrapperClass: "relative mt-5 h-full w-full flex items-center  lg:flex-1",
    imageClass:
      "object-contain object-center transition-transform duration-500 origin-[50%_85%] ease-[cubic-bezier(0.22,1,0.36,1)] scale-196 group-hover:scale-206 md:scale-136 md:group-hover:scale-146",
    sizes: "(max-width: 640px) 80vw, (max-width: 1024px) 55vw, 22vw",
  };
}

