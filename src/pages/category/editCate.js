import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { apiProductMaster } from '../../config/apiUrl';
import axios from "axios";
import swal from 'sweetalert';

export const EditCate = () => {
    const [condition, setCondition] = useState([]);
    const [cond_name, setCondName] = useState('');
    const [cond_desc, setCondDesc] = useState('');
    const [error, setError] = useState('');
    const [alert, setAlert] = useState('');
    const id = localStorage.getItem('id')
    let history = useHistory()

    // console.log(id)
    const OnChangeCondName = e => {
        const value = e.target.value
        setCondName(value)
        setError('')
    }
    const OnChangeCondDesc = e => {
        const value = e.target.value
        setCondDesc(value)
        setError('')
    }
    const GetCond = async () => {
        // console.log(GetCond)
        const response = await axios.get(`${apiProductMaster}/condition/${id}`)
        return response.data;

        // console.log(response.data)
    }
    // const notifyErr = () => {
    //     // history.push('/condition')
    //     swal("Cancel", "You brand list Not Changed!", "error");
    // }
    const notify = () => {
        swal("Good job!", "You brand list changed!", "success");
    }

    useEffect(() => {
        const getListCond = async () => {
            const listCond = await GetCond();
            console.log(listCond)

            if (listCond) {
                setCondName(listCond.cond_name);
                setCondDesc(listCond.cond_desc);
                setCondition(listCond)
            }
        }
        getListCond();
    }, [])

    const editCond = () => {
        // console.log(id)
        // e.preventDefault()
        const data = {
            cond_name: cond_name,
            cond_desc: cond_desc
        }
        // console.log(data)
        axios.put(`${apiProductMaster}/condition/${id}`, data)
            .then(result => {
                if (result) {
                    console.log(result.data)
                    if (result.data) {
                        setCondName('')
                        setCondDesc('')
                        setAlert(result.data.message)
                        notify()
                        history.push('/condition')
                        setTimeout(() => {
                            setAlert('')
                        }, 2500)
                    }
                }
            })
            .catch(e => {
                // history.push("/condition")
                setError(e.response.data.message)
            })
        // history.push("/brand")
    }
    return (
        // <!-- component -->
        <div class=" flex flex-col items-center justify-center my-10 ">
        <div class="flex flex-col bg-primary shadow-md  px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
            <div class="font-medium self-center text-4xl sm:text-3xl uppercase text-white">Insert Category</div>
            <div class="relative mt-7 h-px bg-gray-300">
                <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
                    <span class="bg-white px-4 text-xs text-gray-500 uppercase"></span>
                </div>
            </div>
            <div class="mt-6 mx-4">
                <form action="#"
                //  onSubmit={insertCate}
                 >
                    <div class="flex flex-col mb-6">
                        <label for="name" class=" text-xl sm:text-lg tracking-wide text-white text-semibold mb-2">Category Name</label>
                        <div class="relative">

                            <input id="name" type="name" name="name"
                                // value={cate_name}
                                // onChange={onChangeCateName} 
                                class="text-md sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Category Name" />
                        </div>
                    </div>
                    <div class="flex flex-col mb-6">
                        <label for="name" class=" text-xl sm:text-lg tracking-wide text-white text-semibold mb-2">Category By Id</label>

                        <div class="relative">
                            <div>
                                <select class="block w-52 text-gray-700 py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 mb-2"
                                    name="kategori"
                                    // value={cate_cate_id}
                                    // onChange={onChangeCateId}
                                    >
                                    <option value="oke">
                                        pilih kategori
                                        </option>
                                    {/* {
                                    category.map((y) => {
                                        return (
                                            <option
                                                value={y.cate_id}>{y.cate_name}

                                            </option>)

                                    })} */}
                                </select>
                            </div>

                        </div>
                    </div>
                    <div class="flex flex-col mb-6">
                        <label for="name" class=" text-xl sm:text-lg tracking-wide text-white text-semibold mb-2">Category Images</label>
                        <div class="relative">

                            <input id="file" type="file" name="file"
                                // value={cate_cate_id}
                                // onChange={uploadImage} 
                                class="text-md sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Name Brand" />
                        </div>
                    </div>
                    <div class="flex w-full gap-4">

                        <Link 
                        // onClick={insertCate}
                         type="submit" class="flex items-center justify-center focus:outline-none bg-white  text-black text-md sm:text-base bg-button hover:bg-red-300 hover:text-black rounded py-2 w-full transition duration-150 ease-in">

                            Save
                    </Link>
                        <Link to="/category" type="submit" class="flex items-center justify-center focus:outline-none text-black bg-white text-md sm:text-base bg-button hover:bg-red-300 hover:text-black rounded py-2 w-full transition duration-150 ease-in">

                            Cancel
                    </Link>
                    </div>
                </form>
            </div>

        </div >
    </div >

    )
}