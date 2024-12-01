import { IconButton } from "@/components/common/IconButton/IconButton";
import { Input } from "@/components/common/Input/Input";
import { NFTBanner } from "@/components/Home/NFTBanner/NFTBanner";
import { RecentlyAddedCard } from "@/components/Market/RecentlyAddedCard";
import { TopCreatorsCard } from "@/components/Market/TopCreatorsCard";
import { TrendingNFTs } from "@/components/Market/TrendingNFTs";
import { BellRing } from "lucide-react";

export default function MarketPage() {
  return (
    <div className="w-full p-10 bg-[#111111]">
      <div className="w-full p-4 flex justify-between">
        <Input placeholder="Search" className="w-1/3" />
        <IconButton icon={<BellRing color="#fff" />} />
      </div>
      <div className=" gap-4 flex items-start justify-around ">
        <div>
          <NFTBanner className="w-full mt-0" />
          <TrendingNFTs />
        </div>
        <div className="w-3/12 flex flex-col gap-5">
          <RecentlyAddedCard />
          <TopCreatorsCard />
        </div>
      </div>
    </div>
  );
}
