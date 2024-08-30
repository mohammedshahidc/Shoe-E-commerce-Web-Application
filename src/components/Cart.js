
import React, { useContext, useState, useEffect } from 'react';
import { cartcontext } from '../Apiservices/Cartproduct';
import { Usercont } from '../Apiservices/UserContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, handledeleet } = useContext(cartcontext);
    const { curuser, userID } = useContext(Usercont);

    const [quantities, setQuantities] = useState({});
    const [totalprice, setTotalprice] = useState(0);
    

    useEffect(() => {
        const initialQuantities = cart.reduce((acc, item) => {
            acc[item.id] = item.quantity || 1;
            return acc;
        }, {});
        setQuantities(initialQuantities);
    }, [cart]);

    useEffect(() => {
        const calculateTotalPrice = () => {
            const total = cart.reduce((acc, item) => {
                const quantity = quantities[item.id] || 1;
                return acc + item.price * quantity;
            }, 0);
            setTotalprice(total);
        };
        calculateTotalPrice();
    }, [quantities, cart]);

    const increment = async (item) => {
        const newCount = (quantities[item.id] || 1) + 1;
        setQuantities({ ...quantities, [item.id]: newCount });
        try {
            const resp = await axios.get(`http://localhost:5000/users/${userID}`);
            const activeuser = resp.data
            const cart = resp.data.cart;
            const index = cart.findIndex((cartItem) => cartItem.id === item.id);
            cart[index].quantity += 1;
            await axios.patch(`http://localhost:5000/users/${userID}`, {
                ...activeuser,cart: activeuser.cart 
            });
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const decrement = async (item) => {
        const currentCount = quantities[item.id] || 1;
        if (currentCount > 1) {
            const newCount = currentCount - 1;
            setQuantities({ ...quantities, [item.id]: newCount });
            try {
                const resp = await axios.get(`http://localhost:5000/users/${userID}`);
                const activeuser = resp.data
                const cart = resp.data.cart;
                const index = cart.findIndex((cartItem) => cartItem.id === item.id);
                cart[index].quantity -= 1;
                await axios.patch(`http://localhost:5000/users/${curuser?.id}`, {
                    ...activeuser,cart: activeuser.cart 
                });
            } catch (error) {
                console.error('Error updating quantity:', error);
            }
        }
    };

    return (
        <div>
            <div className="w-screen bg-gray-100">
                <div className="flex justify-center flex-row">
                    <div className="w-full md:w-8/12">
                        <div className="p-2">
                            <h4 className="text-xl font-semibold">Shopping cart</h4>
                            <div className="flex flex-row items-center justify-end">
                                <p className="mr-1">Sort by:</p>
                                <p className="mr-1 font-bold">items</p>
                            </div>
                        </div>
                        {cart.map((item) => (
                            <div key={item.id} className="flex flex-row justify-between items-center p-2 bg-white mt-4 px-3 rounded">
                                <div className="mr-1">
                                    <img className="rounded w-[70px]" src={item.image} alt={item.name} />
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="font-bold">{item.name}</p>
                                </div>
                                <div className="flex flex-row items-center">
                                    <i className="fa fa-minus text-red-500"></i>
                                    <h5 className="text-gray-500 mt-1 mx-2">
                                        Quantity:
                                        <button onClick={() => increment(item)} className='bg-gray-400 rounded-sm h-fit w-10 justify-center text-white text-lg'> + </button>
                                        {quantities[item.id] || 1}
                                        <button onClick={() => decrement(item)} className='bg-gray-400 rounded-sm h-fit w-10 justify-center text-white text-xl'>-</button>
                                    </h5>
                                    <i className="fa fa-plus text-green-500"></i>
                                </div>
                                <div>
                                    <h5 className="text-gray-500">
                                        {(item.price * (quantities[item.id]))}
                                    </h5>
                                </div>
                                <div className="flex items-center">
                                    <button className="text-white bg-red-500 rounded-sm p-1" onClick={() => handledeleet(item)}>Delete</button>
                                </div>
                            </div>

                        ))}

                        <div className="bg-white p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mt-4">
                            <div className="text-center">
                                <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

                                <div className="border-t border-gray-300 pt-4">
                                    <p className="text-sm font-semibold mb-2">
                                        Total Cart Price: ₹{totalprice}
                                    </p>
                                    <p className="text-sm font-semibold mb-2">Shipping Charge: Free</p>
                                    <p className="text-sm font-semibold mb-2">Discount: NA</p>
                                </div>

                                <div className="flex justify-between items-center mt-6">
                                    <p className="text-lg font-semibold">Total:</p>
                                    <p className="text-lg font-semibold text-red-500">
                                        ₹{totalprice}
                                    </p>
                                </div>

                                <Link
                                    to="/payment"
                                    className="block bg-[#131842] mt-6 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                                >
                                    Proceed to Checkout
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

