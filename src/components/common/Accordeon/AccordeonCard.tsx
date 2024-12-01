import { Accordion, AccordionItem } from "@nextui-org/react";
import { ReactNode } from "react";

export const AccordeonCard = ({
  content,
  title,
  icon,
}: IAccordeonCard): JSX.Element => {
  return (
    <Accordion
      variant="splitted"
      defaultExpandedKeys={["1"]}
      itemClasses={{
        base: "bg-grayBackground w-full px-0 shadow-none px-4",
        //     startContent: "bg-grayBackground",
      }}
    >
      <AccordionItem
        key="1"
        aria-label="AccordionCard 1"
        title={title}
        startContent={icon}
        classNames={{ title: "text-white" }}
      >
        {content}
      </AccordionItem>
    </Accordion>
  );
};
interface IAccordeonCard {
  content: ReactNode;
  title?: string;
  icon?: ReactNode;
}
