import { Card, ICard } from "@/components/common/Card/Card";
import { ContainerBox } from "@/components/common/ContainerBox/ContainerBox";
import { Select } from "@/components/common/Select/Select";
import Text from "@/components/common/Text/Text";
import { Archive, ArrowRight, Box, CircleDollarSign } from "lucide-react";

export const DiscoverItem = (): JSX.Element => {
  return (
    <ContainerBox className="flex flex-col gap-4">
      <div className="flex justify-between w-full items-center">
        <Text size={32} heavy>
          Discover item
        </Text>
        <div className="flex items-center justify-center gap-3">
          <Text>Discover more</Text>
          <div className="bg-[#5e5d5d] p-1 rounded-full">
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <Select
          options={[{ label: "option", value: "1" }]}
          icon={<Archive />}
          placeholder="Category"
        />
        <Select
          options={[{ label: "option", value: "1" }]}
          icon={<Box />}
          placeholder="Items"
        />
        <Select
          options={[{ label: "option", value: "1" }]}
          icon={<Box />}
          placeholder="Status"
        />
        <Select
          options={[{ label: "option", value: "1" }]}
          icon={<CircleDollarSign />}
          placeholder="Price range"
        />
        <Select
          options={[{ label: "option", value: "1" }]}
          icon={<CircleDollarSign />}
          placeholder="Sort by"
        />
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 justify-items-center">
        {Array.from([0, 1, 2, 3, 4, 5, 6, 7]).map((el) => (
          <Card
            img={baseObj.img}
            key={el}
            creator={baseObj.creator}
            priceBid={baseObj.priceBid}
            title={baseObj.title}
          />
        ))}
      </div>
    </ContainerBox>
  );
};

const baseObj: ICard = {
  title: "Dayco serpentine belt",
  img: "https://swiperjs.com/demos/images/nature-2.jpg",
  creator: {
    name: "Marvin McKinney",
    profilePhoto: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  priceBid: 0.39,
};
