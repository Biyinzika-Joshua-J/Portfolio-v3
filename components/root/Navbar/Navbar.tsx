"use client";
import React, { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import { NavbarLinks } from "@/constants/constants";
import Hamburger from "./Hamburger";
import { channel } from "diagnostics_channel";

const Navbar = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const changeColorHandler = () => {
      if (window.scrollY >= 90) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    };
    window.addEventListener("scroll", changeColorHandler);
    return () => {
      window.addEventListener("scroll", changeColorHandler);
    };
  }, []);
  return (
    <>
      <nav
        className={`transition-all ease-in-out duration-500 fixed top-0 left-0 z-10 py-2 w-full ${
          changeColor && "bg-black text-white"
        }`}
      >
        <div className="mx-auto lg:w-[85%] w-[90%] max-w-6xl">
          <div className="flex justify-between items-center">
            <div className="">
              <Link href={"/"}>
                <span className="text-3xl lg:text-5xl">
                  Joshua
                  <span className="font-extrabold text-4xl text-primary">
                    .
                  </span>
                </span>
              </Link>
            </div>
            <div className="hidden lg:block">
              {NavbarLinks.map((linkItem, idx) => (
                <Link
                  href={`${linkItem.route}`}
                  className="capitalize ml-8 text-2xl"
                  key={idx}
                >
                  {linkItem.text}
                </Link>
              ))}
            </div>
            <div className="lg:hidden block">
              <Hamburger open={open} onClick={() => handleOpen()} />
            </div>
          </div>
        </div>
        <MobileNavbar open={open} setOpen={setOpen} />
      </nav>
    </>
  );
};

export default Navbar;
