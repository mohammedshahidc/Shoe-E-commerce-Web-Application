import React from 'react';
import shoue from "./components/images/Nike.png";

const Shouecollection = () => {
  return (
    
    <div className="bg-gradient-to-r from-gray-100 to-teal-100 h-screen flex flex-col justify-center items-start relative px-4 ">
      <div className="text-left mb-12 ml-8"> 
        <h1 className="text-4xl md:text-5xl font-bold text-black tracking-wider">Shoe Club</h1>
        <p className="mt-4 text-lg text-black">"FIND YOUR FIT: SHOES MADE FOR COMFORT AND STYLE!"</p>
        <button className="bg-orange-500 text-white py-3 px-6 rounded-full mt-10 transition-transform transform hover:scale-110 duration-300 ease-in-out hover:shadow-lg">
          SHOP NOW
        </button>
      </div>
      <div className="absolute bottom-0 right-0 mb-8 animate-float">
        <img
          src={shoue}
          alt="Shoe"
          className="w-[350px] h-[450px] md:w-[450px] md:h-[595px] transition-transform transform hover:scale-105 duration-500 ease-in-out"
        />
      </div>
    </div>
    
  );
};

export default Shouecollection;
