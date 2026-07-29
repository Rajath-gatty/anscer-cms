"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FadeUp } from "../animation";
import { Kicker, ArrowButton } from "./SectionPrimitives";

interface ArticleMedia {
  url: string;
  alt?: string;
}

interface Article {
  id: string;
  postTitle: string;
  summary?: string;
  articleLink?: string;
  thumbnailImage?: ArticleMedia;
  mainImage?: ArticleMedia;
}

export function NewsSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchArticles = useCallback(async () => {
    try {
      const res = await fetch(
        `/api/articles?where[featured][equals]=true&depth=1&limit=3&sort=-createdAt`,
      );
      if (!res.ok) throw new Error("Failed to fetch articles");
      const data = await res.json();
      return data;
    } catch (err) {
      console.error("Error fetching articles:", err);
      return null;
    }
  }, []);

  useEffect(() => {
    async function loadInitial() {
      setIsLoading(true);
      const data = await fetchArticles();
      if (data) {
        setArticles(data.docs ?? []);
      }
      setIsLoading(false);
    }
    loadInitial();
  }, [fetchArticles]);

  return (
    <section className="overflow-hidden bg-white py-14 md:py-20">
      <div className="site-container">
        <FadeUp>
          {/* <Kicker>We are always up to something</Kicker> */}
          <h2 className="mt-[10px] text-[28px] font-bold tracking-tight md:text-[clamp(40px,2.4vw,80px)]">Events & News</h2>
        </FadeUp>
        <div className="mt-9 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
              <NewsCardSkeleton key={`skeleton-${i}`} index={i} />
            ))
            : articles.map((article, index) => {
              const imageUrl = article.thumbnailImage?.url ?? article.mainImage?.url;
              const href = article.articleLink ?? "#";

              return (
                <FadeUp
                  key={article.id}
                  className={index === 2 ? "md:col-span-2 lg:col-span-1" : undefined}
                  delay={0.08 + index * 0.04}
                >
                  <article className="group">
                    <div className={`relative overflow-hidden rounded-lg bg-[#dfe7ee] lg:h-[300px] ${getNewsImageFrameClass(index)}`}>
                      {imageUrl && (
                        <Image
                          src={imageUrl}
                          alt={article.postTitle}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-contain lg:object-cover"
                          style={{ objectPosition: index < 2 ? "50% 18%" : "center" }}
                        />
                      )}
                    </div>
                    <h3 className="mt-4 min-h-[44px] line-clamp-2 text-base font-semibold text-[#4a4a4a] md:text-[clamp(20px,0.9vw,30px)] 3xl:text-[clamp(24px,1.1vw,28px)] md:leading-[130%]">{article.postTitle}</h3>
                    <p className="mt-4 min-h-[44px] line-clamp-2 text-sm font-normal text-[#5b5f66] md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] md:leading-[130%]">{article.summary || ""}</p>
                    <ArrowButton
                      as="a"
                      variant="ghost"
                      href={href}
                      newTab
                      className="mt-7 gap-4 text-sm text-[#09284a] hover:text-[#005ead]"
                    >
                      Explore
                    </ArrowButton>
                  </article>
                </FadeUp>
              );
            })}
        </div>
      </div>
    </section>
  );
}

function NewsCardSkeleton({ index }: { index: number }) {
  return (
    <div className="animate-pulse">
      <div className={`relative overflow-hidden rounded-lg bg-[#dfe7ee] lg:h-[300px] ${getNewsImageFrameClass(index)}`} />
      <div className="mt-4 h-[12px] w-[90%] rounded bg-[#e4ecf3]" />
      <div className="mt-2 h-[12px] w-[70%] rounded bg-[#e4ecf3]" />
      <div className="mt-6 h-[10px] w-full rounded bg-[#e4ecf3]" />
      <div className="mt-2 h-[10px] w-[80%] rounded bg-[#e4ecf3]" />
      <div className="mt-7 h-5 w-16 rounded bg-[#e4ecf3]" />
    </div>
  );
}

function getNewsImageFrameClass(index: number) {
  return index === 2
    ? "aspect-[1649/941] lg:aspect-auto"
    : "aspect-square lg:aspect-auto";
}
