// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'

// const Userdta = () => {
//     const {id}=useParams()
//     const [user,setUser]=useState([])
//     const [filt,setFilt]=useState([])
//     useEffect(()=>{
//         const fetch=()=>{
//             const fetch= axios.get("http://localhost:3000/users")
//             setUser(fetch.data)
//         }
//         fetch()
//     },[])
//    useEffect(()=>{
//     const filter=setFilt(user.filter((user)=>(user.id==id)))
//    },[])
//   return (
    
    
//     <div className="container mt-4 mb-4 p-3 flex justify-center">
//         {filt.map((user)=>(
//              <div className="card p-4 bg-gray-200 shadow-lg rounded-lg hover:scale-105 transition-transform duration-500" key={user.id}>
//              <div className="image flex flex-col justify-center items-center">
//                <button className="btn bg-secondary rounded-full">
//                  <img
//                    src="https://i.imgur.com/wvxPV9S.png"
//                    alt="Profile"
//                    className="h-36 w-36 rounded-full transition-transform duration-500 hover:scale-150"
//                  />
//                </button>
//                <span className="name mt-3 text-xl font-bold">{user.input.username}</span>
//                <span className="idd text-sm font-semibold">@eleanorpena</span>
//                <div className="flex flex-row justify-center items-center gap-2">
//                  <span className="idd1 text-xs">Oxc4c16a645_b21a</span>
//                  <span>
//                    <i className="fa fa-copy"></i>
//                  </span>
//                </div>
//                <div className="flex flex-row justify-center items-center mt-3">
//                  <span className="number text-xl font-bold">
//                    1069 <span className="follow text-sm font-medium text-gray-700">Followers</span>
//                  </span>
//                </div>
//                <div className="mt-2">
//                  <button className="btn1 bg-black text-gray-400 h-10 w-36 rounded-full">Edit Profile</button>
//                </div>
//                <div className="text mt-3">
//                  <span className="text-sm text-gray-600 font-medium">
//                    Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.
//                    <br />
//                    <br /> Artist/ Creative Director by Day #NFT minting@ with FND night.
//                  </span>
//                </div>
//                <div className="gap-3 mt-3 icons flex flex-row justify-center items-center">
//                  <span>
//                    <i className="fa fa-twitter"></i>
//                  </span>
//                  <span>
//                    <i className="fa fa-facebook-f"></i>
//                  </span>
//                  <span>
//                    <i className="fa fa-instagram"></i>
//                  </span>
//                  <span>
//                    <i className="fa fa-linkedin"></i>
//                  </span>
//                </div>
//                <div className="px-2 rounded mt-4 date bg-gray-300">
//                  <span className="join text-sm text-gray-500 font-bold">Joined May, 2021</span>
//                </div>
//              </div>
//            </div>
//         ))}
   
//   </div>
//   )
// }

// export default Userdta
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Userdta = () => {
    const { id } = useParams()
    const [user, setUser] = useState([])
    const [filt, setFilt] = useState([])

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("http://localhost:3000/users")
                setUser(response.data)
            } catch (error) {
                console.error("Error fetching data", error)
            }
            
        }
        fetchUser()
    }, [])

    useEffect(() => {
        setFilt(user.filter((user) => user.id == id))
    }, [])

    return (
      <div>
       
            
            {filt.map((user)=>(
                <div className="container mt-4 mb-4 p-3 flex justify-center" key={user.id}>
      <div className="card p-4">
        <div className="image flex flex-col justify-center items-center">
          <button className="btn btn-secondary">
            <img
              src="https://i.imgur.com/wvxPV9S.png"
              alt="User"
              className="rounded-full transition-transform duration-500"
              height="100"
              width="100"
            />
          </button>
          <span className="name mt-3 text-xl font-bold">{user.input.name}</span>
          <span className="idd text-sm font-semibold">@eleanorpena</span>
          <div className="flex flex-row justify-center items-center gap-2">
            <span className="idd1 text-xs">Oxc4c16a645_b21a</span>
            <span>
              <i className="fa fa-copy"></i>
            </span>
          </div>
          <div className="flex flex-row justify-center items-center mt-3">
            <span className="number text-xl font-bold">1069</span>
            <span className="follow text-xs font-medium text-gray-600 ml-1">
              Followers
            </span>
          </div>
          <div className="flex mt-2">
            <button className="btn1 bg-black text-gray-400 text-sm py-2 px-4 rounded">
              Edit Profile
            </button>
          </div>
          <div className="text mt-3 text-sm text-gray-600 font-medium">
            <span>
              Eleanor Pena is a creator of minimalistic x bold graphics and
              digital artwork.
              <br />
              <br /> Artist/ Creative Director by Day #NFT minting@ with FND
              night.
            </span>
          </div>
          <div className="gap-3 mt-3 icons flex flex-row justify-center items-center">
            <span>
              <i className="fa fa-twitter"></i>
            </span>
            <span>
              <i className="fa fa-facebook-f"></i>
            </span>
            <span>
              <i className="fa fa-instagram"></i>
            </span>
            <span>
              <i className="fa fa-linkedin"></i>
            </span>
          </div>
          <div className="px-2 rounded mt-4 date bg-gray-300">
            <span className="join text-sm text-gray-500 font-bold">
              Joined May, 2021
            </span>
          </div>
        </div>
      </div>
    </div>
           
        ))}
 

      </div>
    )
}

export default Userdta
