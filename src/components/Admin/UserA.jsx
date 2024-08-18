
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const UserA = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get("http://localhost:3000/users");
//                 setUsers(response.data);
//             } catch (error) {
//                 console.error("Fetching error: " + error);
//             }
//         };
//         fetchUsers();
//     }, []);

//     // Filter users where admin is false
//     const filteredUsers = users.filter(user => user.input.admin === false);

//     return (
//         <div className='bg-gray-50 h-screen overflow-scroll'>
//             <table className="mt-5 ml-[250px] table-auto w-[1010px] text-black border-collapse border-solid border-2 border-gray-900">
//                 <thead>
//                     <tr>
//                         <th className="border border-gray-300 px-4 py-2">User Id</th>
//                         <th className="border border-gray-300 px-4 py-2">User Name</th>
//                         <th className="border border-gray-300 px-4 py-2">User Email</th>
//                         <th className="border border-gray-300 px-4 py-2">User Password</th>
//                         <th className="border border-gray-300 px-4 py-2">jhh</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredUsers.map(user => (
//                         <tr key={user.id}> {/* Add a unique key */}
//                             <td className="border border-gray-300 border-solid border-1 px-4 py-2">{user.id}</td>
//                             <td className="border border-gray-300 px-4 py-2">{user.input.username}</td>
//                             <td className="border border-gray-300 px-4 py-2">{user.input.email}</td>
//                             <td className="border border-gray-300 px-4 py-2">{user.input.password}</td>
//                             <td className="border border-gray-300 px-4 py-2">
//                             <Link to={`/admin/usera/${user.id}`}><button className="bg-blue-700 text-white w-[100px] h-[30px] rounded-md test-hover">Detailes</button></Link>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default UserA;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const UserA = () => {
//     const [users, setUsers] = useState([]);
//     const navigate=useNavigate()

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get("http://localhost:3000/users");
//                 setUsers(response.data);
//             } catch (error) {
//                 console.error("Fetching error: " + error);
//             }
//         };
//         fetchUsers();
//     }, []);

//     // Filter users where admin is false
//     const filteredUsers = users.filter(user => user.input.admin === false);

//     return (
//         <div className='bg-gray-50 h-screen overflow-scroll'>
//             <table className="mt-5 ml-[250px] table-auto w-[1010px] text-black border-collapse border-solid border-2 border-gray-900">
//                 <thead>
//                     <tr>
//                         <th className="border border-gray-300 px-4 py-2">User Id</th>
//                         <th className="border border-gray-300 px-4 py-2">User Name</th>
//                         <th className="border border-gray-300 px-4 py-2">User Email</th>
//                         <th className="border border-gray-300 px-4 py-2">User Password</th>
//                         <th className="border border-gray-300 px-4 py-2">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredUsers.map(user => (
//                         <tr key={user.id}> {/* Add a unique key */}
//                             <td className="border border-gray-300 border-solid border-1 px-4 py-2">{user.id}</td>
//                             <td className="border border-gray-300 px-4 py-2">{user.input.username}</td>
//                             <td className="border border-gray-300 px-4 py-2">{user.input.email}</td>
//                             <td className="border border-gray-300 px-4 py-2">{user.input.password}</td>
//                             <td className="border border-gray-300 px-4 py-2">
//                                <button className='bg-blue-700 text-white w-[100px] h-[30px] rounded-md hover:bg-black cursor-pointer'  onClick={() => navigate(`/admin/userA/${user.id}`)}>Detailes</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default UserA;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const UserA = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/users");
                setUsers(response.data);
            } catch (error) {
                console.error("Fetching error: " + error);
            }
        };
        fetchUsers();
    }, []);

    // Filter users where admin is false
    const filteredUsers = users.filter(user => user.input.admin === false);

    return (
        <div className='bg-gray-50 h-screen overflow-scroll'>
            <table className="mt-5 ml-[250px] table-auto w-[1010px] text-black border-collapse border-solid border-2 border-gray-900">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">User Id</th>
                        <th className="border border-gray-300 px-4 py-2">User Name</th>
                        <th className="border border-gray-300 px-4 py-2">User Email</th>
                        <th className="border border-gray-300 px-4 py-2">User Password</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}> {/* Add a unique key */}
                            <td className="border border-gray-300 border-solid border-1 px-4 py-2">{user.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.input.username}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.input.email}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.input.password}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <div>
                                    <Link to={`/admin/usera/${user.id}`}>
                                        <button class='btn' id='bt'>
                                            Details
                                        </button>
                                    </Link>
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
