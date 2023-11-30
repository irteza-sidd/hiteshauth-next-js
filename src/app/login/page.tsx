"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });
    const handleLogin = async () => {

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr />
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
            <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                Login Here
            </button>
            <Link href="/signup">Dont have an account? Signup here</Link>
        </div>
    );
};

export default LoginPage;
