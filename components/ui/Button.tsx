import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-green-600 text-white hover:bg-green-700",
  secondary: "bg-white text-green-900 hover:bg-gray-100",
  outline: "border-2 border-gray-200 text-gray-700 hover:border-green-600 hover:text-green-700",
  ghost: "text-gray-700 hover:bg-gray-100",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60";

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variantClasses[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  href,
  variant = "primary",
  className,
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(base, variantClasses[variant], className)}>
      {children}
    </Link>
  );
}
