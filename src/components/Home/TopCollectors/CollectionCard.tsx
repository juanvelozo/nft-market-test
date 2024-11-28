import Text from "@/components/common/Text/Text";
import { Archive, Heart } from "lucide-react";
import Image from "next/image";

export const CollectionCard = ({
  creator,
  img,
  likes,
  title,
}: ICollectionCard): JSX.Element => {
  return (
    <div
      className={`bg-grayBackground min-w-[350px] min-h-[430px] rounded-3xl flex flex-col items-center justify-between p-4`}
    >
      <div className="relative grid grid-cols-2 grid-rows-2 gap-3">
        {img?.slice(1).map((el, i) => (
          <Image
            key={i}
            alt="asd"
            src={el}
            width={50}
            height={50}
            className={`w-[162px] h-[162px] aspect-square ${
              RoundedValueSelector[i + 1]
            }`}
          />
        ))}
        <Image
          alt="asd"
          src={img?.shift() || ""}
          width={50}
          height={50}
          className="absolute w-40 h-40 border-8 border-grayBackground top-0 bottom-0 m-auto left-0 right-0 rounded-full"
        />
      </div>
      <div className="flex w-full items-center justify-between py-3">
        <div>
          <Text size={18} heavy>
            {title}
          </Text>
          <Text>@{creator?.name}</Text>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="bg-[#FFFFFF10] p-2 rounded-full">
              <Archive size={12} />
            </div>
            <Text>{img?.length} items</Text>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="bg-[#FFFFFF10] p-2 rounded-full">
              <Heart size={12} />
            </div>
            <Text>{likes} likes</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

type RoundedValueType = {
  [x in number]: string;
};

const RoundedValueSelector: RoundedValueType = {
  "1": "rounded-ss-2xl",
  "2": "rounded-se-2xl",
  "3": "rounded-es-2xl",
  "4": "rounded-ee-2xl",
};

export interface ICollectionCard {
  img?: string[];
  title?: string;
  creator?: {
    name?: string;
  };
  likes?: number;
}
