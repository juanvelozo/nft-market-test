import Image from "next/image";
import Text from "../common/Text/Text";

export const Chip = ({ img, label }: IChip): JSX.Element => {
  return (
    <div className="flex items-center justify-start gap-4 w-fit bg-[#FFFFFF1A] p-2 rounded-full">
      {img && (
        <Image
          alt="cardimg"
          width={50}
          height={50}
          src={img!}
          className="rounded-full"
        />
      )}
      <Text className="truncate">{label}</Text>
    </div>
  );
};
interface IChip {
  label?: string;
  img?: string;
}
