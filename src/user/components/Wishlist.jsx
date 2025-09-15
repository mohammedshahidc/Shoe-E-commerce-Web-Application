


import React, { useContext, useEffect } from 'react';
import { wishcontext } from '../../context/WshlistContext';
import { cartcontext } from '../../context/Cartproduct';
import { toast } from 'react-toastify';
import { FaHeart, FaShoppingCart, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Wishlist = () => {
    const { wish, removeFromWishlist } = useContext(wishcontext);
    const { addtoCart } = useContext(cartcontext);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
        });
    }, []);

    const handleDelete = (productId) => {
        removeFromWishlist(productId);
        toast.info("Item removed from wishlist");
    };

    const handleAddtocart = (productId) => {
        addtoCart(productId);
        toast.success("Item added to cart");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-400/80"></div>
                </div>
                <div className="relative container mx-auto px-4 py-12">
                    <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
                        <div className="flex justify-center items-center mb-4">
                            <FaHeart size={40} className="text-pink-400 mr-3" />
                            <h1 className="text-3xl sm:text-4xl font-bold">
                                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Wishlist</span>
                            </h1>
                        </div>
                        <p className="text-lg text-blue-100">Your favorite items saved for later</p>
                        <div className="mt-6 flex justify-center">
                            <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-1 w-16 rounded-full"></div>
                        </div>
                    </div>
                </div>
                {/* Decorative Wave */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg className="relative block w-full h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor" className="text-indigo-50"></path>
                    </svg>
                </div>
            </div>

            {/* Wishlist Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {wish.length > 0 ? (
                        <div className="space-y-6">
                            {/* Wishlist Header */}
                            <div className="bg-gradient-to-r from-indigo-100/80 to-purple-100/80 rounded-2xl p-6 border border-indigo-200/50" data-aos="fade-up">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-gray-800">
                                        {wish.length} Item{wish.length > 1 ? 's' : ''} in your wishlist
                                    </h2>
                                    <div className="text-indigo-600 font-medium text-sm">
                                        <span className="bg-gradient-to-r from-blue-600 to-purple-400 h-px w-8 inline-block mr-2"></span>
                                        Saved for later
                                    </div>
                                </div>
                            </div>

                            {/* Wishlist Items */}
                            {wish.map((item, index) => (
                                <div
                                    key={item._id}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-indigo-200/50"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="flex flex-col sm:flex-row items-center gap-6">
                                        {/* Product Image */}
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded-xl border-2 border-indigo-200/50"
                                                src={item.image}
                                                alt={item.name}
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1 text-center sm:text-left">
                                            <h3 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h3>
                                            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                                                <FaHeart size={16} className="text-pink-500" />
                                                <span className="text-sm text-gray-600">Added to wishlist</span>
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="text-center">
                                            <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                                ₹{item.price}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => handleAddtocart(item._id)}
                                                className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                                            >
                                                <FaShoppingCart size={14} />
                                                <span className="hidden sm:inline">Add to Cart</span>
                                            </button>
                                            
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="p-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 hover:scale-105"
                                                title="Remove from wishlist"
                                            >
                                                <FaTrash size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Continue Shopping */}
                            <div className="text-center pt-6" data-aos="fade-up">
                                <Link
                                    to="/"
                                    className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:from-indigo-200 hover:to-purple-200 transition-all duration-300 border border-indigo-200/50"
                                >
                                    ← Continue Shopping
                                </Link>
                            </div>
                        </div>
                    ) : (
                        /* Empty Wishlist State */
                        <div className="text-center py-16 max-w-md mx-auto" data-aos="fade-up">
                            <div className="bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
                                <FaHeart size={48} className="text-pink-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your wishlist is empty</h3>
                            <p className="text-gray-600 mb-8">Save items you love to your wishlist for easy access later</p>
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                            >
                                Start Shopping
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;