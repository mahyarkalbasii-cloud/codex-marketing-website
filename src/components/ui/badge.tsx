import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium leading-5 transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-[var(--line)] bg-[var(--surface-2)] text-[var(--ink-600)] shadow-sm shadow-[#2a241d]/[0.03] backdrop-blur",
        secondary:
          "border-[var(--line)] bg-[var(--surface-1)] text-[var(--ink-600)]",
        outline:
          "border-[var(--line-strong)] bg-[var(--surface-2)] text-[var(--ink-600)] shadow-sm shadow-[#2a241d]/[0.03] backdrop-blur",
        signal:
          "border-[var(--clay-500)] bg-[var(--clay-500)] text-[#FFF7EF] shadow-sm shadow-[#C16B4E]/15",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
