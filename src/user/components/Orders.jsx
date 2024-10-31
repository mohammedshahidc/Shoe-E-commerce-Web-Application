import React, { useContext } from 'react';
import { cartcontext } from '../../context/Cartproduct';

const Orders = () => {
    const { orders, cancelorder , getOrder } = useContext(cartcontext);
    console.log("orders in ord:", orders);

    const handleorder=async(orderId)=>{
        try {
          await  cancelorder(orderId)
          await getOrder()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Your Orders</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
                {orders.map((order) => (
                    <div key={order._id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Order ID: {order._id}</h3>
                        <p className="text-sm text-gray-600">Amount: ₹{order.amount}</p>
                        <p className="text-sm text-gray-600">Payment Status: {order.paymentStatus}</p>
                        <div className="space-y-4 mt-4">
                            {order.products.map(item => (
                                <div
                                    key={item.productId._id}
                                    className="flex flex-row justify-between items-center p-4 bg-white border border-gray-300 rounded-lg shadow-md transition-all duration-300 ease-in-out"
                                >
                                    <div className="mr-4 flex-shrink-0">
                                        <img
                                            className="rounded-md w-[70px] h-[70px] object-cover"
                                            src={item.productId.image}
                                            alt={item.productId.name}
                                        />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <p className="font-semibold text-lg text-gray-800">{item.productId.name}</p>
                                        <p className="text-sm text-gray-500">Brand: {item.productId.brand}</p>
                                    </div>
                                    <div className="flex-grow flex justify-center">
                                        <p className="font-semibold text-lg text-gray-700">₹{item.productId.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => handleorder(order._id)}  
                                className="text-white bg-red-500 rounded-md px-4 py-2 hover:bg-red-600 transition duration-200 ease-in-out shadow-lg"
                            >
                                Cancel Order
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
