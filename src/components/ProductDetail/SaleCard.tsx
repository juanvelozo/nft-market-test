import { AccordeonCard } from "../common/Accordeon/AccordeonCard";
import { ArrowUpRight, Timer } from "lucide-react";
import Text from "../common/Text/Text";
import Button from "../common/Button/Button";

export const SaleCard = ({}: ISaleCard): JSX.Element => {
  return (
    <AccordeonCard
      content={
        <div>
          <Text color="grayText" font="Azeret Mono" size={12}>
            Current price
          </Text>
          <div className="flex items-center justify-between">
            <Text size={32} heavy>
              0,032 ETH{" "}
              <Text isSpan size={14} color="grayText">
                $58,11
              </Text>
            </Text>
            <Button iconEnd={<ArrowUpRight />}>Place a bid</Button>
          </div>
        </div>
      }
      title="Sale ends May 22 at 9:39"
      icon={<Timer size={19} />}
    />
  );
};
interface ISaleCard {}
