"use client";

import Image from "next/image";

import { Bell } from "lucide-react";

import NavLink from "../links/nav-link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between sticky top-0 bg-background shadow  px-6 py-2 z-[10]">
      <div className="flex gap-8 lg:gap-14 items-center md:mr-8 lg:mr-24">
        {headerLinks.map(({ link, linkText }) => (
          <NavLink link={link} linkText={linkText} key={link} />
        ))}
      </div>
      <div className="flex items-center gap-6 lg:gap-12">
        <div className="p-2 flex justify-center items-center gap-2 ">
          <Image
            width={20}
            height={20}
            alt="heart filled"
            src={"/icons/heart-icon.svg"}
          />
          <span className="font-bold">{2}</span>
        </div>

        <Bell className="" />
      </div>
    </nav>
  );
};

const headerLinks: any[] = [
  { link: "/lesson/sections", linkText: "home" },
  { link: "/lesson/unit-detail", linkText: "courses" },
  { link: "/lesson/certificate", linkText: "certificate" },
];

export default Navbar;
