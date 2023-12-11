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
      <div className="relative flex items-center justify-center">
    <div className={`w-full h-80`} style={{ backgroundColor: bgColor }}></div>
    <div className="flex absolute top-36 left-1/2 transform -translate-x-1/2">
      <div className="-mt-6">
        <Image
            src={primaryImage}
            alt="Main image"
            height={500}
            width={500}
            className="object-cover rounded-2xl "
        />
      </div>
    <div className="lg:block hidden ml-4">
        <Image
            src={secondaryImage}
            alt="Secondary image"
            height={100}
            width={150}
            className="object-cover rounded-2xl"
        />
    </div>
    </div>
</div>


    </div>
  );
};

export default ProjectCard;
