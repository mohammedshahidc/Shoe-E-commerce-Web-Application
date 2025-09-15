import React from 'react';
import shoue from "./components/images/Nike.png";

const Shouecollection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-[60vh] md:h-screen flex items-center justify-center px-4 md:px-12 lg:px-24">

      {/* Flex Container to align text and image in a row on all screens */}
      <div className="flex flex-row items-center justify-between w-full max-w-4xl space-x-4 md:space-x-8 lg:space-x-16">

        {/* Text Section */}
        <div className="text-left w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-wider">
            Shoe Club
          </h1>

          <p className="mt-2 text-sm sm:text-lg md:text-xl lg:text-2xl text-black max-w-xs md:max-w-md">
            "FIND YOUR FIT: SHOES MADE FOR COMFORT AND STYLE!"
          </p>

          <button className="bg-orange-500 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full mt-4 transition-transform transform hover:scale-110 duration-300 ease-in-out hover:shadow-lg">
            SHOP NOW
          </button>
        </div>

        {/* Image Section */}
        <div className="w-1/2 flex justify-center lg:justify-end"> {/* Align image to right on desktop */}
          <img
            src={shoue}
            alt="Shoe"
            className="w-[200px] h-[250px] sm:w-[250px] sm:h-[300px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] transition-transform hover:scale-105 duration-500 ease-in-out animate-bounce"
          />
        </div>

      </div>
    </div>
  );
};

export default Shouecollection;
