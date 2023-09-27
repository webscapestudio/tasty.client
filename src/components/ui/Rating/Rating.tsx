"use client";

import cn from "classnames";
import StarSVG from "./Star.svg";

interface iRating {
  rate: number;
  className?: string;
}

export const Rating = ({ rate, className }: iRating) => {
  const maxValue = 5;
  return (
    <div className={cn("flex items-center", className)}>
      {[...Array(maxValue)].map((star, index) => {
        const value = index + 1;

        return <StarSVG className={value <= rate ? "fill-yellow" : ""} />;
      })}
    </div>
  );
};
