import { cn } from "@/lib/utils/cn";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonVariants = "primary" | "black" | "white" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  iconStart,
  iconEnd,
  children,
  className,
  ...props
}) => {
  const variantStyles: Record<ButtonVariants, string> = {
    primary: "bg-primary hover:bg-[#cce03f] text-foreground",
    black: "bg-black hover:bg-opacity-30 text-white",
    white: "bg-white hover:bg-slate-300 text-foreground",
    outline:
      "bg-transparent hover:bg-foreground border-2 border-grayBackground text-white",
  };

  return (
    <button
      className={cn(
        `inline-flex items-center font-manropeRegular justify-center rounded-xl text-sm transition-colors focus:outline-none py-2.5 truncate px-5 font-bold ${
          variantStyles[variant!]
        } `,
        className
      )}
      {...props}
    >
      {iconStart && <span className="mr-2">{iconStart}</span>}
      {children}
      {iconEnd && <span className="ml-2">{iconEnd}</span>}
    </button>
  );
};

export default Button;
