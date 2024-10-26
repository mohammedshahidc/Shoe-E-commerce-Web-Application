import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { json, useNavigate } from 'react-router-dom'

export const Usercont = createContext()


const UserContext = ({ children }) => {
    const [curuser, setCuruser] = useState(null)
    const [admin, setAdmin] = useState(null)
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })
    useEffect(() => {
        const curentUser = localStorage.getItem("logindt")
        const storedAdmin = localStorage.getItem("admindt")

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
            console.log("response  ",response);
            if(response.status===200){
                const data=response.data.token
               
                if(data.isAdmin===true){
                    setAdmin(data)
                    localStorage.setItem("admindt", JSON.stringify(data))
                    navigate("/admin")
                }else{
                    setCuruser(data)
                    localStorage.setItem("logindt", JSON.stringify(data));
                     navigate('/')
                }
            }
           
        }

        catch (error) {
            console.error(error, 'err');
        }
    };



    const handlelogout = async () => {
        try {

            localStorage.removeItem("logindt")

            setCuruser(null)

        } catch (error) {

        }
    }


    return (
        <div>
            <Usercont.Provider value={{ login, handlelogChange, handlelogSubmit, curuser, handlelogout, userID: curuser?._id, admin, handleLogout }}>
                {children}
            </Usercont.Provider>

        </div>
    )
}

export default UserContext
