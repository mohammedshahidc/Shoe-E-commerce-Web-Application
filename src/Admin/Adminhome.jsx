import React from 'react'
import { FaBoxOpen } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Adminhome = () => {
  return (
    <div className='ml-[300px] mt-[230px]'>
      <div className=' justify-items-center mr-32 '>
        <div className='flex justify-center justify-items-center h-[330px] ml-[50px]  '>
          <Link to={'/admin/productsa'}>
            <div className='bg-stone-400 w-[400px] h-[180px] mr-14 mt-[-120px] rounded-md shadow-2xl hover:transition-transform transform scale-100 hover:scale-110 '>
              <div className='flex'>
                <div>
                  <h1 className='text-gray-700 text-3xl font-bold mr-64 mt-2 '>Products</h1><br />
                  {/* <h1 className='text-gray-700 font-bold text-4xl mr-52'>20</h1> */}
                </div>
                <div className='ml-[-200px] mt-14'>
                  <h1 className="text-gray-700 font-bold "><FaBoxOpen size={150} /></h1>
                </div>
              </div>
            </div>
          </Link>
          <Link to={'/admin/usera'}>
            <div className='bg-stone-400 w-[400px] h-[180px] mt-[-120px] rounded-md hover:transition-transform transform scale-100 hover:scale-110 shadow-2xl'>
              <div className='flex'>
                <div>
                  <h1 className='text-gray-700 text-3xl font-bold mr-64 mt-2 '>Users</h1><br />
                  {/* <h1 className='text-gray-700 font-bold text-4xl mr-52'>20</h1> */}
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

        <div className='flex justify-center justify-items-center pt-10'>
          <Link to={'/admin/order'}>
            <div className='bg-stone-400 w-[400px] h-[180px] pt-4 mt-[-250px] rounded-md tran hover:transition-transform transform scale-100 hover:scale-110 shadow-2xl'>
              <div className='flex'>
                <div>
                  <h1 className='text-gray-700 text-3xl font-bold mr-64 mt-2 '>Orders</h1><br />
                  {/* <h1 className='text-gray-700 font-bold text-4xl mr-52'>20</h1> */}
                </div>
                <div className='ml-[-150px] mt-5'>
                  <h1 className="text-gray-700 font-bold "> <FaShoppingCart size={150} /></h1>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>

  )
};

export default Adminhome;
