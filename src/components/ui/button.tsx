import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9792b]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf6ed] disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
  {
    variants: {
      variant: {
        default:
          "bg-[#2a241d] text-[#fffaf1] shadow-sm shadow-[#2a241d]/10 hover:bg-[#3a3027] dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
        secondary:
          "border border-[#e4d8c8] bg-[#fffaf1] text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.04] hover:bg-[#f5eadb] dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800",
        outline:
          "border border-[#d8c7b2] bg-[#fffaf1]/82 text-[#2a241d] shadow-sm shadow-[#2a241d]/[0.03] hover:border-[#c9a47f] hover:bg-[#f5eadb] dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900",
        ghost: "text-[#5f5348] hover:bg-[#f3e7d8] hover:text-[#2a241d] dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
