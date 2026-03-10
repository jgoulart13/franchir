import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLElement> & {
  variant?: "default" | "alt";
};

export function Section({ className, variant = "default", ...props }: Props) {
  return (
    <section
      className={cn(
        "py-16 sm:py-24",
        variant === "alt" ? "bg-bg-section" : "bg-transparent",
        className
      )}
      {...props}
    />
  );
}