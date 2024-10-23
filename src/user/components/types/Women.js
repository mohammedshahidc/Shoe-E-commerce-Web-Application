import React, { useContext, useEffect, useState } from 'react'
import { GetAllproducts } from '../../../context/Productcontext'
import { context } from '../../../context/Productcontext'
import { Link } from 'react-router-dom'


const Women = () => {
    const { products } = useContext(context)
    return (
        <div className='bg-cover bg-center h-full w-full bg-gray-200'>
            <div className='flex flex-wrap justify-center gap-6 p-6'>

                {products.filter((item) => (item.type === "women")).map((item) => (
                    <div className="w-[300px] bg-gray-200 border border-gray-200 rounded-lg shadow-md overflow-hidden hover:transition-transform transform scale-100 hover:scale-110" key={item._id}>
                        <Link to={item._id}>
                            <img
                                src={item.image}
                                alt='product image'
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h5 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h5>
                                <h5 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h5>
                                <h5 className="text-xl font-semibold text-gray-900 mb-2"> ₹ {item.price}</h5>
                                <p className="text-gray-700 mb-4">{item.description}</p>

                            </div>
                        </Link>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Women
