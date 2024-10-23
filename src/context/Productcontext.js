
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const context = createContext();

const ProductContext = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const respons = await axios.get("http://localhost:4004/api//user/products");
                setProducts(respons.data);
            } catch (error) {
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
