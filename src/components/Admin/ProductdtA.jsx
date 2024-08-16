import React ,{useContext, useEffect, useState} from 'react'
import { context } from '../../Apiservices/Productcontext'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { HiX } from 'react-icons/hi';

const ProductdtA = () => {
    const {products}=useContext(context)
    const {id}=useParams()
    const [filt,setFilt]=useState([])
    useEffect(()=>{
        setFilt(products.filter((product)=>(product.id==id)))
    },[])
    const navigate=useNavigate()

  return (
    <div className='flex flex-col items-center bg-neutral-300 p-4 mt-8 md:mt-16 ml-[330px]'>
    {filt.map((product) => (
        <div key={product.id} className='flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md mb-4 p-4 w-full max-w-4xl'>
          <Link to={'/admin/productsa'}> <button className='relative top-[-200px] left-[830px] rounded-full bg-black text-white transition duration-300 ease-in-out transform hover: hover:scale-110 ' > <HiX /></button></Link>
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
                <div className='flex p-4'>
                <button className='bg-blue-700 text-white rounded-md w-[100px] h-[30px] hover:bg-black cursor-pointer'>Edit</button>
                <button className='bg-blue-700 text-white rounded-md w-[100px] h-[30px] hover:bg-black cursor-pointer'>Delete</button>
                </div>
                
            </div>
        </div>
    ))}
</div>
  )
}

export default ProductdtA
