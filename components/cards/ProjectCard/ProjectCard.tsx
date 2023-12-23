import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  id: number;
  name: string;
  description: string;
  images: string[];
  bgColor: string;
  index : number;
  liveLink : string;
}

const ProjectCard = ({ id, name, description, images, bgColor, index, liveLink }: Props) => {
  const [primaryImage, secondaryImage] = images;

  return (
    <div key={id} className={`${index===0?'mt-0':'mt-52'}`}>
      <div className="">
        <h1 className="lg:text-7xl text-6xl pb-6">{name}</h1>
        <p className="md:w-[50%] w-[90%]  pb-6 lg:text-3xl text-2xl">
            {description}
        </p>
        <div className="pb-6">
            <Link target="__blank" href={liveLink} className="">
                <FontAwesomeIcon icon={faChevronRight} size="lg"/>
                <span className="ml-6 text-2xl">View Project</span>
            </Link>
            <Link target="__blank" href={`/project/${id}`} className="">
                <span className="ml-6 text-2xl">View Details</span>
            </Link>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
    <div className={`w-full h-80 hidden md:flex `} style={{ backgroundColor: bgColor }} ></div>
    <div className="hidden md:flex absolute top-36 left-1/2 transform -translate-x-1/2">
      <div className="-mt-2 ">
        <Image
            src={primaryImage}
            alt="Main image"
            height={1000}
            width={1000}
            className="object-cover rounded-2xl "
        />
      </div>
    <div className="lg:block hidden ml-4">
        <Image
            src={secondaryImage}
            alt="Secondary image"
            height={100}
            width={350}
            className="object-cover rounded-2xl"
        />
    </div>
    </div>
    <div className="md:hidden block">
    <Image
            src={primaryImage}
            alt="Main image"
            height={1000}
            width={1000}
            className="object-cover rounded-2xl "
        />
    </div>
</div>


    </div>
  );
};

export default ProjectCard;
