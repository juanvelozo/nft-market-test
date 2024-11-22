"use client";
import React, {
  useState,
  useRef,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from "react";

interface DropdownMenuProps {
  children: ReactNode;
}

interface DropdownMenuTriggerProps {
  icon?: ReactNode;
  className?: string;
  title: string;
}

interface DropdownMenuContentProps {
  children: ReactNode;
}

interface DropdownMenuItemProps {
  children: ReactNode;
  onClick?: () => void;
}

const DropdownMenuContext = createContext<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

export function DropdownMenu({ children }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <DropdownMenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative inline-block text-left">{children}</div>
    </DropdownMenuContext.Provider>
  );
}

export function DropdownMenuTrigger({
  className,
  title,
  icon,
}: DropdownMenuTriggerProps) {
  const { isOpen, setIsOpen } = useContext(DropdownMenuContext);

  return (
    <button
      type="button"
      className={`inline-flex justify-center items-center w-full text-base font-medium text-white  rounded-md  focus:outline-none focus:ring-0 hover:text-primary gap-2 ${className}`}
      onClick={() => setIsOpen(!isOpen)}
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      {title}
      {icon && icon}
    </button>
  );
}

export function DropdownMenuContent({ children }: DropdownMenuContentProps) {
  const { isOpen, setIsOpen } = useContext(DropdownMenuContext);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="origin-center absolute left-0 right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-foreground bg-opacity-25"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
      ref={dropdownRef}
    >
      <div className="py-1" role="none">
        {children}
      </div>
    </div>
  );
}

export function DropdownMenuItem({ children, onClick }: DropdownMenuItemProps) {
  const { setIsOpen } = useContext(DropdownMenuContext);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    setIsOpen(false);
  };

  return (
    <button
      className="block w-full text-left px-4 py-2 text-sm text-white  "
      role="menuitem"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
