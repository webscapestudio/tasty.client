import cn from "classnames";
import Image from "next/image";
import { Tag, Title } from "../ui";

interface iCasinoCard {
  className?: string;
  data: any;
}
export const CasinoCard = ({ className, data }: iCasinoCard) => {
  return (
    <div className={cn(className, "bg-white rounded-lg py-8 px-8")}>
      <div className="grid grid-cols-[1fr_4fr] gap-[30px]">
        <div className="">
          <div className="relative h-[128px]">
            {data.logo && (
              <Image
                src={data.logo}
                fill
                alt={data.title}
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div className="">
          <Title tag="h3">{data.title}</Title>
          <div className="flex justify-between mt-4">
            <p>Rating</p>
            <p>Date created</p>
          </div>
          <hr className="text-border my-5" />
        </div>
      </div>
    </div>
  );
};
