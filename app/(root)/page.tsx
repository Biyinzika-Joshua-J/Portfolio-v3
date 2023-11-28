import Image from "next/image";

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
        <div className="lg:h-[10vh] bg-black w-full">socials</div>
      </div>
    </main>
  );
}
