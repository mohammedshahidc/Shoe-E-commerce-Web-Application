import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Usercont } from "../../context/UserContext";
import axiosInstatnce from "../../Axiosinstance";
export const Admincontext = createContext()

const Admin_allcontext = ({ children }) => {
    const { admin } = useContext(Usercont)
    const [adproduct, setAdproduct] = useState([])
    const [ProductByid,setProductByid]=useState([])
    const [orders,setOrders]=useState([])
    const [users,setUsers]=useState([])
    const [userbyId,setUserbyId]=useState([])
    const [totalRevenue,setTotalRevanue]=useState('')
    console.log("admin in admcntx :", admin);
    const getAllproducts = async () => {
        try {
            const resp = axiosInstatnce.get("/admin/getallproducts", {
                headers: {
                    Authorization: `Bearer ${admin}`
                }
            })
            const data = (await resp).data.data
            setAdproduct(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllproducts()
        console.log("adproducts :", adproduct);
    }, [admin])

    const productByid = async (productId) => {
        try {
            const resp = await axiosInstatnce.get(`/admin/getproductbyid/${productId}`, {
                headers: {
                    Authorization: `Bearer ${admin}`
                }

            })
            setProductByid(Array.isArray(resp.data.data) ? resp.data.data : [resp.data.data]);

            console.log("P byId:",ProductByid)
        } catch (error) {
            console.log(error);
        }
    }



    const getAllOrders = async () => {
        try {
            const resp = await axiosInstatnce.get("/admin/getallorders", {
                headers: {
                    Authorization: `Bearer ${admin}`,
                },
            });
            setOrders(resp.data.data);
            console.log("order:", resp.data.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };
    
    useEffect(() => {
        if (admin) {
            getAllOrders();
        }
    }, [admin]);
    
   
    const deleteproduct=async(productId)=>{
        try {
            const resp=await axiosInstatnce.delete(`/admin/deleteproduct/${productId}`,{
                headers:{
                    Authorization:`Bearer ${admin}`
                }
            })
           

        } catch (error) {
            console.log(error);
        }
      
    }


    const getallusers=async()=>{
        try {
            const resp=await axiosInstatnce.get("/admin/getusers",{
                headers:{
                    Authorization:`Bearer ${admin}`
                }
            })
            setUsers(resp.data)
          
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getallusers()
    },[admin])

const getuserbyid=async(userId)=>{
    try {
        const resp=await axiosInstatnce.get(`/admin/userbyid/${userId}`,{
            headers:{
                Authorization:`Bearer ${admin}`
            }
        })
        console.log("users incntx:",resp.data);
        setUserbyId(resp.data.data)
        
    } catch (error) {
       console.log(error); 
    }
}

useEffect(()=>{
    const totalincome=async()=>{
      try {
        const resp=await axiosInstatnce.get("/admin/calculateincome",{
          headers:{
            Authorization:`Bearer ${admin}`
          }
        })
        setTotalRevanue(resp.data.toalRevanue)
      } catch (error) {
        console.error(error);
      }
    }
    totalincome()
    console.log("rev",totalRevenue);
  },[totalRevenue,admin])
  

    return (
        <Admincontext.Provider value={{ 
        adproduct,
        productByid,
        ProductByid,
        getAllproducts,
        orders,
        deleteproduct,
        getallusers,
        users,
        userbyId,
        getuserbyid,
        getAllOrders,
        adproduct,
        totalRevenue
        }}>
            {children}
        </Admincontext.Provider>

    )


}





export default Admin_allcontext






