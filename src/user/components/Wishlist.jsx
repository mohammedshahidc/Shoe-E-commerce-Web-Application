import React from 'react'
import shoue from "../components/images/shoue.png"
const Wishlist = () => {

    
  return (
    <div className="flex flex-row justify-between items-center p-2 gray-300 mt-4 px-3 rounded">
    <div className="mr-1">
        <img className="rounded w-[70px]" src={shoue} alt={"image"} />
    </div>
    <div className="flex flex-col items-center">
        <p className="font-bold">name</p>
    </div>
    <div className="flex flex-row items-center">
    <p className="font-bold">price</p>
    </div>
    <div>
        
    </div>
    <div className="flex items-center">
        <button className="text-white bg-red-500 rounded-sm p-1">Delete</button>
    </div>
</div>
  )
}

export default Wishlist
