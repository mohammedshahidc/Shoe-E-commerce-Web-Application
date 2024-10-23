import React, { createContext, useState, useContext, useEffect } from 'react'
import { Usercont } from './UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const cartcontext = createContext()
const Cartproduct = ({ children }) => {
  const { curuser, userID } = useContext(Usercont)
  const [cart, setCart] = useState([])
  const navigate = useNavigate()
  const [notificationCount, setNotificationCount] = useState(0);
  useEffect(() => {
    if (curuser) {
      console.log("curuser",curuser.data);
      const func = async () => {
        const response = await axios.get(`http://localhost:5000/users/4bf0`);
        setCart(response.data.cart);
        setNotificationCount(response.data.cart.length)
      };
      func();
    }
  }, [curuser]);


   const addtoCart = async (items) => {
    if (curuser) {
      try {
        const itemquantity = { ...items, quantity: 1 }
        const response = await axios.get(`http://localhost:5000/users/4bf0`)
        const activeuser = response.data
        const cartproducts = activeuser.cart.find((product) => product.id === items.id)
        if (cartproducts) {
          alert("this product is already added in your cart")
        }
        else {
          const updatecart = [...activeuser.cart, itemquantity]
          console.log(curuser);
          await axios.put(`http://localhost:5000/users/4bf0`, {
            ...activeuser, cart: updatecart
          })
          setCart(updatecart)
          
          setNotificationCount(cart.length + 1);
        }

      } catch (error) {
        alert("item not added to cart")
        console.error(error)
      }

    } else {
      alert("please Login")
      navigate("/login")
    }
  }

  const handledeleet = async (items, index) => {
    try {
      const itemid = items.id
      const respons = await axios.get(`http://localhost:5000/users/4bf0`);

      const curentuserdata = respons.data
      const updatedcart = curentuserdata.cart.filter((sreveritem) => sreveritem.id !== itemid)
      await axios.patch(`http://localhost:5000/users/4bf0`, {

        ...curentuserdata, cart: updatedcart
      })
      const newcartitem = [...cart]
      newcartitem.splice(index, 1)
      setCart(newcartitem)

      setNotificationCount(cart.length - 1);


    } catch (error) {

    }

  }

  return (
    <div>
      <cartcontext.Provider value={{ cart, addtoCart, handledeleet, notificationCount }}>
        {children}
      </cartcontext.Provider>
    </div>
  )
}

export default Cartproduct
