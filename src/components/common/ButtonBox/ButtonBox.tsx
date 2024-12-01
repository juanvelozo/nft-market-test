"use client";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

export const ButtonBox = ({ buttons }: IButtonBox): JSX.Element => {
  const [activeButton, setActiveButton] = useState<ButtonBoxType>();

  function activateButton(arg: ButtonBoxType) {
    setActiveButton(arg);
  }

  useEffect(() => {
    activateButton(buttons![0]);
  }, []);

  return (
    <div className="flex items-center gap-4">
      {buttons?.map((el, i) => (
        <Button
          key={i}
          variant={activeButton == el ? "primary" : "outline"}
          onClick={() => activateButton(el)}
        >
          {el.name}
        </Button>
      ))}
    </div>
  );
};

interface IButtonBox {
  buttons?: ButtonBoxType[];
}

type ButtonBoxType = {
  name: string;
  value: string;
};
