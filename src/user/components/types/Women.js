
import React, { useContext, useState } from 'react';
import { context } from '../../../context/Productcontext';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { wishcontext } from '../../../context/WshlistContext';
import { toast } from 'react-toastify';

const Women = () => {
    const { products } = useContext(context);
   
    const {addToWishlist, removeFromWishlist}=useContext(wishcontext)

    const [likedProducts, setLikedProducts] = useState({});

    const toggleHeart = (productId) => {
        setLikedProducts((prev) => ({
            ...prev,
            [productId]: !prev[productId], 
        }));
    };


        const handleaddTowishlist=(productId)=>{
            addToWishlist(productId)
        }
        const handleRemoveFromWishlist = (productId) => {
            removeFromWishlist(productId);
            toast.info("Item removed from wishlist");
          };

    return (
        <div className='bg-cover bg-center h-full w-full bg-teal-50'>
            <h1 className='fonts pt-6'>Feel the Fit, Love the Look – Shoes That Capture Attention.</h1>
            <div className='flex flex-wrap justify-center gap-6 p-6'>
                {products.filter((item) => (item.type === "women")).map((item) => (
                    <div key={item._id}>
                        <div className="w-[300px] h-[400px] bg-teal-50 border border-gray-200 rounded-lg shadow-md overflow-hidden group transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                            
                        <FaHeart
                color={likedProducts[item._id] ? "red" : "light-teal"}
                onClick={() => {
                  toggleHeart(item._id); 
                  if (likedProducts[item._id]) {
                    removeFromWishlist(item._id);
                  } else {
                    handleaddTowishlist(item._id);
                  }
                }}
                className='ml-[270px] mt-3 cursor-pointer'
                size={20}
              />
                            <Link to={item._id} className="relative block">
                                <img
                                    src={item.image}
                                    alt='product image'
                                    className="w-full h-48 object-cover transition-transform transform group-hover:scale-105 duration-300 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
                            </Link>
                            <div className="p-4 h-24">
                                <h5 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h5>
                                <h5 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h5>
                                <h5 className="text-xl font-semibold text-gray-900 mb-2">₹ {item.price}</h5>
                                <p className="text-gray-700 mb-4">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Women;

