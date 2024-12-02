import Button from "@/components/common/Button/Button";
import { CountdownChip } from "@/components/common/CountdownChip/CountdownChip";
import Text from "@/components/common/Text/Text";
import { EthIcon } from "@/components/icons/ETHIcon";
import { Heart } from "lucide-react";
import Image from "next/image";

export const CarouselCard = ({
  img = "https://swiperjs.com/demos/images/nature-2.jpg",
  isActive,
}: ICard): JSX.Element => {
  return (
    <div
      className={` ${
        isActive ? "bg-grayBackground" : "bg-[#2E2E2E]"
      } w-[350px] h-[430px] rounded-3xl flex flex-col items-center p-4`}
    >
      {isActive && (
        <div className="flex flex-col items-center justify-between h-full">
          <div className="relative">
            <div className="absolute top-3 right-3 flex items-center gap-1">
              <CountdownChip initialMilliseconds={7472000} />
              <div className="bg-[#5e5d5d] p-[6px] rounded-full">
                <Heart color="white" size={16} />
              </div>
            </div>
            <Image
              alt="cardimg"
              width={326}
              height={358}
              src={img!}
              className="rounded-xl"
            />
            <Button
              className="absolute bottom-3 left-0 right-0 w-1/2 mx-auto"
              variant="white"
            >
              Place bid
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <Text size={24}>Dayco serpentine belt</Text>
            <div className="flex items-center gap-2 justify-center">
              <EthIcon />
              <Text>0,34</Text>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
interface ICard {
  img?: string;
  isActive?: boolean;
}
