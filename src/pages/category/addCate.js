import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { apiProductMaster } from '../../config/apiUrl';
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import swal from 'sweetalert';
import images from '../product/images';

const AddCate = () => {
    const [cate_name, setCateName] = useState('');
    const [cate_cate_id, setCateId] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState([]);
    const [error, setError] = useState('');
    const [alert, setAlert] = useState('');
    let history = useHistory()

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append("upload_preset", "qlkloipy")

        const res = await fetch(
            'https://api.cloudinary.com/v1_1/deto1sqrl/image/upload',

            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setImage(file.secure_url)
    }
    console.log(image)


    const onChangeCateName = (e) => {
        const value = e.target.value
        setCateName(value)
        setError('')
    }
    const onChangeCateId = (e) => {
        const value = e.target.value
        setCateId(value)
        setError('')
    }
    const notifyErr = () => {
        swal("Good job!", "You category list updated!", "success");
    }
    // const insertCate = () => {
    //     const data = {
    //         cate_name: cate_name,
    //         cate_cate_id: cate_cate_id,
    //     }
    //     console.log(data)
    //     axios.post(`${apiProductMaster}/category`, data)
    //         .then(result => {
    //             if (result) {
    //                 console.log(result.data)
    //                 if (result.data) {
    //                     setCateName('')
    //                     setCateId('')
    //                     setAlert(result.data.message)
    //                     history.push('/condition')
    //                     notifyErr()
    //                     setTimeout(() => {
    //                         setAlert('')
    //                     }, 2500)
    //                 }
    //             }
    //         })
    //         .catch(e => {
    //             setError(e.response.data.message)

    //         })
    // }

    useEffect(() => {
        axios({
            url: `${apiProductMaster}/category`,
            method: "get",
            headers: {
                "Content-type": "application/json"
            }
        }).then((res) => setCategory(res.data))
            .catch((err) => console.error(err));
        console.log(category)
    }, [])


    const insertCate = (x) => {
        x.preventDefault()
        const data = {
            cate_name: cate_name,
            cate_cate_id: cate_cate_id,


        }

        console.log(data)
        axios.post(`${apiProductMaster}/category`, data)
            .then(async result => {
                if (result.data.error) {
                    console.log(result.data)
                    // notifyErr()
                } else {
                    if (result.data) {
                        setCateId('')
                        setCateName('')
                        setAlert(result.data.message)
                        history.push('/category')
                        notifyErr()
                        setTimeout(() => {
                            setAlert('')
                        }, 2500)
                        const cateImg = {
                            caim_path: image,
                            caim_cate_id: result.data.cate_id
                        }

                        console.log(cateImg)
                        await axios.post(`${apiProductMaster}/categoryImg`, cateImg)
                            .then(result => {
                                if (result.cateImg.error) {
                                    console.log(result.cateImg)
                                    notifyErr()
                                } else {
                                    if (result.cateImg) {
                                        // setCateId('')
                                        // setCateName('')
                                        setAlert(result.data.message)
                                        history.push('/category')
                                        notifyErr()
                                        setTimeout(() => {
                                            setAlert('')
                                        }, 2500)

                                    }  notifyErr()
                                }
                            })
                            .catch((e) => {
                                setError(e)
                            })
                            //ADD GAMBAR
                    }
                    //  notifyErr()
                }
            })
            .catch((e) => {
                setError(e.response.message)
            })

    }


    return (
        <>


            <div class=" flex flex-col items-center justify-center my-10 ">
                <div class="flex flex-col bg-primary shadow-md  px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <div class="font-medium self-center text-4xl sm:text-3xl uppercase text-white">Insert Category</div>
                    <div class="relative mt-7 h-px bg-gray-300">
                        <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
                            <span class="bg-white px-4 text-xs text-gray-500 uppercase"></span>
                        </div>
                    </div>
                    <div class="mt-6 mx-4">
                        <form action="#" onSubmit={insertCate}>
                            <div class="flex flex-col mb-6">
                                <label for="name" class=" text-xl sm:text-lg tracking-wide text-white text-semibold mb-2">Category Name</label>
                                <div class="relative">

                                    <input id="name" type="name" name="name"
                                        value={cate_name}
                                        onChange={onChangeCateName} class="text-md sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Category Name" />
                                </div>
                            </div>
                            <div class="flex flex-col mb-6">
                                <label for="name" class=" text-xl sm:text-lg tracking-wide text-white text-semibold mb-2">Category By Id</label>

                                <div class="relative">
                                    <div>
                                        <select class="block w-52 text-gray-700 py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 mb-2"
                                            name="kategori"
                                            value={cate_cate_id}
                                            onChange={onChangeCateId}>
                                            <option value="oke">
                                                pilih kategori
                                                </option>
                                            {category.map((y) => {
                                                return (
                                                    <option
                                                        value={y.cate_id}>{y.cate_name}

                                                    </option>)

                                            })}
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div class="flex flex-col mb-6">
                                <label for="name" class=" text-xl sm:text-lg tracking-wide text-white text-semibold mb-2">Category Images</label>
                                <div class="relative">

                                    <input id="file" type="file" name="file"
                                        // value={cate_cate_id}
                                        onChange={uploadImage} 
                                        class="text-md sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Name Brand" />
                                </div>
                            </div>
                            <div class="flex w-full gap-4">

                                <Link onClick={insertCate} type="submit" class="flex items-center justify-center focus:outline-none bg-white  text-black text-md sm:text-base bg-button hover:bg-red-300 hover:text-black rounded py-2 w-full transition duration-150 ease-in">

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
        </>
    )
}
export default AddCate