import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium leading-5 transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-[#e4d8c8] bg-[#fffaf1]/78 text-[#5f5348] shadow-sm shadow-[#2a241d]/[0.03] backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white",
        secondary:
          "border-[#e4d8c8] bg-[#f5eadb] text-[#5f5348] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300",
        outline:
          "border-[#d8c7b2] bg-[#fffaf1]/72 text-[#5f5348] shadow-sm shadow-[#2a241d]/[0.03] backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white",
        signal:
          "border-[#d9a35a] bg-[#d99a35] text-[#2a241d] shadow-sm shadow-[#8a4f1b]/10",
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
