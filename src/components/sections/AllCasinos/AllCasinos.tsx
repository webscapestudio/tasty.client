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
import { BonusCard } from "@/components";

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
                <BonusCard data={item} key={item.id}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
