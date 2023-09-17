import { BonusesHero, PopularBonusCodes } from "@/components/sections";
import { Title } from "@/components/ui";

export default function BonusesPage() {
  return (
    <>
      <BonusesHero />
      <PopularBonusCodes className="mt-[96px]" />
    </>
  );
}
