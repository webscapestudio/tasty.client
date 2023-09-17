import cn from "classnames";
import Link from "next/link";

interface iButton {
  className?: string;
  style?: "accent" | "gray";
  children: string;
  link?: string;
  size?: "sm" | "md" | "lg";
  outline?: boolean;
}

export const Button = ({
  className,
  children,
  style = "accent",
  link,
  size = "md",
  outline = false,
}: iButton) => {
  if (link) {
    return (
      <Link
        href={link}
        className={cn(
          className,
          "border text-center leading-none inline-block transition-colors ease-in-out [&.outln]:text-black [&.outln]:hover:text-white duration-300 ",
          {
            ["bg-accent text-white  border-accent hover:text-white hover:bg-accentHover hover:border-accentHover"]:
              style === "accent",

            ["bg-white outln border-accent hover:text-white"]: outline,

            ["py-[15px] px-[25px] rounded-md"]: size === "md",
          }
        )}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={cn(
          className,
          "border text-center leading-none inline-block transition-colors ease-in-out duration-300 ",
          {
            ["bg-white text-black border-accent hover:text-white"]: outline,
            ["bg-accent text-white border-accent hover:text-white hover:bg-accentHover"]:
              style === "accent",
            ["py-[15px] px-[25px] rounded-md"]: size === "md",
          }
        )}
      >
        {children}
      </button>
    );
  }
};
