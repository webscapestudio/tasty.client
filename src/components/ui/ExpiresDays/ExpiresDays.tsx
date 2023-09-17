"use client";

import cn from "classnames";
import TimerSvg from "./timer.svg";

interface iExpiresDays {
  className?: string;
  style?: "success" | "warn" | "danger";
  days: number;
}

export const ExpiresDays = ({ className, style, days }: iExpiresDays) => {
  return (
    <div className="flex gap-1 items-center stroke-greenDark text-greenDark ">
      <TimerSvg className="" />
      <p className="leading-none">Expires in: {days}d</p>
    </div>
  );
};
