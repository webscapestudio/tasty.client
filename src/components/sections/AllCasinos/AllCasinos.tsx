import { Aside } from "@/components/Aside/Aside";
import {
  BonusCode,
  ExpiresDays,
  LinkUnderline,
  Title,
  Vote,
} from "@/components/ui";
import cn from "classnames";

import { bonus_codes } from "../../../db";
import Image from "next/image";

interface iAllCasinos {
  className?: string;
}

export const AllCasinos = ({ className }: iAllCasinos) => {
  const bonuses = bonus_codes;
  return (
    <section className={cn(className)}>
      <div className="container">
        <div className="flex items-center gap-8">
          <Title tag="h2">All Casinos</Title>
          <LinkUnderline link="/casinos/new" title={"Newest"} />
        </div>

        <div className="mt-10 grid items-start gap-8 grid-cols-[1fr_3fr]">
          <Aside />
          <div className="asd">
            <div className="flex flex-col gap-8">
              {bonuses.map((item) => (
                <div
                  key={item.id}
                  className="py-8 px-[30px] rounded-xl bg-white"
                >
                  <div className="grid grid-cols-[1fr_2fr] gap-[30px]">
                    <div className="">
                      <div className="w-full relative h-[128px]">
                        {item.logo && (
                          <Image
                            fill
                            src={item.logo}
                            className="block object-contain"
                            alt={item.title}
                          />
                        )}
                      </div>

                      <BonusCode bonus={item.bonus_code} className="mt-10" />

                      <div className="flex items-center gap-2 mt-4">
                        <Vote type="like" count={item.rating.likes} />
                        <Vote type="dislike" count={item.rating.dislikes} />
                      </div>

                      <p className="text-[10px] text-gray mt-[12px]">
                        Bonus exсlusivе fоr tastygames.com рlаyеrs.Nо multiрlе
                        ассоunts оr frее bоnusеs in а rоw аrе аllоwеd. If yоur
                        lаst trаnsасtiоn wаs а frее bоnus, please make a deposit
                        in case your last session was with a free bonus.
                      </p>
                    </div>

                    <div>
                      <Title tag="h3">{item.title}</Title>
                      <div className="flex justify-between mt-2">
                        <ExpiresDays days={12} />
                      </div>

                      <hr className="text-gray my-3 block" />

                      <div className="flex flex-col"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
