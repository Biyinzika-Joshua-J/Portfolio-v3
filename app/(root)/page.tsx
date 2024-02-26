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
              <h1 className="lg:text-7xl pb-4 text-textColor">
                Biyinzika Joshua
              </h1>
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
                I transform UX designs into <br /> Amazing{" "}
                <span className="text-primary font-bold">UIs</span>!!
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
          <div className="about lg:text-3xl text-2xl text-gray-400">
            <p>Hey there👋!</p>
            <p>For the TL;DR peeps:</p>

            <p>
              👉 I'm a frontend developer who loves to build user interfaces
              with React.js.
            </p>

            <p>And now for the rest of us who can sit through long essays:</p>

            <p>Don't know my name? Scroll to the top of this page.😊</p>

            <p>Currently based in Kampala/Uganda.🌍</p>

            <p>Not your average frontend developer:</p>

            <p>- I do backend also with Python and Django.🐍</p>

            <p>- I'm a Kravist aka. I practice Krav Maga.🥋</p>

            <p>Facts:</p>

            <p>- Started coding in march of 2020.</p>

            <p>- I can center a div.</p>

            <p>- I use React js & Next js to build user interfaces.</p>

            <p>- I suck at design, so I absolutely adore the UX folks.</p>

            <p>
              - I write about tech and a soon to be author of "Unsh*t your Git".
            </p>

            <p>- Plus, I think I'm quirky.</p>

            <p>I'm always down to connect and explore new opportunities.</p>

            <p>Feel free to shoot me a DM and say hi :)</p>

            <p>And you're SO welcome 😊</p>

            <p>Joshua✌️</p>
          </div>
        </div>

        {/*<div className="mt-10">
          <Link
            className="bg-black text-white py-4 px-4 text-2xl mt-10"
            href={"/journey"}
          >
            My Journey{" "}
            <FontAwesomeIcon className="ml-4" icon={faArrowRight} size="lg" />
          </Link>
  </div>*/}
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
