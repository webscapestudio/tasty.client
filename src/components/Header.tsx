import Link from "next/link";
import { HeaderLink, Logo } from "./ui";
import { links } from "@/db";

export const Header = () => {
  return (
    <header className="bg-blackLight py-5 text-white">
      <div className="container">
        <div className="flex items-center">
          <Logo />
          <nav className="flex items-center gap-8 ml-auto">
            {links.map((item) => (
              <HeaderLink data={item} key={item.id} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
