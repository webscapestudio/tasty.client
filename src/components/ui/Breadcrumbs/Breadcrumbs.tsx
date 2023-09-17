import Link from "next/link";

export const Crumbs = () => {
  return (
    <div className="flex leading-none gap-2">
      <Link href="/" className="">
        Home
      </Link>
      <p className="text-gray">–</p>
      <p className="text-gray">Casinos</p>
    </div>
  );
};
