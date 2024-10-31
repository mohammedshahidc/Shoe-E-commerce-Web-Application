import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Usercont } from "../../context/UserContext";
export const Admincontext = createContext()

const Admin_allcontext = ({ children }) => {
    const { admin } = useContext(Usercont)
    const [adproduct, setAdproduct] = useState([])
    console.log("admin in admcntx :", admin);
    const getAllproducts = async () => {
        try {
            const resp = axios.get("http://localhost:4004/api/admin/getallproducts", {
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
            const resp = axios.get(`http://localhost:4004/api/admin/getproductbyid/${productId}`, {
                headers: {
                    Authorization: `Bearer ${admin}`
                }

            })
            await setAdproduct([resp.data.data])
            console.log(adproduct);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Admincontext.Provider value={{ adproduct, productByid }}>
            {children}
        </Admincontext.Provider>

    )


}





export default Admin_allcontext






