import BillPNG from "@/assets/home/Bill.png";
import MarketPNG from "@/assets/home/MarketDown.png";
import MoneyPNG from "@/assets/home/MoneyBag.png";
import WalletPNG from "@/assets/home/Wallet.png";
import ArrowPNG from "@/assets/home/Arrow.png";
import { ContainerBox } from "@/components/common/ContainerBox/ContainerBox";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";
import { SellNFTCard } from "./SellNFTCard";
import Text from "@/components/common/Text/Text";

export const SellNFTSteps = (): JSX.Element => {
  function isEvenIndex(index: number): boolean {
    return index % 2 === 0;
  }
  function mapArray(
    arr: StaticImport[],
    specificElement: StaticImport
  ): ReactNode[] {
    const result: StaticImport[] = [];

    arr.forEach((item, index) => {
      result.push(item); // Add the original item
      if (index < arr.length - 1) {
        // Avoid adding the element after the last item
        result.push(specificElement); // Add the specific element
      }
    });

    return result.map((el, i) =>
      isEvenIndex(i) ? (
        <SellNFTCard
          key={i}
          step={i + 1}
          imageComponent={
            <Image alt="illustration" src={el} width={45} height={45} />
          }
          description={CardTextSelector[i].description || ""}
          title={CardTextSelector[i].title}
        />
      ) : (
        <Image key={i} alt="illustration" src={el} width={77} height={84} />
      )
    );
  }

  const result = mapArray(illustrationAr, ArrowPNG);

  return (
    <ContainerBox>
      <Text size={32} heavy className="text-center my-10">
        Step by step Create and Sell Your NFTs
      </Text>
      <div className="flex justify-center">
        {result.map((el, i) => (
          <div key={i}>{el}</div>
        ))}
      </div>
    </ContainerBox>
  );
};

const illustrationAr = [BillPNG, MarketPNG, MoneyPNG, WalletPNG];

interface CardObj {
  title?: string;
  description?: string;
}

export type ObjSelector = { [x in number]: CardObj };

const CardTextSelector: ObjSelector = {
  "0": {
    description:
      "Fusce non dignissim velit, sit amet semper eros. Quisque orci est",
    title: "Set Up Your Wallet",
  },
  "2": {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus",
    title: "Create your collection",
  },
  "4": {
    description:
      "Suspendisse porttitor id est non accumsan. Cras vel viverra velit",
    title: "Add your NFTs",
  },
  "6": {
    description:
      "Maecenas non semper quam. Vivamus et arcu condimentum ipsum consectetur",
    title: "Sell your NFTs",
  },
};
