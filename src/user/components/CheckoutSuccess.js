import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const CheckoutSuccess = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 text-center flex flex-col items-center"> {/* Added flex and items-center */}
                <FaCheckCircle className="text-green-500 text-6xl mb-4" />
                <h2 className="text-3xl font-bold mb-2">Thank you for your purchase!</h2>
                <p className="text-gray-600 mb-4">
                    Your order has been placed successfully.please insert your address
                </p>
                
                <Link to="/adressform" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    My Address
                </Link>
            </div>
        </div>
    );
}

export default CheckoutSuccess;
