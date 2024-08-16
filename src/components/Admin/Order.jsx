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
  const filter = user.filter((user) => user.input.cart.length <= 1);

  return (
    <div>
      <div className='relative right-[-250px] justify-center justify-items-center bg-white'>
        {filter.map((user) => (
          <div key={user.id}>
            <table className="mt-5 table-auto w-[1050px] border-collapse border-solid border-2 border border-gray-900">
              <thead>
                <tr>
                  {/* Add table headers here */}
                  <th className="border border-gray-300 px-4 py-2">image</th>
                  <th className="border border-gray-300 px-4 py-2">Product name</th>
                  <th className="border border-gray-300 px-4 py-2">Product detailes</th>
                  <th className="border border-gray-300 px-4 py-2">Price</th>
                  {/* Add more headers as needed */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* Add table data here */}
                  <td className="border border-gray-300 border-solid border-1 px-4 py-2"></td>

                  <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.cart}<br />type:<br /> Brand:<br /> Rating:</td>
                  <td className="border border-gray-300 px-4 py-2">uu</td>
                  {/* Add more data as needed */}
                </tr>
                {/* Add more rows as needed */}
              </tbody>

            </table>

          </div>
        ))}

      </div>
      </div>
      )
}

      export default Order
