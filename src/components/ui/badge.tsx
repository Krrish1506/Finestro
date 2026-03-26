import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border-2 px-3 py-1 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 [&>svg]:pointer-events-none transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-transparent bg-blue-400 text-white",
        secondary: "border-transparent bg-slate-100 text-slate-700",
        destructive: "border-red-200 bg-red-50 text-red-700 font-medium",
        outline: "text-foreground border-border",
        success: "border-emerald-300 bg-emerald-100 text-emerald-800 font-medium",
        warning: "border-amber-300 bg-amber-100 text-amber-800 font-medium",
        info: "border-blue-300 bg-blue-100 text-blue-800 font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Badge = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }
>(({ className, variant, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "span";
  const showDot = variant === "success" || variant === "warning" || variant === "info";

  return (
    <Comp
      ref={ref}
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {showDot && (
        <span className={cn(
          "size-1.5 rounded-full",
          variant === "success" && "bg-emerald-500 animate-pulse-soft",
          variant === "warning" && "bg-amber-500 animate-pulse-soft",
          variant === "info" && "bg-blue-500 animate-pulse-soft"
        )} />
      )}
      {props.children}
    </Comp>
  );
});
Badge.displayName = "Badge";

export { Badge, badgeVariants };
