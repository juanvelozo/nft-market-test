import Image from "next/image";
import heroBg from "@/assets/home/heroBg.png";
import Button from "@/components/common/Button/Button";
import { ArrowUpRight } from "lucide-react";
import { Carousel } from "../Carousel/Carousel";

export const HeroHome = (): JSX.Element => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-start gap-[50px] w-[634px] text-center absolute top-24">
        <p className="text-[54px] text-white">World of top works</p>
        <p className="text-grayText text-sm">
          Welcome to the world of rare digital art. Explore the best art from
          hand-picked digital artist out there and find the hidden gem.
        </p>
        <div className="flex items-center gap-4">
          <Button iconEnd={<ArrowUpRight />}>Discover More</Button>
          <Button iconEnd={<ArrowUpRight />} variant="white">
            All collections
          </Button>
        </div>
        <Carousel />
      </div>
      <Image
        src={heroBg}
        alt="bg"
        className="w-full"
        width={1920}
        height={1080}
      />
    </div>
  );
};
