import { CasinoCard } from "@/components";
import { Aside } from "@/components/Aside/Aside";
import { CasinosHero } from "@/components/sections";
import { casinos } from "@/db";

export default function CasinosPage() {
  return (
    <>
      <CasinosHero />
      <section className=" mt-16">
        <div className="container">
          <div className="grid items-start gap-[30px] grid-cols-[1fr_3fr]">
            <Aside />
            <div className="flex flex-col gap-[30px]">
              {casinos.map((item) => (
                <CasinoCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
