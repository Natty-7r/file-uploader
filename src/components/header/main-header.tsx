"use client";

import NavLink from "../links/nav-link";
import Link from "next/link";
import { headerLinks } from "@/utils/constants/constant";

const MainHeader = () => {
  return (
    <header className="flex sticky  w-full justify-between items-center  px-6 pt-4  shadow  px-6 py-2 md:py-6 z-[10] ">
      <Link href={"/"}>
        <h2 className="text-primary font-bold uppercase">File uplodder</h2>
      </Link>
      <div className="flex gap-8 lg:gap-14 items-center md:mr-8 lg:mr-24">
        {headerLinks.map(({ link, linkText }) => (
          <NavLink link={link} linkText={linkText} key={link} />
        ))}
      </div>
    </header>
  );
};

export default MainHeader;
