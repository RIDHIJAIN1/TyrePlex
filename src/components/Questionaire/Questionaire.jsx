import React from "react";

const Questionaire = () => {
  return (
    <div className="px-4 py-6 sm:px-8 sm:py-10 lg:px-16 lg:py-12 w-full">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-4xl bg-white bg-opacity-70 rounded-lg shadow-md p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4 text-center">
            Have a question about Tyres?
          </h2>

          <form className="flex flex-col sm:flex-row items-center w-full">
            <input
              type="email"
              className="bg-gray-100 text-black border-0 rounded-md sm:rounded-l-md sm:rounded-r-none p-3 w-full focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black-500 transition ease-in-out duration-150"
              placeholder="Ask or search question"
            />
            <button className="mt-3 sm:mt-0 sm:ml-2 bg-red-500 text-white p-3 rounded-md sm:rounded-r-md sm:rounded-l-none focus:outline-none transition ease-in-out duration-150">
              Subscribe
            </button>
          </form>

          <div className="flex justify-center mt-4">
            <a href="#" className="text-sm">
              Get an answer in 24 hours from our experts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionaire;
