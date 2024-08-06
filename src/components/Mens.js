import React, { useContext, useEffect, useState } from 'react'
import { context } from '../Apiservices/Productcontext'
import { Link, useNavigate } from 'react-router-dom'


const Mens = () => {
  const navigate=useNavigate()
    const {products}=useContext(context)
   
  const filter=products.filter((product)=>(product.type==="men"))

  return (
   <div className='bg-cover bg-center h-full w-full bg-white'>
    <div className='flex flex-wrap justify-center gap-6 p-6'>
    {filter.map((product)=>(
         <div
         className="w-[300px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden gap-6 p-6"
         key={product.id}
       >
         <img
           src={product.image}
           alt='product image'
           className="w-full h-48 object-cover"
         />
         <div className="p-4">
         <h5 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h5>
           <h5 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h5>
           <h5 className="text-xl font-semibold text-gray-900 mb-2"> ₹ {product.price}</h5>
           <p className="text-gray-700 mb-4">{product.description}</p>
           <Link to={product.id}> <button className='bg-blue-950 text-white rounded-md py-2 px-4 w-full hover:bg-black' >
           Product detailes
           </button></Link>
         </div>
       </div>
    ))
}

    </div>
    
    
   </div>
  )
}

export default Mens
