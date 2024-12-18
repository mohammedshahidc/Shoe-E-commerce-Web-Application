import React, { useContext, useEffect, useState } from 'react'
import { context } from '../context/Productcontext';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { HiX } from 'react-icons/hi';
import axios from 'axios';
import { Admincontext } from './Admin context/AdminContext';

const ProductdtA = () => {
    const navigate = useNavigate()
    const { adproduct, productByid, ProductByid, deleteproduct, getAllproducts } = useContext(Admincontext)

    console.log("pBYID", ProductByid);
    const handledelete = async (productId) => {
        try {
            await deleteproduct(productId)
            navigate("/admin/productsa")
            await getAllproducts()
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className='flex flex-col items-center bg-neutral-300 p-4 mt-8 sm:mt-16 ml-[330px] '>
            {ProductByid.map((product) => (

                <div key={product._id} className='flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-md mb-4 p-4 w-full max-w-4xl'>
                    <div className='flex'>
                        <div> <Link to={("/admin/productsa")}><button className=' rounded-full bg-black text-white transition duration-300 ease-in-out transform hover:scale-110' >
                            <HiX />
                        </button></Link> </div>
                        <img
                            src={product.image}
                            alt={product.name}
                            className='w-full h-auto sm:w-1/2 md:h-[450px] object-cover mb-4 sm:mb-0 md:mr-4'
                        />
                        <div className='flex flex-col items-center md:items-start text-center sm:text-left'>
                            <h1 className='font-bold text-xl sm:text-3xl mb-2'>{product.name}</h1>
                            <h2 className='font-bold text-lg sm:text-2xl mb-2'>{product.type}'s classic shoe</h2>
                            <h3 className='font-bold text-lg sm:text-xl mb-2'>₹ {product.price} & free shipping</h3>
                            <p className='text-base mb-4'>
                                {product.description} <br />
                                Brand: {product.brand} <br />
                                Reviews: {product.reviews}
                            </p>
                            <div className='flex p-5'>
                                <Link to={`/admin/productsa/${product._id}/editproduct`}>
                                    <button class='btn' id='edit'>Edit</button>
                                </Link>
                                <button class='btn' id='dlt' type='button' onClick={() => handledelete(product._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductdtA
