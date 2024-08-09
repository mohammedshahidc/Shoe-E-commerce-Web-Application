import React, { useContext } from 'react'
import { cartcontext } from '../Apiservices/Cartproduct' 

const Cart = () => {
  const {cart,handledeleet}=useContext(cartcontext)
  return (

   <div>

      <div className="w-screen bg-red-100">
          <div className="flex justify-center flex-row ">
              <div className="w-full md:w-8/12">
                  <div className="p-2">
                      <h4 className="text-xl font-semibold">Shopping cart</h4>
                      <div className="flex flex-row items-center justify-end">
                          <p className="mr-1">Sort by:</p>
                          <p className="mr-1 font-bold">items</p>
                          
                      </div>
                  </div>
                  {cart.map((item,index) => (
                      <div key={item.index} className="flex flex-row justify-between items-center p-2 bg-white mt-4 px-3 rounded">
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
                              <h5 className="text-gray-500 mt-1 mx-2">Quantity:</h5>
                              <i className="fa fa-plus text-green-500"></i>
                          </div>
                          <div>
                              <h5 className="text-gray-500">{item.price}</h5>
                          </div>
                          <div className="flex items-center">
                              <button className=" text-white bg-red-500 rounded-sm p-1" onClick={() => handledeleet(item, index)}>Delete</button>
                          </div>
                      </div>
                  ))}
                  <div className="flex flex-row items-center mt-3 p-2 bg-slate-400 rounded">
                      <input type="text" className="form-control border-0 flex-1" placeholder="enter the amount" />
                      <button className="btn btn-outline-warning btn-sm ml-2" type="button">Apply</button>
                  </div>
                  <div className="flex flex-row items-center mt-3 p-2 bg-red-300 rounded">
                      <button className="btn btn-warning btn-block btn-lg ml-2" type="button">Proceed to Pay</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
    

  
    
  )
}

export default Cart
