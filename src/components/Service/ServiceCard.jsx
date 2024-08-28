import React from 'react'
import Button from '../Button'

const ServiceCard = ({image,title , bookButton}) => {
  return (
    
       <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 justify-center mx-auto text-center">
          <div className="bg-white rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:border hover:border-gray-300">
            <img src={image} alt="Card Image" className="w-92 h-52 object-cover rounded-t-lg text-center justify-center mx-auto"/>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
              <Button>{bookButton}</Button>
            </div>
          </div>
          
        </div>
      
  )
}

export default ServiceCard
