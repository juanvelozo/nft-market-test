import colors from "@/theme/colors";
import { AccordeonCard } from "../common/Accordeon/AccordeonCard";
import Text from "../common/Text/Text";
import { PresentationIcon } from "../icons/PresentationIcon";

export const DescriptionCard = ({}: IDescriptionCard): JSX.Element => {
  return (
    <AccordeonCard
      content={
        <Text color="grayText" font="Azeret Mono" size={14}>
          8,888 NFTs of beautiful, Asian women painstakingly-crafted where even
          the most intricate details are steeped in historical significance. We
          envision 8SIAN being a global, inclusive community{" "}
          <Text
            isSpan
            color="primary"
            className="cursor-pointer"
            font="Azeret Mono"
            size={14}
          >
            see more
          </Text>
        </Text>
      }
      title="Description"
      icon={<PresentationIcon color={colors.grayText} />}
    />
  );
};
interface IDescriptionCard {}
