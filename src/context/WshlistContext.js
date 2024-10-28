import React, { Children, useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from "axios"
import { Usercont } from './UserContext'



export const wishcontext=createContext()
const WshlistContext = ({children}) => {

    
    
    const {curuser}=useContext(Usercont)
    
    console.log("cur :",curuser);
    const [wish,setWish]=useState([])

    const fetchWishlist=async ()=>{
        try {
            const resp = await axios.get("http://localhost:4004/api/user/getwishlist", {
                headers: {
                    Authorization: `Bearer ${curuser}`
                }
            })
            const data= resp.data.data.products
            console.log("data :", data);
            setWish(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchWishlist()
    },[curuser])
  

    const addToWishlist = async (productId) => {
        try {
            const response = await axios.post(
                "http://localhost:4004/api/user/addtowishlist",
                { productId },
                {
                    headers: {
                        Authorization: `Bearer ${curuser}`,
                    },
                }
            );
            fetchWishlist()
        } catch (error) {
            console.log("Error adding to wishlist:", error);
        }
    };
    

    const removeFromWishlist = async (productId) => {
        try {
            const response = await axios.delete("http://localhost:4004/api/user/removewishlist", {
                headers: {
                    Authorization: `Bearer ${curuser}`,
                },
                data: {
                    productId,
                },
            });
            fetchWishlist()
            
        } catch (error) {
            console.log("Error removing from wishlist:", error);
        }
    };
    
  return (
    <div>
      <wishcontext.Provider value={{fetchWishlist,wish,setWish,addToWishlist,removeFromWishlist}} >

      {children}

      </wishcontext.Provider>
    </div>
  )
}

export default WshlistContext
