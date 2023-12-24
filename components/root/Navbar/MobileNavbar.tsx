import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavbarLinks } from "@/constants/constants";

interface Props<T>{
  open:T;
  setOpen:React.Dispatch<React.SetStateAction<T>>;
}

const MobileNavbar = ({ open, setOpen }:Props<boolean>) => {
  const closedStyles = {
    clipPath: "circle(100px at 90% -100%)",
    WebkitClipPath: "circle(100px at 90% -100%)",
  };

  const openedStyles = {
    clipPath: "circle(2000px at 90% -10%)",
    WebkitClipPath: "circle(2000px at 90% -10%)",
  };

  return (
    <div
      style={open ? { ...openedStyles } : { ...closedStyles }}
      className={`z-50 transition-all ease-in-out duration-[2s] flex justify-center items-center fixed h-[100vh] bg-[#000] w-[100%] top-0 left-0`}
    >
      <ul className="text-center">
        {
          NavbarLinks.map((link, idx) => (
            <li key={idx} className="my-8 text-3xl text-white font-bold">
            <Link
              onClick={() => setOpen(false)}
              className="transition-all duration-200 ease-in-out hover:text-gray-400"
              href={`/${link.route}`}
            >
              {link.text}
            </Link>
          </li>
          ))
        }
      </ul>
    </div>
  );
};

export default MobileNavbar;
