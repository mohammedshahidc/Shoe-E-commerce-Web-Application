// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'

// const Userdta = () => {
//   const{id}=useParams()
//   const [userdt,setUserdt]=useState([])
//   const [filt,setFilt]=useState([])
//   useEffect(()=>{
//     const userfetch= async ()=>{
//       try {
//         const resp=axios.get("http://localhost:3000/users")
//         setUserdt(resp.data)
        
//       } catch (error) {
//         console.error("fetching error"+error);
//       }
     
//     }
//     userfetch()
//   },[])
//   useEffect(()=>{
//     setFilt(userdt.filter((user)=>(if(user.id==id) )))
//   },[])


//   return (
//     <div>
//       {filt.map((user)=>(
//         <div className="container mt-4 mb-4 p-3 flex justify-center" key={user.id}>
//         <div className="card p-4 bg-gray-100 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
//           <div className="image flex flex-col justify-center items-center">
//             <button className="btn bg-secondary p-2 rounded-full">
//               <img
//                 src="https://i.imgur.com/wvxPV9S.png"
//                 alt="Profile"
//                 className="h-24 w-24 rounded-full transition-transform duration-500 hover:scale-150"
//               />
//             </button>
//             <span className="name mt-3 text-2xl font-bold">{user.input.username}</span>
//             <span className="idd text-lg font-semibold">{user.input.email}</span>
//             <div className="flex justify-center items-center gap-2 mt-2">
//               <span className="idd1 text-sm">{user.id}</span>
//               <span>
//                 <i className="fa fa-copy"></i>
//               </span>
//             </div>
//             <div className="flex justify-center items-center mt-3">
//               <span className="number text-2xl font-bold">
//                 1069 <span className="follow text-sm font-medium text-gray-600">Followers</span>
//               </span>
//             </div>
//             <div className="mt-2">
//               <button className="btn1 bg-black text-gray-400 px-4 py-2 rounded-lg">Edit Profile</button>
//             </div>
//             <div className="text mt-3 text-center">
//               <span className="text-sm text-gray-600">
//                 Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.
//                 <br />
//                 <br />
//                 Artist/ Creative Director by Day #NFT minting@ with FND night.
//               </span>
//             </div>
//             <div className="icons flex justify-center items-center gap-3 mt-3">
//               <span>
//                 <i className="fa fa-twitter text-lg"></i>
//               </span>
//               <span>
//                 <i className="fa fa-facebook-f text-lg"></i>
//               </span>
//               <span>
//                 <i className="fa fa-instagram text-lg"></i>
//               </span>
//               <span>
//                 <i className="fa fa-linkedin text-lg"></i>
//               </span>
//             </div>
//             <div className="date bg-gray-300 px-2 rounded mt-4">
//               <span className="join text-sm font-bold text-gray-600">Joined May, 2021</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       ))}
       
      
//     </div>
//   )
// }

// export default Userdta
import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
      } catch (error) {
        console.error("fetching error: " + error);
      }console.log(userdt);
    };
    userfetch();
  }, []);

  useEffect(() => {
    setFilt(userdt.filter((user) => user.id === id));
  }, []);
console.log(id);
  return (
    <div>
      {filt.map((user) => (
        <div className="container mt-4 mb-4 p-3 flex justify-center" key={user.id}>
          <div className="card p-4 bg-gray-100 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
            <div className="image flex flex-col justify-center items-center">
              <button className="btn bg-secondary p-2 rounded-full">
                <img
                  src="https://i.imgur.com/wvxPV9S.png"
                  alt="Profile"
                  className="h-24 w-24 rounded-full transition-transform duration-500 hover:scale-150"
                />
              </button>
              <span className="name mt-3 text-2xl font-bold">{user.input.username}</span>
              <span className="idd text-lg font-semibold">{user.input.email}</span>
              <div className="flex justify-center items-center gap-2 mt-2">
                <span className="idd1 text-sm">{user.id}</span>
                <span>
                  <i className="fa fa-copy"></i>
                </span>
              </div>
              <div className="flex justify-center items-center mt-3">
                <span className="number text-2xl font-bold">
                  1069 <span className="follow text-sm font-medium text-gray-600">Followers</span>
                </span>
              </div>
              <div className="mt-2">
                <button className="btn1 bg-black text-gray-400 px-4 py-2 rounded-lg">Edit Profile</button>
              </div>
              <div className="text mt-3 text-center">
                <span className="text-sm text-gray-600">
                  Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.
                  <br />
                  <br />
                  Artist/ Creative Director by Day #NFT minting@ with FND night.
                </span>
              </div>
              <div className="icons flex justify-center items-center gap-3 mt-3">
                <span>
                  <i className="fa fa-twitter text-lg"></i>
                </span>
                <span>
                  <i className="fa fa-facebook-f text-lg"></i>
                </span>
                <span>
                  <i className="fa fa-instagram text-lg"></i>
                </span>
                <span>
                  <i className="fa fa-linkedin text-lg"></i>
                </span>
              </div>
              <div className="date bg-gray-300 px-2 rounded mt-4">
                <span className="join text-sm font-bold text-gray-600">Joined May, 2021</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Userdta;
