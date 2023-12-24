import React from "react";
import Link from "next/link";
import FooterSocialIcons from "./FooterSocialIcons";
import { Tooltip } from 'react-tooltip'

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-10 mt-20">
      <div className="mx-auto max-w-6xl w-[85%] flex justify-between items-center md:flex-row flex-col">
        <div className="">
          <div className="">
            <span className="lg:text-2xl text-xl text-textColor">
              I'm currently available to work on a new project. <br/> Kindly{" "}
              <span className="text-indigo-700">
                <Link href={"mailto:joshuabiyinzika22@gmail.com"}>
                  email me
                </Link>
              </span>{" "}
              if you would like to work together.
            </span>
          </div>
          <div className="mt-10 md:block hidden ">
              <span className="text-gray-400 text-lg">© All Rights Reserved Joshua Biyinzika.</span>
          </div>
        </div>
        <div className="mt-10">
         <FooterSocialIcons/>
        </div>
        <div className="mt-10 md:hidden block ">
              <span className="text-gray-400 text-lg">© All Rights Reserved Joshua Biyinzika.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
