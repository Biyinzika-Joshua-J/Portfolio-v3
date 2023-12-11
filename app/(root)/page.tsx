import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "@/components/cards/ProjectCard/ProjectCard";
import { Projects } from "@/constants/constants";
import Icons from "@/components/skills/Icons";
import SocialIcons from "@/components/root/SocialIcons/SocialIcons";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <div className=" flex flex-col min-h-screen">
        <div className="flex-1">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-[90vh]">
            <div className=" lg:h-[90vh] lg:flex hidden flex-col justify-center">
              <h1 className="lg:text-6xl pb-4">Joshua Biyinzika</h1>
              <p className="text-lg line-clamp-2">
                Frontend Developer passionate about build user interfaces <br />{" "}
                that <span className="text-primary font-bold">convert</span>!
              </p>
            </div>
            <div className=" h-[90vh]">
              <Image
                alt="Joshua smiling"
                src={"/assets/images/joshua.png"}
                height={200}
                width={200}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="lg:hidden text-center bg-black text-white py-4 flex flex-col justify-center">
              <h1 className="text-4xl pb-4">Joshua Biyinzika</h1>
              <p className="text-2xl line-clamp-2">
                Frontend Developer passionate about build user interfaces <br />{" "}
                that <span className="text-primary font-bold">convert</span>!
              </p>
            </div>
          </div>
        </div>
        <div>
          <SocialIcons/>
        </div>
      </div>

      {/*skills section*/}
      <section className="mt-20">
        <div className="">
          <div className="">
            <h1 className="text-3xl font-bold">My Skills</h1>
          </div>
          <div className="">
            <Icons />
          </div>
        </div>
      </section>

      {/*about section*/}
      <section className="mt-20">
        <div className="">
          <h1 className="text-3xl font-bold">About Me</h1>
        </div>
        <div className="pt-6">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dolore doloribus quod itaque deserunt at iste aspernatur atque!
            Neque, sint aliquid culpa pariatur ipsum possimus eligendi enim
            officia voluptas beatae ad odit voluptatibus animi unde totam odio
            dicta aperiam. Magnam ea culpa eius beatae nobis veritatis tempora
            nisi? Ea vero porro maiores aut praesentium numquam cumque rem
            impedit, nisi explicabo, voluptatum distinctio. Maiores molestiae
            similique delectus eos ipsam accusantium architecto pariatur
            quisquam, doloremque necessitatibus, fuga dolorem rerum
            reprehenderit officia explicabo excepturi. Consequuntur modi dolorem
            alias unde illum sapiente dignissimos corrupti eius. Dolor tenetur
            architecto consequatur sapiente enim animi aperiam explicabo?
          </p>
        </div>
      </section>

      {/*projects section*/}
      <section className="py-20">
        <div className="">
          {Projects.map((Project, idx) => (
            <ProjectCard
              id={Project.id}
              name={Project.name}
              description={Project.description}
              images={Project.images}
              bgColor={Project.bgColor}
              key={idx}
            />
          ))}
        </div>
        <div className="pt-36 flex items-center justify-center">
          <Link className="bg-black text-white py-2 px-4" href={"/projects"}>
            See more Projects{" "}
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </Link>
        </div>
      </section>

      {/*contact section*/}
      <section className=""></section>
    </main>
  );
}
