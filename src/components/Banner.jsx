import React from 'react';
// import '../output.css';
import BannerImage from '../../images/tire.png';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import Button from './Button';

const Banner = () => {
  return (
    <div className="bg-black text-white bg-opacity-70">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Text Section */}
        <div className="flex-1 px-4 lg:px-10 mt-16 lg:mt-24 lg:ml-20">
          <h1 className="text-3xl lg:text-5xl font-bold mb-6">
            SHREE HEMKUNT <span className="text-red-600">TYRES</span> AND SERVICES
          </h1>
          <div className="space-y-4">
            <div className="flex items-center mb-2">
              <FaLocationDot className="text-red-600 mr-3 text-2xl" />
              <span className="text-sm lg:text-base">
                PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
              </span>
            </div>
            <div className="flex items-center mb-4">
              <IoIosTime className="text-red-600 mr-3 text-2xl" />
              <span className="text-sm lg:text-base">
                Open - Monday to Sunday - 10:00AM to 8:00PM
              </span>
            </div>
          </div>
          <div className='mt-8'>
            <Button>Get Directions</Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-8 lg:mt-0">
        <img 
  src={BannerImage} 
  alt="Logo" 
  className="w-full max-w-xs mx-auto transform hover:scale-105 hover:rotate-6 transition-transform duration-300"
/>

        </div>
      </div>
    </div>
  );
}

export default Banner;
