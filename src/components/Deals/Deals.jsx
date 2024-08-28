import React from 'react';
import Car from '../../../images/car.png';
import Mrf from '../../../images/mrf.png';
const Deals = () => {
  return (
    <div className='flex flex-row relative'>
      <div className='w-8/12 lg:w-6/12'>
        <div className='text-2xl md:text-3xl lg:text-4xl font-bold pl-5 md:pl-10 lg:pl-20 pt-10 lg:pt-20 mx-2'>DEALS IN</div>
        <div className='flex flex-wrap justify-start pt-5 md:pt-10 pl-5 md:pl-10 lg:pl-20'>
          {Array(6).fill().map((_, index) => (
            <div key={index} className="flex items-center justify-center m-3 p-1 w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-lg shadow-md">
              <img src={Mrf} alt="Image" className="object-contain w-full h-full" />
            </div>
          ))}
        </div>
      </div>
      <div className='relative w-4/12 lg:w-6/12 overflow-hidden lg:overflow-visible'>
        <div className='bg-red-500 bg-opacity-90 h-[115%] lg:h-[132%] w-[200%] lg:w-[100%] relative -top-[15%] lg:-top-[15%] right-[100%] lg:right-0'
          style={{ clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 55% 100%)' }} >
        </div>
          <img className='relative right-0 lg:-right-[15%] -top-[70%] lg:-top-[110%] max-w-max w-[150%] lg:w-[75%]' src={Car} alt="Car" />
      </div>
    </div>
  );
}
export default Deals;