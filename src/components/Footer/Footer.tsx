import cn from "classnames";
import { Logo } from "../ui";

interface iFooter {
  className?: string;
}

export const Footer = ({ className }: iFooter) => {
  return (
    <footer className="mt-[128px] bg-black text-white py-10">
      <div className="container">
        <div className="flex flex-col max-w-[330px] gap-4">
          <Logo />
          <p className="text-gray leading-[120%] font-light">
            Seo text about the best online casino bonuses codes around the
            world! Seo text about the best online casino bonuses codes around
            the world!
          </p>
        </div>
      </div>
    </footer>
  );
};
