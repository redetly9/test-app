import React, { forwardRef } from "react";
import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "gradient";
  size?: "sm" | "md" | "lg";
}

const baseStyles =
  "font-space-grotesk inline-flex items-center justify-center rounded-full text-center text-xl leading-[26px] transition-colors cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

const sizeStyles = {
  sm: "px-6 py-3 text-base",
  md: "h-[70px] px-8 py-5 text-xl",
  lg: "h-[70px] px-10 py-6 text-xl",
};

const variantStyles = {
  solid: "bg-black text-white hover:bg-white/10",
  outline: "border-2 border-white bg-black text-white hover:bg-white/5",
  gradient: "gradient-primary p-[1px]",
};

const innerGradientSizeStyles = {
  sm: "px-6 py-3",
  md: "h-[70px] px-8 py-5",
  lg: "h-[70px] px-10 py-6",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "solid",
      size = "md",
      className,
      ...props
    },
    ref
  ) => {
    const isGradient = variant === "gradient";

    return (
      <button
        ref={ref}
        className={clsx(
          baseStyles,
          !isGradient && sizeStyles[size],
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {isGradient ? (
          <span
            className={clsx(
              "flex items-center justify-center rounded-full bg-black text-white",
              innerGradientSizeStyles[size]
            )}
          >
            {children}
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";