import { cn } from "@/lib/utils/cn";
import colors, { ColorPalette } from "@/theme/colors";
import React, { FC, HTMLAttributes, ReactNode } from "react";

type TextSize = 12 | 14 | 16 | 18 | 24 | 32 | 54;
type TextColor = keyof ColorPalette;

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: TextSize;
  font?: "Azeret Mono" | "Manrope";
  color?: TextColor;
  children?: ReactNode;
}
const sizeClasses: Record<TextSize, string> = {
  "12": "text-xs",
  "14": "text-sm",
  "16": "text-base",
  "18": "text-lg",
  "24": "text-2xl",
  "32": "text-[32px]",
  "54": "text-[54px]",
};
const Text: FC<TextProps> = ({
  size = 16,
  font = "Manrope",
  color = "white",
  children,
  className,
  ...props
}) => {
  const fontClasses = font === "Azeret Mono" ? "font-mono" : "font-sans";

  return (
    <p
      className={cn(`${sizeClasses[size]} ${fontClasses} text-`, className)}
      style={{ color: colors[color] }}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
