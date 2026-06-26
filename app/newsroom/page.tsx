import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { imagePath } from "../components/home/assets";
import { BlueCta, MarketingHero, SectionHeader } from "../components/marketing/MarketingPages";

export const metadata: Metadata = {
  title: "Newsroom | ANSCER Robotics",
  description: "Explore our latest news, press releases, events, and business updates.",
};

const articles = [
  {
    title: "Bengaluru-Based ANSCER Robotics Raises $2 Million in Seed Round",
    image: "Frame-1321317238-1.jpg",
  },
  {
    title: "ANSCER Robotics Raises $2 Million in Seed Funding",
    image: "Frame-1321317238-2.jpg",
  },
  {
    title: "ANSCER Robotics Raises $2 Million in Seed Funding",
    image: "newsroom-final.jpeg",
  },
];

export default function NewsroomPage() {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      <MarketingHero
        eyebrow="Newsroom"
        title="The Latest from Our Robotics Ecosystem"
        copy="Explore our latest news, press releases, events, and business updates."
        image="newsroom-final.jpeg"
        cta="Download Media Kit"
      />
      <section id="content" className="py-14 md:py-[56px]">
        <div className="site-container">
          <SectionHeader eyebrow="Latest News" title="Explore More" copy="Stories, announcements, and updates from the ANSCER Robotics ecosystem." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title + article.image} className="overflow-hidden rounded-xl bg-white shadow-[0_16px_38px_rgba(1,31,64,.07)]">
                <div className="relative aspect-[1.46]">
                  <Image src={`${imagePath}${article.image}`} alt={article.title} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#005ead]">In The News</p>
                  <h2 className="mt-3 text-base font-semibold leading-6">{article.title}</h2>
                  <a href="#" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase text-[#005ead]">
                    Read Now <ArrowRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#e6ebf0] py-14 md:py-[56px]">
        <div className="site-container grid gap-8 rounded-xl bg-white p-8 md:grid-cols-[0.55fr_0.45fr] md:items-center">
          <SectionHeader eyebrow="Media Kit" title="Everything You Need to Tell Our Story" copy="Download media resources, brand assets, and editorial material for ANSCER Robotics." />
          <div className="relative min-h-[280px]">
            <Image src={`${imagePath}f7334de79d3b0b0e61bc3d16b89c879619ad77fb.png`} alt="Media kit" fill sizes="(max-width: 768px) 100vw, 520px" className="object-contain" />
          </div>
        </div>
      </section>
      <BlueCta title="Subscribe to our Newsletter" copy="Get the latest in news about ANSCER Robotics." />
    </main>
  );
}
