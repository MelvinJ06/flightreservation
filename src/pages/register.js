import {useSatate, useState} from "react";

function Register() {
        const[name,setName] = useSatate("");
        const[email,setEmail] = useState("");
        const[password,setPassword] = useState("");
        const[message,setMessage] = useState("");

        const handleSubmit = async(e) => {
            e.preventDefault();
            try{
               const res = await axios.post("https://flightbooking-2.onrender.com/api/users/register", {name,email,password});
               console.log("user is registered",res.data);
               setMessgae("registeration is successfully");
               setName('');
               setEmail('');
               setPassword('')

            }catch(error){
                console.error(error)
            }
        }

        return (
            <div className="register">
                <h2>Register</h2>
                {message && <p> Message</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input 
                        type = "text"
                        value={name}
                        onChange = {(e) => setName (e.target.value)}
                        reguired />
                    </div>

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

                    <button type="submit">Register</button>
                </form>
            </div>
        )

}

export default Register