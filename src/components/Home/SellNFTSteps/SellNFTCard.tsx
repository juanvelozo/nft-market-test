import Text from "@/components/common/Text/Text";
import { ReactNode } from "react";

export const SellNFTCard = ({
  description,
  imageComponent,
  title,
  step,
}: ISellNFTCard): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center text-center w-[255px] gap-3">
      <div className="flex items-center justify-center bg-grayBackground rounded-3xl w-24 h-24 shadow-lg">
        {imageComponent}
      </div>
      <Text size={14} color="grayText">
        Step {step}
      </Text>
      <Text size={18}>{title}</Text>
      <Text size={14} color="grayText" font="Azeret Mono">
        {description}
      </Text>
    </div>
  );
};
interface ISellNFTCard {
  imageComponent?: ReactNode;
  title?: string;
  description?: string;
  step?: number;
}
