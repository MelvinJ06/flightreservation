import { useState} from "react";
import { useNavigate } from "react-router-dom";
import api from '../components/api'

function Login() {
        const[email,setEmail] = useState("");
        const[password,setPassword] = useState("");
        const[message,setMessage] = useState("");
        const navigate = useNavigate();

        const handleSubmit = async(e) => {
            e.preventDefault();
            try{
                const res = await api.post("/users/login", {email,password});
                console.log("User is logged in" , res.data);
                setMessage("login is successfully")
                navigate("/home")
            }catch(error){
               console.error("some error")
            }
        }

        return(
            <div className="bg-gradient-to-r from-red-500 to-purple-500">
            <div className="flex flex-col justify-center items-center h-[730px] space-y-7">
            <h2 className="text-6xl capitalize">login</h2>
            {message && <p> Message</p>}
            <form onSubmit={handleSubmit} className="space-y-6 text-4xl flex justify-center flex-col items-center ">

                <div className="space-x-4">
                    <label>Email:</label>
                    <input className="bg-transparent border-4 rounded-3xl border-white p-2"
                    type = "email"
                    value={email}
                    onChange = {(e) => setEmail (e.target.value)}
                    required />
                </div>

                <div className="space-x-4">
                    <label>Password:</label>
                    <input className="bg-transparent border-4 rounded-3xl border-white p-2"
                    type = "password"
                    value={password}
                    onChange = {(e) => setPassword (e.target.value)}
                    required />
                </div>

                <button className="border-2 bg-gradient-to-r from-blue-500 to-indigo-700 border-black rounded-2xl p-2 hover:bg-orange-300" type="submit">Login</button>
            </form>
        </div>
         </div>
        )
}
export default Login