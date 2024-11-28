import Image from "next/image";
import heroBg from "@/assets/home/heroBg.png";
import Button from "@/components/common/Button/Button";
import { ArrowUpRight } from "lucide-react";
import { CarouselNFT } from "../Carousel/CarouselNFT";
import { ContainerBox } from "@/components/common/ContainerBox/ContainerBox";
import Text from "@/components/common/Text/Text";

export const HeroHome = (): JSX.Element => {
  return (
    <ContainerBox className="relative w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-start gap-[50px] w-[634px] text-center absolute top-24">
        <Text size={54} heavy>
          World of top works
        </Text>
        <Text size={14} color="grayText">
          Welcome to the world of rare digital art. Explore the best art from
          hand-picked digital artist out there and find the hidden gem.
        </Text>
        <div className="flex items-center gap-4">
          <Button iconEnd={<ArrowUpRight />}>Discover More</Button>
          <Button iconEnd={<ArrowUpRight />} variant="white">
            All collections
          </Button>
        </div>
        <CarouselNFT />
      </div>
      <Image
        src={heroBg}
        alt="bg"
        className="w-full"
        width={1920}
        height={1080}
      />
    </ContainerBox>
  );
};
