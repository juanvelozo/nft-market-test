import Image from "next/image";
import Text from "../Text/Text";

export const Card = ({
  img = "https://swiperjs.com/demos/images/nature-2.jpg",
  creator,
  priceBid,
  title,
}: ICard): JSX.Element => {
  //constants

  //states

  //hooks

  //functions

  //effects

  //render

  return (
    <div className="bg-grayBackground min-w-[350px] min-h-[430px] rounded-3xl flex flex-col items-center p-4 gap-3">
      {img && (
        <Image
          alt="cardimg"
          width={326}
          height={338}
          src={img!}
          className="rounded-xl"
        />
      )}
      <div className="w-full flex flex-col gap-4">
        <Text size={18} heavy>
          {title}
        </Text>
        {creator && (
          <div className="flex gap-3">
            <Image
              className="rounded-full"
              alt="creator-img"
              src={creator?.profilePhoto}
              width={38}
              height={38}
            />
            <div>
              <Text color="grayText" size={12}>
                Created by:
              </Text>
              <Text size={12}>{creator?.name}</Text>
            </div>
          </div>
        )}
        <div className="w-full h-[1px] bg-grayText" />
        <div className="flex items-center justify-between">
          <Text size={12} color="grayText">
            Current Bid:
          </Text>
          <Text size={12}>{priceBid}</Text>
        </div>
      </div>
    </div>
  );
};
export interface ICard {
  title?: string;
  img?: string;
  creator?: {
    name?: string;
    profilePhoto: string;
  };
  priceBid?: number;
}
