import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Order = () => {
  const [user, setUser] = useState([])
  
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users")
        setUser(response.data)
      } catch (error) {
        console.error("fetching error" + error);
      }
    }
    fetch()
  }, [])
  const filter = user.filter(user => user.cart.length >= 1);
  return (
    <div className='relative right-[-250px] justify-center justify-items-center bg-white w-[800px] h-screen'>
      <div>
      <table className="mt-5 table-auto w-[1050px] border-collapse border-solid border-2 border-gray-900">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2 w-[500px]">Product Name</th>
            <th className="border border-gray-300 px-4 py-2 w-[110px]">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {filter.map((user) => (
            <React.Fragment key={user.id}>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  {user.username}
                </td>
                <td colSpan="3">
                  <table className="w-full">
                    <tbody>
                      {user.cart.map((item, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 w-[500px]">
                            {item.name}<br />
                            Type: {item.type}<br />
                            Brand: {item.brand}<br />
                          </td>
                          <td className="border border-gray-300 px-4 py-2 w-[110px]">
                            {item.quantity}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {item.price}
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


  )
}

export default Order
