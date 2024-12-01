import {
  BadgeCheckIcon,
  Ellipsis,
  EyeIcon,
  FacebookIcon,
  Flag,
  Heart,
  Link,
  RotateCcw,
  Share2,
  TwitterIcon,
} from "lucide-react";
import { IconOptions } from "../IconOption/IconOption";
import colors from "@/theme/colors";
import Text from "../common/Text/Text";
import { User } from "@nextui-org/user";
import { Chip } from "@nextui-org/chip";

export const ProductInfo = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-start items-start w-full gap-4 p-3">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3 justify-center">
          <Text color="primary">8SIAN Main Collection</Text>
          <BadgeCheckIcon color={colors.primary} />
        </div>
        <div className="flex items-center gap-3">
          <IconOptions
            placement="bottom-end"
            icon={<Share2 />}
            options={[
              { key: "copy", label: "Copy link", icon: <Link /> },
              {
                key: "share_fb",
                label: "Share on facebook",
                icon: <FacebookIcon />,
              },
              {
                key: "share_tw",
                label: "Share on twitter",
                icon: <TwitterIcon />,
              },
            ]}
          />
          <IconOptions
            placement="bottom-end"
            icon={<Ellipsis />}
            options={[
              {
                key: "refresh",
                label: "Refresh metadata",
                icon: <RotateCcw />,
              },
              {
                key: "report",
                label: "Report",
                icon: <Flag />,
              },
            ]}
          />
        </div>
      </div>
      <Text size={32} heavy>
        Themesflat #0270
      </Text>
      <User name="Owned by" description="Juan Velozo" />
      <div className="flex items-center gap-4">
        <Chip
          startContent={<EyeIcon color="#fff" />}
          color="default"
          radius="sm"
          size="lg"
          classNames={{ content: "text-white" }}
          variant="bordered"
        >
          208 view
        </Chip>
        <Chip
          startContent={<EyeIcon color="#fff" />}
          color="default"
          radius="sm"
          size="lg"
          classNames={{ content: "text-white" }}
          variant="bordered"
        >
          Top #2 trending
        </Chip>
        <Chip
          startContent={<Heart color="#fff" />}
          color="default"
          radius="sm"
          size="lg"
          classNames={{ content: "text-white" }}
          variant="bordered"
        >
          20 favorites
        </Chip>
      </div>
    </div>
  );
};
interface IProductInfo {}
