import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { Admincontext } from './Admin context/AdminContext';
import { Usercont } from '../context/UserContext';

const Userdta = () => {
    const { id } = useParams();
    const navigate=useNavigate()
    const [Block, setBlock] = useState(false);
    const { userbyId } = useContext(Admincontext); 
    const { admin,getallusers } = useContext(Usercont);

    console.log("User details in context:", userbyId);

    
    useEffect(() => {
        if (userbyId) {
            setBlock(userbyId.block); 
        }
    }, [userbyId]);

    const blockstatus = async (userID) => {
        try {
            const response = await axios.put(`http://localhost:4004/api/admin/blockuser/${userID}`, {}, {
                headers: {
                    Authorization: `Bearer ${admin}`
                }
            });
          
            setBlock(prevBlock => !prevBlock); 
            console.log("Block status updated:", response.data); 
        } catch (error) {
            console.error(error);
        }
    };

    const deleteuser = async (userID) => {
        try {
            const response = await axios.delete(`http://localhost:4004/api/admin/deleteuser/${userID}`, {
                headers: {
                    Authorization: `Bearer ${admin}`
                }
            });
             
            navigate("/admin/usera")
            getallusers()
            
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div className='w-screen h-screen'>
            {userbyId ? (
                <div className="flex min-h-screen items-center justify-center ml-[230px]">
                    <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-[350px]">
                        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-gray-300 bg-clip-border text-gray-700">
                            <div className="pb-6 ml-[10px] mt-8 rounded-full border-2 border-black inline-flex items-center justify-center p-4">
                                <FaUser size={60} />
                            </div>
                            <div className='p-4 text-black'>
                                Name: {userbyId.username}<br />
                                Email: {userbyId.email}<br />
                            </div>
                            <button className='btn' onClick={() => blockstatus(userbyId._id)}>
                                {Block ? 'Unblock' : 'Block'}
                            </button>
                            <button className='btn' onClick={() => deleteuser(userbyId._id)}>Delete</button>
                        </div>
                        <div className="p-6 overflow-scroll w-[480px]">
                            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                Cart
                            </h6>
                            {/* Uncomment and modify this section if needed */}
                            {/* {userbyId.cart.map((item) => (
                                <div key={item.id}> // Ensure each item has a unique key
                                    Product: {item.name}<br />
                                    Price: {item.price}<br />
                                    Quantity: {item.quantity}<br />
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Userdta;
