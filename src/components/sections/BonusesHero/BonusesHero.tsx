import { Crumbs, Tag, Title } from "@/components/ui";

interface iBonusesHero {}

export const BonusesHero = () => {
  return (
    <section className="bg-black text-white pt-[52px] pb-10">
      <div className="container">
        <Crumbs />

        <Tag
          className="mt-8"
          title="62 New Bonuses Today"
          style="success"
          size="sm"
        />
        <Title tag="h1" className="mt-2">
          Online No Deposit Bonuses
        </Title>

        <p className="text-gray mt-4 max-w-[800px]">
          Accurate Information & Real Player Reviews Maybe more seo text more
          text Accurate Information & Real Player Reviews Maybe more seo text
          more text Accurate Information & Real Player Reviews Maybe more seo
          text more text
        </p>

        <p className="text-gray mt-4 text-[10px]">
          Affiliate Disclosure: Using our links to visit and deposit funds may
          earn us a commission, with no impact on your expenses. Learn more
        </p>
      </div>
    </section>
  );
};
