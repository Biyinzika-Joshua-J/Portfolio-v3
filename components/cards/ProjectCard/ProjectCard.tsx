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
}

const ProjectCard = ({ id, name, description, images, bgColor }: Props) => {
  const [primaryImage, secondaryImage] = images;

  return (
    <div className="mt-40">
      <div className="">
        <h1 className="text-3xl font-bold pb-6">{name}</h1>
        <p className="w-[50%] line-clamp-3 pb-6">
            {description}
        </p>
        <div className="pb-6">
            <Link href={"/"} className="">
                <FontAwesomeIcon icon={faChevronRight} size="lg"/>
                <span className="ml-6">View Project</span>
            </Link>
        </div>
      </div>
      <div className="relative">
        <div className={`w-full h-80`} style={{backgroundColor:bgColor}}></div>
        <div className="absolute top-20 left-32">
            <Image
                src={primaryImage}
                alt="Main image"
                height={400}
                width={500}
                className="object-cover rounded-2xl"
            />
        </div>
        <div className="absolute top-24 left-[60%]">
            <Image
                src={secondaryImage}
                alt="secondary image"
                height={100}
                width={150}
                className="object-cover rounded-2xl"
            />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
