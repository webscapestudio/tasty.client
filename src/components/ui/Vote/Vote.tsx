"use client";
import cn from "classnames";
import DislikeSVG from "./dislike.svg";
import LikeSVG from "./like.svg";

interface iVote {
  className?: string;
  type: "like" | "dislike";
  count: number;
}

export const Vote = ({ count = 0, type, className }: iVote) => {
  const style =
    "py-[11px] px-[15px] leading-none gap-2 cursor-pointer border rounded-md inline-block w-full flex transition-colors duration-300 ease-in-out justify-center items-center transition-colors hover:stroke-white hover:text-white";
  switch (type) {
    case "like":
      return (
        <div
          className={cn(
            style,
            className,
            "border-greenDark text-greenDark stroke-greenDark hover:bg-greenDark "
          )}
        >
          <LikeSVG />
          <div>{count}</div>
        </div>
      );

    case "dislike":
      return (
        <div
          className={cn(
            style,
            className,
            "border-red stroke-red text-red hover:bg-red"
          )}
        >
          <DislikeSVG />
          <div>{count}</div>
        </div>
      );
  }
};
