import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { MotionProvider } from "./components/animation/MotionProvider";
import { ScrollBehaviorManager } from "./components/animation/ScrollBehaviorManager";
import { SiteFooter } from "./components/home/SiteFooter";
import { SiteHeader } from "./components/home/SiteHeader";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ANSCER Robotics | Autonomous Industrial Automation",
  description:
    "ANSCER Robotics builds autonomous mobile robots and software for safer, smarter industrial automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_TRACKING_ID = 'G-P437PMBZPF';
  return (
    <html
      lang="en"
      className={cn(
        "h-full scroll-smooth",
        montserrat.variable,
        inter.variable
      )}
    >
      <body className="min-h-full bg-[#fafafa] text-[#011f40]">
        {process.env.NODE_ENV === 'production' && <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />}
        {process.env.NODE_ENV === 'production' && <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>}
        <MotionProvider>
          <ScrollBehaviorManager />
          {/* <AnnouncementBanner /> */}
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
