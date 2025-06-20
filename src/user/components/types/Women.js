import React, { useContext, useState, useEffect } from 'react';
import { context } from '../../../context/Productcontext';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { cartcontext } from '../../../context/Cartproduct';
import { wishcontext } from '../../../context/WshlistContext';
import { toast } from 'react-toastify';
import Spinner from '../../../context/Loader/Spinner';

const Women = () => {
    const { products,loading } = useContext(context);
    const { addtoCart, fetchCartData, cart } = useContext(cartcontext);
    const { addToWishlist, removeFromWishlist, wish } = useContext(wishcontext);

    const [likedProducts, setLikedProducts] = useState({});
    const [cartpro, setCartpro] = useState({})

    useEffect(() => {
        const initialLikedProducts = {};
        wish.forEach((item) => {
            initialLikedProducts[item._id] = true;
        });
        setLikedProducts(initialLikedProducts);
    }, [wish]);

    useEffect(() => {
        const cartaddedpro = {}
        cart.forEach((item) => {
            cartaddedpro[item.product._id] = true
        })
        setCartpro(cartaddedpro)
    }, [cart])
    const handleAddToWishlist = (productId) => {
        addToWishlist(productId);
        setLikedProducts((prev) => ({ ...prev, [productId]: true }));
    };


    const handleRemoveFromWishlist = (productId) => {
        removeFromWishlist(productId);
        setLikedProducts((prev) => ({ ...prev, [productId]: false }));
        toast.info("Item removed from wishlist");
    };


    const handleAddToCart = async (item) => {
        await addtoCart(item);
        await fetchCartData();
        toast.success("Item added to cart");
    };
    if(loading){
        return <Spinner/>
      }
    

    return (
        <div className="bg-cover bg-center h-full w-full bg-teal-50">
            <h1 className="fonts pt-6">Feel the Fit, Love the Look – Shoes That Capture Attention.</h1>
            <div className="flex flex-wrap justify-center gap-6 p-6">
                {products
                    .filter((item) => item.type === "women")
                    .map((item) => (
                        <div key={item._id}>
                            <div className="w-[300px] h-[400px] bg-teal-50 border border-gray-200 rounded-lg shadow-md overflow-hidden group transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">


                                <FaHeart
                                    onClick={() => {
                                        if (likedProducts[item._id]) {
                                            handleRemoveFromWishlist(item._id);
                                        } else {
                                            handleAddToWishlist(item._id);
                                        }
                                    }}
                                    className={`ml-[270px] mt-3 cursor-pointer ${likedProducts[item._id] ? 'text-red-500' : 'text-black'
                                        }`}
                                    size={20}
                                />


                                <FaShoppingCart
                                    onClick={() => handleAddToCart(item)}
                                    className={`ml-[235px] mt-[-20px] cursor-pointer ${cartpro[item._id] ? 'text-blue-500' : 'text-black'}`}
                                    size={20}
                                />

                                <Link to={item._id} className="relative block">
                                    <img
                                        src={item.image}
                                        alt="product"
                                        className="w-full h-48 object-cover transition-transform transform group-hover:scale-105 duration-300 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
                                </Link>
                                <div className="p-4 h-24">
                                    <h5 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h5>
                                    <h5 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h5>
                                    <h5 className="text-xl font-semibold text-gray-900 mb-2">₹ {item.price}</h5>
                                    <p className="text-gray-700 mb-4">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Women;
