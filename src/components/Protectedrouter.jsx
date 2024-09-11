import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Usercont } from '../Apiservices/UserContext'

const Protectedrouter = ({ children }) => {

    const { curuser } = useContext(Usercont)
    if (curuser) {
        return <Navigate to={"/"} />

    }

    return (
        children

    )
}

export default Protectedrouter
