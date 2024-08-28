import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import BannerImage from "../../../images/tire.png";
import Button from "../Button";
import { MdVerified } from "react-icons/md";
import Model from "./Model";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-black text-white bg-opacity-70">
      <div className="container mx-auto flex flex-row lg:flex-row items-center lg:items-start justify-center">
        <div className="md:hidden block overflow-hidden relative h-full w-1/5">
          <img
            src={BannerImage}
            alt="Logo"
            style={{ transform: "translateX(-75%) scaleX(-1)" }}
            className="object-cover max-w-max w-auto h-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-4/5 md:w-full lg:w-full flex-none md:flex-1 lg:flex-1 pb-12 lg:pb-0 pr-8 md:pb-4 lg:pb-4 px-4 lg:px-10 mt-8 md:mt-16 lg:mt-24 lg:ml-20">
          <div className="bg-green-500 text-black text-sm flex w-20 rounded-md mb-2">
            <MdVerified className="m-1 space-y-4" />
            Verified
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6">
            SHREE HEMKUNT <span className="text-red-600">TYRES</span> AND
            SERVICES
          </h1>
          <div className="space-y-4">
            <div className="flex space-x-2">
              <div className="bg-green-500 text-black text-sm flex w-fit h-fit px-2 py-1 rounded-md">
                4.9{" "}
              </div>
              <div className="font-bold text-yellow-300">★★★★★</div>
              <a href="/" className="font-bold text-black-300 cursor-pointer">
                2278 Reviews{" "}
              </a>
              <div
                className="border-red-500 border-2 px-2 cursor-pointer"
                onClick={openModal}
              >
                Rate
              </div>
              <Model isOpen={isModalOpen} onClose={closeModal} />
            </div>
            <div className="flex items-center mb-2">
              <FaLocationDot className="text-red-600 mr-3 text-3xl" />
              <span className="text-sm lg:text-base">
                PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
              </span>
            </div>
            <div className="flex items-center mb-4">
              <IoIosTime className="text-red-600 mr-3 text-2xl" />
              <span className="text-sm lg:text-base">
                Open - Monday to Sunday - 10:00AM to 8:00PM
              </span>
            </div>
          </div>
          <div className="py-8">
            <Button>Get Directions</Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block flex-1 mt-8 lg:mt-0">
          <img
            src={BannerImage}
            alt="Logo"
            className="w-full max-w-xs mx-auto transform hover:scale-105 hover:rotate-6 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
