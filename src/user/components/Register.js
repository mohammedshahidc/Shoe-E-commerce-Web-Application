import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstatnce from '../../Axiosinstance';
import { useFormik } from 'formik'
import {  schema } from '../../schema/index';



const initialvalue = {
    username: '',
    email: '',
    password: '',
    cpassword: ''
}
const Register = () => {
    const navigate = useNavigate();
    

    const {values,handleChange,errors,handleBlur,handleSubmit}=useFormik({
        initialValues:initialvalue,
        validationSchema:schema,
        onSubmit:(value)=>{
            console.log('reg value:',value);
            axiosInstatnce.post("/user/register", value)
        .then((res) => {
            toast.success("Registered successfully");
            navigate('/login');
        })
        .catch((err) => {
            toast.error(errors)
            alert("Failed: " + err.message);
        });

        }
    })
  
    const todb = values;
    console.log(todb);
    

console.log("error of registration:",errors);

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
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                    <span className="text-xs text-red-600">Enter a valid email</span>
                </div>

                <div className="space-y-2">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        placeholder="Enter a strong password"
                        className="h-12 w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                        value={values.cpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
