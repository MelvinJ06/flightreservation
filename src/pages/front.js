import React from "react"
import Frontimg from "../assats/frontimg.jpeg"
import { Link } from 'react-router-dom';


const home = () => {
    return(
        
        <div className="bg-orange-400">
            <div className="relative h-[730px] overflow-hidden rounded-3xl">
                    <img className="absolute inset-0 h-full w-full object-cover py-40 px-40 "src={Frontimg} alt=""/>
                <div className="absolute inset-0 flex flex-col justify-center items-center  space-y-6">
                <h1 className="text-8xl font-bold text-indigo-800 capitalize ">welcome to AIRFAST</h1>
                <p className="text-xl font-bold capitalize text-black">Create an account to continue , if already registered click on Login</p>
                <Link to="/register" className="border-4 text-xl font bold p-3 text-black border-black
                rounded-full hover:bg-orange-500">Register</Link>
                <Link to="/login" className="border-4 text-xl font bold p-3 text-black border-black
                rounded-full hover:bg-orange-500">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default home;