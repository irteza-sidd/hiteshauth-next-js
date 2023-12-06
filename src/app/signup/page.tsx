"use client";
import Link from "next/link";
import React,{useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });
    const handleSignup = async () => {

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <hr/>
            <label htmlFor="username">Username</label>
            <input
           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                type="text"
                name="username"
                id="username"
                value={user.username}
                placeholder="Username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <label htmlFor="email">email</label>
            <input
           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                type="text"
                name="email"
                id="email"
                value={user.email}
                placeholder="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <label htmlFor="password">password</label>
            <input
           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                type="password"
                name="password"
                value={user.password}
                placeholder="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
           <button onClick={handleSignup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                Signup Here
            </button>
            <Link href="/login">Already have an account? Login here</Link>
        </div>
    );
};

export default SignupPage;
