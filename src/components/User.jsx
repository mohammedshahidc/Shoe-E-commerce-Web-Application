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
                <Link to="/login"><button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-black">Log in</button></Link>
            </div>
        )
    }
    
    

    return (
        
        <div className="container mt-10">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white p-3 py-4 rounded-lg shadow-md">
              <div className="text-center">
              <FaUser className="w-32 h-32 mx-auto rounded dark:bg-gray-500 aspect-square" />


              </div>
              <div className="text-center mt-3">
                <span className="bg-gray-600 p-1 px-4 rounded text-white">Pro</span>
                <h5 className="mt-2 mb-0 text-lg font-semibold">{username}</h5>
                <span className="text-gray-600">UI/UX Designer</span>
                <div className="px-4 mt-1">
                  <p className="text-gray-700">
                    is an user
                  </p>
                  <h1>user id : {userid}</h1>
                  <div>
                
                 <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-black" onClick={handlelogout} >Log out</button>
  
                  <Link>
                 <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-black" >Add new account</button>
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

export default User

