import { ContainerBox } from "@/components/common/ContainerBox/ContainerBox";
import { Select } from "@/components/common/Select/Select";
import Text from "@/components/common/Text/Text";
import {
  Archive,
  ArrowRight,
  Box,
  CircleDollarSign,
  Package,
} from "lucide-react";

export const DiscoverItem = (): JSX.Element => {
  return (
    <ContainerBox className="flex flex-col gap-4">
      <div className="flex justify-between w-full items-center">
        <Text size={32}>Discover item</Text>
        <div className="flex items-center justify-center gap-3">
          <Text>Discover more</Text>
          <div className="bg-[#5e5d5d] p-1 rounded-full">
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <Select options={[]} icon={<Archive />} placeholder="Category" />
        <Select options={[]} icon={<Box />} placeholder="Items" />
        <Select options={[]} icon={<Box />} placeholder="Status" />
        <Select
          options={[]}
          icon={<CircleDollarSign />}
          placeholder="Price range"
        />
        <Select
          options={[]}
          icon={<CircleDollarSign />}
          placeholder="Sort by"
        />
      </div>
    </ContainerBox>
  );
};
