import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FaBoxOpen, FaUsers, FaShoppingCart, FaRupeeSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Usercont } from '../context/UserContext';
import { Admincontext } from './Admin context/AdminContext';
const Adminhome = () => {

  const { users, orders, adproduct, totalRevenue } = useContext(Admincontext)
  const { admin } = useContext(Usercont)


  return (
    // product cards
    <div className='ml-[300px] mt-[80px] h-screen'>
      <div className='justify-items-center mr-32'>
        <div className='flex justify-center justify-items-center h-[330px] ml-[50px]'>
          <Link to={'/admin/productsa'}>
            <div className='bg-teal-50 w-[400px] h-[180px] mr-14 rounded-md shadow-2xl hover:transition-transform transform scale-100 hover:scale-110'>
              <div className='flex'>
                <div>
                  <h1 className='text-gray-700 text-3xl font-bold mr-64 mt-2'>Products</h1>
                  <h2 className='text-gray-700 font-bold mt-6 ml-[-200px] text-xl'>total products:{adproduct.length}</h2>
                </div>
                <div className='ml-[-200px] mt-14'>
                  <h1 className="text-gray-700 font-bold"><FaBoxOpen size={150} /></h1>
                </div>
              </div>
            </div>
          </Link>

          {/* //users card */}
          <Link to={'/admin/usera'}>
            <div className='bg-teal-50 w-[400px] h-[180px] rounded-md hover:transition-transform transform scale-100 hover:scale-110 shadow-2xl'>
              <div className='flex'>
                <div>
                  <h1 className='text-gray-700 text-3xl font-bold mr-64 mt-2'>Users</h1>
                  <h2 className='text-gray-700 font-bold mt-6 ml-[-150px] text-xl'>total users:{users.length}</h2>
                </div>
                <div className='relative mt-10'>
                  <div className='absolute -left-[160px]'>
                    <h1 className="text-gray-700 font-bold"><FaUsers size={150} /></h1>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className='flex mt-[-50px]'>
          {/* orders card */}
          <div className='flex justify-center justify-items-center'>
            <Link to={'/admin/order'}>
              <div className='bg-teal-50 w-[400px] pt-[1px] h-[180px] ml-[50px] rounded-md transition-transform transform scale-100 hover:scale-110 shadow-2xl'>
                <div className='flex'>
                  <div>
                    <h1 className='text-gray-700 text-3xl font-bold mr-64 mt-2'>Orders</h1>
                    <h2 className='text-gray-700 font-bold mt-6 ml-[-150px] text-xl'>total orders:{orders.length}</h2>
                  </div>
                  <div className='ml-[-150px] mt-5'>
                    <h1 className="text-gray-700 font-bold"><FaShoppingCart size={150} /></h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* total revenue card */}
          <div className='flex ml-4'> {/* Added margin-left here */}

            <div className='bg-teal-50 w-[400px] h-[180px] rounded-md transition-transform transform scale-100 hover:scale-110 shadow-2xl'>
              <div className='flex h-full'>
                <h1 className='text-gray-700 mt-6 text-[17px] font-bold '>Total Revenue:</h1>
                <div>
                  <h2 className='text-gray-700 font-bold mt-16 text-3xl'>₹{totalRevenue}</h2>
                </div>
                <div className='mt-4'>
                  <h1 className="text-gray-700 font-bold"><FaRupeeSign size={150} /></h1>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminhome;
