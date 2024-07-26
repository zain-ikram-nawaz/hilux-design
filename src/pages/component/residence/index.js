import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import { IoIosArrowBack } from "react-icons/io";
// import { MdArrowForwardIos } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function Residence() {
  return (
    <main id="residence">
      <div className="md:container md:mx-auto sm:px-4">
        <div className="my-8">
          <p className="text-blue-500 font-semibold sm:text-2xl lg:text-3xl">
            Best Choice.
          </p>
          <h1 className="text-5xl font-semibold mt-2 text-zinc-700 sm:text-3xl md:text-4xl">
            Popular Residences.
          </h1>
        </div>

        <main  className="lg:container lg:mx-auto  md;mt-20 gap-2">
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              300: {
                width: 300,
                slidesPerView: 1,
              },
              640: {
                width: 640,
                slidesPerView: 2,
              },

              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
              992: {
                width: 992,
                slidesPerView: 3,
              },
              1200: {
                width: 1200,
                slidesPerView: 3,
              },
              1400: {
                width: 1400,
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide className="px-2">
              {" "}
              <div>
                <img
                  src="home8.jpg"
                  alt=""
                  width="100%"
                  className="rounded-xl h-[26vh]"
                />
                <p className="sm:text-2xl">
                  <b className="text-blue-500 md:text-3xl sm:text-2xl">$</b>{" "}
                  200
                </p>
                <h1 className=" font-semibold leading-tight text-blue-500 ">
                  Aliva private Garden{" "}
                </h1>
                <p className="capitalize w-64 mt-2 ">
                  Street The Garden City of miraflares, lima - pera Av.sol #9867
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2">
              {" "}
              <div>
                <img
                  src="home9.jpg"
                  alt=""
                  width="100%"
                  className="rounded-xl h-[26vh]"
                />
                <p className=" sm:text-2xl">
                  <b className="text-blue-500 md:text-3xl sm:text-2xl">$</b>{" "}
                  200
                </p>
                <h1 className=" leading-tight  text-blue-500 ">
                  Aliva private Garden{" "}
                </h1>
                <p className="capitalize w-64 mt-2 ">
                  Street The Garden City of miraflares, lima - pera Av.sol #9867
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2">
              {" "}
              <div>
                <img
                  src="hom1.jpg"
                  alt=""
                  width="100%"
                  className="rounded-xl h-[26vh]"
                />
                <p className=" sm:text-2xl">
                  <b className="text-blue-500 md:text-3xl sm:text-2xl ">$</b>{" "}
                  200
                </p>
                <h1 className="font-semibold leading-tight text-blue-500 ">
                  Aliva private Garden{" "}
                </h1>
                <p className="capitalize w-64 mt-2 ">
                  Street The Garden City of miraflares, lima - pera Av.sol #9867
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2">
              {" "}
              <div>
                <img
                  src="home2.jpg"
                  alt=""
                  width="100%"
                  className="rounded-xl h-[26vh]"
                />
                <p className=" sm:text-2xl">
                  <b className="text-blue-500 md:text-3xl sm:text-2xl">$</b>{" "}
                  200
                </p>
                <h1 className=" font-semibold leading-tight text-blue-500 ">
                  Aliva private Garden{" "}
                </h1>
                <p className="capitalize w-64 mt-2 ">
                  Street The Garden City of miraflares, lima - pera Av.sol #9867
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2 pb-10">
              {" "}
              <div>
                <img
                  src="home3.jpg"
                  alt=""
                  width="100%"
                  className="rounded-xl h-[26vh]"
                />
                <p className="  sm:text-2xl">
                  <b className="text-blue-500 md:text-3xl sm:text-2xl">$</b> 200
                </p>
                <p className="font-semibold leading-tight text-blue-500">
                  Aliva private Garden{" "}
                </p>
                <h1 className="capitalize w-64 mt-2">
                  Street The Garden City of miraflares, lima - pera Av.sol #9867
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2 pb-10">
              {" "}
              <div>
                <img
                  src="home4.jpg"
                  alt=""
                  width="100%"
                  className="rounded-xl h-[26vh]"
                />
                <p className="  sm:text-2xl">
                  <b className="text-blue-500 md:text-3xl sm:text-2xl">$</b> 200
                </p>
                <p className="font-semibold leading-tight text-blue-500">
                  Aliva private Garden{" "}
                </p>
                <h1 className="capitalize w-64 mt-2">
                  Street The Garden City of miraflares, lima - pera Av.sol #9867
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2 pb-10">
              {" "}
              <div>
                <img
                  src="home5.jpg"
                  alt=""
                  width="100%"
                  className="rounded-xl h-[26vh]"
                />
                <p className="  sm:text-2xl">
                  <b className="text-blue-500 md:text-3xl sm:text-2xl">$</b> 200
                </p>
                <p className="font-semibold leading-tight text-blue-500">
                  Aliva private Garden{" "}
                </p>
                <h1 className="capitalize w-64 mt-2">
                  Street The Garden City of miraflares, lima - pera Av.sol #9867
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2 pb-10">
              {" "}
              <div>
                <img
                  src="home6.jpg"
                  alt=""
                  width="100%"
                  className="rounded-xl h-[26vh]"
                />
                <p className="  sm:text-2xl">
                  <b className="text-blue-500 md:text-3xl sm:text-2xl">$</b> 200
                </p>
                <p className="font-semibold leading-tight text-blue-500">
                  Aliva private Garden{" "}
                </p>
                <h1 className="capitalize w-64 mt-2">
                  Street The Garden City of miraflares, lima - pera Av.sol #9867
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2 pb-10">
              {" "}
              <div>
                <img
                  src="home8.jpg"
                  alt=""
                  width="100%"
                  className="rounded-xl h-[26vh]"
                />
                <p className="  sm:text-2xl">
                  <b className="text-blue-500 md:text-[2vw] sm:text-2xl">$</b> 200
                </p>
                <p className="font-semibold leading-tight text-blue-500">
                  Aliva private Garden{" "}
                </p>
                <h1 className="capitalize w-64 mt-2">
                  Street The Garden City of miraflares, lima - pera Av.sol #9867
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2 pb-10">
              {" "}
              <div>
                <img
                  src="home7.jpg"
                  alt=""
                  width="100%"
                  className="rounded-xl h-[26vh]"
                />
                <p className="  sm:text-2xl">
                  <b className="text-blue-500 md:text-3xl sm:text-2xl">$</b> 200
                </p>
                <p className="font-semibold leading-tight text-blue-500">
                  Aliva private Garden{" "}
                </p>
                <h1 className="capitalize w-64 mt-2">
                  Street The Garden City of miraflares, lima - pera Av.sol #9867
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2 pb-10">
              {" "}
              <div>
                <img
                  src="home9.jpg"
                  alt=""
                  width="100%"
                  className="rounded-xl h-[26vh]"
                />
                <p className="  sm:text-2xl">
                  <b className="text-blue-500 md:text-3xl sm:text-2xl">$</b> 200
                </p>
                <p className="font-semibold leading-tight text-blue-500">
                  Aliva private Garden{" "}
                </p>
                <h1 className="capitalize w-64 mt-2">
                  Street The Garden City of miraflares, lima - pera Av.sol #9867
                </h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </main>
      </div>
    </main>
  );
}
