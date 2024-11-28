import { ContainerBox } from "@/components/common/ContainerBox/ContainerBox";
import Text from "@/components/common/Text/Text";
import { ArrowRight } from "lucide-react";
import { CollectionCard } from "./CollectionCard";

export const TopCollectorsWeek = (): JSX.Element => {
  return (
    <ContainerBox>
      <div className="flex justify-between w-full items-center">
        <Text size={32} heavy>
          Top collections of the week
        </Text>
        <div className="flex items-center justify-center gap-3">
          <Text>Discover more</Text>
          <div className="bg-[#5e5d5d] p-1 rounded-full">
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between my-10">
        {collectionCards.map((el, i) => (
          <CollectionCard
            key={i}
            creator={el.creator}
            img={el.img}
            likes={el.likes}
            title={el.title}
          />
        ))}
      </div>
    </ContainerBox>
  );
};

interface ICollectionCard {
  img?: string[];
  title?: string;
  creator?: {
    name?: string;
  };
  likes?: number;
}

const collectionCards: ICollectionCard[] = [
  {
    img: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    ],
    title: "Nature Wonders",
    creator: {
      name: "Alice Johnson",
    },
    likes: 120,
  },
  {
    img: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    ],
    title: "Urban Exploration",
    creator: {
      name: "David Smith",
    },
    likes: 95,
  },
  {
    img: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    ],
    title: "Culinary Delights",
    creator: {
      name: "Maria Garcia",
    },
    likes: 200,
  },
];
