import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { apiProductMaster } from '../../config/apiUrl';
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import swal from 'sweetalert';

const AddCond = () => {
    const [cond_name, setCondName] = useState('');
    const [cond_desc, setCondDesc] = useState('');
    const [condition, setCond] = useState('');
    const [error, setError] = useState('');
    const [alert, setAlert] = useState('');
    let history = useHistory()

    const onChangeCondName = (e) => {
        const value = e.target.value
        setCondName(value)
        setError('')
    }
    const onChangeCondDesc = (e) => {
        const value = e.target.value
        setCondDesc(value)
        setError('')
    }
    const notifyErr = ()=> {
        swal("Good job!", "You condition list updated!", "success");
    }
    const insertCond = () => {
        const data = {
            cond_name: cond_name,
            cond_desc: cond_desc,
        }
        console.log(data)
        axios.post(`${apiProductMaster}/condition`, data)
            .then(result => {
                if (result) {
                    console.log(result.data)
                    if (result.data) {
                        setCondName('')
                        setCondDesc('')
                        setAlert(result.data.message)
                        history.push('/condition')
                        notifyErr()
                        setTimeout(() => {
                            setAlert('')
                        }, 2500)
                    }
                }
            })
            .catch(e => {
                setError(e.response.data.message)

            })
    }
    


    return (
        <>         
                {/* {
                error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                        <p>{error}</p>
                    </div>
                )
            }

            {
                alert && (
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
                        <p>{alert}</p>
                    </div>
                )
            } */}
                

            <div class=" flex flex-col items-center justify-center my-10 ">
                <div class="flex flex-col bg-primary shadow-md  px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <div class="font-medium self-center text-4xl sm:text-3xl uppercase text-white">Insert Condition</div>
                    <div class="relative mt-7 h-px bg-gray-300">
                        <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
                            <span class="bg-white px-4 text-xs text-gray-500 uppercase"></span>
                        </div>
                    </div>
                    <div class="mt-6 mx-4">
                        <form action="#" onSubmit={insertCond}>
                            <div class="flex flex-col mb-6">
                                <label for="name" class=" text-xl sm:text-lg tracking-wide text-white text-semibold mb-2">Condition Name</label>
                                <div class="relative">  

                                    <input id="name" type="name" name="name"
                                    value={cond_name}
                                    onChange={onChangeCondName} class="text-md sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Name Brand" />
                                </div>
                            </div>
                            <div class="flex flex-col mb-6">
                                <label for="name" class=" text-xl sm:text-lg tracking-wide text-white text-semibold mb-2">Condition Description</label>
                                <div class="relative">  

                                    <input id="name" type="name" name="name"
                                    value={cond_desc}
                                    onChange={onChangeCondDesc} class="text-md sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Name Brand" />
                                </div>
                            </div>
                            <div class="flex flex-row-reverse gap-4">

                                <Link onClick={insertCond} type="submit" class="flex p-4 items-center justify-center focus:outline-none bg-white  text-black text-md sm:text-base bg-button hover:bg-red-300 hover:text-black rounded py-2  transition duration-150 ease-in">

                                    Save
                            </Link>
                                <Link to="/condition" type="submit" class="flex p-4 items-center justify-center focus:outline-none text-black bg-white text-md sm:text-base bg-button hover:bg-red-300 hover:text-black rounded py-2  transition duration-150 ease-in">

                                    Cancel
                            </Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}
export default AddCond