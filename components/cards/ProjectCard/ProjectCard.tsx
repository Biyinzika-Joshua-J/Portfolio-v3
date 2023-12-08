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
    <div className="">
      <div className="">
        <h1 className="">{name}</h1>
        <p className="w-[50%] line-clamp-3">
            {description}
        </p>
        <div className="">
            <Link href={"/"} className="">
                <FontAwesomeIcon icon={faChevronRight} size="lg"/>
                <span>View Project</span>
            </Link>
        </div>
      </div>
      <div className="">
        <div className="w-full h-96 bg-black"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
