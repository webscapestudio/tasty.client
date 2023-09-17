import cn from "classnames";
import Link from "next/link";

interface iLinkUnderline {
  className?: string;
  link: string;
  title: string;
  style?: "accent" | "danger" | "disable";
}

export const LinkUnderline = ({
  className,
  link,
  title,
  style,
}: iLinkUnderline) => {
  return (
    <Link
      href={link}
      className={cn(
        className,
        "inline-block text-accent transition-all leading-none duration-300 ease-out hover:text-accentHover"
      )}
    >
      {title}
    </Link>
  );
};
