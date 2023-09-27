import cn from "classnames";
import Image from "next/image";
import { Button, Rating, Tag, Title } from "../ui";

interface iCasinoCard {
  className?: string;
  data: any;
}
export const CasinoCard = ({ className, data }: iCasinoCard) => {
  return (
    <div className={cn(className, "bg-white rounded-lg py-[24px] px-8")}>
      <div className="grid grid-cols-[96px_1fr] gap-[30px]">
        <div className="">
          <div className="relative h-[96px] w-[96px]">
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
          <div className="flex">
            <Title tag="h3">{data.title}</Title>
            <Rating rate={data.rating} className="ml-auto" />
          </div>

          <div className="bg-grayLight p-4 rounded-md mt-4">
            <p>
              Biggest online casino Online casino with huge selection of games
            </p>
          </div>

          <div className="mt-4">
            <div>
              <div className="flex gap-1">
                <p>Withdrawal Time: </p> <p>{data.withdrawal_time}</p>
              </div>
              Minimum deposit:
              {data.minimum_deposit}
            </div>
          </div>

          <div className="mt-4">
            <Button>Play Now!</Button>
          </div>

          <hr className="text-border my-5" />
        </div>
      </div>
    </div>
  );
};
