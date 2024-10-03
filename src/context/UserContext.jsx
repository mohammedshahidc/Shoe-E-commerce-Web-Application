import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { json, useNavigate } from 'react-router-dom'

export const Usercont = createContext()


const UserContext = ({ children }) => {
    const [curuser, setCuruser] = useState(null)
    const [admin, setAdmin] = useState(null)

    useEffect(() => {
        const curentUser = localStorage.getItem("logindt")
        const storedAdmin = localStorage.getItem("admindt")

        setCuruser(JSON.parse(curentUser))
        setAdmin(JSON.parse(storedAdmin))

    }, [])

    const curentUser = localStorage.getItem("logindt")

//
    const handleLogout = () => {
        localStorage.removeItem("admindt")
        setAdmin(null)
        navigate("/")

    }

//
    const [login, setLogin] = useState({
        userName: '',
        userPassword: ''
    });
    const navigate = useNavigate()

    const handlelogChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...login, [name]: value });
    };
    const handlelogSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:5000/users')
            const users = response.data
            const user = users.find((user) => (user?.username === login?.userName && user?.password === login?.userPassword && user?.admin == false && user.block == false))
            const admin = users.find((admin) => (admin?.username === login?.userName && admin?.password === login?.userPassword && admin?.admin == true))

            if (user) {
                localStorage.setItem("logindt", JSON.stringify(user));
                setCuruser(user)
                navigate('/')

            } if (admin) {
                localStorage.setItem("admindt", JSON.stringify(admin))
                setAdmin(admin)
                navigate("/admin")

            } else {
                console.error('invalid', Error)
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
            <Usercont.Provider value={{ login, handlelogChange, handlelogSubmit, curuser, handlelogout, userID: curuser?.id, admin, handleLogout }}>
                {children}
            </Usercont.Provider>

        </div>
    )
}

export default UserContext
