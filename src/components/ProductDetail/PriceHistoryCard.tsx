import colors from "@/theme/colors";
import { AccordeonCard } from "../common/Accordeon/AccordeonCard";
import { PresentationIcon } from "../icons/PresentationIcon";

export const PriceHistoryCard = (): JSX.Element => {
  return (
    <AccordeonCard
      content={
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio rem maxime repellendus molestias consequatur dolor odit facere iure eum expedita ex ullam, omnis necessitatibus assumenda quia id quod tempora vel!"
      }
      title="Price History"
      icon={<PresentationIcon color={colors.grayText} />}
    />
  );
};
