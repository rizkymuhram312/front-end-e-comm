import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { apiProductMaster } from '../../config/apiUrl';
import axios from "axios";
import swal from 'sweetalert';

export const EditBrand = () => {
    const [brand, setbrand] = useState([]);
    const [brand_name, setBrandName] = useState('');
    const [error, setError] = useState('');
    const [alert, setAlert] = useState('');
    const id = localStorage.getItem('id')
    let history = useHistory()

    // console.log(id)
    const OnChangeBrandName = e => {
        const value = e.target.value
        setBrandName(value)
        setError('')
    }
    const GetBrand = async () => {
        // console.log(GetBrand)
        const response = await axios.get(`${apiProductMaster}/brand/${id}`)
        return response.data;
        
        // console.log(response.data)
    }
    const notifyErr = () => {
        // history.push('/brand')
        swal("Cancel", "You brand list Not Changed!", "error");
    }
    const notify = () => {
        swal("Good job!", "You brand list changed!", "success");
    }

    useEffect(() => {
        const getListBrand = async () => {
            const listbrand = await GetBrand();
            console.log(listbrand)

            if (listbrand) {
                setBrandName(listbrand.brand_name);
                setbrand(listbrand)
            }
        }
        getListBrand();
    }, [])

    const editBrand = () => {
        // console.log(id)
        // e.preventDefault()
        const data = {
            brand_name: brand_name,
        }
        // console.log(data)
        axios.put(`${apiProductMaster}/brand/${id}`, data)
            .then(result => {
                if (result) {
                    console.log(result.data)
                    if (result.data) {
                        setBrandName('')
                        setAlert(result.data.message)
                        
                        notify()
                        setTimeout(() => {
                            setAlert('')
                        }, 2500)
                    }
                }
            })
            .catch(e => {
                // history.push("/brand")
                setError(e.response.data.message)
            })
            // history.push("/brand")
    }
    return (
        // <!-- component -->
        <div class="max-w-lg max-w-xs bg-blue-600 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
            <h1 class="text-gray-200 text-center font-extrabold -mt-3 text-3xl">Edit Brand</h1>
            <div class="container py-5 max-w-md mx-auto">
                <form  onSubmit={editBrand}>
                    <div class="mb-4">
                        <input placeholder="name"
                            value={brand_name}
                            onChange={OnChangeBrandName}
                            class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="brandName" type="text" ref={({minLength:{value:2,message:"Too Short"}})}/>
                    </div>
                            {error.text && <p>{error.text.message}</p>}

                    <div class="flex items-center justify-end gap-2">
                        <button
                            onClick={editBrand}
                            value="editBrand"
                            
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                            Submit
                  </button>
                        <Link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button" to="/brand">

                            Cancel
                        </Link>

                    </div>
                </form>
            </div>
        </div>

    )
}