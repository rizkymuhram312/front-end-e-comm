import React, { Component } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export const AllCond = props => {
    let history = useHistory();

    const onClickCate = () => {
        history.push('/category',)
    }
    const onClickBrand = () => {
        history.push('/brand',)
    }
    return (
        <>
             <div class="flex flex-row justify-center gap-4 text-3xl rounded ">
                <div class="flex mt-5">
                    <div class="m-5">
                        <button
                            onClick={onClickCate}
                            class="w-48 bg-primary tracking-wide text-gray-800 font-bold rounded  hover:border-item-600 hover:bg-item-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                            <span class="mx-auto">Category</span>
                        </button>
                    </div>
                    <div class="m-5">
                        <button
                        onClick={onClickBrand}
                            class="w-48 bg-primary tracking-wide text-gray-800 font-bold rounded  hover:border-item-600 hover:bg-item-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                            <span class="mx-auto">Brand</span>

                        </button>
                    </div>
                    <div class="m-5">
                        <button
                            class="w-48 bg-primary tracking-wide text-gray-800 font-bold rounded hover:bg-item-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                            <span class="mx-auto">Condition</span>

                        </button>
                    </div>
                </div>
            </div>



            <body class="antialiased font-sans mt-4 bg-secondary-200">
                <div class="container mx-auto px-4 sm:px-8">
                    <div class="py-3">
                        <div>
                            <h2 class="text-2xl font-semibold leading-tight">Table Condition</h2>
                        </div>
                        <div class="my-2 flex sm:flex-row flex-col">
                            <div class="flex flex-row mb-1 sm:mb-0">
                            </div>
                            <div class="block md:relative  sm:relative ">
                                <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                                        <path
                                            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                        </path>
                                    </svg>
                                </span>
                                <input placeholder="Search"
                                    class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                            </div>
                            <div class="relative ml-3">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                                    </svg>
                                <button
                                    onClick={() => props.setShowModal(true)}
                                    class="w-48 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                    <span class="mx-auto">Add Condition</span>

                                </button>

                            </div>
                        </div>
                        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table class="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider">
                                                Condition Name
                                </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider">
                                                Condition Description
                                </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-md font-semibold text-gray-600 uppercase tracking-wider">
                                                Action
                                </th>

                                        </tr>
                                    </thead>
                                    <tbody className="gap-2">
                                        {
                                            props.conditions.length > 0 ?
                                                props.conditions.map((condition, index) => {
                                                    return (
                                                        <tr key={condition.name}>
                                                            <td className="text-center">{condition.cond_name}</td>
                                                            <td>{condition.cond_desc}</td>
                                                            <td>
                                                                <div class="flex justify-center">
                                                                    <button
                                                                        onClick={() => {
                                                                            props.setEdit(condition)
                                                                        }}
                                                                        className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                                        Edit
                                    </button>

                                                                    <button

                                                                        onClick={() => {
                                                                            props.setDelete(condition.cond_name)
                                                                        }}
                                                                        className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
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
                                <div
                                    class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                    <span class="text-xs xs:text-sm text-gray-900">
                                        Showing 1 to 4 of 50 Entries
                        </span>
                                    <div class="inline-flex mt-2 xs:mt-0">
                                        <button
                                            class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                            Previous
                                            </button>
                                        <button
                                            class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                            Next
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>



    )
}
