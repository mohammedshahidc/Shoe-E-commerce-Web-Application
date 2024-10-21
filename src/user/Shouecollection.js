// import React from 'react';
// import shoue from "./components/images/Nike.png";

// const Shouecollection = () => {
//   return (
//     <div className="bg-gradient-to-r from-gray-100 to-gray-500 h-screen flex flex-col justify-center items-center relative mt-0">
//       <div className="text-center mb-52 mr-[700px]">
//         <h1 className="text-5xl font-bold text-black tracking-wider">shoe club</h1>
//         <p className="mt-4 text-lg text-black">"FIND YOUR FIT: SHOES MADE FOR COMFORT AND STYLE!"</p>
//         <button className="bg-orange-500 text-white py-3 px-6 rounded-full mt-10 transition-transform transform hover:scale-110">
//           SHOP NOW
//         </button>
//       </div>
//       <div className="absolute mb-8 ml-[700px]">
//         <img
//           src={shoue}
//           alt="Shoe"
//           className="w-[450px] h-[595px]"
//         />
//       </div>
//     </div>
//   );
// };

// export default Shouecollection;




import React from 'react';
import shoue from "./components/images/Nike.png";

const Shouecollection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-500 h-screen flex flex-col justify-center items-center relative mt-0">
      <div className="text-center mb-52 mr-[700px]">
        <h1 className="text-5xl font-bold text-black tracking-wider">shoe club</h1>
        <p className="mt-4 text-lg text-black">"FIND YOUR FIT: SHOES MADE FOR COMFORT AND STYLE!"</p>
        <button className="bg-orange-500 text-white py-3 px-6 rounded-full mt-10 transition-transform transform hover:scale-110 duration-300 ease-in-out hover:shadow-lg">
          SHOP NOW
        </button>
      </div>
      <div className="absolute mb-8 ml-[700px] animate-float">
        <img
          src={shoue}
          alt="Shoe"
          className="w-[450px] h-[595px] transition-transform transform hover:scale-105 duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Shouecollection;
