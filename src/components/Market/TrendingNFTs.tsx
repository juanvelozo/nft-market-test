import { AlignLeft } from "lucide-react";
import { ButtonBox } from "../common/ButtonBox/ButtonBox";
import { Select } from "../common/Select/Select";
import Text from "../common/Text/Text";
import { Card, ICard } from "../common/Card/Card";

export const TrendingNFTs = (): JSX.Element => {
  return (
    <div>
      <div className="flex flex-col gap-4 w-full">
        <Text size={32} heavy>
          Trending NFTs
        </Text>
        <div className="flex items-center justify-between">
          <ButtonBox
            buttons={[
              { name: "Category", value: "category" },
              { name: "Items", value: "items" },
              { name: "Status", value: "status" },
              { name: "Price Range", value: "price" },
            ]}
          />
          <Select
            className="w-1/3"
            icon={<AlignLeft />}
            options={[{ label: "option1", value: "1" }]}
            placeholder="Sort by"
          />
        </div>
        <div className="max-w-[60vw] flex items-center gap-4 overflow-x-clip">
          {Array.from([0, 1, 2]).map((el) => (
            <Card
              img={baseObj.img}
              key={el}
              creator={baseObj.creator}
              priceBid={baseObj.priceBid}
              title={baseObj.title}
            />
          ))}
        </div>
      </div>
    </div>
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
