import React from 'react';
import { FaShieldAlt } from 'react-icons/fa'; // Importing the warranty icon

const TyreCard = ({ image, name, warranty, amount, tyre }) => {
  return (
    <div className="relative">
      {/* Warranty Icon */}
      <div className="absolute top-0 right-0 bg-black text-white p-2 rounded-bl-lg flex items-center">
        <FaShieldAlt className="text-lg mr-1" />
        <span className="text-sm">6 Year Warranty</span>
      </div>

      <div className="bg-black bg-opacity-70 text-white justify-center text-center pt-2 hover:bg-red-600">
        <div className="p-3">
          <img src={image} alt={name} className="w-32 mx-auto mt-2" />
          <h2 className="text-lg font-bold">{name}</h2>
          <p>80/100</p>
          <p className="text-2xl font-bold">{amount}</p>
          <div className="rating text-yellow-500 font-bold text-2xl mb-3 relative w-max text-center mx-auto">
            <span className="absolute inset-0 overflow-hidden" style={{ width: '90%' }}>
              ★★★★★
            </span>
            ☆☆☆☆☆
          </div>
          <p className="text-sm text-green-400">Offer available</p>
          <p className="text-sm mt-2">Tubeless</p>
        </div>
        <img src={tyre} alt="Car Tire" className="mt-4 mx-auto" />
      </div>
    </div>
  );
};

export default TyreCard;
