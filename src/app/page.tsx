import { TopCollectorsToday } from "@/components/Home/TopCollectors/TopCollectorsToday";
import { CarouselTopSeller } from "@/components/Home/Carousel/CarouselTopSeller";
import { DiscoverItem } from "@/components/Home/Discover/DiscoverItem";
import { HeroHome } from "@/components/Home/Hero/HeroHome";
import { TopCollectorsWeek } from "@/components/Home/TopCollectors/TopCollectorsWeek";
import { SellNFTSteps } from "@/components/Home/SellNFTSteps/SellNFTSteps";
import { NFTBanner } from "@/components/Home/NFTBanner/NFTBanner";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center sm:items-start">
        <HeroHome />
        <CarouselTopSeller />
        <DiscoverItem />
        <TopCollectorsToday />
        <TopCollectorsWeek />
        <SellNFTSteps />
        <NFTBanner />
      </div>
    </div>
  );
}
