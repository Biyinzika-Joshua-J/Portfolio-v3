"use client"
import React from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from 'react-tooltip';


const FooterSocialIcons = () => {
  return (
    <>
         <Link target='__blank' href={"https://www.linkedin.com/in/biyinzika-joshua-j/"} className="" data-tooltip-id="linkedin" data-tooltip-content="Linkedin">
            <Tooltip id="linkedin" />
            <FontAwesomeIcon icon={faLinkedin} size="xl" className="" />
          </Link>
          <Link target='__blank' href={"https://twitter.com/JoshJosephB"} className="ml-4" data-tooltip-id="twitter" data-tooltip-content="Twitter">
          <Tooltip id="twitter" />
            <FontAwesomeIcon icon={faTwitter} size="xl" className="ml-4" />
          </Link>
          <Link target='__blank' href={"mailto:joshuabiyinzika22@gmail.com"} className="ml-4" data-tooltip-id="email" data-tooltip-content="Email">
          <Tooltip id="email" />
            <FontAwesomeIcon icon={faEnvelope} size="xl" className="ml-4" />
          </Link>
          <Link target='__blank' href={"https://github.com/Biyinzika-Joshua-J"} className="ml-4" data-tooltip-id="github" data-tooltip-content="My Github">
          <Tooltip id="github" />
            <FontAwesomeIcon icon={faGithub} size="xl" className="ml-4" />
          </Link>
    </>
  )
}

export default FooterSocialIcons