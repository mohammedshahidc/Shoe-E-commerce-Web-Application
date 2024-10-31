
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Usercont } from './UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const cartcontext = createContext();
const Cartproduct = ({ children }) => {
  const { curuser } = useContext(Usercont);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [orders,Setorders]=useState([])
  const [notificationCount, setNotificationCount] = useState(0);
  const [sessionId,setSessionId]=useState("")
  const [clientSecret,setClientSecret]=useState("")
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
      await axios.delete(`http://localhost:4004/api/user/deletecart/${items}`, {
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
        const resp = await axios.post(
            "http://localhost:4004/api/user/createorder",
            {},
            {
                headers: {
                    Authorization: `Bearer ${curuser}`, 
                },
            }
        );
console.log("pay resp :",resp.data.data.clientSecret);
        setClientSecret(resp.data.data.clientSecret); 
        toast.success("Order created successfully");
        navigate("/payment");
    } catch (error) {
        console.log(error);
    }
};

const getOrder = async () => {
  try {
    const resp = await axios.get("http://localhost:4004/api/user/getallorders", {
      headers: {
        Authorization: `Bearer ${curuser}`
      }
    });
    
    const orders = resp.data.data;
    Setorders(orders);
    const lastOrder=orders[orders.length-1]
    setSessionId(lastOrder.sessionId)
  } catch (error) {
    console.log(error);
  }
};
useEffect(()=>{
  getOrder()
},[curuser])

useEffect(() => {
  console.log("sessionId :", sessionId);
}, [sessionId]);

const verfyorder=async()=>{
  try {
    const resp=axios.post("http://localhost:4004/api/user/verifyorder",{
      sessionId:sessionId
    },{
      headers:{
        Authorization:`Bearer ${curuser}`
      }
    })
    alert("order verified")
    navigate("/")
  } catch (error) {
    console.log(error);
  }
}

const cancelorder=async(orderId)=>{
  try {
    console.log(orderId);
     const resp = await axios.delete(`http://localhost:4004/api/user/ordercanceleation/${orderId}`, {
      headers: {
          Authorization: `Bearer ${curuser}`
      }
  });
  } catch (error) {
    console.log(error);
  }
}

  return (
    <cartcontext.Provider value={{ cart,
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
