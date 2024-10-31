import React, { useContext, useEffect, useState } from 'react'
import { context } from '../../context/Productcontext'
import { useParams } from 'react-router-dom'
import { cartcontext } from '../../context/Cartproduct'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductDetailes = () => {
    const { id } = useParams()
    const { products } = useContext(context)
    const { addtoCart } = useContext(cartcontext)
    const [filt, setFilt] = useState([])

    useEffect(() => {
        setFilt(products.filter((product) => product._id === id))
    }, [products, id])

    const handlecart = (product) => {
        addtoCart(product)
        toast.success("item added to cart")
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-300'>
            {filt.map((product) => (
                <div key={product._id} className='flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md mb-4 p-4 w-full max-w-4xl'>
                    <img
                        src={product.image}
                        alt={product.name}
                        className='w-full h-auto md:w-1/2 md:h-[450px] object-cover mb-4 md:mb-0 md:mr-4 rounded-md'
                    />
                    <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                        <h1 className='font-bold text-xl md:text-3xl mb-2'>{product.name}</h1>
                        <h2 className='font-bold text-lg md:text-2xl mb-2'>{product.type}'s Classic Shoe</h2>
                        <h3 className='font-bold text-lg md:text-xl mb-2'>₹ {product.price} & Free Shipping</h3>
                        <p className='text-base mb-4'>
                            {product.description} <br />
                            <span className='font-semibold'>Brand:</span> {product.brand} <br />
                            <span className='font-semibold'>Reviews:</span> {product.reviews}
                        </p>
                        <div className='flex flex-col md:flex-row gap-3'>
                            <button 
                                className='bg-blue-950 text-white rounded-md py-2 px-4 hover:bg-black'
                                onClick={() => handlecart(product)}
                            >
                                Add to Cart
                            </button>
                            <Link to="/">
                                <button className='bg-blue-950 text-white rounded-md py-2 px-4 hover:bg-black'>
                                    Back
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductDetailes
