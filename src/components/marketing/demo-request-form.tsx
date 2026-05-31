"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { subscriptionPlanOptions } from "@/data/subscriptions";
import { getSiteContent, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type DemoFormState = {
  name: string;
  phone: string;
  company: string;
  supplier: string;
  plan: string;
};

const initialState: DemoFormState = {
  name: "",
  phone: "",
  company: "",
  supplier: "",
  plan: "",
};

function persistLocalRequest(request: DemoFormState) {
  if (typeof window === "undefined") {
    return;
  }

  const key = "persiansaze-demo-requests";
  const current = window.localStorage.getItem(key);
  let parsed: unknown[] = [];

  if (current) {
    try {
      const stored = JSON.parse(current);
      parsed = Array.isArray(stored) ? stored : [];
    } catch {
      parsed = [];
    }
  }

  window.localStorage.setItem(
    key,
    JSON.stringify([
      ...parsed,
      {
        ...request,
        createdAt: new Date().toISOString(),
      },
    ]),
  );
}

export function DemoRequestForm({ locale = "fa" }: { locale?: Locale }) {
  const copy = {
    name: "نام",
    phone: "تلفن",
    company: "نام شرکت",
    supplier: "حوزه فعالیت",
    choose: "انتخاب کنید",
    submit: "ثبت درخواست دمو",
    success:
      "درخواست دمو ثبت شد. تیم فروش برای هماهنگی زمان دمو پیام تأیید ارسال می‌کند.",
    error: "لطفاً هر چهار فیلد فرم را کامل کنید.",
  };
  const { suppliers } = getSiteContent(locale);
  const supplierOptions = useMemo(
    () => suppliers.map((supplier) => supplier.name),
    [suppliers],
  );
  const planSlugs = useMemo(
    () => new Set(subscriptionPlanOptions.map((plan) => plan.slug)),
    [],
  );
  const [form, setForm] = useState<DemoFormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const plan = new URLSearchParams(window.location.search).get("plan");

    if (!plan || !planSlugs.has(plan as (typeof subscriptionPlanOptions)[number]["slug"])) {
      return;
    }

    setForm((current) =>
      current.plan === plan ? current : { ...current, plan },
    );
  }, [planSlugs]);

  const updateField = (field: keyof DemoFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name || !form.phone || !form.company || !form.supplier) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const endpoint = process.env.NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT;

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          throw new Error("Demo request failed");
        }
      } else {
        persistLocalRequest(form);
        await new Promise((resolve) => window.setTimeout(resolve, 350));
      }

      setStatus("success");
      setForm((current) => ({ ...initialState, plan: current.plan }));
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="mt-6 grid min-w-0 gap-3" onSubmit={handleSubmit}>
      <input type="hidden" name="plan" value={form.plan} />
      <div className="grid min-w-0 gap-3 sm:grid-cols-2">
        <label className="grid min-w-0 gap-1.5 text-sm font-bold text-[#2a241d]">
          {copy.name}
          <input
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            autoComplete="name"
            className="h-11 w-full min-w-0 rounded-2xl border border-[#e4d8c8] bg-[#fffaf1] px-3 text-sm font-medium outline-none transition focus:border-[#CC785C] focus:ring-2 focus:ring-[#CC785C]/35"
          />
        </label>
        <label className="grid min-w-0 gap-1.5 text-sm font-bold text-[#2a241d]">
          {copy.phone}
          <input
            name="phone"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            autoComplete="tel"
            inputMode="tel"
            dir="ltr"
            className="h-11 w-full min-w-0 rounded-2xl border border-[#e4d8c8] bg-[#fffaf1] px-3 text-left text-sm font-medium outline-none transition focus:border-[#CC785C] focus:ring-2 focus:ring-[#CC785C]/35"
          />
        </label>
      </div>

      <label className="grid min-w-0 gap-1.5 text-sm font-bold text-[#2a241d]">
        {copy.company}
        <input
          name="company"
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
          autoComplete="organization"
          className="h-11 w-full min-w-0 rounded-2xl border border-[#e4d8c8] bg-[#fffaf1] px-3 text-sm font-medium outline-none transition focus:border-[#CC785C] focus:ring-2 focus:ring-[#CC785C]/35"
        />
      </label>

      <label className="grid min-w-0 gap-1.5 text-sm font-bold text-[#2a241d]">
        {copy.supplier}
        <select
          name="supplier"
          value={form.supplier}
          onChange={(event) => updateField("supplier", event.target.value)}
          className="h-11 w-full min-w-0 rounded-2xl border border-[#e4d8c8] bg-[#fffaf1] px-3 text-sm font-medium outline-none transition focus:border-[#CC785C] focus:ring-2 focus:ring-[#CC785C]/35"
        >
          <option value="">{copy.choose}</option>
          {supplierOptions.map((supplier) => (
            <option key={supplier} value={supplier}>
              {supplier}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(buttonVariants(), "mt-1 w-full max-w-full whitespace-normal text-center")}
      >
        {status === "submitting" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : status === "success" ? (
          <CheckCircle2 className="h-4 w-4" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {copy.submit}
      </button>

      {status === "success" ? (
        <p className="rounded-2xl border border-[#CC785C]/35 bg-[rgba(204,120,92,0.12)] px-3 py-2 text-xs font-semibold leading-6 text-[#5a3515]">
          {copy.success}
        </p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold leading-6 text-red-700">
          {copy.error}
        </p>
      ) : null}
    </form>
  );
}
