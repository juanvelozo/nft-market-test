import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

export const ContainerBox = ({
  className,
  children,
}: IContainerBox): JSX.Element => {
  return (
    <div className={cn("mx-auto my-10 w-[80vw]", className)}>{children}</div>
  );
};
interface IContainerBox {
  className?: string;
  children: ReactNode;
}
