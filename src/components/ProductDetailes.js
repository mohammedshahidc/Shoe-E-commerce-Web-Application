import React, { useContext, useEffect, useState } from 'react'
import { context } from '../Apiservices/Productcontext'
import { useParams } from 'react-router-dom'
import { cartcontext } from '../Apiservices/Cartproduct'
import { Link } from 'react-router-dom'



const ProductDetailes = () => {
    const {id}=useParams()
 const {products}=useContext(context)
 const {addtoCart}=useContext(cartcontext)
 const [filt,setFilt]=useState([])
 useEffect(()=>{
    setFilt(products.filter((product)=>(product.id==id)))
 },[products])

 const handlecart=(produt)=>{
    addtoCart(produt)
 }
  return (
    <div className='flex flex-col items-center bg-neutral-300 p-4 mt-8 md:mt-16'>
            {filt.map((product) => (
                <div key={product.id} className='flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md mb-4 p-4 w-full max-w-4xl'>
                    <img
                        src={product.image}
                        alt={product.name}
                        className='w-full h-auto md:w-1/2 md:h-[450px] object-cover mb-4 md:mb-0 md:mr-4'
                    />
                    <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                        <h1 className='font-bold text-xl md:text-3xl mb-2'>{product.name}</h1>
                        <h2 className='font-bold text-lg md:text-2xl mb-2'>{product.type}'s classic shoe</h2>
                        <h3 className='font-bold text-lg md:text-xl mb-2'>₹ {product.price} & free shipping</h3>
                        <p className='text-base mb-4'>
                            {product.description} <br />
                            Brand: {product.brand} <br />
                            Reviews: {product.reviews}
                        </p>
                        <div className='flex'>
                        <button className='bg-blue-950 text-white rounded-md py-2 px-4 hover:bg-black' onClick={()=>{handlecart(product)}}>
                            Add to cart
                        </button>
                        <Link to="/"> <button className='bg-blue-950 text-white rounded-md py-2 px-4 hover:bg-black ml-3 w-28'>Back</button> </Link>
                        </div>
                        
                    </div>
                </div>
            ))}
        </div>
  )
}

export default ProductDetailes
