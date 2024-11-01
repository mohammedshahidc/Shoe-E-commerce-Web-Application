import React, { useContext } from 'react';
import { Admincontext } from './Admin context/AdminContext';

const Order = () => {
    const { orders, loading } = useContext(Admincontext);

    console.log("Orders from context:", orders);

    if (loading) {
        return <div>Loading...</div>; // Display loading while data is being fetched
    }

    if (!Array.isArray(orders) || orders.length === 0) {
        return <div>No orders found.</div>; // Display a message if there are no orders
    }

    return (
        <div className='relative right-[-250px] justify-center justify-items-center bg-white w-[800px] h-screen'>
            <div>
                <table className="mt-5 table-auto w-[1050px] border-collapse border-solid border-2 border-gray-900">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">User ID</th>
                            <th className="border border-gray-300 px-4 py-2 w-[500px]">Product Details</th>
                            <th className="border border-gray-300 px-4 py-2 w-[110px]">Quantity</th>
                            <th className="border border-gray-300 px-4 py-2">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <React.Fragment key={order._id}>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {order.userId}
                                    </td>
                                    <td colSpan="3">
                                        <table className="w-full">
                                            <tbody>
                                                {order.products.map((product) => (
                                                    <tr key={product._id}>
                                                        <td className="border border-gray-300 px-4 py-2 w-[500px]">
                                                            Quantity: {product.quantity}<br />
                                                            Payment Status: {order.paymentStatus}<br />
                                                            Amount: {order.amount}<br />
                                                            <br />
                                                        </td>
                                                        <td className="border border-gray-300 px-4 py-2 w-[110px]">
                                                            Product: {product.name}<br />
                                                            Price: {product.price}<br />
                                                            Quantity: {product.quantity}
                                                        </td>
                                                        <td className="border border-gray-300 px-4 py-2">
                                                            Shipping Status: {order.shoppingStatus}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Order;
