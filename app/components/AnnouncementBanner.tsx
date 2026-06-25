"use client";

import { X } from "lucide-react";
import { useState } from "react";

const announcements = [
  {
    title: "Automate - Chicago, 22-25 June",
    href: "https://events.anscer.com/automate",
  },
  {
    title: "Join us live at IWS 2026 - Delhi, 25-27 June",
    href: "https://events.anscer.com/iws",
  },
];

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <div className="relative hidden min-h-[50px] items-center justify-center bg-[linear-gradient(90deg,#075fa8_0%,#022b55_100%)] pr-12 text-white md:flex">
      <div className="site-container flex h-full items-center justify-center gap-6">
        {announcements.map((announcement, index) => (
          <div
            key={`${announcement}-${index}`}
            className={`flex items-center gap-4 ${index < announcements.length - 1 ? "border-r border-white/90 pr-6" : ""}`}
          >
            <p className="mb-0 text-xs font-bold leading-none text-white">{announcement.title}</p>
            <a
              href={announcement.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[30px] w-[100px] items-center justify-center rounded-full bg-[#fafafa] px-2 text-[10px] font-medium text-[#011f40]"
            >
              Book a meeting
            </a>
          </div>
        ))}
      </div>
      <button
        type="button"
        aria-label="Close announcement"
        onClick={() => setVisible(false)}
        className="absolute right-5 top-1/2 grid size-4 -translate-y-1/2 place-items-center opacity-90 transition hover:opacity-100"
      >
        <X aria-hidden="true" className="size-4" strokeWidth={2} />
      </button>
    </div>
  );
}
