
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstatnce from '../Axiosinstance';
export const context = createContext();

const ProductContext = ({ children }) => {
    const [products, setProducts] = useState([]);
const [loading,setLoading]=useState(false)
    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(true)
                const respons = await axiosInstatnce.get("/user/products");
                setProducts(respons.data);
               setLoading(false)
            } catch (error) {
                setLoading(false)
                console.error("Fetching error", error);
            }
        };

        fetch();
    }, []);



    return (
        <div>
            <context.Provider value={{ products, setProducts }}>
                {children}
            </context.Provider>

        </div>

    );
};

export default ProductContext;
