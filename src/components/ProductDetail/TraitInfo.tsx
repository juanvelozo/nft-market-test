import Text from "../common/Text/Text";

export const TraitInfo = ({ data }: ITraitInfo): JSX.Element => {
  return (
    <div className="border border-grayText rounded-xl p-4 flex flex-col items-center justify-center gap-4 hover:bg-foreground">
      <Text size={12} color="grayText">
        {data.category}
      </Text>
      <Text heavy size={14}>
        {data.trait} {data.rarity}
      </Text>
      <Text size={12} color="grayText">
        Floor: {data.floorPrice}
      </Text>
    </div>
  );
};

interface ITraitInfo {
  data: {
    category: string;
    trait: string;
    rarity: string;
    floorPrice: string;
  };
}
