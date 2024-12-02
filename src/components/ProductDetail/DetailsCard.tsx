import colors from "@/theme/colors";
import { AccordeonCard } from "../common/Accordeon/AccordeonCard";
import { PresentationIcon } from "../icons/PresentationIcon";
import Text from "../common/Text/Text";

export const DetailsCard = ({}: IDetailsCard): JSX.Element => {
  return (
    <AccordeonCard
      content={
        <div className="w-full flex flex-col gap-3 p-2">
          <div className="flex items-center justify-between">
            <Text size={14}>Contract Address</Text>
            <Text size={14} color="primary">
              {tokenData.contractAddress}
            </Text>
          </div>
          <div className="flex items-center justify-between">
            <Text size={14}>Token ID</Text>
            <Text size={14} color="primary">
              {tokenData.tokenId}
            </Text>
          </div>
          <div className="flex items-center justify-between">
            <Text size={14}>Token Standard</Text>
            <Text size={14}>{tokenData.tokenStandard}</Text>
          </div>
          <div className="flex items-center justify-between">
            <Text size={14}>Chain</Text>
            <Text size={14}>{tokenData.chain}</Text>
          </div>
          <div className="flex items-center justify-between">
            <Text size={14}>Last updated</Text>
            <Text size={14}>{tokenData.lastUpdated}</Text>
          </div>
          <div className="flex items-center justify-between">
            <Text size={14}>Creators earnings</Text>
            <Text size={14}>{tokenData.creatorEarnings}</Text>
          </div>
        </div>
      }
      title="Details"
      icon={<PresentationIcon color={colors.grayText} />}
    />
  );
};
interface IDetailsCard {}

const tokenData = {
  contractAddress: "0x1984...c38f",
  tokenId: "0270",
  tokenStandard: "ERC-721",
  chain: "Ethereum",
  lastUpdated: "8 months ago",
  creatorEarnings: "8%",
};
