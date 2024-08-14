import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserA = () => {
    const[users,setUsers]=useState([])
    useEffect(()=>{
        const fetch= async ()=>{
            try {
                const response=await axios.get("http://localhost:3000/users")
                    
            } catch (error) {
                console.error("fetching error"+error);
            }
        }
        fetch()
    },[])
 const filter=users.filter((user)=>(user.admin==false))
  return (
    <div>
        {filter.map((usern)=>(
            <div>
 <table className="mt-5 table-auto w-[1050px] border-collapse border-solid border-2 border border-gray-900">
                <thead>
                    <tr>
                        {/* Add table headers here */}
                        <th className="border border-gray-300 px-4 py-2">User Id</th>
                        <th className="border border-gray-300 px-4 py-2">User name</th>
                        <th className="border border-gray-300 px-4 py-2">User Email</th>
                        <th className="border border-gray-300 px-4 py-2">User password</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* Add table data here */}
                        <td className="border border-gray-300 border-solid border-1 px-4 py-2">{usern.id}</td>
                       
                        <td className="border border-gray-300 px-4 py-2">{usern.name}</td>
                        <td className="border border-gray-300 px-4 py-2">td2</td>
                        <td className="border border-gray-300 px-4 py-2">td3</td>
                        {/* Add more data as needed */}
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
                
            </table>

            </div>
        ))}
     
    </div>
  )
}

export default UserA
