import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa';
import { cartcontext } from '../../context/Cartproduct';
import { Usercont } from '../../context/UserContext';
import { wishcontext } from '../../context/WshlistContext';
import logo_rounded from './logo_rounded.png';

const Header = () => {
    const [open, setOpen] = useState(false);
    const { notificationCount } = useContext(cartcontext);
    const { wish } = useContext(wishcontext);
    const { curuser } = useContext(Usercont);

    return (
        <header className="sticky top-0 z-50 bg-gray-100 shadow-md">
            <nav className="h-[65px] flex items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <img src={logo_rounded} alt="logo" className="h-12 md:h-12" />
                    <Link to="/" className="text-xl font-semibold hidden md:block">
                        Shoe Club
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="text-gray-500 w-10 h-10 md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    <div className="block w-6 relative">
                        <span
                            aria-hidden="true"
                            className={`block h-0.5 w-full bg-current transition-transform duration-500 ease-in-out ${open ? 'rotate-45 translate-y-2' : ''
                                }`}
                        ></span>
                        <span
                            aria-hidden="true"
                            className={`block h-0.5 w-full bg-current mt-1 transition-opacity duration-500 ease-in-out ${open ? 'opacity-0' : ''
                                }`}
                        ></span>
                        <span
                            aria-hidden="true"
                            className={`block h-0.5 w-full bg-current mt-1 transition-transform duration-500 ease-in-out ${open ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        ></span>
                    </div>
                </button>

                {/* Mobile Menu */}
                <div
                    className={`absolute top-[65px] left-0 w-full bg-gray-100 md:hidden flex-col items-center py-4 space-y-2 transition-all duration-300 ${open ? 'flex' : 'hidden'
                        }`}
                >
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/mens"
                        className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
                    >
                        Men
                    </NavLink>
                    <NavLink
                        to="/women"
                        className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
                    >
                        Women
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
                    >
                        Contact
                    </NavLink>

                    {/* Icons for Mobile */}
                    <div className="flex space-x-6 items-center">
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                isActive ? 'text-blue-600' : ''
                            }
                        >
                            <FaShoppingCart className="text-xl" />
                            {notificationCount > 0 && (
                                <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-red-500 text-white text-xs rounded-full">
                                    {notificationCount}
                                </span>
                            )}
                        </NavLink>
                        <NavLink
                            to="/wishlist"
                            className={({ isActive }) =>
                                isActive ? 'text-blue-600' : ''
                            }
                        >
                            <FaHeart className="text-xl" />
                            {wish.length > 0 && (
                                <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-red-500 text-white text-xs rounded-full">
                                    {wish.length}
                                </span>
                            )}
                        </NavLink>
                        <NavLink
                            to={curuser ? '/user' : '/login'}
                            className={({ isActive }) =>
                                isActive ? 'text-blue-600' : ''
                            }
                        >
                            <FaUser className="text-xl" />
                        </NavLink>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/mens"
                        className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
                    >
                        Men
                    </NavLink>
                    <NavLink
                        to="/women"
                        className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
                    >
                        Women
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
                    >
                        Contact
                    </NavLink>
                    <div className="flex space-x-4 items-center">
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                isActive ? 'text-blue-600' : ''
                            }
                        >
                            <FaShoppingCart className="text-xl" />
                            {notificationCount > 0 && (
                                <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-red-500 text-white text-xs rounded-full">
                                    {notificationCount}
                                </span>
                            )}
                        </NavLink>
                        <NavLink
                            to="/wishlist"
                            className={({ isActive }) =>
                                isActive ? 'text-blue-600' : ''
                            }
                        >
                            <FaHeart className="text-xl" />
                            {wish.length > 0 && (
                                <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-red-500 text-white text-xs rounded-full">
                                    {wish.length}
                                </span>
                            )}
                        </NavLink>
                        <NavLink
                            to={curuser ? '/user' : '/login'}
                            className={({ isActive }) =>
                                isActive ? 'text-blue-600' : ''
                            }
                        >
                            <FaUser className="text-xl" />
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
