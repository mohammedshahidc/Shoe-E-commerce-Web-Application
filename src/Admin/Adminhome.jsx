import axios from 'axios';
import React, { useContext } from 'react';
import { FaBoxOpen, FaUsers, FaShoppingCart, FaRupeeSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Usercont } from '../context/UserContext';
import { Admincontext } from './Admin context/AdminContext';

const Adminhome = () => {
  const { users, orders, adproduct, totalRevenue } = useContext(Admincontext);
  const { admin } = useContext(Usercont);

  return (
    <div className="ml-[300px] mt-[80px] h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Products Card */}
        <Link to={'/admin/productsa'}>
          <div className="bg-teal-50 w-full h-[180px] rounded-md shadow-2xl p-4 flex flex-col items-center hover:scale-105 transition-transform">
            <h1 className="text-gray-700 text-3xl font-bold">Products</h1>
            <h2 className="text-gray-700 font-bold text-xl">Total Products: {adproduct.length}</h2>
            <FaBoxOpen size={80} className="text-gray-700 mt-2" />
          </div>
        </Link>

        {/* Users Card */}
        <Link to={'/admin/usera'}>
          <div className="bg-teal-50 w-full h-[180px] rounded-md shadow-2xl p-4 flex flex-col items-center hover:scale-105 transition-transform">
            <h1 className="text-gray-700 text-3xl font-bold">Users</h1>
            <h2 className="text-gray-700 font-bold text-xl">Total Users: {users.length}</h2>
            <FaUsers size={80} className="text-gray-700 mt-2" />
          </div>
        </Link>

        {/* Orders Card */}
        <Link to={'/admin/order'}>
          <div className="bg-teal-50 w-full h-[180px] rounded-md shadow-2xl p-4 flex flex-col items-center hover:scale-105 transition-transform">
            <h1 className="text-gray-700 text-3xl font-bold">Orders</h1>
            <h2 className="text-gray-700 font-bold text-xl">Total Orders: {orders.length}</h2>
            <FaShoppingCart size={80} className="text-gray-700 mt-2" />
          </div>
        </Link>

        {/* Total Revenue Card */}
        <div className="bg-teal-50 w-full h-[180px] rounded-md shadow-2xl p-4 flex flex-col items-center hover:scale-105 transition-transform">
          <h1 className="text-gray-700 text-3xl font-bold">Total Revenue</h1>
          <h2 className="text-gray-700 font-bold text-xl">₹{totalRevenue}</h2>
          <FaRupeeSign size={80} className="text-gray-700 mt-2" />
        </div>
      </div>
    </div>
  );
};

export default Adminhome;
