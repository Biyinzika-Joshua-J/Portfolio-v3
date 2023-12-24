"use client";
import React from "react";
import { timelineElements } from "@/constants/constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SvgIcons from "@/components/icons/SvgIcons";

import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { faBlog, faBookBible, faBuildingColumns, faCode, faComputer, faDoorOpen, faPenNib, faSackDollar } from "@fortawesome/free-solid-svg-icons";

const CLangIcon = () => {
  return (
   <>
     <svg viewBox="0 0 128 128">
      <path
        fill="#659AD3"
        d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
      ></path>
      <path
        fill="#03599C"
        d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
      ></path>
      <path
        fill="#fff"
        d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
      ></path>
    </svg>
   </>
  );
};



const UpworkIcon = () => {
  return (
   <>
     <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Upwork"
      role="img"
      viewBox="0 0 512 512"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <rect width="512" height="512" rx="15%" fill="#6fda44"></rect>
        <path
          fill="#ffffff"
          d="M357.2,296.9c-17,0-33-7.2-47.4-18.9l3.5-16.6l0.1-.6c3.2-17.6,13.1-47.2,43.8-47.2c23,0,41.7,18.7,41.7,41.7S380.2,296.9,357.2,296.9L357.2,296.9z M357.2,171.4c-39.2,0-69.5,25.4-81.9,67.3c-18.8-28.3-33.1-62.2-41.4-90.8h-42.2v109.7c0,21.7-17.6,39.3-39.3,39.3s-39.3-17.6-39.3-39.3V147.8H71v109.7c0,44.9,36.5,81.8,81.4,81.8s81.4-36.9,81.4-81.8v-18.4c8.2,17.1,18.2,34.4,30.4,49.6l-25.8,121.4h43.1l18.7-88c16.4,10.5,35.2,17.1,56.8,17.1c46.2,0,83.8-37.8,83.8-84.1C440.9,209,403.4,171.4,357.2,171.4"
        ></path>
      </g>
    </svg>
   </>
  );
};

const ReactIcon = () => {
  return <>
    
    <svg viewBox="0 0 128 128">
            <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
            </svg>
          
  </>
}

const ShopifyIcon = () => {
  return (
    <>
      <FontAwesomeIcon icon={faShopify} size="2xl" className=" text-green-500"/>
    </>
  )
}
const BlogIcon = () => {
  return (
    <>
      <FontAwesomeIcon icon={faBlog} size="2xl" className="text-blue-500"/>
    </>
  )
}
const UniversityIcon = () => {
  return (
    <>
      <FontAwesomeIcon icon={faBuildingColumns} size="2xl" className="text-indigo-500"/>
    </>
  )}

const BibleIcon = () => {
  return (
    <>
      <FontAwesomeIcon icon={faBookBible} size="2xl" className="text-yellow-700"/>
    </>
  )
}

const PinniSoftIcon = () => {
  return (
    <>
     <FontAwesomeIcon icon={faDoorOpen} size="2xl" className="text-indigo-100"/>
    </>
  )
}

const BrightNetworkIcon = () => {
  return (
    <>
    <FontAwesomeIcon icon={faDoorOpen} size="2xl" className="text-indigo-100"/>
   </>
  )
}
const VolunteerIcon = () => {
  return (
    <>
    <FontAwesomeIcon icon={faCode} size="2xl" className="text-purple-700"/>
   </>
  )
}
const DollarIcon = () => {
  return (
    <>
    <FontAwesomeIcon icon={faSackDollar} size="2xl" className="text-white"/>
   </>
  )
}
const WritingIcon = () => {
  return (
    <>
    <FontAwesomeIcon icon={faPenNib} size="2xl" className="text-blue-300"/>
   </>
  )
}
const ComputerIcon = () => {
  return (
    <>
    <FontAwesomeIcon icon={faComputer} size="2xl" className="text-indigo-400"/>
   </>
  )
}

const events = [
  {
    date: "March 2020",
    title: "I Started Learning C",
    description:
      "My Journey starts with learning C. It got tough, and I hit pause for a bit 🤯💤.",
    icon: CLangIcon,
  },
  {
    date: "May 2020",
    title: "Switching to HTML, CSS, and JS",
    description:
      "Resumed 💪 the coding adventure 🌐, but this time switched gears to HTML, CSS, and JS. The catch? No computer! I coded on my trusty Samsung tablet, building pages and proving that we all start somewhere.",
  },
  {
    date: "June 2020",
    title: "Got a Real Computer!",
    description:
      "👋🖥️ Finally bid farewell to the tablet and welcomed a real computer into my life. Coding on a tablet? Let's just say it sucks!",
    icon: ComputerIcon,
  },
  {
    date: "August 2020",
    title: "First local Freelance Gig",
    description:
      "Celebrated 🎉 my first freelance gig! Crafted a website for one of my Aunties' craft shoe shop. The euphoria of putting something on the internet was unforgettable, even if looking back makes me cringe a bit.😅",
    icon: DollarIcon,
  },
  {
    date: "November 2020",
    title: "Joining Upwork",
    description:
      "🚀 Created an Upwork account after eight months of honing my skills. Getting a slice of the freelance pie on Upwork was no walk in the park!",
      icon: UpworkIcon,
  },
  {
    date: "February 2021",
    title: "First Freelance Client",
    description:
      "I landed 🤝 my first freelance client. The joy was unparalleled, but the reality hit hard—I was about to build a full-stack app without a clue about client-server architecture. Uff!!🤯",
    icon: UpworkIcon,
  },
  {
    date: "September 2021",
    title: "End of Freelance Contract",
    description:
      "End of my baptism-by-fire freelance contract. Grueling months of 10-hour days, Monday to Sunday. I consider it my initiation into the industry by fire.🔥🔥",
      icon: UpworkIcon,
  },
  {
    date: "October 2021",
    title: "Diving into React and Next JS",
    description:
      "Dived into React and Next JS 📚📚. Invested part of my earnings into courses after a 2000-line Vanilla JS file in a previous freelance gig made me wonder why I hadn't discovered React earlier.",
      icon:ReactIcon,
  },
  {
    date: "January 2022",
    title: "Continued Freelance Work",
    description:
      "Continued freelance work, this time collaborating with local businesses. Learned the art of being a good communicator, explaining technical concepts to clients effectively.",
      icon: UpworkIcon,
  },
  {
    date: "March 2022",
    title: "Exploring Shopify Development",
    description:
      "Explored Shopify development to ride the wave of drop-shipping. Learned the importance of committing to a single thing and becoming exceptionally good at it.",
      icon: ShopifyIcon,
  },
  {
    date: "August 2022",
    title: "Started a Blog",
    description:
      "Launched my blog - soarwithcode.com. Realized the power of sharing knowledge and experiences. Consistency? Well, still getting my act together - don't judge me! 😅",
    icon: BlogIcon,
  },
  {
    date: "October 2022",
    title: "Joining the University of London",
    description:
      "Joined the University of London. A life-changing decision, contrary to my previous resistance to the idea of Uni 🎓🎓.",
      icon:UniversityIcon,
  },
  {
    date: "November 2022",
    title: "Bible College Graduation",
    description:
      "Graduated 🎓 from Bible college. Thankful 🙏 🙏 for the two years of studying biblical studies.",
      icon: BibleIcon,
  },
  {
    date: "April 2023",
    title: "First Internship",
    description:
      "Kicked off my first internship, coding 👨‍💻 9 solid hours a day, six days a week. Crazy hard, but I grew to love it 😅.",
      icon: PinniSoftIcon,
  },
  {
    date: "June 2023",
    title: "Another Internship",
    description:
      "Another internship, arranged by my Uni. It emphasized the importance of clear communication, even if the technical work wasn't the primary focus.",
      icon: BrightNetworkIcon,
  },
  {
    date: "July 2023",
    title: "Volunteering as a Frontend Developer",
    description:
      "Started volunteering as a Frontend developer for 8billionminds, a company aiming to connect the globe through knowledge 🌍. Because sometimes, life isn't just about the exchange of time and money—it's about volunteering! 🙌",
    icon : VolunteerIcon,
  },
  {
    date: "August 2023",
    title: "Another Freelance Contract",
    description:
      "Signed another freelance contract, this time determined not to repeat past mistakes. Building a forex website, a fullstack app for learning about forex trading and accessing live trade breakdowns.",
    icon : DollarIcon,
  },
  {
    date: "November 2023",
    title: "Started building frontAcer",
    description:
      "Frontend interviews can be a challenge to prepare for - so I decided to build a platform to help frontend developers with the prep.. Amazing stuff!! 💪💪",
      icon : VolunteerIcon,
  },
  {
    date: "December 2023",
    title: "Started tutoring frontend development",
    description:
      "About this time, I got someone reach out with the desire to learn frontend development. The best way to level up in any skill is to teach it 👨‍🏫.. It has been a great journey.",
  },
  {
    date: "January 2024",
    title: "Started writing on Medium",
    description:
      "I strive to teach everything that I know, after-all, we don't teach because we are experts!! I started writing 📝about frontend development and computer science on medium and I am optimistic!!",
      icon : WritingIcon,
  },
];

const page = () => {
  return (
    <main className="mt-20 max-w-6xl mx-auto">
      <div className="w-full  bg-gray-200">
        <VerticalTimeline animate={true} animateDirection="bottom">
          {events.map((event, index) => (
            <VerticalTimelineElement
              icon={event.icon ? <event.icon /> : <SvgIcons />}
              visible={true}
              key={index}
              date={event.date}
              iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
              animate={true}
              animation={"fade-in"}
              contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(0, 0, 0)",
              }}
            >
              <h3 className="vertical-timeline-element-title font-bold">
                {event.title}
              </h3>
              <p className="text-gray-300">{event.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </main>
  );
};

export default page;
