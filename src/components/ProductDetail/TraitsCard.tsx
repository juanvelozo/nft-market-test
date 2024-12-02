import colors from "@/theme/colors";
import { AccordeonCard } from "../common/Accordeon/AccordeonCard";
import { PresentationIcon } from "../icons/PresentationIcon";
import { TraitInfo } from "./TraitInfo";

export const TraitsCard = ({}: ITraitsCard): JSX.Element => {
  return (
    <AccordeonCard
      content={
        <div className="grid grid-cols-4 grid-rows-3 gap-4 justify-self-stretch">
          {traitData.map((el, i) => (
            <TraitInfo key={i} data={el} />
          ))}
        </div>
      }
      title="Traits"
      icon={<PresentationIcon color={colors.grayText} />}
    />
  );
};
interface ITraitsCard {}

const traitData = [
  {
    category: "Apparel",
    trait: "Bathrobe Red",
    rarity: "1%",
    floorPrice: "0.034 ETH",
  },
  {
    category: "Earrings",
    trait: "None",
    rarity: "60%",
    floorPrice: "0.037 ETH",
  },
  {
    category: "Background",
    trait: "Orange",
    rarity: "5%",
    floorPrice: "0.034 ETH",
  },
  {
    category: "Earrings",
    trait: "None",
    rarity: "60%",
    floorPrice: "0.037 ETH",
  },
  {
    category: "Eyes",
    trait: "Almond",
    rarity: "7%",
    floorPrice: "0.038 ETH",
  },
  {
    category: "Face&Lips",
    trait: "None",
    rarity: "59%",
    floorPrice: "0.36 ETH",
  },
  {
    category: "Eyewear",
    trait: "None",
    rarity: "95%",
    floorPrice: "0.034 ETH",
  },
  {
    category: "Face&Lips",
    trait: "None",
    rarity: "95%",
    floorPrice: "0.36 ETH",
  },
  {
    category: "Tattoo",
    trait: "None",
    rarity: "80%",
    floorPrice: "0.035 ETH",
  },
  {
    category: "Nose",
    trait: "Round",
    rarity: "20%",
    floorPrice: "0.037 ETH",
  },
  {
    category: "Nose",
    trait: "Round",
    rarity: "20%",
    floorPrice: "0.037 ETH",
  },
  {
    category: "Yellow",
    trait: "Yellow",
    rarity: "19%",
    floorPrice: "0.037 ETH",
  },
];
