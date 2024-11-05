import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { Admincontext } from './Admin context/AdminContext';
import { Usercont } from '../context/UserContext';

const Userdta = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [block, setBlock] = useState(false);
    const { userbyId } = useContext(Admincontext);
    const { admin, getallusers } = useContext(Usercont);
    const [orderById, setOrderById] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userbyId) {
            setBlock(userbyId.block);

        }
    }, [userbyId]);

    const blockStatus = async (userID) => {
        try {
            await axios.put(`http://localhost:4004/api/admin/blockuser/${userID}`, {}, {
                headers: {
                    Authorization: `Bearer ${admin}`
                }
            });
            setBlock(prevBlock => !prevBlock);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteUser = async (userID) => {
        try {
            await axios.delete(`http://localhost:4004/api/admin/deleteuser/${userID}`, {
                headers: {
                    Authorization: `Bearer ${admin}`
                }
            });
            navigate("/admin/usera");
            getallusers();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    useEffect(() => {
        const getOrdersById = async () => {
            try {
                const response = await axios.get(`http://localhost:4004/api/admin/getorderbyid/${id}`, {
                    headers: {
                        Authorization: `Bearer ${admin}`
                    }
                });
                setOrderById(response.data.data.products);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching orders:", error);
                setLoading(false);
            }
        };
        getOrdersById();
    }, [id, admin]);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div className='w-screen h-screen'>
            {userbyId ? (
                <div className="flex min-h-screen items-center justify-center ml-[230px]">
                    <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white text-gray-700 shadow-md h-[350px]">
                        <div className="relative w-2/5 bg-gray-300 rounded-l-xl flex flex-col items-center p-6">
                            <div className="mb-4 rounded-full border-2 border-black inline-flex items-center justify-center p-4">
                                <FaUser size={60} />
                            </div>
                            <div className='text-black text-center'>
                                <p>Name: {userbyId.username}</p>
                                <p>Email: {userbyId.email}</p>
                            </div>
                            <button className='btn mt-4' onClick={() => blockStatus(userbyId._id)}>
                                {block ? 'Unblock' : 'Block'}
                            </button>
                            <button className='btn mt-2' onClick={() => deleteUser(userbyId._id)}>Delete</button>
                        </div>
                        <div className="p-6 w-[480px] overflow-y-scroll">
                            <h6 className="mb-4 text-base font-semibold uppercase text-pink-500">Orders</h6>
                            {orderById.length > 0 ? (
                                orderById.map((product) => (
                                    <div key={product._id} className="mb-4 border-b pb-4">
                                        <p><strong>Product Name:</strong> {product.productId.name}</p>
                                        <p><strong>Price:</strong> ₹{product.productId.price}</p>
                                        <p><strong>Quantity:</strong> {product.quantity}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No products found for this user.</p>
                            )}
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
