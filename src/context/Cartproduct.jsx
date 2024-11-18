
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Usercont } from './UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstatnce from '../Axiosinstance';


export const cartcontext = createContext();
const Cartproduct = ({ children }) => {
  const { curuser } = useContext(Usercont);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [orders, Setorders] = useState([])
  const [notificationCount, setNotificationCount] = useState(0);
  const [sessionId, setSessionId] = useState("")
  const [clientSecret, setClientSecret] = useState("")
  useEffect(() => {

    fetchCartData();
  }, [curuser]);

  const fetchCartData = async () => {
    if (curuser) {
      console.log("curuser immm:", curuser);
      try {
        const response = await axiosInstatnce.get("/user/getcart", {
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
        await axiosInstatnce.post(
          `/user/addtocart`,
          { productId: items },
          {
            headers: { Authorization: `Bearer ${curuser}` },
            withCredentials: true,
          }
        );
        await fetchCartData();
        toast.success(`${items.name} added to cart`)
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
      await axiosInstatnce.delete(`/user/deletecart/${items}`, {
        headers: { Authorization: `Bearer ${curuser}` },
        withCredentials: true
      });
      await fetchCartData();
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };


  const createOrder = async () => {
    try {
      const resp = await axiosInstatnce.post(
        "/user/createorder",
        {},
        {
          headers: {
            Authorization: `Bearer ${curuser}`,
          },
        }
      );

      setClientSecret(resp.data.data.clientSecret);
      toast.success("Order created successfully");
      navigate("/payment");
    } catch (error) {
      console.log(error);
    }
  };

  const getOrder = async () => {
    try {
      const resp = await axiosInstatnce.get("/user/getallorders", {
        headers: {
          Authorization: `Bearer ${curuser}`
        }
      });

      const orders = resp.data.data;
      Setorders(orders);
      const lastOrder = orders[orders.length - 1]
      setSessionId(lastOrder.sessionId)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOrder()
  }, [curuser])

  useEffect(() => {
    console.log("sessionId :", sessionId);
  }, [sessionId]);

  const verfyorder = async () => {
    try {
      const resp = axiosInstatnce.post("/user/verifyorder", {
        sessionId: sessionId
      }, {
        headers: {
          Authorization: `Bearer ${curuser}`
        }
      })
      alert("order verified")
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  const cancelorder = async (orderId) => {
    try {
      console.log(orderId);
      const resp = await axiosInstatnce.delete(`/user/ordercanceleation/${orderId}`, {
        headers: {
          Authorization: `Bearer ${curuser}`
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <cartcontext.Provider value={{
      cart,
      addtoCart,
      handledeleet,
      notificationCount,
      setCart,
      setNotificationCount,
      fetchCartData,
      createOrder,
      clientSecret,
      orders,
      getOrder,
      orders,
      verfyorder,
      cancelorder
    }}>
      {children}
    </cartcontext.Provider>
  );
}

export default Cartproduct;
