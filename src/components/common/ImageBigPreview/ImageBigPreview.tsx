"use client";
import Image from "next/image";
import { Heart } from "lucide-react";
import colors from "@/theme/colors";
import { useState } from "react";
import { CircularProgress } from "@nextui-org/react";
import { IconButton } from "../IconButton/IconButton";
import Text from "../Text/Text";
import { EthIcon } from "@/components/icons/ETHIcon";
import { Chip } from "../Chip/Chip";
import { CountdownChip } from "../CountdownChip/CountdownChip";

export const ImageBigPreview = ({
  url = "",
}: IImageBigPreview): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  if (loading) {
    return (
      <div className="relative w-[540px] h-[900px] bg-grayBackground rounded-xl flex items-center justify-center">
        <CircularProgress aria-label="Loading..." />
      </div>
    );
  }
  return (
    <div className="relative w-[540px]">
      <Image
        alt="img-preview"
        src={url}
        width={540}
        height={903}
        onLoadStart={() => setLoading(true)}
        onLoadingComplete={() => setLoading(false)}
        className="rounded-xl"
      />
      <div className="flex absolute top-5 right-5 gap-3">
        <IconButton icon={<EthIcon color={colors.grayText} />} size={20} />
        <IconButton
          icon={
            <div className="flex items-center gap-2 ">
              <Text color={"grayText"}>{10}</Text>
              <Heart size={14} />
            </div>
          }
        />
      </div>
      <div className="absolute bottom-5 left-56 right-56">
        <CountdownChip initialMilliseconds={7472000} />
      </div>
    </div>
  );
};
interface IImageBigPreview {
  url?: string;
}
