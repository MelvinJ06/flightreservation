import { useState } from "react";
import api from "../components/api";
import { Link } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(""); // Reset messages
        setError(""); // Reset error

        try {
            const res = await api.post("/users/register", { name, email, password });
            console.log("User is registered:", res.data);
            setMessage("Registration successful!");
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.error("Error during registration:", error.response?.data || error.message);
            setError(error.response?.data?.message || "Registration failed. Please try again.");
        }
    };

    return (
        <div className="bg-gradient-to-r from-red-500 to-purple-500">
            <div className="flex flex-col justify-center items-center h-[730px] space-y-7">
                <h2 className="text-6xl capitalize">Register</h2>
                {message && <p className="text-green-500 text-xl">{message}</p>}
                {error && <p className="text-red-500 text-xl">{error}</p>}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 text-4xl flex justify-center flex-col items-center"
                >
                    <div className="space-x-4">
                        <label>Name:</label>
                        <input
                            className="bg-transparent border-4 rounded-3xl border-white p-2"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-x-4">
                        <label>Email:</label>
                        <input
                            className="bg-transparent border-4 rounded-3xl border-white p-2"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-x-4">
                        <label>Password:</label>
                        <input
                            className="bg-transparent border-4 rounded-3xl border-white p-2"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        className="border-2 bg-gradient-to-r from-blue-500 to-indigo-700 border-black rounded-2xl p-2"
                        type="submit"
                    >
                        Register
                    </button>
                    <Link
                        className="border-2 bg-gradient-to-r from-blue-500 to-indigo-700 border-black rounded-2xl p-2"
                        to="/front"
                    >
                        Back
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Register;
