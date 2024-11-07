
import React, { useContext, useState,useEffect } from 'react';
import { context } from '../../../context/Productcontext';
import { Link } from 'react-router-dom';
import { FaHeart,FaShoppingCart } from 'react-icons/fa';
import { cartcontext } from '../../../context/Cartproduct';
import { wishcontext } from '../../../context/WshlistContext';
import { toast } from 'react-toastify';

const Women = () => {
    const { products } = useContext(context);
    const{addtoCart,handledeleet,fetchCartData}=useContext(cartcontext)
   
    const {addToWishlist, removeFromWishlist,wish}=useContext(wishcontext)

    const [likedProducts, setLikedProducts] = useState({});

    const toggleHeart = (productId) => {
        setLikedProducts((prev) => ({
            ...prev,
            [productId]: !prev[productId], 
        }));
    };
    useEffect(()=>{
        const intialLikedproduct={}
        wish.forEach((item) => {
          intialLikedproduct[item._id] = true
        });
        setLikedProducts(intialLikedproduct)
        },[wish])

        const handleaddTowishlist=(productId)=>{
            addToWishlist(productId)
            setLikedProducts((prev) => ({ ...prev, [productId]: true }));
          
        }
        const handleRemoveFromWishlist = (productId) => {
            removeFromWishlist(productId);
            setLikedProducts((prev) => ({ ...prev, [productId]: false }));
            toast.info("Item removed from wishlist");
          };

          const hanleaddtocart=async(item)=>{
            await addtoCart(item)
            await fetchCartData()
           }
    return (
        <div className='bg-cover bg-center h-full w-full bg-teal-50'>
            <h1 className='fonts pt-6'>Feel the Fit, Love the Look – Shoes That Capture Attention.</h1>
            <div className='flex flex-wrap justify-center gap-6 p-6'>
                {products.filter((item) => (item.type === "women")).map((item) => (
                    <div key={item._id}>
                        <div className="w-[300px] h-[400px] bg-teal-50 border border-gray-200 rounded-lg shadow-md overflow-hidden group transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                            
                        <FaHeart
              
                onClick={() => {
                  toggleHeart(item._id); 
                  if (likedProducts[item._id]) {
                    removeFromWishlist(item._id);
                  } else {
                    handleaddTowishlist(item._id);
                  }
                }}
                className={`ml-[270px] mt-3 cursor-pointer ${likedProducts[item._id] ? 'text-red-500' : 'text-black'}`}

                size={20}
              />
               <FaShoppingCart
               
               onClick={() => {
                 toggleHeart(item._id);
                 hanleaddtocart(item._id);
                  }}
               className='ml-[235px] mt-[-20px] cursor-pointer text-black'
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

