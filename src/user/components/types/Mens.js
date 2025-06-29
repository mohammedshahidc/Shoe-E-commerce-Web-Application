import React, { useContext, useEffect, useState } from 'react';
import { context } from '../../../context/Productcontext';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { wishcontext } from '../../../context/WshlistContext';
import { toast } from 'react-toastify';
import { cartcontext } from '../../../context/Cartproduct';
import Spinner from '../../../context/Loader/Spinner';

const Mens = () => {
  const { products,loading } = useContext(context);
  const { addtoCart, handledeleet, fetchCartData, cart } = useContext(cartcontext);
  const { addToWishlist, removeFromWishlist, wish } = useContext(wishcontext);

  const filter = products.filter((product) => product.type === "men");

  const [likedProducts, setLikedProducts] = useState({});
  const [cartpro, setCartpro] = useState({})
 
  useEffect(() => {
    const initialLikedProducts = {};
    wish.forEach((item) => {
      initialLikedProducts[item._id] = true;
    });
    setLikedProducts(initialLikedProducts);
  }, [wish]);

  useEffect(() => {
    const initialCartProducts = {};
    cart.forEach((item) => {
      initialCartProducts[item.product._id] = true; 
    });
    setCartpro(initialCartProducts);
  }, [cart]);

  
  const handleAddToWishlist = (productId) => {
    addToWishlist(productId);
    setLikedProducts((prev) => ({ ...prev, [productId]: true }));
  };

  
  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
    setLikedProducts((prev) => ({ ...prev, [productId]: false }));
    toast.info("Item removed from wishlist");
  };

  
  const handleAddToCart = async (item) => {
    await addtoCart(item);
    await fetchCartData(); 
  };
  if(loading){
    return <Spinner/>
  }

  return (
    <div className="bg-cover bg-center h-full w-full bg-teal-50">
      <h1 className="fonts pt-6">Kick Up Your Style – Shoes That Match Every Look and Mood.</h1>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {filter.map((product) => (
          <div key={product._id}>
            <div className="w-[300px] h-[400px] bg-teal-50 border border-gray-200 rounded-lg shadow-md overflow-hidden group transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">

             
              <FaHeart
                onClick={() => {
                  if (likedProducts[product._id]) {
                    handleRemoveFromWishlist(product._id);
                  } else {
                    handleAddToWishlist(product._id);
                  }
                }}
                className={`ml-[270px] mt-3 cursor-pointer ${likedProducts[product._id] ? 'text-red-500' : 'text-black'}`}
                size={20}
              />

             
              <FaShoppingCart
                onClick={() => handleAddToCart(product._id)}
                className={`ml-[235px] mt-[-20px] cursor-pointer ${cartpro[product._id] ? 'text-blue-500' : 'text-black'}`}
                size={20}
              />

            
              <Link to={product._id} className="relative block">
                <img
                  src={product.image}
                  alt="product"
                  className="w-full h-48 object-cover transition-transform transform group-hover:scale-105 duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
              </Link>
              <div className="p-4 h-24">
                <h5 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h5>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h5>
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

export default Mens;
