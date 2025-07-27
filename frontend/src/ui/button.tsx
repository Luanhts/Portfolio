import * as React from "react";
import { clsx as cn } from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2";

    const variants = {
      default:
        "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500",
      outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
      ghost: "text-gray-600 hover:bg-gray-100",
    };

    return (
      <button
        className={cn(baseClasses, variants[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
