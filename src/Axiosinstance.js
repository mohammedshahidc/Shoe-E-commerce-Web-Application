import axios from "axios";

// Get user and admin tokens from localStorage
const userToken = localStorage.getItem('logindt');
const adminToken = localStorage.getItem('admindt');

// Create axios instance
const axiosInstatnce = axios.create({
    baseURL: 'http://localhost:4004/api',
});


export default axiosInstatnce;
