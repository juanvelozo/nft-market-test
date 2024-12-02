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
        `bg-[#FFFFFF1A] hover:bg-[#5e5d5d] min-w-4 min-h-4 !w-[${size}px] !h-[${size}px] px-[10px] py-[6px] rounded-full`,
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
