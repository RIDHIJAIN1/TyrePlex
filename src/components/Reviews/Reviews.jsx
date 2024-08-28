import React from "react";
import BannerImage from "../../../images/tire.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Reviews = () => {
  return (
    <div>
      <h1 className="text-3xl lg:text-4xl font-bold text-center mt-12">
        REVIEWS
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div
          className="hidden lg:block  bg-red-500 w-4/12 h-[500px] relative"
          style={{ clipPath: "polygon(0 1%, 100% 24%, 100% 87%, 0 100%)" }}
        >
          <div
            className="bg-black bg-opacity-90 w-full h-full absolute overflow-visible"
            style={{ clipPath: "polygon(0 1%, 100% 23%, 99% 73%, 0 85%)" }}
          ></div>
        </div>

        <div className=" absolute lg:ml-48 mt-20 hidden lg:block">
          <img
            src={BannerImage}
            alt="Logo"
            className=" max-w-xs transform hover:scale-105 hover:rotate-6 transition-transform duration-300"
          />
        </div>
        <div className="w-full lg:w-8/12 p-12 flex justify-center lg:mt-10 lg:pl-28">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <div className="card bg-white text-gray-900 border border-gray-300 shadow-md hover:shadow-lg active:shadow-none rounded-lg p-6 transition-transform transform hover:-translate-x-0.5 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 relative inline-block w-64 ">
                <div className="bg-black text-6xl mb-2 h-12 w-12 rounded-full"></div>
                <div className="title font-bold mt-6 mb-3">Easy Cheesy1</div>
                <p className="description leading-relaxed min-h-[6em] mb-3">
                  This cheesy, juicy ultimate comforting lunch or quick and easy
                  dinner recipe.
                </p>
                <div className="rating text-yellow-500 font-bold text-2xl mb-3 relative w-max">
                  <span
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: "90%" }}
                  >
                    ★★★★★
                  </span>
                  ☆☆☆☆☆
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="card bg-white text-gray-900 border border-gray-300 shadow-md hover:shadow-lg active:shadow-none rounded-lg p-6 transition-transform transform hover:-translate-x-0.5 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 relative inline-block w-64 ">
                <div className="bg-black text-6xl mb-2 h-12 w-12 rounded-full"></div>
                <div className="title font-bold mt-6 mb-3">Easy Cheesy1</div>
                <p className="description leading-relaxed min-h-[6em] mb-3">
                  This cheesy, juicy ultimate comforting lunch or quick and easy
                  dinner recipe.
                </p>
                <div className="rating text-yellow-500 font-bold text-2xl mb-3 relative w-max">
                  <span
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: "90%" }}
                  >
                    ★★★★★
                  </span>
                  ☆☆☆☆☆
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card bg-white text-gray-900 border border-gray-300 shadow-md hover:shadow-lg active:shadow-none rounded-lg p-6 transition-transform transform hover:-translate-x-0.5 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 relative inline-block w-64 ">
                <div className="bg-black text-6xl mb-2 h-12 w-12 rounded-full"></div>
                <div className="title font-bold mt-6 mb-3">Easy Cheesy1</div>
                <p className="description leading-relaxed min-h-[6em] mb-3">
                  This cheesy, juicy ultimate comforting lunch or quick and easy
                  dinner recipe.
                </p>
                <div className="rating text-yellow-500 font-bold text-2xl mb-3 relative w-max">
                  <span
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: "90%" }}
                  >
                    ★★★★★
                  </span>
                  ☆☆☆☆☆
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card bg-white text-gray-900 border border-gray-300 shadow-md hover:shadow-lg active:shadow-none rounded-lg p-6 transition-transform transform hover:-translate-x-0.5 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 relative inline-block w-64 ">
                <div className="bg-black text-6xl mb-2 h-12 w-12 rounded-full"></div>
                <div className="title font-bold mt-6 mb-3">Easy Cheesy1</div>
                <p className="description leading-relaxed min-h-[6em] mb-3">
                  This cheesy, juicy ultimate comforting lunch or quick and easy
                  dinner recipe.
                </p>
                <div className="rating text-yellow-500 font-bold text-2xl mb-3 relative w-max">
                  <span
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: "90%" }}
                  >
                    ★★★★★
                  </span>
                  ☆☆☆☆☆
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
