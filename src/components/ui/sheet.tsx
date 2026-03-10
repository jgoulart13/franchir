import * as React from "react";
import { cn } from "@/lib/utils";

type SheetContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SheetContext = React.createContext<SheetContextValue | null>(null);

export interface SheetProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Sheet({ children, open, onOpenChange }: SheetProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const isControlled = open !== undefined;
  const valueOpen = isControlled ? open : internalOpen;

  const setOpen = (next: boolean) => {
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  };

  return (
    <SheetContext.Provider value={{ open: valueOpen, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

export interface SheetTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function SheetTrigger({ children, ...props }: SheetTriggerProps) {
  const ctx = React.useContext(SheetContext);
  if (!ctx) return <button {...props}>{children}</button>;

  return (
    <button
      type="button"
      onClick={() => ctx.setOpen(true)}
      {...props}
    >
      {children}
    </button>
  );
}

export interface SheetContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function SheetContent({ className, ...props }: SheetContentProps) {
  const ctx = React.useContext(SheetContext);
  if (!ctx || !ctx.open) return null;

  return (
    <div className="fixed inset-0 z-40 flex justify-end bg-black/40">
      <div
        className={cn(
          "h-full w-full max-w-md border-l border-line-subtle bg-bg-surface p-6 shadow-md",
          className
        )}
        {...props}
      />
    </div>
  );
}

export function SheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4 space-y-1.5", className)} {...props} />
  );
}

export function SheetTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold leading-none tracking-tight text-text-primary",
        className
      )}
      {...props}
    />
  );
}

export function SheetDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-text-secondary", className)}
      {...props}
    />
  );
}

export function SheetFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-4 flex items-center justify-end gap-3", className)}
      {...props}
    />
  );
}

