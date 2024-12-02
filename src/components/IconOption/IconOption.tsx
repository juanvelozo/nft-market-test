import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { MouseEventHandler, ReactNode } from "react";
import { IconButton } from "../common/IconButton/IconButton";

export const IconOptions = ({
  options,
  icon,
  placement = "bottom",
}: IIconOptions): JSX.Element => {
  return (
    <Dropdown
      placement={placement}
      classNames={{ content: "bg-grayBackground hover:bg-grayBackground" }}
    >
      <DropdownTrigger>
        <IconButton icon={icon} />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        {options.map((el, i) => (
          <DropdownItem
            key={el.key}
            onClick={el.onClick}
            color={el.color}
            startContent={el.icon}
            className="font-azeretMonoRegular"
          >
            {el.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
interface IIconOptions {
  icon?: ReactNode;
  options: Options[];
  placement?: OverlayPlacement | undefined;
}

type Options = {
  key: string;
  label: string;
  onClick?: MouseEventHandler<HTMLLIElement> | undefined;
  icon?: ReactNode;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
};
type OverlayPlacement =
  | "top"
  | "bottom"
  | "right"
  | "left"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end"
  | "right-start"
  | "right-end";
