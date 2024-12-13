import {useSatate, useState} from "react";
import { useNavigate } from "react-router-dom";

function Login() {
        const[email,setEmail] = useState("");
        const[password,setPassword] = useState("");
        const[message,setMessage] = useState("");
        const navigate = useNavigate();

        const handleSubmit = async(e) => {
            e.preventDefault();
            try{
                const res = await axios.post("https://flightbooking-2.onrender.com/api/users/login", {email,password});
                console.log("User is logged in" , res.data);
                setMessage("login is successfully")
                navigate("/front")
            }catch(error){
               console.error("some error")
            }
        }

        return(
            <div className="login">
            <h2>login</h2>
            {message && <p> Message</p>}
            <form onSubmit={handleSubmit}>

                <div>
                    <label>Email:</label>
                    <input 
                    type = "email"
                    value={email}
                    onChange = {(e) => setEmail (e.target.value)}
                    reguired />
                </div>

                <div>
                    <label>Password:</label>
                    <input 
                    type = "password"
                    value={password}
                    onChange = {(e) => setPassword (e.target.value)}
                    reguired />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
        )
}
export default Login