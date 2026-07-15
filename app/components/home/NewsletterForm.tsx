"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import { type FormEvent, useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-10 flex items-center gap-2 text-sm text-emerald-400">
        <CheckCircle className="size-5 shrink-0" strokeWidth={2} />
        <span>Thank you for subscribing!</span>
      </div>
    );
  }

  return (
    <form className="relative mt-10" onSubmit={handleSubmit}>
      <label htmlFor="footer-email" className="sr-only">
        Enter your email address
      </label>
      <input
        id="footer-email"
        type="email"
        required
        placeholder="Enter your email address"
        className="w-full border-0 border-b border-[#fafafa99] bg-transparent pb-[14px] pr-12 text-sm text-[#fafafa] outline-none placeholder:text-[#fafafa4d]"
      />
      <button
        type="submit"
        aria-label="Submit newsletter form"
        className="absolute right-0 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-white text-[#222228] transition hover:opacity-80"
      >
        <ArrowRight className="size-5" strokeWidth={2} />
      </button>
    </form>
  );
}
