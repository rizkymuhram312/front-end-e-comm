import { apiProductMaster } from "../../config/apiUrl"
import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useState, useEffect, Alert } from 'react';
import { useHistory } from "react-router";
import swal from "sweetalert";
import { toast } from "react-toastify";
// import _ from "lodash"
import ReactPaginate from "react-paginate";
import Pagination from "../../components/pagination/pagination";

function Condition(props) {

    let history = useHistory()
    const [condition, setCondition] = useState([]);
    const [cond_name, setCondName] = useState([]);
    const [cond_desc, setCondDesc] = useState([]);
    const [search, setSearch] = useState("");


    // page

    const onClickEditCond = (id) => {
        history.push('/editCond')
        localStorage.setItem('id', id)
    }


    useEffect(() => {
        fetchCond()
    }, [])

    async function fetchCond() {
        return await axios({
            url: `${apiProductMaster}/condition`,
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                setCondition(res.data)
                // setPaginatedPosts(_(res.data).silce(0).take(pageSize).value())
            })
            .catch((err) => console.error(err));
    }

    const onRefreshTable = () => {
        const getListCond = async () => {
            const listCond = await fetchCond();
            if (listCond) setCondition(listCond)
        }
        getListCond();
    }
    useEffect(() => {
        const getListCond = async () => {
            const listCond = await fetchCond();
            if (listCond) setCondition(listCond)
        }
        getListCond();
    }, [])

    const deleteCond = async (id) => {
        if (window.confirm('Are you sure?')) {

            const data = {
                cond_name: cond_name,
                // cond_desc: cond_desc
            }
            axios.delete(`${apiProductMaster}/condition/${id}`)
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
                this Condition is delete?
                <button onClick={closeToast}>Close</button>
            </div>
        )
    }



    return (
        <>


            <body class="antialiased font-sans mt-4 ">
                <div class="container mx-auto px-4 sm:px-8 rounded border-4 border-pink-500 ml-2">
                    <div class="py-3 ml-2">
                        <div class="text-2xl md:text:lg  sm:text-md">
                            <h2 class=" font-semibold leading-tight">Table Conditions</h2>
                        </div>

                        <div class="my-2 flex sm:flex-row flex-col justify-between">
                            <div class="block relative mb-2 gap-4">
                                <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2 gap-2">
                                    <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current mr-3 ">
                                        <path
                                            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                        </path>
                                    </svg>
                                </span>
                                <input class="sm:text-sm" placeholder="Search "
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
                                <Link to="/addCond">
                                    <button
                                        class="w-50 gap-2 bg-white border border-pink-300 tracking-wide text-primary font-bold 
                                        rounded 
                            hover:border-lg hover:bg-primary 
                            hover:text-white shadow-lg  py-2 px-6 inline-flex 
                            items-center ml-2">

                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        <span class="mx-auto uppercase xl:text-lg md:text-md sm:text-sm">
                                            Add Another Condition
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
                                                Condition Name
                        </th>
                                            <th
                                                class="px-5 py-3 border-b-3 border-black-200  text-center text-white sm:text-md lg:text-lg font-semibold  uppercase tracking-wider">
                                                Condition Description
                        </th>
                                            <th
                                                class="px-5 py-3 border-b-3 border-black-200  text-center text-white sm:text-md lg:text-lg font-semibold  uppercase tracking-wider">
                                                Action
                        </th>

                                        </tr>
                                    </thead>
                                    <tbody className="gap-2  border-primary">
                                        {
                                            condition ?
                                                condition
                                                    // .slice(pagesVisited, pagesVisited + usersPerPage)
                                                    .filter((val) => {
                                                        if (search == "") {
                                                            return val
                                                        } else if (val.cond_name.toLowerCase().includes(search.toLowerCase())) {
                                                            return val
                                                        } else if (val.cond_desc.toLowerCase().includes(search.toLowerCase())) {
                                                            return val
                                                        }
                                                    })
                                                    .map((cond, index) => {
                                                        return (
                                                            <tr key={cond.id} >

                                                                <td className="text-center md:text-xl sm:text-lg lg:text-2xl text-black border-2  my-2 uppercase ">{cond.cond_name}</td>
                                                                <td className="text-center md:text-xl sm:text-lg lg:text-2xl text-black border-2  my-2 uppercase">{cond.cond_desc}</td>
                                                                <td className="border-2">
                                                                    <div class="flex justify-center  ">
                                                                        <div class="flex justify-center items-center mx-2 ">
                                                                            <svg onClick={() => onClickEditCond(cond.cond_name)} className="p-3  flex items-center
                                                                        xl:h-14 xl:w-14 sm:h-12
                                                                        bg-green-200 hover:bg-green-500 text-green-dark uppercase hover:text-white border border-green 
                                                                            hover:border-transparent rounded mr-2 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                            </svg>

                                                                            <svg
                                                                                onClick={() => {
                                                                                    deleteCond(cond.cond_name)
                                                                                }}
                                                                                className="p-3  xl:h-14 xl:w-14 sm:h-12 fle items-center
                                                                        bg-red-200 hover:bg-red-500 text-red-dark uppercase hover:text-white border border-red 
                                                                            hover:border-transparent rounded mr-2 "
                                                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                            </svg>


                                                                        </div>
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

export default Condition