
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Usercont } from './UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const cartcontext = createContext();
const Cartproduct = ({ children }) => {
  const { curuser } = useContext(Usercont);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
  
    fetchCartData();
  }, [curuser]);

  const fetchCartData = async () => {
    if (curuser) {
      try {
        const response = await axios.get("http://localhost:4004/api/user/getcart", {
          headers: {
            Authorization: `Bearer ${curuser}`
          }
        });
        const products = response.data?.products || [];
        setCart(products);
        setNotificationCount(products.length);
      } catch (error) {
        console.error("Error fetching cart data:", error);
        setCart([]);
        setNotificationCount(0);
      }
    }
  };

  const addtoCart = async (items) => {
    if (curuser) {
      try {
        await axios.post(
          `http://localhost:4004/api/user/addtocart`,
          { productId: items },
          {
            headers: { Authorization: `Bearer ${curuser}` },
            withCredentials: true,
          }
        );
        await fetchCartData();
      } catch (error) {
        alert("Item not added to cart");
        console.error(error);
      }
    } else {
      alert("Please login");
      navigate("/login");
    }
  };

  const handledeleet = async (items) => {
    try {
      await axios.delete(`http://localhost:4004/api/user/deletecart/${items}`, {
        headers: { Authorization: `Bearer ${curuser}` },
        withCredentials: true
      });
      await fetchCartData();
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  return (
    <cartcontext.Provider value={{ cart, addtoCart, handledeleet, notificationCount,setCart,setNotificationCount }}>
      {children}
    </cartcontext.Provider>
  );
}

export default Cartproduct;
