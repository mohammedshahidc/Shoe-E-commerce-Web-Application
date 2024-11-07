import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa';
import { cartcontext } from '../../context/Cartproduct';
import { Usercont } from '../../context/UserContext';
import { wishcontext } from '../../context/WshlistContext';

const Header = () => {
    const [open, setOpen] = useState(false);
    const { notificationCount } = useContext(cartcontext);
    const { wish } = useContext(wishcontext); // Assuming wishCount is coming from the context or can be calculated
    const { curuser } = useContext(Usercont);
    console.log("wish:", wish);
    return (
        <header className='sticky top-0 z-50 bg-gray-100'>
            <nav className="shadow-lg h-[65px] flex items-center justify-between px-4 md:px-8">
                <div className="flex items-center justify-between w-full">
                    {/* Logo */}
                    <div className="font-semibold text-xl md:w-1/5">
                        <Link to="/">E-commerce</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="text-gray-500 w-10 h-10 md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        <div className="block w-5 relative">
                            <span
                                aria-hidden="true"
                                className={`block h-0.5 w-full bg-current transition-transform duration-500 ease-in-out ${open ? 'rotate-45 translate-y-2' : ''}`}
                            ></span>
                            <span
                                aria-hidden="true"
                                className={`block h-0.5 w-full bg-current mt-1 transition-opacity duration-500 ease-in-out ${open ? 'opacity-0' : ''}`}
                            ></span>
                            <span
                                aria-hidden="true"
                                className={`block h-0.5 w-full bg-current mt-1 transition-transform duration-500 ease-in-out ${open ? '-rotate-45 -translate-y-2' : ''}`}
                            ></span>
                        </div>
                    </button>

                    {/* Mobile Menu */}
                    <div
                        className={`${open ? 'flex' : 'hidden'} absolute top-[65px] left-0 w-full flex-col items-center bg-gray-100 md:hidden space-y-2 py-4`}
                    >
                        <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>Home</NavLink>
                        <NavLink to="/mens" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>Men</NavLink>
                        <NavLink to="/women" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>Women</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>Contact</NavLink>

                        {curuser && (
                            <>
                                <div className="relative">
                                    <NavLink to="/cart" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
                                        <FaShoppingCart />
                                        {notificationCount > 0 && (
                                            <span className="fixed -top-4 left-5 w-4 h-4 flex items-center justify-center text-white bg-red-500 rounded-full text-xs mt-1">
                                                {notificationCount}
                                            </span>
                                        )}
                                    </NavLink>
                                </div>

                                {/* Wishlist Icon with Notification Count */}
                                <div className="relative">
                                    <NavLink to="/wishlist" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
                                        <FaHeart className="w-6 h-6" />
                                        {wish.length > 0 && (
                                            <span className="fixed -top-4 left-5 w-4 h-4 flex items-center justify-center text-white bg-red-500 rounded-full text-xs mt-1">
                                                {wish.length}
                                            </span>
                                        )}
                                    </NavLink>
                                </div>



                            </>
                        )}

                        {/* Always show FaUser */}
                        <NavLink to="/user" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
                            <FaUser className="w-5 h-5" />
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>Home</NavLink>
                        <NavLink to="/mens" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>Men</NavLink>
                        <NavLink to="/women" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>Women</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>Contact</NavLink>

                        {curuser && (
                            <>
                                {/* Wishlist Icon with Notification Count */}
                                <div className="relative">
                                    <NavLink to="/wishlist" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
                                        <FaHeart />
                                        {wish.length > 0 && (
                                            <span className="fixed -top-4 left-2 w-4 h-4 flex items-center justify-center text-white bg-red-500 rounded-full text-xs">
                                                {wish.length}
                                            </span>
                                        )}
                                    </NavLink>
                                </div>

                                <div className="relative">
                                    <NavLink to="/cart" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
                                        <FaShoppingCart />
                                        {notificationCount > 0 && (
                                            <span id='not' className="fixed -top-4 left-2 w-4 h-4 flex items-center justify-center text-white bg-red-500 rounded-full text-xs mt-1">
                                                {notificationCount}
                                            </span>
                                        )}
                                    </NavLink>
                                </div>
                            </>
                        )}

                        {curuser ? (
                            <NavLink to="/user" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
                                <FaUser className="w-5 h-5" />
                            </NavLink>
                        ) : (
                            <NavLink to="/login" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
                                <FaUser className="w-5 h-5" />
                            </NavLink>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
