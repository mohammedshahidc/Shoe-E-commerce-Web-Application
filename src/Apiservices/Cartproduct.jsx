import React, { createContext, useState, useContext, useEffect } from 'react'
import { Usercont } from './UserContext'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'


export const cartcontext = createContext()


const Cartproduct =({ children }) => {
  const { curuser,userID } = useContext(Usercont)
  const [cart, setCart] = useState([])

  useEffect(()=>{
    const func=async()=>{
      const respons=await axios.get(`http://localhost:3000/users/${curuser.id}`)
      setCart(respons.data.input.cart)
    }
    func()
  },[])
  
  const addtoCart = async (items) => {
    if(curuser){
      try {

        const response= await axios.get(`http://localhost:3000/users/${curuser.id}`)
        const activeuser=response.data
        const updatecart=[...activeuser.input.cart,items]

          await axios.put(`http://localhost:3000/users/${curuser.id}`,{
            ...activeuser,input:{...activeuser.input,cart:updatecart}
          })
          setCart(updatecart)

      } catch (error) {
        alert("item not added to cart")
      }
    }
    
  }
  const handledeleet= async (items,index)=>{
    try {
      const itemid=items.id
      const respons= await axios.get(`http://localhost:3000/users/${userID}`);

      const curentuserdata=respons.data
      const updatedcart=curentuserdata.input.cart.filter((sreveritem)=>sreveritem.id !==itemid) 
      await axios.patch(`http://localhost:3000/users/${userID}`,{
        input:{
          ...curentuserdata.input,cart:updatedcart
        }
      })
      const newcartitem=[...cart]
      newcartitem.splice(index,1)
      setCart(newcartitem)
    } catch (error) {
      
    }

  }


  return (
    <div>
      <cartcontext.Provider value={{ cart, addtoCart,handledeleet }}>
        {children}
      </cartcontext.Provider>
    </div>
  )
}

export default Cartproduct
