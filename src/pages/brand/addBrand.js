import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { apiProductMaster } from '../../config/apiUrl';
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import swal from 'sweetalert';

const AddBrand = () => {
    const [brand_name, setBrandName] = useState('');
    const [brand, setBrand] = useState('');
    const [error, setError] = useState('');
    const [alert, setAlert] = useState('');
    let history = useHistory()

    const onChangeBrandName = (e) => {
        const value = e.target.value
        setBrandName(value)
        setError('')
    }
    // const onChangeBrandId = (e) => {
    //     const value = e.target.value
    //     setBrandId(value)
    //     setError('')
    // }
    const notifyErr = ()=> {
        swal("Good job!", "You brand list updated!", "success");
    }
    const insertBrand = () => {
        const data = {
            brand_name: brand_name
        }
        console.log(data)
        axios.post(`${apiProductMaster}/brand`, data)
            .then(result => {
                if (result) {
                    console.log(result.data)
                    if (result.data) {
                        setBrandName('')
                        setAlert(result.data.message)
                        history.push('/brand')
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
                

            <div class=" flex flex-col items-center justify-center my-10">
                <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <div class="font-medium self-center text-4xl sm:text-3xl uppercase text-gray-800">Insert Brand</div>
                    <div class="relative mt-7 h-px bg-gray-300">
                        <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
                            <span class="bg-white px-4 text-xs text-gray-500 uppercase"></span>
                        </div>
                    </div>
                    <div class="mt-7">
                        <form action="#" onSubmit={insertBrand}>
                            <div class="flex flex-col mb-6">
                                <label for="name" class="mb-1 text-xl sm:text-lg tracking-wide text-gray-600">Name Brand</label>
                                <div class="relative">  

                                    <input id="name" type="name" name="name"
                                    value={brand_name}
                                    onChange={onChangeBrandName} class="text-md sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Name Brand" />
                                </div>
                            </div>
                            <div class="flex w-full gap-4">

                                <Link onClick={insertBrand} type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">

                                    Save
                            </Link>
                                <Link to="/brand" type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">

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
export default AddBrand