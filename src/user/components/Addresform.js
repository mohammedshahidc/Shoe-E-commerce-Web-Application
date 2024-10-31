import React, { useContext, useState } from 'react';
import { cartcontext } from '../../context/Cartproduct';
import { toast } from 'react-toastify';
const Addressform = () => {
    const{verfyorder}=useContext(cartcontext)

    const handleOrderVerification = async () => {
        try {
            await verfyorder(); 
            toast.success("order verified successfully")
        } catch (error) {
            console.log('Order verification error:', error);
        }
    };
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Delivery Address:', formData);
        await handleOrderVerification();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Delivery Address</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 w-full rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 w-full rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 w-full rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="state">State</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 w-full rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="zipCode">Pin Code</label>
                        <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 w-full rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="country">Country</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 w-full rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
                    >
                        Verify Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addressform;
