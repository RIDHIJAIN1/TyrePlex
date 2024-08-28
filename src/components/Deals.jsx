
import React from 'react';
import Car from '../../images/car.png';
import Mrf from '../../images/mrf.png';

const Deals = () => {
  return (
    <div className='flex flex-col lg:flex-row relative'>
      <div className='flex-1'>
        <div className='text-2xl md:text-3xl lg:text-4xl font-bold pl-5 md:pl-10 lg:pl-20 pt-10 lg:pt-20'>DEALS IN</div>
        
        <div className='flex flex-wrap justify-start pt-5 md:pt-10 pl-5 md:pl-10 lg:pl-20'>
          {Array(8).fill().map((_, index) => (
            <div key={index} className="flex items-center justify-center m-3 p-1 w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-lg shadow-md">
              <img src={Mrf} alt="Image" className="object-contain w-full h-full"/>
            </div>
          ))}
        </div>
      </div>

      <div className='hidden lg:block relative flex-1'>
        <div className='bg-red-500 bg-opacity-90 h-[400px] md:h-[500px] lg:h-[600px] max-w-full absolute -top-10 left-0 right-0 mx-auto' 
             style={{ clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 55% 100%)' }} >
        </div>
       
<img className='absolute right-10 md:right-20 top-20 md:top-40 w-48 md:w-64 lg:w-auto transform hover:scale-105 hover:rotate-6 transition-transform duration-300'
     src={Car} 
     alt="Car" />
      </div>
    </div>
  );
}

export default Deals;