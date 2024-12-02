import React, { useState, useEffect, FC } from "react";
import Text from "../Text/Text";
import { cn } from "@/lib/utils/cn";

interface CountdownProps {
  initialMilliseconds: number;
  className?: string;
}

export const CountdownChip: FC<CountdownProps> = ({
  initialMilliseconds,
  className,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialMilliseconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  function formatTime(milliseconds: number): string {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let result = "";
    if (hours > 0) {
      result += `${hours}h `;
    }
    if (minutes > 0 || hours > 0) {
      result += `${minutes}m `;
    }
    result += `${seconds}s`;

    return result.trim();
  }

  return (
    <div>
      <div
        className={cn(
          "bg-[#FFFFFF1A] px-[10px] py-[6px] rounded-full",
          className
        )}
      >
        <Text size={12} className="text-center">
          {formatTime(timeLeft)}
        </Text>
      </div>
    </div>
  );
};
