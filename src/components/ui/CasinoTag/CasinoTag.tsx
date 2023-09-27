import cn from "classnames";
import Image from "next/image";

interface iCasinoTag {
  logo?: string;
  link?: string;
  title: string;
  className?: string;
}

export const CasinoTag = ({ logo, link, title, className }: iCasinoTag) => {
  return (
    <div className={cn(className, "flex items-center gap-2")}>
      <div className="rounded-full w-[23px] h-[23px] relative bg-gray">
        {logo ? <Image src={logo} fill alt={title} /> : <div></div>}
      </div>
      <p>{title}</p>
    </div>
  );
};
