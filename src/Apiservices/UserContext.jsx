import React, { createContext,useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Dashboard from '../components/Admin/Adminhome'



export const Usercont=createContext()


const UserContext = ({children}) => {

    
    const curentUser=localStorage.getItem("logindt")
    const[curuser,setCuruser]=useState(curentUser? JSON.parse(curentUser):null)
    const storedAdmin=localStorage.getItem("admindt")
    const[admin,setAdmin]=useState(storedAdmin?JSON.parse(storedAdmin):null)
   const handleLogout=()=>{
    localStorage.removeItem("admindt")
    setAdmin(null)
    navigate("/")
    
   }
    
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
           const user=users.find((user)=>(user?.input?.username===login?.userName && user?.input?.password===login?.userPassword && user ?.input.admin==false))
            const admin=users.find((admin)=>(admin?.input?.username===login?.userName && admin ?.input ?.password===login?.userPassword && admin ?.input.admin==true))    
           console.log(user)
            if(user){
                localStorage.setItem("logindt",JSON.stringify(user));
                setCuruser(user)
                navigate('/')
                
            } if (admin) {
                localStorage.setItem("admindt",JSON.stringify(admin))
                setAdmin(admin)
                navigate("/admin")
                
            }else{
                console.error('invalid',Error)
            }
        }    
             
        catch(error){
            console.error(error,'err');
        }
       
       
     
    };
    
       

       const handlelogout=async()=>{
        try {
        
            localStorage.removeItem("logindt")
            
            setCuruser(null)
            
        } catch (error) {
            
        }
       }
        

  return (
    <div>
        <Usercont.Provider value={{login,handlelogChange,handlelogSubmit,curuser,handlelogout,userID:curuser?.id,admin,handleLogout}}>
            {children}
        </Usercont.Provider>
      
    </div>
  )
}

export default UserContext
