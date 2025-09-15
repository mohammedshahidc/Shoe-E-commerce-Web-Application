

import React, { useContext, useState, useEffect } from 'react';
import { cartcontext } from '../../context/Cartproduct';
import { Usercont } from '../../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axiosInstatnce from '../../Axiosinstance';

const Cart = () => {
  const { curuser } = useContext(Usercont);
  const { cart, handledeleet, fetchCartData, createOrder } = useContext(cartcontext);
  const [totalprice, setTotalprice] = useState(0);
  const navigate = useNavigate();

  // Init AOS animations
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  // Fetch cart data on mount
  useEffect(() => {
    fetchCartData();
  }, []);

  // Calculate total price whenever cart changes
  useEffect(() => {
    if (cart.length) {
      const total = cart.reduce((acc, item) => {
        return acc + (item.product?.price || 0) * (item.quantity || 1);
      }, 0);
      setTotalprice(total);
    } else {
      setTotalprice(0);
    }
  }, [cart]);

  // Update quantity in backend and refresh cart
  const updateCart = async (item, action) => {
    try {
      await axiosInstatnce.put(
        "/user/updatecart",
        {
          productId: item.product._id,
          action,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${curuser}`,
          },
        }
      );
      fetchCartData();
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  const increment = (item) => updateCart(item, "increment");
  const decrement = (item) => updateCart(item, "decrement");

  const handleCheckout = async () => {
    try {
      await createOrder();
      navigate("/payment");
    } catch (error) {
      console.log(error);
    }
  };

  // Calculate total quantity of all items
  const totalQuantity = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
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
              <FaShoppingCart size={40} className="text-blue-400 mr-3" />
              <h1 className="text-3xl sm:text-4xl font-bold">
                Shopping <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Cart</span>
              </h1>
            </div>
            <p className="text-lg text-blue-100">Review your selected items</p>
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

      {/* Cart Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {cart.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cart.map((item, index) => (
                  <div
                    key={item.product?._id}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-indigo-200/50"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          className="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded-xl border-2 border-indigo-200/50"
                          src={item.product.image}
                          alt={item.product.name}
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{item.product.name}</h3>
                        <p className="text-indigo-600 font-semibold">₹{item.product?.price || 0}</p>
                        <p className="text-sm text-black">Quantity: {item.quantity || 1}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 bg-indigo-100/50 rounded-xl p-3">
                        <button
                          onClick={() => decrement(item)}
                          className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 hover:scale-110"
                        >
                          <FaMinus size={12} />
                        </button>
                        <span className="text-lg font-semibold text-gray-800 min-w-[3rem] text-center">
                          {item.quantity || 1}                        </span>
                        <button
                          onClick={() => increment(item)}
                          className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 hover:scale-110"
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>

                      {/* Item Total & Delete */}
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            ₹{(item.product?.price || 0) * (item.quantity || 1)}
                          </p>
                        </div>
                        <button
                          className="p-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 hover:scale-110"
                          onClick={() => handledeleet(item.product?._id)}
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-white/90 to-indigo-50/80 backdrop-blur-sm rounded-2xl shadow-xl border border-indigo-200/50 p-6 sticky top-6" data-aos="fade-up" data-aos-delay="300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Order Summary </h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-2 border-b border-indigo-200/50">
                      <span className="inline-block text-gray-600 font-bold">Total Items</span>
                      <span className="inline-block font-semibold text-gray-800">{totalQuantity}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-indigo-200/50">
                      <span className="inline-block text-gray-600">Subtotal</span>
                      <span className="inline-block font-semibold text-gray-800">₹{totalprice}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-indigo-200/50">
                      <span className="inline-block text-gray-600">Shipping</span>
                      <span className="inline-block font-semibold text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-indigo-200/50">
                      <span className="inline-block text-gray-600">Discount</span>
                      <span className="inline-block text-gray-500">N/A</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-gradient-to-r from-indigo-100/50 to-purple-100/50 rounded-xl px-4 mt-4">
                      <span className="inline-block text-lg font-bold text-gray-800">Total</span>
                      <span className="inline-block text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        ₹{totalprice}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                  >
                    Proceed to Checkout
                  </button>

                  <div className="mt-4 text-center">
                    <Link to="/" className="text-indigo-600 hover:text-purple-600 font-medium text-sm transition-colors duration-200">
                      ← Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Empty Cart State */
            <div className="text-center py-16 max-w-md mx-auto" data-aos="fade-up">
              <div className="bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
                <FaShoppingCart size={48} className="text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h3>
              <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
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

export default Cart;
