"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { ReactNode, useEffect, useRef, useState } from "react";

export interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export function Select({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className,
  disabled = false,
  icon,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === value);

  const toggleOpen = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setHighlightedIndex(-1);
    }
  };

  const handleOptionClick = (option: Option) => {
    onChange?.(option.value);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full min-w-[200px]", className)}
    >
      <div
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="select-dropdown"
        tabIndex={disabled ? -1 : 0}
        className={cn(
          "flex items-center justify-between w-full px-3 py-2 text-sm rounded-xl border",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
          disabled
            ? "bg-muted cursor-not-allowed"
            : "bg-background hover:bg-accent cursor-pointer"
        )}
        onClick={toggleOpen}
      >
        <div className="flex items-center justify-center gap-2">
          {icon}
          <span
            className={!selectedOption ? "text-white font-manropeRegular" : ""}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )}
        />
      </div>

      {isOpen && (
        <ul
          id="select-dropdown"
          role="listbox"
          aria-label="Options"
          className={cn(
            "absolute z-50 w-full mt-1 py-1 rounded-md border bg-background shadow-lg",
            "animate-in fade-in-0 zoom-in-95"
          )}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              className={cn(
                " px-3 py-2 text-sm cursor-pointer font-manropeRegular",
                "transition-colors duration-200",
                index === highlightedIndex && "bg-grayBackground",
                option.value === value
                  ? "text-primary font-medium"
                  : "text-white",
                "bg-grayBackground hover:bg-accent focus:bg-accent outline-none"
              )}
              onClick={() => handleOptionClick(option)}
              onMouseEnter={() => setHighlightedIndex(index)}
              tabIndex={-1}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
