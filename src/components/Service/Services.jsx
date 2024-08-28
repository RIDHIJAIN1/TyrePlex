import React from 'react';
import image from '../../../images/tire.png';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <div>
      <h1 className='text-3xl lg:text-4xl font-bold text-center pt-20'>SERVICES</h1>
      <div className='flex flex-wrap justify-center p-5'>
       <ServiceCard title="Wheel Balancing"bookButton="Book now" image={image}/> 
       <ServiceCard title="Wheel Balancing"bookButton="Book now" image={image}/> 
       <ServiceCard title="Wheel Balancing"bookButton="Book now" image={image}/> 
       <ServiceCard title="Wheel Balancing"bookButton="Book now" image={image}/>     
      </div>
    </div>
  );
};

export default Services;
