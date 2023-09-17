import Link from "next/link";

export interface iHeaderLink {
  data: {
    link: string;
    title: string;
  };
}

export const HeaderLink = ({ data }: iHeaderLink) => {
  return (
    <Link href={data.link} className="uppercase text-white">
      {data.title}
    </Link>
  );
};
