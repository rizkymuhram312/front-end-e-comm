import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { apiProductMaster } from '../../config/apiUrl';

export default function FormBrand() {
    let history = useHistory()
    const [brand, setBrand] = useState([]);
    const [brand_id, setBrandId] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1)
    const [PostsPerPage, setPostsPerPage] = useState(5)


    // page

    const onClickEditBrand = (id) => {
        history.push('/editBrand')
        localStorage.setItem('id', id)
    }
    const onClickCate = () => {
        history.push('/category')
    }
    const onClickAdd = () => {
        history.push('/addBrand')
    }
    const onClickCond = () => {
        history.push('/condition')
    }

    useEffect(() => {
        fetchBrand()
    }, [])

    async function fetchBrand() {
        return await axios({
            url: `${apiProductMaster}/brand`,
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                setBrand(res.data)
                // setPaginatedPosts(_(res.data).silce(0).take(pageSize).value())
            })
            .catch((err) => console.error(err));
    }

    const onRefreshTable = () => {
        const getListBrand = async () => {
            const listBrand = await fetchBrand();
            if (listBrand) setBrand(listBrand)
        }
        getListBrand();
    }
    useEffect(() => {
        const getListBrand = async () => {
            const listBrand = await fetchBrand();
            if (listBrand) setBrand(listBrand)
        }
        getListBrand();
    }, [])

    const deleteBrand = async (id) => {
        if (window.confirm('Are you sure?')) {

            const data = {
                brand_id: brand_id
            }
            axios.delete(`${apiProductMaster}/brand/${id}`)
                .then((data) => {
                    notify()
                    console.log(data)
                    onRefreshTable()
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    }

    toast.configure()
    const notify = () => {
        toast.configure(<CustomToast />, {
            positition: toast.POSITION.TOP_CENTER
            , autoClose: 8000
        })
    }
    const CustomToast = ({ closeToast }) => {
        return (
            <div>
                this brand is delete?
                <button onClick={closeToast}>Close</button>
            </div>
        )
    }
    return (
        <div>
            <table class="min-w-full leading-normal">
                <thead class="bg-primary">
                    <tr>
                        <th
                            class="px-5 py-3 border-b-3 border-black-200  text-center sm:text-md lg:text-lg font-semibold  uppercase tracking-wider">
                            Brand ID
                        </th>
                        <th
                            class="px-5 py-3 border-b-3 border-black-200  text-center sm:text-md lg:text-lg font-semibold  uppercase tracking-wider">
                            Brand Name
                        </th>
                        <th
                            class="px-5 py-3 border-b-3 border-black-200  text-center sm:text-md lg:text-lg font-semibold  uppercase tracking-wider">
                            Action
                        </th>

                    </tr>
                </thead>
                <tbody className="gap-2 bg-secondary">
                    {
                        currentPage ?
                            brand
                                // .slice(pagesVisited, pagesVisited + usersPerPage)
                                .filter((val) => {
                                    if (search == "") {
                                        return val
                                    } else if (val.brand_name.toLowerCase().includes(search.toLowerCase())) {
                                        return val
                                    }
                                })
                                .map((brand, index) => {
                                    return (
                                        <tr key={brand.id}>

                                            <td className="text-center md:text-lg sm:text-md lg:text-xl">{brand.brand_id}</td>
                                            <td className="text-center md:text-lg sm:text-md lg:text-xl">{brand.brand_name}</td>
                                            <td>
                                                <div class="flex justify-center mt-2">
                                                    <button
                                                        onClick={() => onClickEditBrand(brand.brand_id)}
                                                        className=" text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-md px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                        Edit
                            </button>

                                                    <button

                                                        onClick={() => {
                                                            deleteBrand(brand.brand_id)
                                                        }}
                                                        className=" text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-md px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                        Delete</button>
                                                </div>
                                            </td>
                                        </tr>)
                                }) :
                            <tr>
                                <td colSpan={3}>No Records Found.</td>
                            </tr>
                    }
                </tbody>
            </table >
        </div >

    )
}
