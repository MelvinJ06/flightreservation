import axios from "axios";

const api = axios.create({
    baseURL: "https://flightbooking-2.onrender.com/api", 
    withCredentials: true, 
    headers: {
        "Content-Type": "application/json", 
    },
});

export default api;