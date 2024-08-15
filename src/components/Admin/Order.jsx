import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Order = () => {
    const [user,setUser]=useState([])
    useEffect(()=>{
        const fetch=async ()=>{
            try {
                const response=await axios.get("http://localhost:3000/users")
                setUser(response.data)
            } catch (error) {
               console.error("fetching error"+error); 
            }
        }
        fetch()
    },[])
    const filter = user.filter((user) => user ?.input ?.cart ?.length <= 1);

  return (
    <div>
      {filter.map((user)=>(
        <div key={user.id}>
            <h1>{user.username}</h1>
        </div>
      ))}
    </div>
  )
}

export default Order
