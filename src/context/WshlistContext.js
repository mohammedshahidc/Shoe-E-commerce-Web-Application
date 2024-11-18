import React, { Children, useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from "axios"
import { Usercont } from './UserContext'
import axiosInstatnce from '../Axiosinstance'



export const wishcontext = createContext()
const WshlistContext = ({ children }) => {



    const { curuser } = useContext(Usercont)

    console.log("cur :", curuser);
    const [wish, setWish] = useState([])

    const fetchWishlist = async () => {
        try {
            const resp = await axiosInstatnce.get("/user/getwishlist", {
                headers: {
                    Authorization: `Bearer ${curuser}`
                }
            })
            const data = resp.data.data.products
            console.log("data :", data);
            setWish(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchWishlist()
    }, [curuser])


    const addToWishlist = async (productId) => {
        try {
            if(curuser){
                const response = await axiosInstatnce.post(
                    "/user/addtowishlist",
                    { productId },
                    {
                        headers: {
                            Authorization: `Bearer ${curuser}`,
                        },
                    }
                );
                fetchWishlist()
            }else{
                alert("please login")
            }
            
        } catch (error) {
            console.log("Error adding to wishlist:", error);
        }
    };


    


    const removeFromWishlist = async (productId) => {
        try {
            if(curuser){
                const response = await axiosInstatnce.delete("/user/removewishlist", {
                    headers: {
                        Authorization: `Bearer ${curuser}`,
                    },
                    data: {
                        productId,
                    },
                });
                fetchWishlist()

            }else{
                alert("please login")
            }
           

        } catch (error) {
            console.log("Error removing from wishlist:", error);
        }
    };



    return (
        <div>
            <wishcontext.Provider value={{
                fetchWishlist,
                wish,
                setWish,
                addToWishlist,
                removeFromWishlist
            }}>

                {children}

            </wishcontext.Provider>
        </div>
    )
}

export default WshlistContext
