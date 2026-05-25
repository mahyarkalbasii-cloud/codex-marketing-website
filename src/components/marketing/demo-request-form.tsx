"use client";

import { useMemo, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { suppliers } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type DemoFormState = {
  name: string;
  phone: string;
  company: string;
  supplier: string;
};

const initialState: DemoFormState = {
  name: "",
  phone: "",
  company: "",
  supplier: "",
};

function persistLocalRequest(request: DemoFormState) {
  if (typeof window === "undefined") {
    return;
  }

  const key = "persiansaze-demo-requests";
  const current = window.localStorage.getItem(key);
  const parsed = current ? (JSON.parse(current) as unknown[]) : [];

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

export function DemoRequestForm() {
  const supplierOptions = useMemo(
    () => suppliers.map((supplier) => supplier.name),
    [],
  );
  const [form, setForm] = useState<DemoFormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="mt-6 grid gap-3" onSubmit={handleSubmit}>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-bold text-[#2a241d] dark:text-zinc-100">
          نام
          <input
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            autoComplete="name"
            className="h-11 rounded-2xl border border-[#e4d8c8] bg-[#fffaf1] px-3 text-sm font-medium outline-none transition focus:border-[#c9792b] focus:ring-2 focus:ring-[#c9792b]/20 dark:border-zinc-800 dark:bg-zinc-900"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-bold text-[#2a241d] dark:text-zinc-100">
          تلفن
          <input
            name="phone"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            autoComplete="tel"
            inputMode="tel"
            dir="ltr"
            className="h-11 rounded-2xl border border-[#e4d8c8] bg-[#fffaf1] px-3 text-left text-sm font-medium outline-none transition focus:border-[#c9792b] focus:ring-2 focus:ring-[#c9792b]/20 dark:border-zinc-800 dark:bg-zinc-900"
          />
        </label>
      </div>

      <label className="grid gap-1.5 text-sm font-bold text-[#2a241d] dark:text-zinc-100">
        نام شرکت
        <input
          name="company"
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
          autoComplete="organization"
          className="h-11 rounded-2xl border border-[#e4d8c8] bg-[#fffaf1] px-3 text-sm font-medium outline-none transition focus:border-[#c9792b] focus:ring-2 focus:ring-[#c9792b]/20 dark:border-zinc-800 dark:bg-zinc-900"
        />
      </label>

      <label className="grid gap-1.5 text-sm font-bold text-[#2a241d] dark:text-zinc-100">
        حوزه فعالیت
        <select
          name="supplier"
          value={form.supplier}
          onChange={(event) => updateField("supplier", event.target.value)}
          className="h-11 rounded-2xl border border-[#e4d8c8] bg-[#fffaf1] px-3 text-sm font-medium outline-none transition focus:border-[#c9792b] focus:ring-2 focus:ring-[#c9792b]/20 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <option value="">انتخاب کنید</option>
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
        className={cn(buttonVariants(), "mt-1 w-full")}
      >
        {status === "submitting" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : status === "success" ? (
          <CheckCircle2 className="h-4 w-4" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        ثبت درخواست دمو
      </button>

      {status === "success" ? (
        <p className="rounded-2xl border border-[#c9792b]/25 bg-[#f6d6a8]/35 px-3 py-2 text-xs font-semibold leading-6 text-[#5a3515]">
          درخواست دمو ثبت شد. تیم فروش برای هماهنگی زمان دمو پیام تأیید ارسال می‌کند.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold leading-6 text-red-700">
          لطفاً هر چهار فیلد فرم را کامل کنید.
        </p>
      ) : null}
    </form>
  );
}
