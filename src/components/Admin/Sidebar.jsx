import React, { useContext, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { Usercont } from '../../Apiservices/UserContext';

const Sidebar = () => {
  const [sidenav, setSidenav] = useState(true);
  const{handleLogout}=useContext(Usercont)

  return (
    <div className="font-poppins antialiased  w-screen flex flex-row  top-0 fixed">
     
      <button
        onClick={() => setSidenav(!sidenav)}
        className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden z-10"
      >
        <svg
          className="w-5 h-5 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          
        </svg>
      </button>
      <div
        className={`bg-gray-100 h-screen md:block shadow-xl px-3 w-60 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out ${sidenav ? 'translate-x-0' : '-translate-x-60'} md:translate-x-0`}
        onClick={() => setSidenav(false)}
      >
        <div className="space-y-6 md:space-y-10 mt-10">
          <h1 className="font-bold text-4xl text-center md:hidden">
            D<span className="text-teal-600">.</span>
          </h1>
          
          <div className="space-y-3">
            <img
              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="Avatar user"
              className="w-10 md:w-16 rounded-full mx-auto"
            />
            <div>
              <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
                Mohammed shahid
              </h2>
              <p className="text-xs text-gray-500 text-center">Administrator</p>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
           <NavLink to={'/admin'}>
           <div className='className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"'>
                <svg
                className="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <h1>Dash board</h1>
           </div>
           </NavLink>
             
          <NavLink to={'/admin/productsa'}>
          <div
              
              className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg
                className="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
              <h1>Products</h1>
            </div>
          </NavLink>
           
           
           <NavLink to={'/admin/usera'}>
           <div
             
             className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
           >
             <svg
               className="w-6 h-6 fill-current inline-block"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
               <path
                 fillRule="evenodd"
                 d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                 clipRule="evenodd"
               />
             </svg>
             <h1>Users</h1>
           </div>
           </NavLink>
           
            <div className='hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out' onClick={handleLogout}>
            <Link><button className='text-gray-700 hover:text-black'> <FaSignOutAlt size={20} id='bt'/> </button></Link>
            <h1>Log out</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
