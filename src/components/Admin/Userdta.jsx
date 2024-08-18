import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const Userdta = () => {
  const { id } = useParams();
  const [userdt, setUserdt] = useState([]);
  const [filt, setFilt] = useState([]);

  useEffect(() => {
    const userfetch = async () => {
      try {
        const resp = await axios.get("http://localhost:3000/users");
        setUserdt(resp.data);
        console.log(resp.data); // Move the console log here
      } catch (error) {
        console.error("fetching error: " + error);
      }
    };
    userfetch();
  }, []);

  useEffect(() => {
    setFilt(userdt.filter((user) => user.id == id));
  }, [userdt, id]); // Include userdt and id in the dependency array

  console.log(id); // Logging id if needed

  return (
    <div className='w-screen h-screen'>
      {filt.map((user) => (
        <div className="container mt-4 mb-4 p-3 flex justify-center" key={user.id} >
          <div >
            <div className="image flex flex-col justify-center items-center mt-20 w-[550px] h-[400px] bg-gray-200 ml-[300px]">
              
          <h1 className='pb-6'><FaUser size={60}/></h1>
            <h1 className="idd1 text-sm">User id : {user.id}</h1>
              <h1 className="name mt-3 text-2xl font-bold">Name : {user.input.username}</h1>
              <h1 className="idd text-lg font-semibold">Email : {user.input.email}</h1>
              <h1>Password : {user.input.password}</h1>
              <div className="flex justify-center items-center gap-2 mt-2">
             </div>
              
              <div className="date bg-gray-300 px-2 rounded mt-4">
                <h1>cart items : {user.input.cart}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Userdta;
