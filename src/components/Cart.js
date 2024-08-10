
import React, { useContext, useState, useEffect } from 'react';
import { cartcontext } from '../Apiservices/Cartproduct';
import { Usercont } from '../Apiservices/UserContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, handledeleet } = useContext(cartcontext);
    const { curuser, userID } = useContext(Usercont);


    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        const initialQuantities = cart.reduce((acc, item) => {
            acc[item.id] = item.quantity || 1;
            return acc;
        }, {});
        setQuantities(initialQuantities);
    }, [cart]);

    const increament = async (item) => {
        const newCount = (quantities[item.id] || 1) + 1;
        setQuantities({ ...quantities, [item.id]: newCount });
        const itemID = item.id

        try {
            const resp = await axios.get(`http://localhost:3000/users/${userID}`)
            const input = resp.data.input
            const cart = resp.data.input.cart
            const index = cart.findIndex((item) => item.id == itemID)
            cart[index].quantity += 1
            console.log(cart[index]);
            await axios.patch(`http://localhost:3000/users/${curuser?.id}`, {
                input: { ...input, cart: cart }
            });
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };


    const decreament = async (item) => {
        const currentCount = quantities[item.id] || 1;
        if (currentCount > 1) {
            const newCount = currentCount - 1;
            setQuantities({ ...quantities, [item.id]: newCount });
            const itemID = item.id

            try {
                const resp = await axios.get(`http://localhost:3000/users/${userID}`)
                const input = resp.data.input
                const cart = resp.data.input.cart
                const index = cart.findIndex((item) => item.id == itemID)
                cart[index].quantity -= 1
                console.log(cart[index]);
                await axios.patch(`http://localhost:3000/users/${curuser?.id}`, {
                    input: { ...input, cart: cart }
                });
            } catch (error) {
                console.error('Error updating quantity:', error);
            }
        }
    };

    return (
        <div>
            <div className="w-screen bg-gray-100">
                <div className="flex justify-center flex-row ">
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
                                    <img className="rounded w-[70px]"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="font-bold">{item.name}</p>
                                </div>
                                <div className="flex flex-row items-center">
                                    <i className="fa fa-minus text-red-500"></i>
                                    <h5 className="text-gray-500 mt-1 mx-2">
                                        Quantity:
                                        <button onClick={() => increament(item)} className='bg-gray-400 rounded-sm h-fit w-10 justify-center text-white text-lg'> + </button>
                                        {quantities[item.id] || 1}
                                        <button onClick={() => decreament(item)} className='bg-gray-400 rounded-sm h-fit w-10 justify-center text-white text-xl'>-</button>
                                    </h5>
                                    <i className="fa fa-plus text-green-500"></i>
                                </div>
                                <div>
                                    <h5 className="text-gray-500">{item.price}</h5>
                                </div>
                                <div className="flex items-center">
                                    <button className=" text-white bg-red-500 rounded-sm p-1" onClick={() => handledeleet(item)}>Delete</button>
                                </div>
                               
                            </div>
                            
                        ))}
                        
                            <Link to="/Payment"><button className='bg-blue-600 text-white text-lg w-48 h-10 mt-5 mb-5 rounded-md hover:bg-black'> payment</button></Link>
                       
                       
                    </div>
                </div>
            </div>
           

           
        </div>
       

        
    );
}

export default Cart;
