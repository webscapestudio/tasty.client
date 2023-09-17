import cn from "classnames";
import { Button, Tag } from "../ui";
import Image from "next/image";
import Link from "next/link";

interface iCasinoRow {
  className?: string;
  data: any;
}

export const CasinoRow = ({ className, data }: iCasinoRow) => {
  return (
    <div
      className={cn(
        className,
        "bg-white py-4 pl-4 pr-8 rounded-xl flex items-center"
      )}
    >
      <div className="flex items-center gap-4 w-[480px]">
        <div className="w-[64px] h-[64px]  rounded-md overflow-hidden relative">
          {data.image && (
            <Image
              src={data.image}
              fill
              alt={data.title}
              className="object-contain"
            />
          )}
        </div>
        <Link href={`casinos/${data.slug}`}>
          <h3 className="text-[20px] font-medium">{data.title}</h3>
        </Link>
      </div>

      <div className="flex flex-wrap gap-2 w-full max-w-[510px]">
        {data.bonuses.map((item: any) => (
          <Tag key={item.id} title={item.title} style={item.style} />
        ))}
      </div>

      <div className="ml-auto">
        <Button link={data.link}>Restricted</Button>
      </div>
    </div>
  );
};
