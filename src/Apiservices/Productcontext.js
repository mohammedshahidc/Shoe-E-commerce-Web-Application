// import axios from 'axios'
// import React from 'react'

 
// const Base_url="http://localhost:3000"
// export const GetAllproducts=async()=>{
//     const respons=await axios.get(`${Base_url}/ProductData `)
//     return respons.data
// }

// export const GetProductsId=async(id)=>{
//     const respons=await axios.get(`${Base_url}/ProductData/${id} `)
//     return respons.data
// }

// export const GetProductsImage=async(id)=>{
//     const respons=await axios.get(`${Base_url}/ProductData/${id}/image `)
//     return respons.data
// }
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const context = createContext();

const ProductContext = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const respons = await axios.get("http://localhost:3000/ProductData");
                setProducts(respons.data); 
            } catch (error) {
                console.error("Fetching error", error);
            }
        };

        fetch();
    }, []);

    console.log(products);

    return (
        <div>
        <context.Provider value={{products}}>
            {children}
        </context.Provider>

        </div>
       
    );
};

export default ProductContext;
