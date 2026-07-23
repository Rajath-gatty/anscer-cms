import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { MotionProvider } from "./components/animation/MotionProvider";
import { ScrollBehaviorManager } from "./components/animation/ScrollBehaviorManager";
import { SiteFooter } from "./components/home/SiteFooter";
import { SiteHeader } from "./components/home/SiteHeader";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
  return (
    <html
      lang="en"
      className={cn(
        "h-full scroll-smooth",
        "font-sans",
        plusJakartaSans.variable,
      )}
    >
      <body className="min-h-full bg-[#fafafa] text-[#011f40]">
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
