import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-10 mt-20">
      <div className="mx-auto w-[85%] flex justify-between items-center">
        <div className="">
          <div className="">
            <span className="">
              I'm currently available to work on a new project. <br/> Kindly{" "}
              <span className="text-indigo-700">
                <Link href={"mailto:joshuabiyinzika22@gmail.com"}>
                  email me
                </Link>
              </span>{" "}
              if you would like to work together.
            </span>
          </div>
          <div className="mt-10">
              <span className="text-gray-400">© All Rights Reserved Joshua Biyinzika.</span>
          </div>
        </div>
        <div className="">
          <Link href={"/"} className="">
            <FontAwesomeIcon icon={faLinkedin} size="xl" className="" />
          </Link>
          <Link href={"/"} className="ml-4">
            <FontAwesomeIcon icon={faTwitter} size="xl" className="ml-4" />
          </Link>
          <Link href={"/"} className="ml-4">
            <FontAwesomeIcon icon={faEnvelope} size="xl" className="ml-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
