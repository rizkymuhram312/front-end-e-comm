import React, { Component } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export const AllCate = props => {
    const [search, setSearch] = useState("");

    let history = useHistory()

    const onClickBrand = () => {
        history.push('/brand')
    }
    const onClickCond = () => {
        history.push('/condition')
    }
    return (
        <>
            <div class="flex flex-row justify-center gap-4 text-3xl rounded ">
                <div class="flex flex-wrap ml-3">
                    <div class="sm:m-3 md:m-5 mx-2 mt-2 ">
                        <button
                            class="w-50 bg-white font-bold hover:text-white  tracking-wide text-gray-800  rounded  hover:border-item-600 hover:bg-secondary hover:text-black shadow-md py-2 px-6 inline-flex items-center">
                            <span class="mx-auto uppercase ">Category</span>
                        </button>
                    </div>
                    <div class="sm:m-3 md:m-5 mx-2 mt-2">
                        <button
                            onClick={onClickBrand}
                            class="w-50 bg-white font-bold hover:text-white  tracking-wide text-gray-800  rounded  hover:border-item-600 hover:bg-secondary hover:text-black shadow-md py-2 px-6 inline-flex items-center active">
                            <span class="mx-auto uppercase ">Brand</span>

                        </button>
                    </div>
                    <div class="sm:m-3  md:m-5 mx-2 mt-2">
                        <button
                            onClick={onClickCond}
                            class="w-50 bg-white font-bold hover:text-white  tracking-wide text-gray-800  rounded  hover:border-item-600 hover:bg-secondary hover:text-black shadow-md py-2 px-6 inline-flex items-center">
                            <span class="mx-auto uppercase ">Condition</span>

                        </button>
                    </div>
                </div>
            </div>



            <body class="antialiased font-sans mt-4 bg-secondary-200">
                <div class="container mx-auto px-4 sm:px-8">
                    <div class="py-3">
                        <div>
                            <h2 class="text-2xl font-semibold leading-tight">Table Category</h2>
                        </div>
                        <div class="my-2 flex sm:flex-row flex-col">
                            <div class="block relative mb-2">
                                <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current ">
                                        <path
                                            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                        </path>
                                    </svg>
                                </span>
                                <input placeholder="Search"
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
                                <button
                                    onClick={() => props.setShowModal(true)}
                                    class="w-46 bg-white tracking-wide text-gray-800 font-bold rounded shadow-lg
                                    hover:border-primary hover:bg-primary 
                                    hover:text-white shadow-md py-2 px-6 inline-flex 
                                    items-center ml-2">
                                    <svg class="fill-current h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="mx-auto uppercase text-lg">
                                        Add Category</span>

                                </button>


                            </div>
                        </div>
                        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table class="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Category ID                                </th>
                                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Category Name </th>
                                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Category Images </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Action
                                </th>

                                        </tr>
                                    </thead>
                                    <tbody className="gap-2">
                                        {
                                            props.category.length > 0 ?
                                                props.category
                                                .filter((val) => {
                                                    if (search == "") {
                                                        return val
                                                    } else if (val.cate_name?.toLowerCase().includes(search.toLowerCase())) {
                                                        return val
                                                    }
                                                })
                                                .map((category, index) => {
                                                    return (
                                                        <tr key={category.id}>
                                                            <td className="text-center">{category.cate_id}</td>
                                                            <td className="text-center">{category.cate_name}</td>
                                                            {/* <td className="text-center">{category.caim_id}</td> */}
                                                            <td>
                                                                <button
                                                                    onClick={() => {
                                                                        props.setEdit(category)
                                                                    }}
                                                                    className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                                    Edit
                                    </button>

                                                                <button

                                                                    onClick={() => {
                                                                        props.setDelete(category.cate_id)
                                                                    }}
                                                                    className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                                    Delete
                                    </button>


                                                            </td>
                                                        </tr>)
                                                }) :
                                                <tr>
                                                    <td colSpan={3}>No Records Found.</td>
                                                </tr>
                                        }
                                    </tbody>
                                </table>
                                {/* <div
                                    class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                    <span class="text-xs xs:text-sm text-gray-900">
                                        Showing 1 to 4 of 50 Entries
                        </span>
                                    <div class="inline-flex mt-2 xs:mt-0">
                                        <button
                                            class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                            Prev
                            </button>
                                        <button
                                            class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                            Next
                            </button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </body>





        </>



    )
}
