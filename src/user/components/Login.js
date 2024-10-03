
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Usercont } from '../../context/UserContext';

const Login = () => {

    const { login, handlelogChange, handlelogSubmit } = useContext(Usercont)



    return (

        <div className="bg-gray-300 min-h-screen flex items-center justify-center p-4">
            <form
                className="bg-gray-500 text-white w-full max-w-md p-8 rounded-lg shadow-lg space-y-4"
                onSubmit={handlelogSubmit}
            >
                <h1 className="text-3xl text-center">LOG IN</h1>
                <div>
                    <label htmlFor="userName" className="block text-sm">Username:</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        className="h-10 w-full px-3 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        id="userName"
                        name="userName"
                        value={login.userName}
                        onChange={handlelogChange}
                    />
                </div>
                <div>
                    <label htmlFor="userPassword" className="block text-sm">Password:</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="h-10 w-full px-3 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        id="userPassword"
                        name="userPassword"
                        value={login.userPassword}
                        onChange={handlelogChange}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <button
                        type="submit"
                        className="bg-yellow-600 rounded-lg h-10 w-full max-w-xs hover:bg-yellow-500 text-black font-bold transition-colors duration-300"
                    >
                        Log In
                    </button>
                    <p className="mt-4 text-sm">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-blue-400 hover:underline">
                            Create one
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );

};

export default Login;

