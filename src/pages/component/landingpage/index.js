import React from "react";
import CountUp from "react-countup";
import Image from "next/image";

export default function LandingPage() {
  return (
    <section>
    <div className="relative md:hidden ">
      <div className="absolute p-4 animate-bounce "><p className='fixed font-bold text-white'>Hilux</p></div>
    </div>
      <div className="sm:px-4 lg:h-[90vh] md:bg-gradient-to-r from-blue-500 to-white to-90% relative sm:bg-blue-500  -z-10 pt-40 w-full">

        <div className=" md:container md:mx-auto lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1  flex justify-center items-center">
          <div className=" h-20 text-white sm:h-[40vh]">
            <h1 className="text-5xl font-semibold sm:text-3xl md:text-4xl md:w-2/4 lg:w-3/4">
              Discover Most Suitable Property
            </h1>
            <p className="md:w-3/4 md:my-4 lg:w-3/4">
              Find a varienty of propertiese that suit you very easily , forgetr
              all dificulties in finding a residence for you .
            </p>
            <div className=" p-2 bg-white border-none flex justify-between items-center sm:w-[100%] rounded-xl">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search property"
                className="border-none text-sm px-[1vw] py-[.5vw]"
              />
              <button className="bg-blue-400 px-[1.5vw] py-[.5vw] rounded-xl">
                Search
              </button>
            </div>
            <div className="mt-[2vw] flex gap-6 sm:gap-4 md:text-3xl justify-center md:mt-20 justify-between">
              <div>
                <p className=" sm:text-2xl md:text-3xl font-semibold">
                  <CountUp start={0} end={44} />
                  <b className="text-blue-900">k+</b>
                </p>
                <p>Premium</p>
              </div>
              <div>
                <p className=" sm:text-2xl md:text-3xl font-semibold">
                  <CountUp start={0} end={23} />
                  <b className="text-blue-900">k+</b>
                </p>
                <p>Happy</p>
              </div>
              <div>
                <p className=" sm:text-2xl md:text-3xl font-semibold">
                  <CountUp start={0} end={95} />
                  <b className="text-blue-900">k+</b>
                </p>
                <p>Award</p>
              </div>
              <div>
                <p className="sm:text-2xl md:text-3xl font-semibold">
                  <CountUp start={0} end={122} />
                  <b className="text-blue-900">k+</b>
                </p>
                <p>Premium</p>
              </div>
            </div>
          </div>
          <div className="flex sm:justify-center md:justify-center">
            <div className="relative -z-10">
              <div className="sm:h-40 sm:w-40 md:h-60 md:w-60 sm:-top-20 md:top-5 absolute rounded-[50%] left-8 bg-orange-300 blur-xl animate-pulse"></div>
              <div className="bg-orange-400 sm:h-40 sm:w-40 sm:-top-20 md:top-5 md:h-60 md:w-60 absolute rounded-[50%] blur-sm animate-pulse"></div>
            </div>
            <div>
              <img
                src="p1.jpg"
                alt=""
                className="rounded-t-full border-4 relative md:top-28 sm:top-0"
              />
            </div>
          </div>
        </div>
      </div>
      <marquee direction="left">
        <div className="md:container md:mx-auto md:mt-40 sm:mt-20 sm:grid sm:grid-cols-2 md:flex md:justify-around sm:place-content-center sm:place-items-center md:h-[70vh] bg-gradient-to-r  sm:h-[50vh]">
          <Image
            src="/extra 3.png"
            alt="logo"
            width={150}
            height={150}
            className="sm:w-2/4 lg:w-40 animate-bounce"
          />

          <Image
            src="/american.png"
            alt="logo"
            width={150}
            height={150}
            className="sm:w-2/4 lg:w-40 animate-bounce"
          />

          <Image
            src="/disney.png"
            alt="logo"
            width={150}
            height={150}
            className="sm:w-2/4 lg:w-40 animate-bounce"
          />

          <Image
            src="/equinix.png"
            alt="logo"
            width={150}
            height={150}
            className="sm:w-2/4 lg:w-40 animate-bounce"
          />
          <Image
            src="/company1.jpg"
            alt="logo"
            width={150}
            height={150}
            className="sm:w-2/4 lg:w-40 animate-bounce"
          />
          <Image
            src="/company2.png"
            alt="logo"
            width={150}
            height={150}
            className="sm:w-2/4 lg:w-40 animate-bounce"
          />
          <Image
            src="/company3.png"
            alt="logo"
            width={150}
            height={150}
            className="sm:w-2/4 lg:w-40 animate-bounce"
          />
          <Image
            src="/company4.png"
            alt="logo"
            width={150}
            height={150}
            className="sm:w-2/4 lg:w-40 animate-bounce"
          />
        </div>
      </marquee>
    </section>
  );
}
