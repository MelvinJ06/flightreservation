import axios from "axios";

const api = axios.create({
    baseURL : "https://flightbooking-2.onrender.com/api"
})

export default api;