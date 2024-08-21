
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';





const Register = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: '',
        admin: false,
        cart: []
    });



    const handleSubmit = (e) => {
        e.preventDefault();
        const todb = {...input,block:false };

        fetch("http://localhost:3000/users", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(todb)
        })
            .then((res) => {
                alert("registered successfully")
                navigate('/login')


            })
            .catch((err) => {
                alert("failed" + err)
            })



    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };


    return (
        <div className="bg-gray-300 min-h-screen flex items-center justify-center p-4">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="bg-gray-500 w-full p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl mb-4 text-center text-white">Register</h1>
                    <div className="p-2">
                        <label htmlFor="username" className="block text-white">Username:</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            pattern="^[A-Za-z0-9].{2,16}"
                            className="h-10 w-full px-3 py-2 rounded-lg bg-gray-200 text-black"
                            id="username"
                            name="username"
                            value={input.username}
                            onChange={handleChange}
                            required
                        />
                        <span className="text-[12px] text-red-900">Username must be 3-16 characters long</span>
                    </div>
                    <div className="p-2">
                        <label htmlFor="email" className="block text-white">Email:</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="h-10 w-full px-3 py-2 rounded-lg bg-gray-200 text-black"
                            id="email"
                            name="email"
                            value={input.email}
                            onChange={handleChange}
                            required
                        />
                        <span className="text-[12px] text-red-900">Enter a valid email</span>
                    </div>
                    <div className="p-2">
                        <label htmlFor="password" className="block text-white">Password:</label>
                        <input
                            type="password"
                            pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$"
                            placeholder="Enter a strong password"
                            className="h-10 w-full px-3 py-2 rounded-lg bg-gray-200 text-black"
                            id="password"
                            name="password"
                            value={input.password}
                            onChange={handleChange}
                            required
                        />
                        <span className="text-[12px] text-red-900">Password must have 8-16 characters and include at least 1 uppercase, 1 digit, and 1 special character</span>
                    </div>
                    <div className="p-2">
                        <label htmlFor="cpassword" className="block text-white">Confirm Password:</label>
                        <input
                            type="password"
                            pattern={input.password}
                            placeholder="Confirm your password"
                            className="h-10 w-full px-3 py-2 rounded-lg bg-gray-200 text-black"
                            id="cpassword"
                            name="cpassword"
                            value={input.cpassword}
                            onChange={handleChange}
                            required
                        />
                        <span className="text-[12px] text-red-900">Passwords do not match</span>
                    </div>
                    <div className="p-2">
                        <button
                            type="submit"
                            className="bg-black text-white rounded-lg w-full h-10 shadow-lg hover:bg-slate-800 transition-colors"
                        >
                            Register
                        </button>
                        <p className="mt-4 text-center text-white">
                            Already have an account?{' '}
                            <Link to="/" className="text-red-900 hover:underline">
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
