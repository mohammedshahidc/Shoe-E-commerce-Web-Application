import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: '',
        admin: false,
        block:false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.password !== input.cpassword) {
            alert("Passwords do not match");
            return;
        }
        const todb = { ...input, block: false };
        console.log(todb);
        fetch("http://localhost:4004/api/user/register", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(todb)
            
        })
            .then((res) => {
                alert("Registered successfully");
                navigate('/login');
            })
            .catch((err) => {
                alert("Failed: " + err);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="bg-white shadow-lg p-6 rounded-lg space-y-4">
                    <h1 className="text-2xl font-bold text-center text-gray-800">Register</h1>

                    <div className="space-y-2">
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            pattern="^[A-Za-z0-9]{3,16}$"
                            className="h-12 w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="username"
                            name="username"
                            value={input.username}
                            onChange={handleChange}
                            required
                        />
                        <span className="text-xs text-red-600">Username must be 3-16 characters long</span>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="h-12 w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="email"
                            name="email"
                            value={input.email}
                            onChange={handleChange}
                            required
                        />
                        <span className="text-xs text-red-600">Enter a valid email</span>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$"
                            placeholder="Enter a strong password"
                            className="h-12 w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="password"
                            name="password"
                            value={input.password}
                            onChange={handleChange}
                            required
                        />
                        <span className="text-xs text-red-600">
                            Password must include 8-16 characters, 1 uppercase letter, 1 digit, and 1 special character
                        </span>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="cpassword" className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="h-12 w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="cpassword"
                            name="cpassword"
                            value={input.cpassword}
                            onChange={handleChange}
                            required
                        />
                        <span className="text-xs text-red-600">Passwords do not match</span>
                    </div>

                    <div className="space-y-4">
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Register
                        </button>
                        <p className="text-center text-gray-700">
                            Already have an account?{' '}
                            <Link to="/" className="text-blue-600 hover:underline">
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;
