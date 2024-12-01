import Image from "next/image";
import Text from "../common/Text/Text";

export const RecentlyAddedCard = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 bg-grayBackground min-h-96 rounded-3xl p-5">
      <Text size={24} heavy>
        Recently added
      </Text>
      {CollectionAr.shift()?.thumbnail && (
        <div className="overflow-hidden flex flex-col relative">
          <Image
            src={CollectionAr[0].thumbnail || ""}
            alt="as"
            width={360}
            height={200}
            className="w-full !max-h-[200px] aspect-video rounded-xl"
          />
          <div className="bg-foreground p-2 rounded-b-xl flex items-center justify-between absolute bottom-0 right-0 left-0">
            <Text size={14}>{CollectionAr.shift()?.title}</Text>
            <Text size={14} color="grayText">
              16hr ago
            </Text>
          </div>
        </div>
      )}
      {CollectionAr.map((el, i) => (
        <div key={i} className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <Image
              alt={`${el.title}thumbnail`}
              src={el.thumbnail}
              width={60}
              height={60}
              className="w-16 h-16 rounded-xl"
            />
            <div>
              <Text>{el.title}</Text>
              <Text>@{el.creator.userName}</Text>
            </div>
          </div>
          <Text>Mon. 08 May</Text>
        </div>
      ))}
    </div>
  );
};

const CollectionAr = [
  {
    title: "Nature Wonders",
    creator: {
      name: "Alice Johnson",
      userName: "AliceJ",
    },
    thumbnail: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  },
  {
    title: "Nature Wonders",
    creator: {
      name: "Alice Johnson",
      userName: "AliceJ",
    },
    thumbnail: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
  },
  {
    title: "Culinary Delights",
    creator: {
      name: "Maria Garcia",
      userName: "MariaG",
    },
    thumbnail: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
  },
  {
    title: "Urban Exploration",
    creator: {
      name: "David Smith",
      userName: "DS1999",
    },
    thumbnail: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  },
];
