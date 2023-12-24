"use client"
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { Tooltip } from 'react-tooltip'

const SocialIcons = () => {
  return (
    <div className='flex justify-between items-center lg:h-[10vh] w-full border-t-[2px] border-b-[2px] border-[#ddd]'>
        <Link className="" target='__blank' href={"https://twitter.com/JoshJosephB"} data-tooltip-id="twitter" data-tooltip-content="My twitter account">
            <Tooltip id="twitter" />
            <FontAwesomeIcon icon={faTwitter} className="text-4xl text-textColor " />
          </Link>
          <Link className="" target='__blank' href={"https://www.linkedin.com/in/biyinzika-joshua-j/"} data-tooltip-id="linkedin" data-tooltip-content="Let's connect on linkedin">
            <Tooltip id="linkedin" />
            <FontAwesomeIcon icon={faLinkedin} className="text-4xl text-textColor" />
          </Link>
          <Link className="" target='__blank' href={"mailto:joshuabiyinzika22@gmail.com"} data-tooltip-id="email" data-tooltip-content="Shoot me an email">
          <Tooltip id="email" />
            <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-textColor" />
          </Link>
          <Link className="" target='__blank' href={"https://soarwithcode.com/"} data-tooltip-id="blog" data-tooltip-content="Check out my blog">
          <Tooltip id="blog" />
            <FontAwesomeIcon icon={faGlobe} className="text-4xl text-textColor" />
          </Link>
    </div>
  )
}

export default SocialIcons