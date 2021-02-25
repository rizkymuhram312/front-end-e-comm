import React, { useState } from 'react';
import axios from 'axios'

const Daftar = () => {
    const[user_name, setUsername] = useState('');
    const[user_email, setEmail] = useState('');
    const[user_password, setPassword] = useState('');
    // const[user_confpassword, setConfPassword] = useState('');



    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    // const onChangeConfPassword = (e) => {
    //     const value = e.target.value
    //     setConfPassword(value)
    // }

    const klikDaftar = () => {
        const data = {
            user_name : user_name,
            user_email : user_email,
            user_password : user_password
        }
        axios.post('http://localhost:3001/api/users/signup', data)
        .then(result => {
            if ( result ) {
                // if (result.data) {
                //     setAlert(result.data.message)
                // }
            }
        })
    }


    return (
    <div>



        <div class="min-h-screen text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
                <div class="relative py-1 sm:max-w-xl mx-auto text-center">
                    <span class="text-2xl font-light">Sign Up</span>
                    <div class="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
                        <div class="h-2 bg-indigo-400 rounded-t-md"></div>
                        <div class="py-6 px-8">
                        
                            <input type="text" placeholder="Fullname" class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" value={user_name} onChange={onChangeUsername}/>
                            <input type="text" placeholder="Email" class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" value={user_email} onChange={onChangeEmail}/>
                            <input type="password" placeholder="Password" class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"  value={user_password} onChange={onChangePassword} />
                            {/* <input type="password" placeholder="Confirm Password" class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"  value={user_confpassword} onChange={onChangeConfPassword} /> */}
                            
                            <div class="flex justify-center items-baseline">
                                <button class="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg" values="klikDaftar" onClick={klikDaftar}>Create Account</button>
                            </div>


                        <div class="text-center text-sm text-gray-400 mt-4">
                                By signing up, you agree to the &nbsp;
                            <a class="underline font-semibold border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and &nbsp;
                            <a class="underline font-semibold border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>


                        </div>
                    </div>
                    <div class="text-grey-dark mt-6">
                    Already have an account? &nbsp;
                    <a class="underline font-semibold text-blue-600" href="../login/">
                        Sign In
                    </a>.
                </div>
                </div>
            </div>


        
    </div>


    )
}

export default Daftar;