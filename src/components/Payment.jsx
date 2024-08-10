import React from 'react'

const Payment = () => {
    const payment=(e)=>{
        alert("payment suceccfull")
    }
  return (
    <div>
    <div className="container p-0 w-screen" id='payment'>
      <div className="card px-4 py-6 bg-gray-200 shadow-md rounded-lg w-screen">
        <form onSubmit={payment}>
          <p className="text-lg font-semibold py-3">Payment Details</p>
          <div className="grid grid-cols-1 gap-x-3 gap-y-4">
            <div className="w-full">
              <div className="flex flex-col">
                <p className="text-sm mb-1">Person Name</p>
                <input
                  className="form-input mb-3 p-2 border border-gray-300 rounded"
                  type="text"
                  placeholder="Enter Name"
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
                className="bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center w-48 h-24 hover:bg-black"
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
