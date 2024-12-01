"use client";
import { AccordeonCard } from "@/components/common/Accordeon/AccordeonCard";
import { ContainerBox } from "@/components/common/ContainerBox/ContainerBox";
import Text from "@/components/common/Text/Text";
import { PresentationIcon } from "@/components/icons/PresentationIcon";
import colors from "@/theme/colors";
import { Timer } from "lucide-react";
import { ImageBigPreview } from "@/components/common/ImageBigPreview/ImageBigPreview";
import { ProductInfo } from "@/components/ProductDetail/ProductInfo";

export default function ProductDetailPage() {
  return (
    <ContainerBox className="max-w-[1110px]">
      <div className="flex items-center gap-4 my-4">
        <ImageBigPreview url="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" />
        <div className="w-1/2 flex flex-col gap-4 items-center">
          <ProductInfo />
          <AccordeonCard
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio rem maxime repellendus molestias consequatur dolor odit facere iure eum expedita ex ullam, omnis necessitatibus assumenda quia id quod tempora vel!"
            }
            title="Sale ends May 22 at 9:39"
            icon={<Timer size={19} />}
          />
          <AccordeonCard
            content={
              <Text color="grayText">
                8,888 NFTs of beautiful, Asian women painstakingly-crafted where
                even the most intricate details are steeped in historical
                significance. We envision 8SIAN being a global, inclusive
                community{" "}
                <Text isSpan color="primary">
                  see more
                </Text>
              </Text>
            }
            title="Description"
            icon={<PresentationIcon color={colors.grayText} />}
          />
          <AccordeonCard
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio rem maxime repellendus molestias consequatur dolor odit facere iure eum expedita ex ullam, omnis necessitatibus assumenda quia id quod tempora vel!"
            }
            title="Price History"
            icon={<PresentationIcon color={colors.grayText} />}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <AccordeonCard
          content={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio rem maxime repellendus molestias consequatur dolor odit facere iure eum expedita ex ullam, omnis necessitatibus assumenda quia id quod tempora vel!"
          }
          title="Details"
          icon={<PresentationIcon color={colors.grayText} />}
        />
        <AccordeonCard
          content={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio rem maxime repellendus molestias consequatur dolor odit facere iure eum expedita ex ullam, omnis necessitatibus assumenda quia id quod tempora vel!"
          }
          title="Traits"
          icon={<PresentationIcon color={colors.grayText} />}
        />
        <AccordeonCard
          content={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio rem maxime repellendus molestias consequatur dolor odit facere iure eum expedita ex ullam, omnis necessitatibus assumenda quia id quod tempora vel!"
          }
          title="Offers"
          icon={<PresentationIcon color={colors.grayText} />}
        />
      </div>
    </ContainerBox>
  );
}
