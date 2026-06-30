import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FadeLeft, FadeRight } from "../animation";
import { imagePath } from "./assets";
import { seriesCards as productCards } from "../products/product-series-data";
import { ArrowButton, Kicker, Tags } from "./SectionPrimitives";

export function ProductsSection() {
  const featuredProduct = productCards.find((product) => product.featured);
  const secondaryProducts = productCards.filter((product) => !product.featured);

  return (
    <section id="robots" className="bg-[#fafafa] pb-10 md:py-20">
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
        <div className="mt-7 grid gap-3 md:gap-4 lg:grid-cols-2">
          {featuredProduct ? (
            <FadeRight delay={0.08}>
              <ProductCard product={featuredProduct} />
            </FadeRight>
          ) : null}
          <FadeLeft className="grid gap-3 md:gap-4" delay={0.14}>
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
  return (
    <article
      className={`group relative overflow-hidden rounded-lg bg-[#e6edf3] p-4 md:p-5 ${
        product.featured
          ? "min-h-[425px] md:min-h-[560px]"
          : "min-h-[235px] md:min-h-[270px]"
      }`}
    >
      <h3 className="text-xl font-semibold md:text-[24px]">{product.title}</h3>
      <p className="mt-2 max-w-xl text-sm leading-4 text-[#27384b] md:mt-3 md:text-base md:leading-6">
        {product.copy}
      </p>
      <Tags tags={product.tags} />
      <div
        className={
          product.featured
            ? "absolute inset-x-4 bottom-0 h-[245px] md:inset-x-6 md:h-[390px]"
            : "absolute bottom-2 right-3 h-[104px] w-[196px] md:bottom-4 md:right-6 md:h-[150px] md:w-[330px]"
        }
      >
        <Image
          src={`${imagePath}${product.image}`}
          alt=""
          fill
          sizes={
            product.featured
              ? "(max-width: 768px) 280px, 520px"
              : "(max-width: 768px) 196px, 330px"
          }
          className={`${product.featured ? "pb-6" : ""} object-contain object-bottom transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110`}
        />
      </div>
      <div className="mt-3 opacity-100 transition-opacity duration-300 md:mt-4 lg:opacity-0 lg:group-hover:opacity-100">
        <div className="md:hidden">
          <ProductExploreButton href={product.href} />
        </div>
        <div className="hidden md:block">
          <ArrowButton target={product.href}>Explore</ArrowButton>
        </div>
      </div>
    </article>
  );
}

function ProductExploreButton({ href = "#contact" }: { href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex h-8 items-center gap-3 rounded-sm bg-[#005ead] px-4 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-[#014f91]"
    >
      Explore{" "}
      <ArrowRight aria-hidden="true" className="size-3.5" strokeWidth={2} />
    </a>
  );
}
