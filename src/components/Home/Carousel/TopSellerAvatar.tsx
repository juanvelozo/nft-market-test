import Text from "@/components/common/Text/Text";
import { EthIcon } from "@/components/icons/ETHIcon";
import colors from "@/theme/colors";
import Image from "next/image";

export const TopSellerAvatar = ({
  data,
  isTopThree,
  index,
}: ITopSellerAvatar): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative">
        <Image
          alt={`profile-photo${data.name}`}
          src={data.profilePhoto}
          width={100}
          height={100}
          className="rounded-full"
        />
        <div
          className={`${
            isTopThree ? "bg-primary" : "bg-white"
          } absolute top-0 right-0 w-6 h-6 rounded-full flex items-center justify-center`}
        >
          <Text color="black" size={14}>
            {index}
          </Text>
        </div>
      </div>
      <Text>{data.name}</Text>
      <div className="flex items-center gap-2">
        <EthIcon color={colors.grayText} />
        <Text color="grayText">{data.priceBid}</Text>
      </div>
    </div>
  );
};
interface ITopSellerAvatar {
  data: TopSeller;
  isTopThree?: boolean;
  index?: number;
}

export interface TopSeller {
  name: string;
  priceBid: number;
  profilePhoto: string;
}
