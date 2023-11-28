import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter, faLinkedin, 
} from "@fortawesome/free-brands-svg-icons";


export default function Home() {
  return (
    <main className="">
      <div className=" flex flex-col min-h-screen">
        <div className=" flex-1">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-[90vh]">
            <div className=" lg:h-[90vh] flex flex-col justify-center">
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
          </div>
        </div>
        <div className="flex justify-between items-center lg:h-[10vh] w-full border-t-[2px] border-b-[2px] border-[#ddd]">
        <Link className="" href={"/"}>
        <FontAwesomeIcon
        icon={faTwitter}
        className="text-4xl"
      />
        </Link>
        <Link className="" href={"/"}>
        <FontAwesomeIcon
        icon={faLinkedin}
        className="text-4xl"
      />
        </Link>
        <Link className="" href={"/"}>
        <FontAwesomeIcon
        icon={faEnvelope}
        className="text-4xl"
      />
        </Link>
        <Link className="" href={"/"}>
        <FontAwesomeIcon
        icon={faGlobe}
        className="text-4xl"
      />
        </Link>
        </div>
      </div>
    </main>
  );
}
