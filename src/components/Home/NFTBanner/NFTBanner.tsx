import Button from "@/components/common/Button/Button";
import { ContainerBox } from "@/components/common/ContainerBox/ContainerBox";
import Text from "@/components/common/Text/Text";
import { ArrowUpRight } from "lucide-react";
import BG from "@/assets/home/CTAbg.png";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
export const NFTBanner = ({
  className,
}: {
  className?: string;
}): JSX.Element => {
  return (
    <ContainerBox className={cn("w-[70vw]", className)}>
      <div className="mx-auto min-w-[1110px] h-[268px] bg-primary p-10 flex justify-between rounded-3xl overflow-hidden relative">
        <div className="w-1/3 flex flex-col gap-7">
          <Text color="black" size={32} heavy>
            Discover, create and sell your own NFT
          </Text>
          <div className="flex items-center justify-center gap-4">
            <Button
              iconEnd={<ArrowUpRight />}
              variant="black"
              className="!text-primary truncate"
            >
              Explore now
            </Button>
            <Button
              iconEnd={<ArrowUpRight />}
              variant="black"
              className="!text-primary truncate"
            >
              Create Your First NFT
            </Button>
          </div>
        </div>
        <Image
          alt="bg"
          src={BG}
          width={671}
          height={268}
          className="absolute top-0 right-0"
        />
      </div>
    </ContainerBox>
  );
};
