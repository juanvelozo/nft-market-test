import { cn } from "@/lib/utils/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";

export const IconButton = ({
  icon,
  className,
  size = 15,
  ...props
}: IIconButton): JSX.Element => {
  return (
    <button
      className={cn(
        `bg-[#FFFFFF1A] min-w-4 min-h-4 !w-[${size}px] !h-[${size}px] p-2 rounded-full hover:bg-foreground`,
        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
};
interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  size?: number;
}
