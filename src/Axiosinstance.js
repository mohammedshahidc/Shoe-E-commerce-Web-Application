import axios from "axios";

// Get user and admin tokens from localStorage
const userToken = localStorage.getItem('logindt');
const adminToken = localStorage.getItem('admindt');

// Create axios instance
const axiosInstatnce = axios.create({
    baseURL: 'https://e-commerce-backend-75tc.onrender.com/api',
});


export default axiosInstatnce;
