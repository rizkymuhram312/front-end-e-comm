import React, { useState } from 'react';


const Login = () => {
    const[user_email, setEmail] = useState('');
    const[user_password, setPassword] = useState('');

    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    return (
        <div>
            <div class="min-h-screen text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
                <div class="relative py-3 sm:max-w-xl mx-auto text-center">
                    <span class="text-2xl font-light">Login to your account</span>
                    <div class="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
                        <div class="h-2 bg-indigo-400 rounded-t-md"></div>
                        <div class="py-6 px-8">
                            <label class="block font-semibold">Email</label>
                            <input type="text" placeholder="Email" class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" value={user_email} onChange={onChangeEmail}/>
                            <label class="block mt-3 font-semibold">Password</label>
                            <input type="password" placeholder="Password" class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"  value={user_password} onChange={onChangePassword} />
                            <div class="flex justify-between items-baseline">
                                <button class="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg">Login</button>
                                <a href="#" class="text-sm hover:underline">Forgot password?</a>
                            </div>
                        </div>
                    </div>
            <div class="text-grey-dark mt-6">
                    don't have an account? &nbsp;
                    <a class="underline font-semibold text-blue-600" href="../">
                        Sign Up
                    </a>.
            </div>
                </div>
            </div>


        </div>

        
    )
}

export default Login;