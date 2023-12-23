import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faChevronRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "@/components/cards/ProjectCard/ProjectCard";
import { Projects } from "@/constants/constants";
import Icons from "@/components/skills/Icons";
import SocialIcons from "@/components/root/SocialIcons/SocialIcons";
import ProjectsList from "@/components/ProjectsList/ProjectsList";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <div className=" flex flex-col min-h-screen mb-36">
        <div className="flex-1">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-[90vh]">
            <div className=" lg:h-[90vh] lg:flex hidden flex-col justify-center">
              <h1 className="lg:text-7xl pb-4">Biyinzika Joshua</h1>
              <p className="lg:text-2xl text-gray-400">
                Frontend Developer passionate about build user interfaces {" "}
                that <span className="text-primary font-bold">convert</span>!
              </p>
            </div>
            <div className=" lg:h-[90vh]">
              <Image
                alt="Joshua smiling"
                src={"/assets/images/joshua.png"}
                height={200}
                width={200}
                className="h-1/2 w-1/2 rounded-full object-contain"
              />
            </div>
            <div className="lg:hidden text-center bg-black text-white py-4 flex flex-col justify-center">
              <h1 className="md:text-4xl text-4xl pb-4">Biyinzika Joshua</h1>
              <p className="text-2xl text-gray-300">
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
      <section className="my-36">
        <div className="">
          <div className="">
            <h1 className="lg:text-7xl text-6xl">My Skills</h1>
          </div>
          <div className="">
            <Icons />
          </div>
        </div>
      </section>

      {/*about section*/}
      <section className="my-36">
        <div className="">
          <h1 className="lg:text-7xl text-6xl">About Me</h1>
        </div>
        <div className="pt-6">
          <p className="lg:text-3xl text-2xl">
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
        <div className="mt-10">
        <Link className="bg-black text-white py-4 px-4 text-2xl mt-10" href={"/journey"}>
           My Journey{" "}
            <FontAwesomeIcon className="ml-4" icon={faArrowRight} size="lg" />
          </Link>
        </div>
      </section>

      {/*projects section*/}
      <section className="my-36">
        <div className="">
         <ProjectsList count={3} />
        </div>
        <div className="pt-36 flex items-center justify-center">
          <Link className="bg-black text-white py-4 px-4 text-2xl mt-10" href={"/projects"}>
            See more Projects{" "}
            <FontAwesomeIcon className="ml-4" icon={faArrowRight} size="lg" />
          </Link>
        </div>
      </section>

      {/*contact section*/}
      <section className=""></section>
    </main>
  );
}
