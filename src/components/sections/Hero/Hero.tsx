import { Title } from "@/components/ui";
import { Input } from "@/components/ui/Forms";

export const Hero = () => {
  return (
    <section className="bg-black text-white pt-[52px] pb-10">
      <div className="container">
        <Title tag="h1">
          Tasty Games –The World’s Best <br /> Source of Bonuses, Games & Casino
          <br />
          Reviews
        </Title>

        <Input
          className="mt-6 w-[468px]"
          placeholder="Search over 2000 casinos"
        />
      </div>
    </section>
  );
};
