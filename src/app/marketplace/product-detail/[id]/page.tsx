"use client";

import { ContainerBox } from "@/components/common/ContainerBox/ContainerBox";

import { ImageBigPreview } from "@/components/common/ImageBigPreview/ImageBigPreview";
import { ProductInfo } from "@/components/ProductDetail/ProductInfo";
import { SaleCard } from "@/components/ProductDetail/SaleCard";
import { DescriptionCard } from "@/components/ProductDetail/DescriptionCard";
import { PriceHistoryCard } from "@/components/ProductDetail/PriceHistoryCard";
import { DetailsCard } from "@/components/ProductDetail/DetailsCard";
import { TraitsCard } from "@/components/ProductDetail/TraitsCard";
import { OffersCard } from "@/components/ProductDetail/OffersCard";

export default function ProductDetailPage() {
  return (
    <ContainerBox className="max-w-[1110px]">
      <div className="flex items-center gap-4 my-4">
        <ImageBigPreview url="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" />
        <div className="w-1/2 flex flex-col gap-4 items-center">
          <ProductInfo />
          <SaleCard />
          <DescriptionCard />
          <PriceHistoryCard />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <DetailsCard />
        <TraitsCard />
        <OffersCard />
      </div>
    </ContainerBox>
  );
}
