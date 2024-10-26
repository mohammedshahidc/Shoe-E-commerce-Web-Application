import axios from "axios";

const axiosinstance=axios.create({
    baseURL:"http://localhost:4004/api"
})

axiosinstance.interceptors.request.use(
    (config)=>{
        const token=localStorage.getItem("logindt.token")
        console.log(token);
    }
)