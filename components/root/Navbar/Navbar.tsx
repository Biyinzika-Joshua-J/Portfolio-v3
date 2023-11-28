import React from "react";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import { NavbarLinks } from "@/constants/constants";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 z-10 py-2 w-full">
        <div className="mx-auto lg:w-[85%] w-[90%] ">
          <div className="flex justify-between items-center">
            <div className="">
              <span className="text-3xl">
                Joshua
                <span className="font-extrabold text-4xl text-primary">.</span>
              </span>
            </div>
            <div className="">
                {
                    NavbarLinks.map((linkItem,idx) =>(
                        <Link href={linkItem.route} className="capitalize ml-8" key={idx}>
                             {linkItem.text}
                        </Link>
                    ))
                }
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
