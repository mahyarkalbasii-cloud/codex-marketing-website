"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getSiteContent, localizeHref, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function PricingTabs({ locale = "fa" }: { locale?: Locale }) {
  const { karajAddon, pricingGroups } = getSiteContent(locale);
  const [active, setActive] = useState(pricingGroups[0].id);
  const group = pricingGroups.find((item) => item.id === active) ?? pricingGroups[0];
  const copy = {
    featured: "پیشنهاد جدی‌تر",
    demo: "درخواست دمو و انتخاب پلن",
    addon: "افزودنی جغرافیایی",
  };

  return (
    <div className="space-y-6">
      <div className="inline-flex rounded-lg border border-border bg-muted p-1">
        {pricingGroups.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            className={cn(
              "rounded-md px-4 py-2 text-sm font-semibold transition",
              active === item.id
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
        {group.description}
      </p>

      <div className="grid gap-5 lg:grid-cols-2">
        {group.plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "relative overflow-hidden p-6",
              plan.featured &&
                "border-zinc-950 bg-zinc-950 text-white shadow-xl shadow-zinc-950/15 dark:border-[#CC785C]/35 dark:bg-zinc-900 dark:text-white",
            )}
          >
            {plan.featured ? (
              <Badge variant="signal" className="absolute left-5 top-5">
                {copy.featured}
              </Badge>
            ) : null}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {plan.subtitle}
              </p>
            </div>
            <div className="mt-6 divide-y divide-border rounded-lg border border-border">
              {plan.prices.map(([duration, price]) => (
                <div
                  key={duration}
                  className="flex items-center justify-between gap-4 px-4 py-3"
                >
                  <span className="text-sm text-muted-foreground">{duration}</span>
                  <span className="font-mono text-sm font-bold">{price}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-zinc-500" />
              {plan.extra}
            </div>
            <Link
              href={localizeHref("/#demo", locale)}
              className={cn(
                buttonVariants({ variant: plan.featured ? "default" : "outline" }),
                "mt-6 w-full",
              )}
            >
              {copy.demo}
            </Link>
          </Card>
        ))}
      </div>

      <Card className="grid gap-5 p-6 md:grid-cols-[1fr_1.4fr] md:items-center">
        <div>
          <Badge variant="outline">{copy.addon}</Badge>
          <h3 className="mt-3 text-xl font-bold">{karajAddon.title}</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            {karajAddon.description}
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {karajAddon.prices.map(([duration, price]) => (
            <div key={duration} className="rounded-md border border-border p-4">
              <div className="text-sm text-muted-foreground">{duration}</div>
              <div className="mt-2 font-mono text-sm font-bold">{price}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
