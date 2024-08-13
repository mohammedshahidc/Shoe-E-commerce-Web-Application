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
    const func = async () => {
      if (curuser && curuser.id) {
        try {
          const response = await axios.get(`http://localhost:3000/users/${curuser.id}`);
          setCart(response.data.input.cart);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        console.warn('curuser or curuser.id is not available');
      }
    };
    func();
  }, [curuser]); 
 


  

  const addtoCart = async (items) => {
    if (curuser) {
      try {
        const itemquantity = { ...items, quantity: 1 }
        const response = await axios.get(`http://localhost:3000/users/${curuser.id}`)
        const activeuser = response.data
        const cartproducts = activeuser.input.cart.find((product) => product.id === items.id)
        if (cartproducts) {
          alert("this product is already added in your cart")
        }
        else {
          const updatecart = [...activeuser.input.cart, itemquantity]
           await axios.put(`http://localhost:3000/users/${curuser.id}`, {
            ...activeuser, input: { ...activeuser.input, cart: updatecart }
          })
          setCart(updatecart)
          
            setNotificationCount(updatecart.length);
       
          
        }

      } catch (error) {
        alert("item not added to cart")
      }

    } else {
      alert("please Login")
      navigate("/login")
    }
  }

  const handledeleet = async (items, index) => {
    try {
      const itemid = items.id
      const respons = await axios.get(`http://localhost:3000/users/${userID}`);

      const curentuserdata = respons.data
      const updatedcart = curentuserdata.input.cart.filter((sreveritem) => sreveritem.id !== itemid)
      await axios.patch(`http://localhost:3000/users/${userID}`, {
        input: {
          ...curentuserdata.input, cart: updatedcart
        }
      })
      const newcartitem = [...cart]
      newcartitem.splice(index, 1)
      setCart(newcartitem)
    
        setNotificationCount(updatedcart.length);
      
      
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
