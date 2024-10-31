

import React, { useContext, useState } from 'react';
import { context } from '../../context/Productcontext';
import { Link, useNavigate } from 'react-router-dom';
import Shouecollection from '../Shouecollection';
import { FaHeart } from 'react-icons/fa';
import { wishcontext } from '../../context/WshlistContext';
import { toast } from 'react-toastify';

const Home = () => {
  const { products, error, isLoading } = useContext(context);
  const { addToWishlist } = useContext(wishcontext)
  const navigate = useNavigate();


  const [likedProducts, setLikedProducts] = useState({});

  const toggleHeart = (productId) => {
    setLikedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading products: {error.message}</p>;
  }


  const handleaddTowishlist = (productId) => {
    addToWishlist(productId)
    toast.success("item added to wishlist")
  }
  return (
    <div className="bg-cover bg-center h-full w-full bg-gray-300 mt-[-28px]">
      <Shouecollection />
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {products.map((product) => (
          <div key={product._id}>
            <div className="w-[300px] h-[400px] bg-gray-200 border border-gray-200 rounded-lg shadow-md overflow-hidden group transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"> {/* Set fixed height */}
              <FaHeart
                color={likedProducts[product._id] ? "red" : "white"}
                onClick={() => {
                  toggleHeart(product._id);
                  handleaddTowishlist(product._id);
                }}
                className='ml-[270px] mt-3 cursor-pointer'
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

