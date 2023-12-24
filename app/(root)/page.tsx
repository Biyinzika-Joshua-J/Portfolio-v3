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
      <div className=" flex flex-col lg:min-h-screen mb-36">
        <div className="flex-1">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-[90vh]">
            <div className=" lg:h-[90vh] lg:flex hidden flex-col justify-center">
              <h1 className="lg:text-7xl pb-4 text-textColor">Biyinzika Joshua</h1>
              <p className="lg:text-2xl text-gray-400">
               I transform UX designs into amazing{" "}
                <span className="text-primary font-bold">UIs</span>!!!
              </p>
            </div>
            <div className="lg:h-[90vh] flex items-center justify-center lg:mt-0 mt-20">
              <Image
                alt="Joshua smiling"
                src={"/assets/images/joshua.png"}
                height={300}
                width={300}
                className="lg:h-[350px] lg:w-[350px] h-[300px] w-[300px]  object-contain rounded-full"
              />
            </div>
            <div className="lg:hidden text-center bg-black mt-20 text-white py-4 flex flex-col justify-center">
              <h1 className="md:text-4xl text-4xl pb-4">Biyinzika Joshua</h1>
              <p className="text-2xl text-gray-300">
                I transform UX designs into <br />{" "}
                Amazing <span className="text-primary font-bold">UIs</span>!!
              </p>
            </div>
          </div>
        </div>
        <div>
          <SocialIcons />
        </div>
      </div>

      {/*skills section*/}
      <section className="my-36" id="skills">
        <div className="">
          <div className="">
            <h1 className="lg:text-7xl text-6xl text-textColor">My Skills</h1>
          </div>
          <div className="">
            <Icons />
          </div>
        </div>
      </section>

      {/*about section*/}
      <section className="my-36" id="about">
        <div className="">
          <h1 className="lg:text-7xl text-6xl text-textColor">About Me</h1>
        </div>
        <div className="pt-6">
          <p className="lg:text-3xl text-2xl text-gray-400">
            Hi👋, I'm Biyinzika Joshua from Uganda 🌍. Computer science 💻 and
            Chess are not just my professions; they're my passions. In 2020,
            amidst the global lockdown, I started coding.
            Fast forward a year later, I took on some freelance gigs, and boy,
            did they 10x my growth as a developer. 💡 By the end of 2021, I
            found my calling in frontend development. There's something magical about building user
            interfaces that resonates with me. ✨ Of course, I dabble in backend
            development too, with Python 🐍 and Django, and I'm currently learning
            Express js. 🚀 Thanks for taking the time to visit my website! If you're curious to dive deeper into my journey,
            feel free to follow the link below. Let's connect on Linkedin also!! 🚀🔗
          </p>
        </div>
        <div className="mt-10">
          <Link
            className="bg-black text-white py-4 px-4 text-2xl mt-10"
            href={"/journey"}
          >
            My Journey{" "}
            <FontAwesomeIcon className="ml-4" icon={faArrowRight} size="lg" />
          </Link>
        </div>
      </section>

      {/*projects section*/}
      <section className="my-36" id="projects">
        <div className="">
          <ProjectsList count={3} />
        </div>
        <div className="pt-36 flex items-center justify-center">
          <Link
            className="bg-black text-white py-4 px-4 text-2xl mt-10"
            href={"/projects"}
          >
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
