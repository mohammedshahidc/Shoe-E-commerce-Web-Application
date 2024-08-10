import React, { createContext,useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const Usercont=createContext()


const UserContext = ({children}) => {

    const curentUser=localStorage.getItem("logindt")
    const[curuser,setCuruser]=useState(curentUser? JSON.parse(curentUser):null)
    
    console.log(curuser);
    const [login, setLogin] = useState({
        userName: '',
        userPassword: ''
    });
    const navigate=useNavigate()

    const handlelogChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...login, [name]: value });
    };
    const handlelogSubmit =async (e) => {
        e.preventDefault();
        try{
            const response=await axios.get('http://localhost:3000/users')
            const users=response.data
           const user=users.find((user)=>(user?.input.username===login.userName && user?.input.password===login.userPassword))
           console.log(user)
            if(user){
                localStorage.setItem("logindt",JSON.stringify(user));
                setCuruser(user)
                navigate('/')
                
            } else{
                console.error('invalid',Error)
            }
        }    
             
        catch(error){
            console.error(error,'err');
        }
       
       
     
    };
    // useEffect(()=>{
    //     const curentUser=localStorage.getItem("logindt")
    //     if(curentUser){
    //         setCuruser(JSON.parse(curentUser))
    //     }
    //    },[]) 
       

       const handlelogout=async()=>{
        try {
        
            localStorage.removeItem("logindt")
            setCuruser(null)
            // navigate("/login")
        } catch (error) {
            
        }
       }
        

  return (
    <div>
        <Usercont.Provider value={{login,handlelogChange,handlelogSubmit,curuser,handlelogout,userID:curuser?.id}}>
            {children}
        </Usercont.Provider>
      
    </div>
  )
}

export default UserContext
