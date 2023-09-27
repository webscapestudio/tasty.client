import cn from "classnames";

interface iTitle {
  tag: "h1" | "h2" | "h3" | "h4" | "h5";
  className?: string;
  children: any;
}

export const Title = ({ tag, children, className }: iTitle) => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={cn(className, "font-bold text-[36px] leading-[120%]")}>
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2
          className={cn(className, "text-[32px] font-semibold leading-[120%]")}
        >
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3 className={cn(className, "font-bold text-[28px] leading-none")}>
          {children}
        </h3>
      );

    case "h5":
      return (
        <h3 className={cn(className, "font-bold text-[16px] leading-none")}>
          {children}
        </h3>
      );
  }
};
