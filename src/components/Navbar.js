import React, { useContext, useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { FaShoppingCart,FaUser } from 'react-icons/fa';
import { cartcontext } from '../Apiservices/Cartproduct';


const Header = () => {
    const [open, setOpen] = useState(false);

    const{ notificationCount}=useContext(cartcontext)

    return (
        <header className='sticky top-0'>
            <nav className="flex h-auto w-auto bg-gray-100 shadow-lg rounded-lg justify-between md:h-16">
                <div className="flex w-full justify-between">
                    <div 
                        className={`flex px-6 w-1/2 items-center font-semibold md:w-1/5 md:px-1 md:flex md:items-center md:justify-center transition ease-out duration-300 ${open ? 'hidden' : ''}`}
                    >
                        <Link to="/">E-commerce</Link>
                    </div>

                    <div 
                        className={`flex flex-col w-full h-auto md:hidden transition ease-in-out duration-300 ${open ? '' : 'hidden'}`}
                    >
                         <div className="flex flex-col items-center justify-center gap-2">
                            <NavLink to="/" className={({isActive})=>isActive ?"text-blue-600":""}>Home</NavLink>
                            <NavLink to="/mens" className={({isActive})=>isActive ?"text-blue-600":""}>Men</NavLink>
                            <NavLink to="/women" className={({isActive})=>isActive ?"text-blue-600":""}>Women</NavLink>
                            <NavLink to="/contact" className={({isActive})=>isActive ?"text-blue-600":""}>Contact</NavLink>
                           
                            
                            <div className="relative">
                                <FaShoppingCart />
                                {notificationCount > 0 && (
                                    <span className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center text-white bg-red-500 rounded-full text-xs">
                                        {notificationCount}
                                        

                                    </span>
                                )}
                            </div>
                            

                            
                            <NavLink to="/user"  className={({isActive})=>isActive ?"text-blue-600":""}><button><FaUser className="w-5 h-32 mx-auto rounded pt-3 aspect-square" /></button></NavLink>
                        </div>
                    </div>

                    <div className="hidden w-3/5 items-center justify-evenly font-semibold md:flex">
                    <NavLink to="/" className={({isActive})=>isActive ?"text-blue-600":""}>Home</NavLink>
                            <NavLink to="/mens" className={({isActive})=>isActive ?"text-blue-600":""}>Men</NavLink>
                            <NavLink to="/women" className={({isActive})=>isActive ?"text-blue-600":""}>Women</NavLink>
                            <NavLink to="/contact" className={({isActive})=>isActive ?"text-blue-600":""}>Contact</NavLink>
                            
                          < NavLink to="/cart" className={({isActive})=>isActive ?"text-blue-600":""}><div className="relative">
                                <FaShoppingCart />
                                {notificationCount > 0 && (
                                    <span className="absolute bottom-3 left-4 w-5 h-5 flex items-center justify-center text-white bg-red-500 rounded-full text-xs">
                                        {notificationCount}
                                    </span>
                                )}
                            </div>
                            </NavLink>
                          
                            <NavLink to="/user" className={({isActive})=>isActive ?"text-blue-600":""}><button><FaUser className="w-5 h-32 mx-auto rounded pt-3 aspect-square" /></button></NavLink></div>

                    <div className="hidden w-1/5 items-center justify-evenly font-semibold md:flex">
                   
                   
                    </div>

                    <button 
                        className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span 
                                aria-hidden="true" 
                                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'rotate-45 -translate-y-1.5' : ''}`}
                            ></span>
                            <span 
                                aria-hidden="true" 
                                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'opacity-0' : ''}`}
                            ></span>
                            <span 
                                aria-hidden="true" 
                                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? '-rotate-45 translate-y-1.5' : ''}`}
                            ></span>
                        </div>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
