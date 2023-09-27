import Image from "next/image";
import parse from "html-react-parser";
import {
  BonusCode,
  Button,
  CasinoTag,
  ExpiresDays,
  Tag,
  Title,
  Vote,
} from "../ui";
import { FeatureItem } from "./FeatureItem";
import { dateFormat } from "@/helpers";

interface iBonusCard {
  data: any;
}

export const BonusCard = ({ data }: iBonusCard) => {
  return (
    <div key={data.id} className="py-8 px-[24px] rounded-xl bg-white">
      <div className="grid grid-cols-[1fr_2fr] justify-center gap-[30px]">
        {/* Left */}
        <div>
          <div className="w-full relative h-[98px]">
            {data.logo && (
              <Image
                fill
                src={data.logo}
                className="block object-contain"
                alt={data.title}
              />
            )}
          </div>

          <BonusCode bonus={data.bonus_code} className="mt-10" />

          <div className="flex items-center gap-2 mt-2">
            <Vote type="like" count={data.rating.likes} />
            <Vote type="dislike" count={data.rating.dislikes} />
          </div>

          <p className="text-[10px] text-gray mt-[12px]">
            Bonus exсlusivе fоr tastygames.com рlаyеrs.Nо multiple ассоunts оr
            frее bоnusеs in а rоw аrе аllоwеd. If yоur lаst trаnsасtiоn wаs а
            frее bоnus, please make a deposit in case your last session was with
            a free bonus.
          </p>
        </div>

        {/* Right */}
        <div>
          <Title tag="h3">{data.title}</Title>
          <div className="flex justify-between items-center mt-2">
            <ExpiresDays days={12} />
            <p className="leading-none text-blackLight">
              {/* {dateFormat(data.created_at)} */}
              {data.created_at}
            </p>
          </div>

          <hr className="text-gray my-3 block" />

          <div className="p-4 rounded-md bg-grayLight">
            {parse(data.description)}
          </div>

          <div className="flex flex-col mt-4 gap-1">
            <FeatureItem title="Amount" value="30" />
            <FeatureItem title="Max cash out" value="30$" />
            <FeatureItem title="Wagering" value="40xD" />
            <FeatureItem title="Category" value="No Deposit Bonus" />
            <FeatureItem title="Amount" value="30" />
          </div>

          <div className="mt-5">
            <Title tag="h5">Games Allowed</Title>
            <div className="flex flex-wrap gap-1 mt-2">
              {data.games_allowed?.map((game: any) => (
                <Tag title={game.title} size="sm" style="success" />
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="font-bold">Claim bonus at:</p>
            <div className="flex">
              <CasinoTag title="test casino" />

              <div className="flex ml-auto gap-2">
                <Button size="sm">Reviews</Button>
                <Button size="sm" style="success">
                  Use Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
