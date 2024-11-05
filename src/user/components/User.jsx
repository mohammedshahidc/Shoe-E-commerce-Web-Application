import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Usercont } from '../../context/UserContext';
import { Link } from 'react-router-dom';

const User = () => {
  const { curuser, handlelogout, username } = useContext(Usercont);
  console.log("username :", username);

  if (!curuser) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-xl font-semibold mb-4">User not available</h1>
        <Link to="/login">
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-black transition duration-200">Log in</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center">
              <FaUser className="w-32 h-32 mx-auto rounded-full bg-gray-200 p-4" />
            </div>
            <div className="text-center mt-4">
              <span className="bg-gray-600 p-1 px-4 rounded text-white">Pro</span>
              <h5 className="mt-2 mb-0 text-lg font-semibold">{username}</h5>
              <span className="text-gray-600">UI/UX Designer</span>
              <div className="mt-4">
                {/* <p className="text-gray-700">User Details</p> */}
                <div className="flex justify-center space-x-2 mt-4">
                  <button
                    onClick={handlelogout}
                    className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-black transition duration-200'
                  >
                    Log out
                  </button>
                  <Link to={"/orders"}>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-black transition duration-200'>
                      View Orders
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
