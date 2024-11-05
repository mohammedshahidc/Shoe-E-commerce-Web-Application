

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Admincontext } from './Admin context/AdminContext';
const UserA = () => {
    const { users, getuserbyid } = useContext(Admincontext)
    const navigate = useNavigate()
    console.log("users :", users);
    const getuserdt = async (userId) => {
        try {
            await getuserbyid(userId)
            navigate(`/admin/usera/${userId}`)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='bg-gray-50 h-screen overflow-scroll'>
            <table className="mt-5 ml-[250px] table-auto w-[1010px] text-black border-collapse border-solid border-2 border-gray-900">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">User Id</th>
                        <th className="border border-gray-300 px-4 py-2">User Name</th>
                        <th className="border border-gray-300 px-4 py-2">User Email</th>
                        {/* <th className="border border-gray-300 px-4 py-2">User Password</th> */}
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user?._id}>
                            <td className="border border-gray-300 border-solid border-1 px-4 py-2">{user?._id}</td>
                            <td className="border border-gray-300 px-4 py-2">{user?.username}</td>
                            <td className="border border-gray-300 px-4 py-2">{user?.email}</td>
                            {/* <td className="border border-gray-300 px-4 py-2">{user.input.password}</td> */}
                            <td className="border border-gray-300 px-4 py-2">
                                <div>

                                    <button class='btn' id='bt' onClick={() => getuserdt(user._id)}>
                                        Details
                                    </button>

                                </div>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserA;
