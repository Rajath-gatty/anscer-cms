"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const fieldClassName =
  "mt-2 h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-[#011f40] outline-none transition placeholder:text-slate-400 focus:border-[#005ead] focus:ring-2 focus:ring-[#005ead]/20";

export function ProductProfileRequestDialog({
  open,
  onOpenChange,
  productTitle,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productTitle: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-[24px] border border-slate-200 bg-white p-0 text-[#011f40] shadow-[0_30px_80px_rgba(0,0,0,.22)] sm:max-w-200">
        <div className="grid gap-0 md:grid-cols-1">
          <div className="p-6 sm:p-8 lg:p-10">
            <DialogHeader className="max-w-none gap-3">
              <DialogTitle className="text-[30px] font-semibold leading-tight tracking-tight text-[#011f40] sm:text-[40px]">
                Request Product Profile
              </DialogTitle>
              <DialogDescription className="max-w-md text-sm leading-6 text-slate-600 sm:text-base">
                Complete the form below and our team will send the requested
                product datasheet to your email.
              </DialogDescription>
            </DialogHeader>

            <form
              className="mt-8 grid grid-cols-1 gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                onOpenChange(false);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium uppercase tracking-wide text-slate-700">
                  First name *
                  <input
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    className={fieldClassName}
                  />
                </label>
                <label className="text-sm font-medium uppercase tracking-wide text-slate-700">
                  Last name *
                  <input
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    className={fieldClassName}
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium uppercase tracking-wide text-slate-700">
                  Work email address *
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={fieldClassName}
                  />
                </label>
                <label className="text-sm font-medium uppercase tracking-wide text-slate-700">
                  Job title/designation *
                  <input
                    name="jobTitle"
                    type="text"
                    autoComplete="organization-title"
                    required
                    className={fieldClassName}
                  />
                </label>
              </div>

              <label className="text-sm font-medium uppercase tracking-wide text-slate-700">
                Contact number *
                <input
                  name="contactNumber"
                  type="tel"
                  autoComplete="tel"
                  required
                  className={fieldClassName}
                />
              </label>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="h-12 rounded-[3px] bg-[#005ead] px-6 text-[14px] font-semibold uppercase tracking-wide text-white hover:bg-[#004b8b]"
                >
                  Download
                </Button>
              </div>

              <p className="pt-2 text-sm italic text-slate-400">
                Your information will only be used to process this datasheet
                request for {productTitle}.
              </p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}