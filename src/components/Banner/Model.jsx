import React from "react";
import Shop from "../../../images/shop.jpg";

const Model = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full mx-4 md:mx-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black focus:outline-none"
        >
          ✖
        </button>

        <div className="flex items-center mb-6">
          <img
            src={Shop}
            alt="Dealer Image"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <h2 className="text-2xl font-bold text-black">
            SHREE HEMKUNT TYRES AND SERVICES
          </h2>
        </div>

        <div className="space-y-6">
          {["Cleanliness", "Services", "Staff"].map((category) => (
            <div key={category} className="flex items-center justify-between">
              <span className="text-lg text-black font-semibold">
                {category}
              </span>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <input
                    type="radio"
                    name={category.toLowerCase()}
                    id={`${category.toLowerCase()}_poor`}
                    className="hidden peer"
                  />
                  <label
                    htmlFor={`${category.toLowerCase()}_poor`}
                    className="peer-checked:bg-red-500 p-2 border-2 border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                  >
                    😡
                  </label>
                </div>
                <div className="text-center">
                  <input
                    type="radio"
                    name={category.toLowerCase()}
                    id={`${category.toLowerCase()}_good`}
                    className="hidden peer"
                  />
                  <label
                    htmlFor={`${category.toLowerCase()}_good`}
                    className="peer-checked:bg-yellow-500 p-2 border-2 border-yellow-500 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors cursor-pointer"
                  >
                    😐
                  </label>
                </div>
                <div className="text-center">
                  <input
                    type="radio"
                    name={category.toLowerCase()}
                    id={`${category.toLowerCase()}_excellent`}
                    className="hidden peer"
                  />
                  <label
                    htmlFor={`${category.toLowerCase()}_excellent`}
                    className="peer-checked:bg-green-500 p-2 border-2 border-green-500 rounded-full text-green-500 hover:bg-green-500 hover:text-white transition-colors cursor-pointer"
                  >
                    😊
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <label
            htmlFor="review"
            className="block text-lg font-semibold text-black"
          >
            Your review for this dealer
          </label>
          <textarea
            id="review"
            rows="4"
            className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-500 mt-2 text-black"
            placeholder="Share your experience about this dealer"
          ></textarea>
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default Model;
