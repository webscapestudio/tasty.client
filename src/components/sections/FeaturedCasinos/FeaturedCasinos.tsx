import { CasinoRow } from "@/components";
import { Button, Title } from "@/components/ui";
import { featured_casinos } from "@/db";
import cn from "classnames";

interface iFeaturedCasinos {
  className?: string;
}

export const FeaturedCasinos = ({ className }: iFeaturedCasinos) => {
  const featured = featured_casinos;
  return (
    <section className={cn(className, "")}>
      <div className="container">
        <Title tag="h2">Featured Casinos August 2023</Title>

        <div className="mt-6 flex gap-4 flex-col">
          {featured.map((item) => (
            <CasinoRow key={item.id} data={item} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button outline className="w-60" link="/casinos">
            All Casinos
          </Button>
        </div>
      </div>
    </section>
  );
};
