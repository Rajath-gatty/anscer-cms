"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import type { FieldErrors } from "react-hook-form";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { ArrowButton } from "../components/home/SectionPrimitives";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
  first_name: z.string().trim().min(1, "First name is required."),
  last_name: z.string().trim().min(1, "Last name is required."),
  company: z.string().trim().min(1, "Company name is required."),
  email: z
    .string()
    .trim()
    .min(1, "Email address is required.")
    .email("Enter a valid email address."),
  phone: z.string().trim().optional(),
  region: z.string().trim().min(1, "Region is required."),
  message: z.string().trim().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;
type ContactFormFieldName = keyof ContactFormValues;

const regionItems = [
  { value: "NAM", label: "NAM" },
  { value: "APAC", label: "APAC" },
  { value: "EU", label: "EU" },
];

const inputClass =
  "mt-2 h-[48px] w-full rounded-md border border-[#011f404d] bg-white px-4 text-[15px] text-[#011f40] shadow-none outline-none transition duration-150 focus-visible:border-[#005ead] focus-visible:ring-2 focus-visible:ring-[#005ead]/15 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20";

const selectClass =
  "relative mt-2 !h-[48px] w-full rounded-md border border-[#011f404d] bg-white px-4 py-0 pr-12 text-[15px] text-[#011f40] shadow-none outline-none transition duration-150 focus-visible:border-[#005ead] focus-visible:ring-2 focus-visible:ring-[#005ead]/15 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 [&_svg]:absolute [&_svg]:right-4 [&_svg]:size-5 [&_svg]:text-[#8392a3]";

const textareaClass =
  "mt-2 h-[100px] min-h-[100px] w-full resize-none rounded-md border border-[#011f404d] bg-white px-4 py-3 text-base text-[#011f40] shadow-none outline-none transition focus-visible:border-[#005ead] focus-visible:ring-2 focus-visible:ring-[#005ead]/15 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20";

const labelClass =
  "text-[14px] font-medium uppercase tracking-[0.08em] text-[#011f40]";

const zohoHiddenFields = {
  xnQsjsdp: "75f788ee9231443042f34541a6ff1b22fa14f081a9bfaea53905f00212778bbd",
  xmIwtLD:
    "e62703cdfe64d795e0c7991b92db8d5e348e9fc219eb21caddbaeaca6563601dc10c99868b1fc0f7b68d9a6beb6ea3a9",
  actionType: "TGVhZHM=",
  returnURL: "",
  zc_gad: "",
} as const;

const zohoEndpoint = "https://crm.zoho.com/crm/WebToLeadForm";
const zohoLeadSource = "ContactForm_website";

function getFieldError(
  errors: FieldErrors<ContactFormValues>,
  name: ContactFormFieldName
) {
  const message = errors[name]?.message;

  return message ? [{ message }] : undefined;
}

function buildZohoDescription(values: ContactFormValues) {
  return [
    `Region: ${values.region}`,
    `Phone: ${values.phone || "-"}`,
    `Message: ${values.message || "-"}`,
  ].join("\n");
}

export function ContactForm() {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [submitMessage, setSubmitMessage] = useState("");
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      company: "",
      email: "",
      phone: "",
      region: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitState("idle");
    setSubmitMessage("");

    try {
      const zohoFormData = new FormData();

      zohoFormData.append("First Name", values.first_name);
      zohoFormData.append("Last Name", values.last_name);
      zohoFormData.append("Email", values.email);
      zohoFormData.append("Phone", values.phone ?? "");
      zohoFormData.append("Company", values.company);
      zohoFormData.append("Description", values.message || "");
      zohoFormData.append("LEADCF9", values.region);
      zohoFormData.append("Lead Source", zohoLeadSource);

      for (const [key, value] of Object.entries(zohoHiddenFields)) {
        zohoFormData.append(key, value);
      }

      const response = await fetch(zohoEndpoint, {
        method: "POST",
        body: zohoFormData,
        cache: "no-cache",
      });

      if (!response.ok) {
        throw new Error("Zoho submission failed.");
      }

      const contentType = response.headers.get("Content-Type") || "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : await response.text();

      if (typeof data === "object" && data !== null) {
        if (data.invalidCaptcha === "true") {
          throw new Error(data.actionvalue || "Captcha verification failed.");
        }
      }

      reset();
      setSubmitState("success");
      setSubmitMessage(
        "Thank you for reaching out. Your request has been sent to our team successfully."
      );
    } catch (error) {
      console.error("Zoho Submission Error:", error);
      setSubmitState("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "An error occurred while submitting. Please try again."
      );
    }
  }

  return (
    <div className="contact-form-panel flex flex-col gap-6">
      {submitState === "success" ? (
        <div className="rounded-[16px] border border-emerald-200 bg-emerald-50 px-5 py-6 text-emerald-950">
          <p className="text-[18px] font-bold leading-tight">
            Thank you for reaching out.
          </p>
          <p className="mt-2 text-[14px] leading-6 text-emerald-900/80">
            Your request has been received. Our team will get back to
            you shortly.
          </p>
        </div>
      ) : (
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
      <FieldGroup className="grid gap-6 md:grid-cols-2 md:gap-x-7">
        <Field
          className="gap-0"
          data-invalid={errors.first_name ? true : undefined}
        >
          <FieldLabel htmlFor="first_name" className={labelClass}>
            First Name *
          </FieldLabel>
          <Input
            id="first_name"
            aria-invalid={!!errors.first_name}
            className={inputClass}
            {...register("first_name")}
          />
          <FieldError
            className="mt-1 text-[12px]"
            errors={getFieldError(errors, "first_name")}
          />
        </Field>
        <Field
          className="gap-0"
          data-invalid={errors.last_name ? true : undefined}
        >
          <FieldLabel htmlFor="last_name" className={labelClass}>
            Last Name *
          </FieldLabel>
          <Input
            id="last_name"
            aria-invalid={!!errors.last_name}
            className={inputClass}
            {...register("last_name")}
          />
          <FieldError
            className="mt-1 text-[12px]"
            errors={getFieldError(errors, "last_name")}
          />
        </Field>
      </FieldGroup>

      <Field
        className="gap-0"
        data-invalid={errors.company ? true : undefined}
      >
        <FieldLabel htmlFor="company" className={labelClass}>
          COMPANY NAME *
        </FieldLabel>
        <Input
          id="company"
          aria-invalid={!!errors.company}
          className={inputClass}
          {...register("company")}
        />
        <FieldError
          className="mt-1 text-[12px]"
          errors={getFieldError(errors, "company")}
        />
      </Field>

      <FieldGroup className="grid gap-6 md:grid-cols-2 md:gap-x-7">
        <Field
          className="gap-0"
          data-invalid={errors.email ? true : undefined}
        >
          <FieldLabel htmlFor="email" className={labelClass}>
            Email address *
          </FieldLabel>
          <Input
            id="email"
            type="email"
            aria-invalid={!!errors.email}
            className={inputClass}
            {...register("email")}
          />
          <FieldError
            className="mt-1 text-[12px]"
            errors={getFieldError(errors, "email")}
          />
        </Field>
        <Field
          className="gap-0"
          data-invalid={errors.phone ? true : undefined}
        >
          <FieldLabel htmlFor="phone" className={labelClass}>
            PHONE NUMBER
          </FieldLabel>
          <Input
            id="phone"
            aria-invalid={!!errors.phone}
            className={inputClass}
            {...register("phone")}
          />
          <FieldError
            className="mt-1 text-[12px]"
            errors={getFieldError(errors, "phone")}
          />
        </Field>
      </FieldGroup>

      <Field
        className="gap-0"
        data-invalid={errors.region ? true : undefined}
      >
        <FieldLabel htmlFor="region" className={labelClass}>
          REGION*
        </FieldLabel>
        <Controller
          control={control}
          name="region"
          render={({ field }) => (
            <Select
              items={regionItems}
              name={field.name}
              value={field.value || null}
              onValueChange={(value) => field.onChange(value ?? "")}
            >
              <SelectTrigger
                id="region"
                aria-invalid={!!errors.region}
                className={selectClass}
              >
                <SelectValue placeholder="Select a region" />
              </SelectTrigger>
              <SelectContent align="start">
                <SelectGroup>
                  {regionItems.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        <FieldError
          className="mt-1 text-[12px]"
          errors={getFieldError(errors, "region")}
        />
      </Field>

      <Field
        className="gap-0"
        data-invalid={errors.message ? true : undefined}
      >
        <FieldLabel htmlFor="message" className={labelClass}>
          MESSAGE
        </FieldLabel>
        <Textarea
          id="message"
          aria-invalid={!!errors.message}
          className={textareaClass}
          {...register("message")}
        />
        <FieldError
          className="mt-1 text-[12px]"
          errors={getFieldError(errors, "message")}
        />
      </Field>

      {/* <div className="pt-1 md:pt-0">
        <div className="flex h-19 w-76 max-w-full items-center justify-between rounded-[3px] border border-[#d5d5d5] bg-[#f9f9f9] px-4 shadow-[0_1px_3px_rgba(0,0,0,.12)]">
          <div className="flex items-center gap-3">
            <span className="block size-7 rounded-sm border-2 border-[#6b7785] bg-white" />
            <span className="text-sm font-semibold text-[#111]">
              I&apos;m not a robot
            </span>
          </div>
          <div className="text-right text-[9px] leading-tight text-[#777]">
            <div className="mx-auto mb-1 size-8 rounded-sm bg-[linear-gradient(135deg,#4385f4,#8ab4f8)]" />
            reCAPTCHA
            <br />
            Privacy - Terms
          </div>
        </div>
      </div> */}

      <div className="pt-1 md:pt-0">
        <ArrowButton
          asButton
          type="submit"
          disabled={isSubmitting}
          className="h-11 gap-4 rounded-[3px] px-6 text-[12px] font-bold disabled:cursor-not-allowed disabled:opacity-70"
        >
          Submit
        </ArrowButton>
      </div>

      {submitMessage ? (
        <p
          className={
            submitState === "error"
              ? "text-sm text-red-600"
              : "text-sm text-emerald-700"
          }
          role="status"
        >
          {submitMessage}
        </p>
      ) : null}
        </form>
      )}
    </div>
  );
}
