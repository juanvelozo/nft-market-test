import colors from "@/theme/colors";
import { AccordeonCard } from "../common/Accordeon/AccordeonCard";
import { PresentationIcon } from "../icons/PresentationIcon";
import { CustomTable } from "../common/Table/Table";

export const OffersCard = (): JSX.Element => {
  return (
    <AccordeonCard
      content={<CustomTable columns={columns} rows={rows} />}
      title="Offers"
      icon={<PresentationIcon color={colors.grayText} />}
    />
  );
};

const rows = [
  {
    key: "1",
    name: "0.0034",
    role: "$6.60",
    status: "90% below",
    quantity: 3,
    expiration: "In 26 day",
    form: "273E40",
  },
  {
    key: "2",
    name: "0.0034",
    role: "$6.13",
    status: "90% below",
    quantity: 1,
    expiration: "In 10 day",
    form: "273E40",
  },
  {
    key: "3",
    name: "0.0033",
    role: "$6.11",
    status: "91% below",
    quantity: 3,
    expiration: "In 23 day",
    form: "273E40",
  },
  {
    key: "4",
    name: "0.0033",
    role: "$6.11",
    status: "91% below",
    quantity: 1,
    expiration: "In 20 day",
    form: "273E40",
  },
];

const columns = [
  {
    key: "name",
    label: "PRICE",
  },
  {
    key: "role",
    label: "USD PRICE",
  },
  {
    key: "status",
    label: "FLOOR DIFFERENCE",
  },
  {
    key: "quantity",
    label: "QUANTITY",
  },
  {
    key: "expiration",
    label: "EXPIRATION",
  },
  {
    key: "form",
    label: "FORM",
  },
];
