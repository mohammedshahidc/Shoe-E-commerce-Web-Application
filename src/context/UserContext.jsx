import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { json, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export const Usercont = createContext()


const UserContext = ({ children }) => {
    const [curuser, setCuruser] = useState(null)
    const [username,setUsername]=useState("")
    const [admin, setAdmin] = useState(null)
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })
    useEffect(() => {
        const curentUser = localStorage.getItem("logindt")
        const storedAdmin = localStorage.getItem("admindt")
       setAdmin(storedAdmin)
        setCuruser(JSON.parse(curentUser))
        setAdmin(JSON.parse(storedAdmin))

    }, [])

    


    const handleLogout = () => {
        localStorage.removeItem("admindt")
        setAdmin(null)
        navigate("/")

    }


    
   
    const navigate = useNavigate()

    const handlelogChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...login, [name]: value });
    };
    const handlelogSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4004/api/user/login',{
                username:login.username,
                password:login.password

            },{withCredentials:true})
            console.log("response cntx :",response);
            if(response.status===200){
                const data=response.data.data
               console.log("cntxt data :",data.name);
                if(response.data.data.isAdmin===true){
                    setAdmin(response.data.data.token)
                    setUsername(data.name)
                    localStorage.setItem("admindt", JSON.stringify(data.token))

                    navigate("/admin")
                   toast.success("Admin login successfully")
                }else{
                    setCuruser(data.token)
                    setUsername(data.name)
                    localStorage.setItem("logindt", JSON.stringify(data.token));
                    toast.success("User login successfully")
                     navigate('/')
                   toast.success("user login successfully")
                   
                }
            }
           
        }

        catch (error) {
            console.error(error, 'err');
            toast.error("Invalid username or password")
        }
    };



    const handlelogout = async () => {
        try {

            localStorage.removeItem("logindt")

            setCuruser(null)

        } catch (error) {
console.log(error);
        }
    }


    return (
        <div>
            <Usercont.Provider value={{ login,
                 handlelogChange,
                 handlelogSubmit,
                  curuser, 
                  handlelogout, 
                  userID: curuser?._id, 
                  admin, 
                  handleLogout,
                  username 
                  }}>
                {children}
            </Usercont.Provider>

        </div>
    )
}

export default UserContext
