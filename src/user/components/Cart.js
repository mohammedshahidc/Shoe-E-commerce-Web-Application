
import React, { useContext, useState, useEffect } from 'react';
import { cartcontext } from '../../context/Cartproduct';
import { Usercont } from '../../context/UserContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutPayment from './Payment';

const Cart = () => {

  const {curuser}=useContext(Usercont)
  const { cart, handledeleet, fetchCartData,createOrder} = useContext(cartcontext);
  const [quantities, setQuantities] = useState({});
  const [totalprice, setTotalprice] = useState(0);
const navigate=useNavigate()
  useEffect(() => {
    if (cart.length) {
      const initialQuantities = cart.reduce((acc, item) => {
        acc[item.product._id] = item.quantity || 1;
        return acc;
      }, {});
      setQuantities(initialQuantities);
    }
  }, [cart]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cart.reduce((acc, item) => {
        const quantity = quantities[item.product._id] || 1;
        return acc + (item.product?.price || 0) * quantity;
      }, 0);
      setTotalprice(total);
    };
    calculateTotalPrice();
  }, [quantities, cart]);

  const updateCart = async (item, action) => {
    try {
      const res = await axios.put("http://localhost:4004/api/user/updatecart", {
        productId: item._id,
        action: action
      }, {
        withCredentials: true
      });
      const updatedcart = res.data?.products || [];
      const updatedQuantity = updatedcart.reduce((acc, product) => {
        acc[product.product._id] = product.quantity;
        return acc;
      }, {});
      setQuantities(updatedQuantity);
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  const increment = (item) => {
    updateCart(item, "increment");
  };

  const decrement = (item) => {
    updateCart(item, "decrement");
  };

 
  const handleCheckout=async()=>{
    try {
        await createOrder()
        navigate("/payment")
    } catch (error) {
        console.log(error);
    }
  }



  return (
    <div className="w-full bg-gray-100 p-4">
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-8/12">
          <div className="p-2">
            <h4 className="text-xl font-semibold text-center md:text-left">Shopping Cart</h4>
          </div>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.product?._id} className="flex flex-col md:flex-row justify-between items-center p-4 bg-white mt-4 rounded shadow-md">
                <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
                  <img className="rounded w-full md:w-[70px]" src={item.product.image} alt={item.product.name} />
                  <div className="text-center md:ml-4 mt-2 md:mt-0">
                    <p className="font-bold">{item.product.name}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0">
                  <button onClick={() => decrement(item.product)} className='bg-gray-400 rounded-sm h-fit w-10 justify-center text-white text-lg md:mr-2'>-</button>
                  <h5 className="text-gray-500 mt-1 mx-2 text-lg">Quantity: {quantities[item.product._id] || 1}</h5>
                  <button onClick={() => increment(item.product)} className='bg-gray-400 rounded-sm h-fit w-10 justify-center text-white text-lg md:ml-2'>+</button>
                </div>
                <div className="mt-2 md:mt-0">
                  <h5 className="text-gray-500 text-lg">
                    ₹{(item.product?.price || 0) * (quantities[item.product._id] || 1)}
                  </h5>
                </div>
                <div className="mt-2 md:mt-0">
                  <button className="text-white bg-red-500 rounded-sm p-1" onClick={() => handledeleet(item.product?._id)}>Delete</button>
                </div>
              </div>
            ))
          ) 
          : (
            <p>Your cart is empty.</p>
          )}
          <div className="bg-white p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mt-4">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="border-t border-gray-300 pt-4">
                <p className="text-sm font-semibold mb-2">Total Cart Price: ₹{totalprice}</p>
                <p className="text-sm font-semibold mb-2">Shipping Charge: Free</p>
                <p className="text-sm font-semibold mb-2">Discount: NA</p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <p className="text-lg font-semibold">Total:</p>
                <p className="text-lg font-semibold text-red-500">₹{totalprice}</p>
              </div>
              <Link  className="block bg-[#131842] mt-6 text-white px-4 py-2 rounded-lg hover:bg-gray-800 w-full md:w-auto text-center" onClick={handleCheckout} >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
