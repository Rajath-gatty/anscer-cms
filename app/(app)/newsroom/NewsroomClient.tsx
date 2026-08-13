"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ScrollReveal } from "../components/home/ScrollReveal";
import { FadeUp } from "../components/animation";

/* ─── Types ─────────────────────────────────────────────────────────── */
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

const PAGE_SIZE = 3;

/* ─── Shared arrow icon ──────────────────────────────────────────────── */
function ArrowIcon({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-block w-[30px] h-[20px] relative overflow-hidden shrink-0">
      <svg
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${dark ? "text-brand-navy" : "text-white"
          }`}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33325 7.9987H12.6666M7.99992 12.6654L12.6666 7.9987L7.99992 3.33203"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* ─── Blue CTA button (matches Webflow u-button: #005ead) ────────────── */
export function NavyButton({
  href,
  children,
  white,
}: {
  href: string;
  children: React.ReactNode;
  white?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={`inline-flex items-center gap-3 rounded-[3px] py-[13px] pr-[5px] pl-5 text-[12px] font-medium uppercase tracking-[0.08em] no-underline w-fit transition-[background-color,background-image] duration-200 ${white
        ? "bg-white text-brand-navy hover:bg-white/90"
        : "bg-brand-blue text-white hover:bg-[linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.05))]"
        }`}
    >
      {children}
      <ArrowIcon dark={white} />
    </a>
  );
}

/* ─── Outline "Explore" link (matches Webflow u-button-2 article-btn) ── */
function ExploreLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="inline-flex items-center gap-3 text-brand-navy py-[13px] pr-[5px] pl-0 text-[13px] font-medium no-underline uppercase tracking-[0.06em]"
    >
      Explore
      <ArrowIcon dark />
    </a>
  );
}

/* ─── Article card ───────────────────────────────────────────────────── */
function ArticleCard({ article }: { article: Article }) {
  const imageUrl = article.thumbnailImage?.url ?? article.mainImage?.url;
  const link = article.articleLink ?? "#";

  return (
    <article className="flex flex-col h-full">
      {/* Image with border-radius */}
      <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-[#e4ecf3]">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={article.postTitle}
            fill
            sizes="(max-width: 768px) 100vw, 450px"
            className="h-[400px] object-top object-cover"
          />
        )}
      </div>

      {/* Content area */}
      <div className="h-[146px] flex flex-col">
        <div className="flex-[1_0_auto]">
          <h4
            className={`text-brand-charcoal text-[16px] md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] font-semibold mb-0 wrap-break-word line-clamp-2 ${"mt-3"}`}
          >
            {article.postTitle}
          </h4>
        </div>
        <ExploreLink href={link} />
      </div>
    </article>
  );
}

/* ─── Article card skeleton ──────────────────────────────────────────── */
function ArticleCardSkeleton() {
  return (
    <div className="flex flex-col h-full animate-pulse">
      {/* Image skeleton */}
      <div className="aspect-[16/11] rounded-xl bg-[#e4ecf3]" />
      {/* Content skeleton */}
      <div className="h-[146px] flex flex-col pt-3">
        <div className="h-3 w-2/5 rounded bg-[#e4ecf3]" />
        <div className="flex-[1_0_auto] pt-2">
          <div className="h-4 w-full rounded bg-[#e4ecf3]" />
          <div className="h-4 w-[70%] rounded bg-[#e4ecf3] mt-1.5" />
        </div>
        <div className="h-[14px] w-[80px] rounded bg-[#e4ecf3]" />
      </div>
    </div>
  );
}

/* ─── Explore More section (client, for load-more state) ─────────────── */
export function ExploreMoreSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);

  const fetchArticles = useCallback(async (pageNum: number) => {
    try {
      const res = await fetch(
        `/api/articles?depth=1&limit=${PAGE_SIZE}&page=${pageNum}&sort=-createdAt`,
      );
      if (!res.ok) throw new Error("Failed to fetch articles");
      const data = await res.json();
      return data;
    } catch (err) {
      console.error("Error fetching articles:", err);
      return null;
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    async function loadInitial() {
      setIsLoading(true);
      const data = await fetchArticles(1);
      if (data) {
        setArticles(data.docs ?? []);
        setHasMore(data.hasNextPage ?? false);
        setPage(1);
      }
      setIsLoading(false);
    }
    loadInitial();
  }, [fetchArticles]);

  // Load more handler
  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setIsLoadingMore(true);
    const data = await fetchArticles(nextPage);
    if (data) {
      setArticles((prev) => [...prev, ...(data.docs ?? [])]);
      setHasMore(data.hasNextPage ?? false);
      setPage(nextPage);
    }
    setIsLoadingMore(false);
  };

  return (
    <section className="py-14 3xl:py-20 4xl:py-28 bg-[#fafafa]">
      <div className="site-container">
        <FadeUp>
          <h2 className="text-[clamp(28px,3vw,36px)] md:text-[clamp(40px,2.4vw,80px)] font-semibold text-brand-navy mt-0 mb-2">
            Explore More
          </h2>
          <p className="text-[#3a3a3a] text-[16px] md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] m-0">
            Access all news updates conveniently in a single location
          </p>
        </FadeUp>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 min-[601px]:grid-cols-2 min-[901px]:grid-cols-3 gap-4 mb-14">
          {isLoading
            ? Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <ArticleCardSkeleton key={`skeleton-${i}`} />
            ))
            : articles.map((article) => (
              <ScrollReveal key={article.id}>
                <ArticleCard article={article} />
              </ScrollReveal>
            ))}

          {/* Skeleton cards appended during load-more */}
          {isLoadingMore &&
            Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <ArticleCardSkeleton key={`load-more-skeleton-${i}`} />
            ))}
        </div>

        {/* Load more */}
        {!isLoading && hasMore && (
          <div className="flex justify-center">
            <LoadMoreButton
              onClick={handleLoadMore}
              loading={isLoadingMore}
            />
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Load More button ──────────────────────────────────────────────── */
function LoadMoreButton({ onClick, loading }: { onClick: () => void; loading?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`text-white border-none rounded-[3px] py-[13px] px-6 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 inline-flex items-center gap-2 ${loading
        ? "bg-[#7faecf] cursor-not-allowed opacity-80"
        : "bg-brand-blue hover:bg-brand-navy cursor-pointer opacity-100"
        }`}
    >
      {loading && (
        <span className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      )}
      {loading ? "Loading..." : "Load more"}
    </button>
  );
}

/* ─── Newsletter section ─────────────────────────────────────────────── */
export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <FadeUp className="bg-[#e6ebf0] py-20">
      <div className="site-container newsletter-grid grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Left: copy */}
        <div>
          <p className="text-[16px] md:text-[clamp(16px,0.8vw,30px)] font-medium uppercase tracking-[0.18em] text-brand-blue mb-0">
            Newsletter
          </p>
          <h3 className="text-[clamp(28px,3vw,36px)] md:text-[clamp(40px,2.4vw,80px)] font-semibold text-brand-navy mt-6 mb-6 leading-[110%]">
            Subscribe to our Newsletter
          </h3>
          <p className="text-[16px] md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] text-[#3a3a3a] m-0">
            Get latest updates from ANSCER
          </p>
        </div>

        {/* Right: form */}
        <div>
          {submitted ? (
            <p className="text-brand-navy font-semibold text-[16px]">
              Thank you! Your submission has been received!
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="newsletter-form flex flex-col items-stretch md:flex-row md:items-center gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                required
                className="flex-1 w-full h-[46px] border border-brand-navy rounded-[4px] py-[16px] px-[14px] text-[14px] text-brand-navy outline-none bg-white"
              />
              <SubscribeButton />
            </form>
          )}
        </div>
      </div>
    </FadeUp>
  );
}

function SubscribeButton() {
  return (
    <button
      type="submit"
      className="bg-brand-blue hover:bg-brand-navy text-white border-none rounded-[3px] px-5 h-[46px] min-w-[110px] text-[12px] font-semibold uppercase tracking-[0.08em] cursor-pointer whitespace-nowrap transition-colors duration-200"
    >
      Subscribe
    </button>
  );
}

/* ─── Latest News Section (client, for fetching latest article) ─────────── */
export function LatestNewsSection() {
  const [latestArticle, setLatestArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLatest() {
      try {
        const res = await fetch(
          "/api/articles?depth=1&limit=1&sort=-createdAt"
        );
        if (!res.ok) throw new Error("Failed to fetch latest article");
        const data = await res.json();
        if (data.docs && data.docs.length > 0) {
          setLatestArticle(data.docs[0]);
        }
      } catch (err) {
        console.error("Error fetching latest article:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchLatest();
  }, []);

  const imageUrl = latestArticle?.mainImage?.url ?? latestArticle?.thumbnailImage?.url;
  const link = latestArticle?.articleLink ?? "#";

  return (
    <section className="py-14 3xl:py-20 4xl:py-28 bg-[#fafafa]">
      <div className="site-container">
        {isLoading ? (
          <LatestNewsSkeleton />
        ) : latestArticle ? (
          <FadeUp>
            {/* 2-col layout: text | image */}
            <div className="latest-news-grid grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              {/* Left */}
              <div className="flex flex-col gap-6">
                <p className="text-[16px] md:text-[clamp(16px,0.8vw,30px)] font-medium uppercase tracking-[0.18em] text-[#005ead] m-0">
                  LATEST NEWS
                </p>
                <h2 className="text-[clamp(24px,3vw,36px)] md:text-[clamp(40px,2.4vw,80px)] font-semibold text-[#011f40] m-0 leading-[120%] [overflow-wrap:anywhere]">
                  {latestArticle.postTitle}
                </h2>
                {latestArticle.summary && (
                  <p className="text-[16px] md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] text-[#3a3a3a] m-0">
                    {latestArticle.summary}
                  </p>
                )}
                {/* Desktop button */}
                <div className="latest-news-btn-desktop hidden md:block">
                  <NavyButton href={link}>read now</NavyButton>
                </div>
              </div>

              {/* Right */}
              <div>
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={latestArticle.postTitle}
                    width={600}
                    height={400}
                    className="object-cover rounded-xl w-full h-[400px]"
                  />
                )}
              </div>
            </div>

            {/* Mobile read-now button */}
            <div className="latest-news-btn-mobile block md:hidden mt-6">
              <NavyButton href={link}>read now</NavyButton>
            </div>
          </FadeUp>
        ) : null}
      </div>
    </section>
  );
}

/* ─── Latest News Section Skeleton ───────────────────────────────────────── */
function LatestNewsSkeleton() {
  return (
    <div className="latest-news-grid grid grid-cols-1 md:grid-cols-2 gap-4 items-center animate-pulse">
      {/* Left side */}
      <div className="flex flex-col gap-6">
        {/* Category */}
        <div className="h-4 w-28 rounded bg-[#e4ecf3]" />
        {/* Title */}
        <div className="space-y-2">
          <div className="h-8 w-full rounded bg-[#e4ecf3]" />
          <div className="h-8 w-3/4 rounded bg-[#e4ecf3]" />
        </div>
        {/* Excerpt */}
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-[#e4ecf3]" />
          <div className="h-4 w-5/6 rounded bg-[#e4ecf3]" />
        </div>
        {/* Button */}
        <div className="h-[46px] w-[140px] rounded bg-[#e4ecf3] hidden md:block" />
      </div>

      {/* Right side (Image) */}
      <div className="h-[400px] w-full rounded-xl bg-[#e4ecf3]" />

      {/* Mobile Button */}
      <div className="h-[46px] w-full rounded bg-[#e4ecf3] block md:hidden mt-6" />
    </div>
  );
}

