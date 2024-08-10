import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart,FaUser } from 'react-icons/fa';


const Header = () => {
    const [open, setOpen] = useState(false);

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
                            <Link to="/">Home</Link>
                            <Link to="/mens">Men</Link>
                            <Link to="/women">Women</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/cart">  <FaShoppingCart /> </Link>
                           {/* <Link to="/login"> <button>Login</button> </Link> 
                            <Link to="register"> <button>Sign Up</button>  </Link> */}
                            <Link to="/user"><button><FaUser className="w-5 h-32 mx-auto rounded pt-3 aspect-square" />

                            </button></Link>
                        </div>
                    </div>

                    <div className="hidden w-3/5 items-center justify-evenly font-semibold md:flex">
                        <Link to="/">Home</Link>
                        <Link to="/mens">Men</Link>
                        <Link to="/women">Women</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/cart"> <FaShoppingCart className='text-xl'/> </Link>
                    </div>

                    <div className="hidden w-1/5 items-center justify-evenly font-semibold md:flex">
                    {/* <Link to="/login"> <button>Login</button> </Link> 
                    <Link to="register"> <button>Sign Up</button>  </Link> */}
                    <Link to="/user"><button><FaUser className="w-5 h-32 mx-auto rounded pt-3 aspect-square" />

                    </button></Link>
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
