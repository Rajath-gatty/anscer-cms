"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import type { FieldErrors } from "react-hook-form";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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
  inquiry_type: z.string().trim().min(1, "Inquiry type is required."),
  message: z.string().trim().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;
type ContactFormFieldName = keyof ContactFormValues;

const inquiryTypeItems = [
  { value: "product-inquiry", label: "Product Inquiry" },
  { value: "technical-support", label: "Technical Support" },
  { value: "service-maintenance", label: "Service & Maintenance" },
  { value: "deployment", label: "Deployment Discussion" },
];

const inputClass =
  "mt-2 h-[48px] w-full rounded-md border border-[#011f404d] bg-white px-4 text-[15px] text-[#011f40] shadow-none outline-none transition duration-150 focus-visible:border-[#005ead] focus-visible:ring-2 focus-visible:ring-[#005ead]/15 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20";

const selectClass =
  "relative mt-2 !h-[48px] w-full rounded-md border border-[#011f404d] bg-white px-4 py-0 pr-12 text-[15px] text-[#011f40] shadow-none outline-none transition duration-150 focus-visible:border-[#005ead] focus-visible:ring-2 focus-visible:ring-[#005ead]/15 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 [&_svg]:absolute [&_svg]:right-4 [&_svg]:size-5 [&_svg]:text-[#8392a3]";

const textareaClass =
  "mt-2 h-[100px] min-h-[100px] w-full resize-none rounded-md border border-[#011f404d] bg-white px-4 py-3 text-base text-[#011f40] shadow-none outline-none transition focus-visible:border-[#005ead] focus-visible:ring-2 focus-visible:ring-[#005ead]/15 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20";

const labelClass =
  "text-[14px] font-medium uppercase tracking-[0.08em] text-[#011f40]";

function getFieldError(
  errors: FieldErrors<ContactFormValues>,
  name: ContactFormFieldName
) {
  const message = errors[name]?.message;

  return message ? [{ message }] : undefined;
}

function buildMailtoHref(values: ContactFormValues) {
  const body = [
    `First Name: ${values.first_name}`,
    `Last Name: ${values.last_name}`,
    `Company: ${values.company}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "-"}`,
    `Inquiry Type: ${values.inquiry_type}`,
    `Message: ${values.message || "-"}`,
  ].join("\n");

  return `mailto:sales@anscer.com?subject=${encodeURIComponent(
    "ANSCER website contact inquiry"
  )}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      company: "",
      email: "",
      phone: "",
      inquiry_type: "",
      message: "",
    },
  });

  const onSubmit = useCallback((values: ContactFormValues) => {
    window.location.assign(buildMailtoHref(values));
  }, []);

  useEffect(() => {
    const form = formRef.current;
    const submitHandler = handleSubmit(onSubmit);

    if (!form) {
      return undefined;
    }

    function handleNativeSubmit(event: SubmitEvent) {
      event.preventDefault();
      void submitHandler();
    }

    form.dataset.hydrated = "true";
    form.addEventListener("submit", handleNativeSubmit);

    return () => {
      form.removeEventListener("submit", handleNativeSubmit);
    };
  }, [handleSubmit, onSubmit]);

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="contact-form-panel flex flex-col gap-6"
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
        data-invalid={errors.inquiry_type ? true : undefined}
      >
        <FieldLabel htmlFor="inquiry_type" className={labelClass}>
          INQUIRY TYPE*
        </FieldLabel>
        <Controller
          control={control}
          name="inquiry_type"
          render={({ field }) => (
            <Select
              items={inquiryTypeItems}
              name={field.name}
              value={field.value || null}
              onValueChange={(value) => field.onChange(value ?? "")}
            >
              <SelectTrigger
                id="inquiry_type"
                aria-invalid={!!errors.inquiry_type}
                className={selectClass}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="start">
                <SelectGroup>
                  {inquiryTypeItems.map((item) => (
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
          errors={getFieldError(errors, "inquiry_type")}
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

      <div className="pt-1 md:pt-0">
        <div className="flex h-[76px] w-[304px] max-w-full items-center justify-between rounded-[3px] border border-[#d5d5d5] bg-[#f9f9f9] px-4 shadow-[0_1px_3px_rgba(0,0,0,.12)]">
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
      </div>

      <div className="pt-1 md:pt-0">
        <Button
          type="submit"
          className="inline-flex h-11 items-center gap-4 rounded-[3px] bg-[#005ead] px-6 text-[12px] font-bold uppercase tracking-wide text-white transition hover:bg-[#004f91]"
        >
          Submit <ArrowRight aria-hidden="true" data-icon="inline-end" />
        </Button>
      </div>
    </form>
  );
}
