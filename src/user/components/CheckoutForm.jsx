import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios'; // Import Axios

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            return;
        }

        try {
            // Create a PaymentIntent on your server and get the client secret
            const response = await axios.post('/create-order', {
                items: [{ id: 'your-product-id' }], // Replace with actual product data
                totalAmount: 799 // Replace with the actual amount
            });

            const { clientSecret } = response.data.data; // Adjusted to access data correctly

            // Get a reference to the CardElement
            const cardElement = elements.getElement(CardElement); // Ensure this is defined correctly

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                },
            });

            if (result.error) {
                setError(result.error.message);
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    console.log('Payment succeeded!');
                    // Optionally, redirect the user or show a success message
                }
            }
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        
        <form 
            onSubmit={handleSubmit} 
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
            <h2 className="text-xl font-bold mb-4">Payment Details</h2>
            
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card">
                    Credit or Debit Card
                </label>
                <CardElement 
                    options={{
                        style: {
                            base: {
                                lineHeight:'50px',
                                fontSize: '16px',
                                color: '#32325d',
                                letterSpacing: '0.025em',
                                padding: '15px',
                                border: '1px solid #ccd0d5',
                                borderRadius: '4px',
                                backgroundColor: '#f9fafb',
                            },
                            invalid: {
                                color: '#fa755a',
                                iconColor: '#fa755a',
                            },
                        },
                    }} 
                />
            </div>
            
            <div className="flex items-center justify-between">
                <button 
                    type="submit" 
                    disabled={!stripe || loading} 
                    className={`bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {loading ? 'Processing...' : 'Pay'}
                </button>
            </div>

            {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}
        </form>
    );
};

export default CheckoutForm;
