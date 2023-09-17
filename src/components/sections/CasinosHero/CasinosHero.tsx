import { Crumbs, Title } from "@/components/ui";

interface iCasinosHero {}

export const CasinosHero = () => {
  return (
    <section className="bg-black text-white pt-[52px] pb-10">
      <div className="container">
        <Crumbs />
        <Title tag="h1" className="mt-5">
          Online Casino Reviews
          <br />
        </Title>

        <p className="text-gray mt-4">
          Accurate Information & Real Player Reviews Maybe more seo text more
          text
        </p>

        <p className="text-gray mt-4 text-[10px]">
          Affiliate Disclosure: Using our links to visit and deposit funds may
          earn us a commission, with no impact on your expenses. Learn more
        </p>
      </div>
    </section>
  );
};
