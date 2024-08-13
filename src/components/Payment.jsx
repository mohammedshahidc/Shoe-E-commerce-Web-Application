import React, { useContext, useState,useEffect } from 'react'
import { Usercont } from '../Apiservices/UserContext'

import axios from 'axios'

const Payment = () => {
  const {curuser}=useContext(Usercont)
  

    const username=curuser?.input?.username
    const totalpayment = async (event) => {
      event.preventDefault();
    
      const paymentconformation = window.confirm("Confirm your payment");
      if (paymentconformation) {
        try {
          const res = await axios.get(`http://localhost:3000/users/${curuser.id}`);
          console.log("User data before update:", res.data);
          const user = res.data;
          
          await axios.put(`http://localhost:3000/users/${curuser.id}`, {
            ...user, input: { ...user.input, cart: [] }
          });
          
          console.log("Payment successful");
          alert("Payment successful");
        } catch (error) {
          console.error("Error during payment:", error);
        }
      }
    };
    
    
   
  return (
    <div>
    <div className="container p-0 w-screen" id='payment'>
      <div className="card px-4 py-6 bg-gray-200 shadow-md rounded-lg w-screen">
        <form onSubmit={totalpayment}>
          <p className="text-lg font-semibold py-3">Payment Details</p>
          <div className="grid grid-cols-1 gap-x-3 gap-y-4">
            <div className="w-full">
              <div className="flex flex-col">
                <p className="text-sm mb-1">Person Name</p>
                <input
                  className="form-input mb-3 p-2 border border-gray-300 rounded"
                  type="text"
                  placeholder="Enter Name"
                  defaultValue={username}
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col">
                <p className="text-sm mb-1">Card Number</p>
                <input
                  className="form-input mb-3 p-2 border border-gray-300 rounded"
                  type="text"
                  placeholder="1234 5678 4356 7890"
                  required
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="flex flex-col">
                <p className="text-sm mb-1">Expiry</p>
                <input
                  className="form-input mb-3 p-2 border border-gray-300 rounded"
                  type="text"
                  placeholder="MM/YYYY"
                  required
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="flex flex-col">
                <p className="text-sm mb-1">Pin</p>
                <input
                  className="form-input mb-3 p-2 border border-gray-300 rounded"
                  type="password"
                  placeholder="Enter pin"
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center w-48 h-24 hover:bg-black mt-5"
                 type='submit'
              >
                Pay
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
    
  )
}

export default Payment
