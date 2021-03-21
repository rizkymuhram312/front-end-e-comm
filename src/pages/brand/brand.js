import { apiProductMaster } from "../../config/apiUrl"
import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useState, useEffect, Alert } from 'react';
import { useHistory } from "react-router";
import swal from "sweetalert";
import { toast } from "react-toastify";
import _ from "lodash"
import ReactPaginate from "react-paginate";
import Pagination from "../../components/pagination/pagination";

const pageSize = 10
function Brand(props) {

    let history = useHistory()
    const [brand, setBrand] = useState([]);
    const [brand_id, setBrandId] = useState([]);
    const [search, setSearch] = useState("");


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
        <>
            <div class="container gap-8 justify-center  flex flex-row flex-wrap   text-3xl rounded ">
                <Link to="/productSaya" class="w-50 bg-white font-bold hover:text-white  tracking-wide text-gray-800  rounded  hover:border-item-600 hover:bg-secondary hover:text-black shadow-md py-2 px-6 inline-flex items-center">Product</Link>
                <Link to="/brand" class="w-50 bg-white font-bold hover:text-white  tracking-wide text-gray-800  rounded  hover:border-item-600 hover:bg-secondary hover:text-black shadow-md py-2 px-6 inline-flex items-center">Brand</Link>
                <Link to="/category" class="w-50 bg-white font-bold hover:text-white  tracking-wide text-gray-800  rounded  hover:border-item-600 hover:bg-secondary hover:text-black shadow-md py-2 px-6 inline-flex items-center">Category</Link>
                <Link to="/condition" class="w-50 bg-white font-bold hover:text-white  tracking-wide text-gray-800  rounded  hover:border-item-600 hover:bg-secondary hover:text-black shadow-md py-2 px-6 inline-flex items-center">Condition</Link>
            </div>

            <body class="antialiased font-sans mt-4 ">
                <div class="container mx-auto px-4 sm:px-8">
                    <div class="py-3 ml-2">
                        <div>
                            <h2 class="text-2xl font-semibold leading-tight">Table Brands</h2>
                        </div>

                        <div class="my-2 flex sm:flex-row flex-col justify-between">
                            <div class="block relative mb-2">
                                <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current ">
                                        <path
                                            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                        </path>
                                    </svg>
                                </span>
                                <input placeholder="Search "
                                    onChange={(event) => {
                                        setSearch(event.target.value);
                                    }}
                                    class="appearance-none rounded-r rounded-l 
                            sm:rounded-l-none border border-gray-400 
                            border-b block pl-8 pr-6 py-2 w-full 
                            bg-white text-lg placeholder-gray-400 
                            text-gray-700 focus:bg-white 
                            focus:placeholder-gray-600 focus:text-gray-700 
                            focus:outline-none " />
                            </div>
                            <div class="relative flex flex-wrap ">
                                <Link to="/addBrand">
                                    <button
                                        class="w-50 gap-2 bg-white tracking-wide text-gray-800 font-bold rounded shadow-lg
                            hover:border-primary hover:bg-primary 
                            hover:text-white shadow-md py-2 px-6 inline-flex 
                            items-center ml-2">
                                        <svg class=" h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                                        </svg>
                                        <span class="mx-auto uppercase text-lg">
                                            Brand
                                        </span>

                                    </button>
                                </Link>


                            </div>
                        </div>
                        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table class="min-w-full leading-normal border-collapse">
                                    <thead class="bg-primary">
                                        <tr>
                                            <th
                                                class="px-5 py-3 border-b-3 border-black-200  text-center text-white sm:text-md lg:text-lg font-semibold  uppercase tracking-wider">
                                                Brand ID
                        </th>
                                            <th
                                                class="px-5 py-3 border-b-3 border-black-200  text-center text-white sm:text-md lg:text-lg font-semibold  uppercase tracking-wider">
                                                Brand Name
                        </th>
                                            <th
                                                class="px-5 py-3 border-b-3 border-black-200  text-center text-white sm:text-md lg:text-lg font-semibold  uppercase tracking-wider">
                                                Action
                        </th>

                                        </tr>
                                    </thead>
                                    <tbody className="gap-2 bg-white border-primary">
                                        {
                                            brand ?
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

                                                                <td className="text-center md:text-xl sm:text-lg lg:text-2xl text-black shadow-sm  ">{brand.brand_id}</td>
                                                                <td className="text-center md:text-xl sm:text-lg lg:text-2xl text-black shadow-sm  uppercase">{brand.brand_name}</td>
                                                                <td>
                                                                    <div class="flex justify-center gap-2 shadow-sm">
                                                                        <button
                                                                            onClick={() => onClickEditBrand(brand.brand_id)}
                                                                            className="flex justify-between items-center shadow-sm  border border-solid text-black border-white hover:bg-white hover:text-black active:bg-buttonOn uppercase text-md px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                                            <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                            </svg>
                                                                            Edit

                                                                        </button>

                                                                        <button

                                                                            onClick={() => {
                                                                                deleteBrand(brand.brand_id)
                                                                            }}
                                                                            className="flex justify-between items-center shadow-sm border border-solid text-black border-white hover:bg-buttonOn hover:text-black active:bg-red-600 uppercase text-md px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                                            <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                            </svg>
                                                                            Delete
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>)
                                                    }) :
                                                <tr>
                                                    <td colSpan={3}>No Records Found.</td>
                                                </tr>
                                        }
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>



    )

}

export default Brand