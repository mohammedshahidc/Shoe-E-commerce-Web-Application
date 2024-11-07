import React, { useContext, useState,useEffect } from 'react';
import { context } from '../../context/Productcontext';
import { Link, useNavigate } from 'react-router-dom';
import Shouecollection from '../Shouecollection';
import { FaHeart } from 'react-icons/fa';
import { wishcontext } from '../../context/WshlistContext';
import { toast } from 'react-toastify';
import { FaShoppingCart} from 'react-icons/fa';
import { Usercont } from '../../context/UserContext';
import { cartcontext } from '../../context/Cartproduct';

const Home = () => {
  const { products, error, isLoading } = useContext(context);
  const{addtoCart,handledeleet,fetchCartData}=useContext(cartcontext)
  const { addToWishlist, removeFromWishlist,wish } = useContext(wishcontext);
 const{curuser}=useContext(Usercont)
  const navigate = useNavigate();

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

  const handleaddTowishlist = (productId) => {
    addToWishlist(productId);
    setLikedProducts((prev) => ({ ...prev, [productId]: true }));
    toast.success("Item added to wishlist");
  };

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
    setLikedProducts((prev) => ({ ...prev, [productId]: false }));
    toast.info("Item removed from wishlist");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading products: {error.message}</p>;
  }

 const hanleaddtocart=async(item)=>{
  await addtoCart(item)
  await fetchCartData()
 }

//  const deletecart=async(item)=>{
//   await handledeleet(item)
//   await fetchCartData()
//  }
  
  return (
    <div className="bg-cover bg-center h-full w-full bg-gray-50 mt-[-28px]">
      <Shouecollection />
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {products.map((product) => (
          <div key={product._id}>
            <div className="w-[300px] h-[400px] bg-teal-50 border border-gray-200 rounded-lg shadow-md overflow-hidden group transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
              <FaHeart
                
                onClick={() => {
                  toggleHeart(product._id);
                  if (likedProducts[product._id]) {
                    handleRemoveFromWishlist(product._id);
                  } else {
                    handleaddTowishlist(product._id);
                  }
                }}
                className={`ml-[270px] mt-3 cursor-pointer ${likedProducts[product._id] ? 'text-red-500' : 'text-black'}`}
                size={20}
              />

              <FaShoppingCart
               
                onClick={() => {
                  toggleHeart(product._id);
                  hanleaddtocart(product._id);
                   }}
                className='ml-[235px] mt-[-20px] cursor-pointer text-black'
                size={20}
              />

            
              <Link to={product._id} className="relative block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform transform group-hover:scale-105 duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
              </Link>
              <div className="p-4 h-24">
                <h5 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h5>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">₹ {product.price}</h5>
                <p className="text-gray-700 mb-4">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
