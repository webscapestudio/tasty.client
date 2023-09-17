import cn from "classnames";

interface iTag {
  className?: string;
  title: string;
  style?: "default" | "danger" | "success" | "warn";
  size?: "sm" | "md" | "lg";
}

export const Tag = ({
  className,
  title,
  size = "md",
  style = "default",
}: iTag) => {
  switch (size) {
    case "sm":
      return (
        <div
          className={cn(
            className,
            "inline-block text-textGray bg-grayLight leading-none py-[6px] px-4 text-[14px] rounded-full",
            {
              ["bg-greenDark text-white"]: style === "success",
            }
          )}
        >
          {title}
        </div>
      );
    case "md":
      return (
        <div
          className={cn(
            className,
            "inline-block text-textGray bg-grayLight leading-none py-2 px-6 rounded-full",
            {
              ["bg-greenDark text-white"]: style === "success",
            }
          )}
        >
          {title}
        </div>
      );
  }
};
