import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--clay-400)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-0)] disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--clay-500)] text-[#FFF7EF] shadow-sm shadow-[#C16B4E]/15 hover:bg-[var(--clay-600)]",
        strong:
          "bg-[var(--surface-ink)] text-[var(--surface-2)] shadow-sm shadow-[#171512]/15 hover:bg-[#0f0d0b]",
        secondary:
          "border border-[var(--line)] bg-[var(--surface-2)] text-[var(--ink-900)] shadow-sm shadow-[#2a241d]/[0.04] hover:bg-[var(--surface-1)]",
        outline:
          "border border-[var(--line-strong)] bg-[var(--surface-2)] text-[var(--ink-900)] shadow-sm shadow-[#2a241d]/[0.03] hover:border-[var(--clay-400)] hover:bg-[var(--surface-1)]",
        ghost: "text-[var(--ink-600)] hover:bg-[var(--surface-1)] hover:text-[var(--ink-900)]",
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
