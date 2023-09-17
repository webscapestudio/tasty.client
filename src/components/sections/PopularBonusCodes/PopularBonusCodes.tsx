import { Title } from "@/components/ui";
import cn from "classnames";

interface iPopularBonusCodes {
  className?: string;
}

export const PopularBonusCodes = ({ className }: iPopularBonusCodes) => {
  return (
    <section className={cn(className)}>
      <div className="container">
        <Title tag="h2">Online Casino Bonus Blog</Title>
      </div>
    </section>
  );
};
