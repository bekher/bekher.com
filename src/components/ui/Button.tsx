import { cn } from "@/lib/utils";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900",
        size === "default" && "rounded-lg px-5 py-2.5 text-sm",
        size === "large" && "rounded-lg px-6 py-3 text-base",
        variant === "primary" &&
          "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
        variant === "secondary" &&
          "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:border-slate-500",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
