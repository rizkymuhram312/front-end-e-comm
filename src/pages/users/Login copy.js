import React, { useState , Fragment } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'



const Login = () => {
    const[user_email, setEmail] = useState('');
    const[user_password, setPassword] = useState('');
    const[redirect, setRedirect] = useState(false);
    const[error, setError] = useState('');



    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
        setError('')
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
        setError('')

    }

    const submitLogin = () => {
        const data = {
            user_email : user_email,
            user_password : user_password
            
        }
        console.log(data)
        axios.post('http://localhost:3001/api/users/signin', data)
        .then(result => {
            if(result) {
                let accoID = result.data.users.accounts.acco_id;
                localStorage.setItem('token', result.data.token)
                localStorage.setItem('username', result.data.users.user_name)
                localStorage.setItem('id',accoID)
                
                // localStorage.setItem('acco_id',result.data.a)
                setRedirect(true)
            }
        })
        .catch(e => {
            alert('Tolong Buat Account')
            setError( <Redirect to="/registerAccount" />)
        })
    }

    return (

        <Fragment>
            {
                redirect && (
                    <Redirect to="/dashboard" />
                )
            }

        <div>
            <div className="min-h-screen text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl mx-auto text-center">
                    {
                        error && (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                                <p>{error}</p>
                            </div>
                       )
                    } 
                    <span className="text-2xl font-light">Login to your account</span>
                    <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
                        <div className="h-2 bg-indigo-400 rounded-t-md"></div>
                        <div className="py-6 px-8">
                            <label className="block font-semibold">Email</label>
                            <input type="text" placeholder="Email" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" value={user_email} onChange={onChangeEmail}/>
                            <label className="block mt-3 font-semibold">Password</label>
                            <input type="password" placeholder="Password" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"  value={user_password} onChange={onChangePassword} />
                            <div className="flex justify-between items-baseline">
                                <button className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg" onClick={submitLogin}>Login</button>
                                <a href="#" className="text-sm hover:underline">Forgot password?</a>
                            </div>
                        </div>
                    </div>
            <div className="text-grey-dark mt-6">
                    don't have an account? &nbsp;
                    <a className="underline font-semibold text-blue-600" href="/daftar">
                        Sign Up
                    </a>.
            </div>
                </div>
            </div>


        </div>
        </Fragment>
        
    )
}

export default Login;