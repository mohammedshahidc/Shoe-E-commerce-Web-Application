// import React, { useContext, useState, useEffect } from 'react';
// import { context } from '../../../context/Productcontext';
// import { Link } from 'react-router-dom';
// import { FaHeart, FaShoppingCart } from 'react-icons/fa';
// import { cartcontext } from '../../../context/Cartproduct';
// import { wishcontext } from '../../../context/WshlistContext';
// import { toast } from 'react-toastify';
// import Spinner from '../../../context/Loader/Spinner';

// const Women = () => {
//     const { products,loading } = useContext(context);
//     const { addtoCart, fetchCartData, cart } = useContext(cartcontext);
//     const { addToWishlist, removeFromWishlist, wish } = useContext(wishcontext);

//     const [likedProducts, setLikedProducts] = useState({});
//     const [cartpro, setCartpro] = useState({})

//     useEffect(() => {
//         const initialLikedProducts = {};
//         wish.forEach((item) => {
//             initialLikedProducts[item._id] = true;
//         });
//         setLikedProducts(initialLikedProducts);
//     }, [wish]);

//     useEffect(() => {
//         const cartaddedpro = {}
//         cart.forEach((item) => {
//             cartaddedpro[item.product._id] = true
//         })
//         setCartpro(cartaddedpro)
//     }, [cart])
//     const handleAddToWishlist = (productId) => {
//         addToWishlist(productId);
//         setLikedProducts((prev) => ({ ...prev, [productId]: true }));
//     };


//     const handleRemoveFromWishlist = (productId) => {
//         removeFromWishlist(productId);
//         setLikedProducts((prev) => ({ ...prev, [productId]: false }));
//         toast.info("Item removed from wishlist");
//     };


//     const handleAddToCart = async (item) => {
//         await addtoCart(item);
//         await fetchCartData();
//         toast.success("Item added to cart");
//     };
//     if(loading){
//         return <Spinner/>
//       }
    

//     return (
//         <div className="bg-cover bg-center h-full w-full bg-teal-50">
//             <h1 className="fonts pt-6">Feel the Fit, Love the Look – Shoes That Capture Attention.</h1>
//             <div className="flex flex-wrap justify-center gap-6 p-6">
//                 {products
//                     .filter((item) => item.type === "women")
//                     .map((item) => (
//                         <div key={item._id}>
//                             <div className="w-[300px] h-[400px] bg-teal-50 border border-gray-200 rounded-lg shadow-md overflow-hidden group transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">


//                                 <FaHeart
//                                     onClick={() => {
//                                         if (likedProducts[item._id]) {
//                                             handleRemoveFromWishlist(item._id);
//                                         } else {
//                                             handleAddToWishlist(item._id);
//                                         }
//                                     }}
//                                     className={`ml-[270px] mt-3 cursor-pointer ${likedProducts[item._id] ? 'text-red-500' : 'text-black'
//                                         }`}
//                                     size={20}
//                                 />


//                                 <FaShoppingCart
//                                     onClick={() => handleAddToCart(item)}
//                                     className={`ml-[235px] mt-[-20px] cursor-pointer ${cartpro[item._id] ? 'text-blue-500' : 'text-black'}`}
//                                     size={20}
//                                 />

//                                 <Link to={item._id} className="relative block">
//                                     <img
//                                         src={item.image}
//                                         alt="product"
//                                         className="w-full h-48 object-cover transition-transform transform group-hover:scale-105 duration-300 ease-in-out"
//                                     />
//                                     <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
//                                 </Link>
//                                 <div className="p-4 h-24">
//                                     <h5 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h5>
//                                     <h5 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h5>
//                                     <h5 className="text-xl font-semibold text-gray-900 mb-2">₹ {item.price}</h5>
//                                     <p className="text-gray-700 mb-4">{item.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default Women;


import React, { useContext, useEffect, useState } from 'react';
import { context } from '../../../context/Productcontext';
import { Link } from 'react-router-dom';
import { wishcontext } from '../../../context/WshlistContext';
import { toast } from 'react-toastify';
import { cartcontext } from '../../../context/Cartproduct';
import Spinner from '../../../context/Loader/Spinner';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Women = () => {
  const { products, loading } = useContext(context);
  const { addtoCart, handledeleet, fetchCartData, cart } = useContext(cartcontext);
  const { addToWishlist, removeFromWishlist, wish } = useContext(wishcontext);

  const filter = products.filter((product) => product.type === "women");

  const [likedProducts, setLikedProducts] = useState({});
  const [cartpro, setCartpro] = useState({});

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

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
    toast.success("Item added to cart");
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-400 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-400/80"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-tight">
              Feel the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Fit</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Love the Look – Shoes That Capture Attention
            </p>
            <div className="mt-8 flex justify-center" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-1 w-24 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor" className="text-indigo-50"></path>
          </svg>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Women's Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium women's footwear designed for elegance and comfort
          </p>
          <div className="mt-4 flex justify-center items-center space-x-2" data-aos="fade-up" data-aos-delay="200">
            <span className="text-indigo-600 font-medium text-sm">{filter.length} Products</span>
            <div className="bg-gradient-to-r from-blue-600 to-purple-400 h-px w-8"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filter.map((product, index) => (
            <div 
              key={product._id} 
              className="group bg-gradient-to-tr from-indigo-600 to-purple-400 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-3 overflow-hidden border border-indigo-200/50 hover:border-indigo-300/80"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-indigo-400/50 to-purple-100/50">
                {/* Wishlist / Cart buttons */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 z-10">
                  <button
                    onClick={() => {
                      if (likedProducts[product._id]) {
                        handleRemoveFromWishlist(product._id);
                      } else {
                        handleAddToWishlist(product._id);
                      }
                    }}
                    className={`p-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110 shadow-lg ${
                      likedProducts[product._id]
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-pink-500/30'
                        : 'bg-white/95 text-gray-700 hover:bg-white hover:text-pink-500'
                    }`}
                  >
                    <FaHeart size={16} />
                  </button>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`p-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110 shadow-lg ${
                      cartpro[product._id]
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-indigo-500/30'
                        : 'bg-white/95 text-gray-700 hover:bg-white hover:text-indigo-500'
                    }`}
                  >
                    <FaShoppingCart size={16} />
                  </button>
                </div>

                {/* Product Image */}
                <Link to={product._id} className="relative block cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>

              {/* Product Details */}
              <div className="p-6 bg-gradient-to-br from-indigo-20000 to-purple-500">
                {product.title && (
                  <p className="text-sm text-indigo-600 font-semibold mb-1 uppercase tracking-wider">
                    {product.title}
                  </p>
                )}
                <h5 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-indigo-700 transition-colors duration-200 line-clamp-1">
                  {product.name}
                </h5>
                
                {/* Price Section - Made more prominent */}
                <div className="mb-4 p-3 bg-gradient-to-r from-indigo-100/80 to-purple-100/80 rounded-xl border border-indigo-200/50">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 font-medium uppercase tracking-wider">Price</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block">
                    ₹ {product.price?.toLocaleString() || 'N/A'}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 transform ${
                    cartpro[product._id]
                      ? 'bg-gradient-to-r from-indigo-200/80 to-purple-200/80 text-indigo-800 border-2 border-indigo-300/80 hover:from-indigo-300/80 hover:to-purple-300/80'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/25'
                  }`}
                >
                  {cartpro[product._id] ? '✓ In Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filter.length === 0 && (
          <div className="text-center py-16" data-aos="fade-up">
            <div className="bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <FaShoppingCart size={32} className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Check back later for new arrivals</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Women;