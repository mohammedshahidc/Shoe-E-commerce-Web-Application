import React, { useContext } from 'react';
import { Admincontext } from './Admin context/AdminContext';
import axios from 'axios';
import { Usercont } from '../context/UserContext';

const Order = () => {
    const { orders, loading,getAllOrders } = useContext(Admincontext);
const{admin}=useContext(Usercont)
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!Array.isArray(orders) || orders.length === 0) {
        return <div>No orders found.</div>;
    }

    const ordercancelation=async(orderId)=>{
        await axios.delete(`http://localhost:4004/api/admin/cancelorder/${orderId}`,{
            headers:{
                Authorization:`Bearer ${admin}`
            }
        })
        alert("order cancelled")
        getAllOrders()
    }

    return (
        <div className="flex justify-center bg-white w-full max-w-[1100px] h-screen p-4 ml-[250px]">
            <div className="overflow-auto w-full">
                <table className="mt-5 table-auto w-full border border-gray-300 text-left text-sm">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-3 py-2 w-32">Order ID</th>
                            <th className="border border-gray-300 px-3 py-2 w-24">User ID</th>
                            <th className="border border-gray-300 px-3 py-2 w-64">Products</th>
                            <th className="border border-gray-300 px-3 py-2 w-20">Quantity</th>
                            <th className="border border-gray-300 px-3 py-2 w-24">Total Price</th>
                            <th className="border border-gray-300 px-3 py-2 w-24">Payment Status</th>
                            <th className="border border-gray-300 px-3 py-2 w-24">Shipping Status</th>
                            <th className="border border-gray-300 px-3 py-2 w-24"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-3 py-2 truncate">{order._id}</td>
                                <td className="border border-gray-300 px-3 py-2 truncate">{order.userId}</td>
                                <td className="border border-gray-300 px-3 py-2">
                                    {order.products.map((product) => (
                                        <div key={product._id} className="mb-1">
                                            <p className="font-semibold truncate">Product: {product.productId.name}</p>
                                            <p className="text-gray-600">Price: ${product.productId.price}</p>
                                        </div>
                                    ))}
                                </td>
                                <td className="border border-gray-300 px-3 py-2 text-center">
                                    {order.products.reduce((total, product) => total + product.quantity, 0)}
                                </td>
                                <td className="border border-gray-300 px-3 py-2 text-right">
                                    ${order.products.reduce((total, product) => total + product.productId.price * product.quantity, 0).toFixed(2)}
                                </td>
                                <td className="border border-gray-300 px-3 py-2 capitalize text-center">{order.paymentStatus}</td>
                                <td className="border border-gray-300 px-3 py-2 capitalize text-center">{order.shoppingStatus}</td>
                                <td className="border border-gray-300 px-3 py-2 text-center">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600" onClick={()=>ordercancelation(order._id)} >Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;
