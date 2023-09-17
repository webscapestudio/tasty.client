import { Header } from "@/components";
import { AllCasinos, FeaturedCasinos, Hero } from "@/components/sections";
import { Button } from "@/components/ui";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCasinos className="mt-24" />
      <AllCasinos className="mt-[128px]" />
    </>
  );
}
