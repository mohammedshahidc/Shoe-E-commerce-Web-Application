import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const Userdta = () => {
  const { id } = useParams();
  const [userdt, setUserdt] = useState([]);
  const [filt, setFilt] = useState([]);
  const [Block, setBlock] = useState(false)

  useEffect(() => {
    const userfetch = async () => {
      try {
        const resp = await axios.get("http://localhost:5000/users");
        setUserdt(resp.data);

      } catch (error) {
        console.error("fetching error: " + error);
      }
    };
    userfetch();
  }, []);

  useEffect(() => {
    const user1 = userdt.find((user) => user.id === id);
    if (user1) {
      setFilt([user1])
      setBlock(user1?.block)
    }
  }, [userdt, id]);


  const blockstatus = async () => {
    // if (id) {
    const blocked = !Block
    try {
      const response = await axios.patch(`http://localhost:5000/users/${id}`, {
        block: blocked
      })

    } catch (error) {
      console.error(error);
    }
    // }
  }

  return (
    <div className='w-screen h-screen'>
      {filt.map((user) => (

        <div className="flex min-h-screen items-center justify-center ml-[230px]">
          <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-[350px]">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-gray-300 bg-clip-border text-gray-700">
              <div className="pb-6 ml-[10px] mt-8 rounded-full border-2 border-black inline-flex items-center justify-center p-4">
                <FaUser size={60} />

              </div>
              <div className='p-4 text-black'>
                Name : {user.username}<br />
                Email : {user.email}<br />
                id : {user.id}
              </div>
              <button class='btn' onClick={blockstatus}> {Block ? 'Unblock' : 'Block'}</button>
            </div>

            <div className="p-6 overflow-scroll w-[480px]">
              <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                Cart
              </h6>

              <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                {user.cart.map((item) => (
                  <div>
                    Product : {item.name}<br />
                    price : {item.price}<br />
                    Quantity : {item.quantity}<br />
                  </div>
                ))}
              </p>

            </div>
          </div>
          <div className="flex items-center justify-center">

          </div>
        </div>
      ))}
    </div>
  );
};

export default Userdta;
