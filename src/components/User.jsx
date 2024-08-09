import React, { useContext } from 'react'
import { FaUser } from 'react-icons/fa';
import { Usercont } from '../Apiservices/UserContext';
import { Link } from 'react-router-dom';



const User = () => {
    const { curuser,handlelogout } = useContext(Usercont)
    const username=curuser?.input?.username
    const userid=curuser?.id

    if(!curuser){
        return(
            <div>
                <h1>user is not available</h1>
                <Link to="/login"><button>Log in</button></Link>
            </div>
        )
    }
    

    return (

        <div className='flex items-center justify-center min-h-[100px] p-8 mt-10 bg-gray-500'>
            <div className="w-full max-w-md p-8 bg-gray-500 shadow-md rounded-lg">
                <FaUser className="w-32 h-32 mx-auto rounded dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y dark:divide-gray-500">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl text-gray-500">{username}</h2>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-600"> an active user</p>
                        <p>id:{userid}</p>
                        <button className='bg-red-300 rounded-sm p-1 font-semibold m-2' onClick={handlelogout}>Log out</button>
                        <Link to={'/login'}>
                            <button className='bg-blue-800 text-white rounded-sm p-1 font-semibold'>Log into another Account</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default User

