import React, { useContext } from 'react';
import { wishcontext } from '../../context/WshlistContext';
import { cartcontext } from '../../context/Cartproduct';
import { toast } from 'react-toastify';
const Wishlist = () => {
    const { wish,removeFromWishlist } = useContext(wishcontext);
    
    const handleDelete=(productId)=>{
      removeFromWishlist(productId)
    }
    const {addtoCart}=useContext(cartcontext)

    const handleAddtocart=(productId)=>{
      addtoCart(productId)
    }
    return (
        <div className="flex flex-col items-center p-4">
            {wish.map((item) => (
                <div key={item._id} className="flex flex-row justify-between items-center p-4 bg-gray-200 mt-4 rounded w-full max-w-[850px] shadow-md transition-all duration-300 ease-in-out">
                    <div className="mr-4 flex-shrink-0">
                        <img className="rounded w-[70px] h-[70px] object-cover" src={item.image} alt={item.name} />
                    </div>
                    <div className="flex flex-col flex-1">
                        <p className="font-bold text-lg">{item.name}</p>
                    </div>
                    <div className="flex-grow flex justify-center">
                        <p className="font-bold text-lg">₹{item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="text-white bg-red-500 rounded-sm p-2 hover:bg-red-600 transition duration-200 ease-in-out" onClick={()=>handleDelete(item._id)}>Delete</button>
                        <button className="text-white bg-blue-500 rounded-sm p-2 hover:bg-blue-600 transition duration-200 ease-in-out" onClick={()=>handleAddtocart(item._id)}>Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Wishlist;
