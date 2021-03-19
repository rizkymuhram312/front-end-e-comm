import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import VendorTable from './component/vendor'
import VendorRulesTable from './component/vendorRules'
import {apiTopup} from '../../config/apiUrl'

import axios from 'axios'

export default function Sidebar() {
    const [openTab, setOpenTab] = React.useState(1);
    const [Vendor, setVendor] = useState([]);
    const [VendorRules, setVendorRules] = useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const [vendor_name, setVendorName] = useState("");
    const [vendor_desc, setVendorDesc] = useState("");
    const [veru_vendor_name, setVeruName] = useState("");
    const [veru_bill_amount, setVeruAmount] = useState(0);
    const [veru_bill_price, setVeruPrice] = useState(0);
    const [veru_desc, setVeruDesc] = useState("")
    const [flag,setFlag] = useState(false);
    
    const onChangeVendorName = (e) => {
        
        const value = e.target.value;
        setVendorName(value);
        
    }
    
    const onChangeVendorDesc = (e) => {
        const value = e.target.value;
        setVendorDesc(value);
        
    }

    const onChangeVeruName = (e) => {
        const value = e.target.value;
        setVeruName(value);
        
    }

    const onChangeVeruDesc = (e) => {
        const value = e.target.value;
        setVeruDesc(value);
    }

    const onChangeVeruAmount = (e) => {
        const value = e.target.value;
        setVeruAmount(value);
    }

    const onChangeVeruPrice = (e) => {
        const value = e.target.value;
        setVeruPrice(value);
    }
    useEffect(() => {
        fetchVendor()
        fetchVendorRules()
    }, [flag===true])

    const fetchVendor = async () => {
        return await axios({
            url: `${apiTopup}/vendor`,
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },
        }).
            then((res) => {
                setVendor(res.data)
                console.log(res.data);
            }).catch((err) => console.log(err))
    }

    const fetchVendorRules = async () => {
        return await axios({
            url: `${apiTopup}/VendorRules`,
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },
        }).
            then((res) => {
                setVendorRules(res.data)
                console.log(res.data);
            }).catch((err) => console.log(err))
    }

    //ADD VENDOR
    const addVendor = () => {
        const data = {
            vendor_name : vendor_name,
            vendor_desc : vendor_desc
        };
        axios.post(`${apiTopup}/vendor/insertVendor`,data).
        then((result)=>{
            if(result){
                console.log(result.data);
                if (result.data){
                    setVendorName("");
                    setVendorDesc("");
                }
            }
        })
        .catch((err)=>{
            console.log(err);
        })
        setShowModal(false);
        setFlag(true);
    }

    const addVeru = () =>{
        const data ={
            veru_bill_amount : veru_bill_amount,
            veru_vendor_name : veru_vendor_name,
            veru_bill_price : veru_bill_price,
            veru_desc : veru_desc 
        };
        axios.post(`${apiTopup}/vendorRules/insertVendorRules`,data).
        then((result)=>{
            if(result){
            console.log(result.data);
            if(result.data){
                setVeruName("");
                setVeruAmount();
                setVeruPrice();
                setVeruDesc("");
            }
        }
        })
        .catch((err)=>{
            console.log(err);
        })
        setShowModal(false);
        setFlag(true);

    }
    

    return (
        <>

            <div className="flex-flex-wrap">
                <div className="w-full px-1 text-center font-bold text-md flex-row md:flex-row shadow-md bg-white">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist">
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-gray-500"
                                        : "text-gray-700 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist">
                                <i className="fas fa-users text-base mr-1"></i>Vendor
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-gray-500"
                                        : "text-gray-700 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist">
                                <i className="fas fa-exclamation text-base mr-1"></i>Vendor Rules
                             </a>
                        </li>
                    </ul>
                </div>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="px-4 py-5 flex-wrap">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">

                                <h1 className="font-semibold text-lg text-gray-800">Vendor Menu</h1>

                                <div class="container mx-auto px-4 sm:px-8">
                                    <div class="">
                                        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                                <table class="min-w-full leading-normal">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-600 font-semibold text-left text-md uppercase font-normal">
                                                                Vendor Name
                                                            </th>
                                                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-600 font-semibold text-left text-md uppercase font-normal">
                                                                Vendor Description
                                                            </th>
                                                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200">
                                                                <button type="button" class="focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-white text-sm py-1 px-4 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg"
                                                                    style={{ transition: "all .15 ease" }}
                                                                    onClick={() => setShowModal(true)}
                                                                >
                                                                    <span className="fas fa-plus-circle p-1" />Add Vendor
                                                                </button>
                                                                {showModal ? (
                                                                    <>
                                                                        <div
                                                                            className="items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                                            
                                                                        >
                                                                            <div className="relative w-5/12 my-6 mx-auto">
                                                                                {/*content*/}
                                                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                                    {/*header*/}
                                                                                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                                                                        <h3 className="text-2xl font-semibold">
                                                                                            Vendor
                                                                                        </h3>
                                                                                        <button
                                                                                            className="p-1 ml-auto bg-transparent border-0 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                                                                                            onClick={() => setShowModal(false)}
                                                                                        >
                                                                                            <span className="fas fa-times" />

                                                                                        </button>
                                                                                    </div>
                                                                                    {/*body*/}
                                                                                    <div className="relative p-6 flex-auto">
                                                                                        <h1 className="font-semibold text-base text-gray-800 float-left">Vendor Name</h1>
                                                                                        <div class="mb-3 pt-0">
                                                                                            <input type="text" name="vendor_name" value={vendor_name} onChange={onChangeVendorName} class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                                                                                        </div>
                                                                                        <h1 className="font-semibold text-base text-gray-800 float-left">Vendor Description</h1>
                                                                                        <div class="mb-3 pt-0">
                                                                                            <input type="text" name ="vendor_desc" value={vendor_desc} onChange={onChangeVendorDesc} class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                                                                                        </div>
                                                                                    </div>
                                                                                    {/*footer*/}
                                                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                                                                        <button
                                                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                                                                            type="button"
                                                                                            style={{ transition: "all .15s ease" }}
                                                                                            onClick={() => setShowModal(false)}
                                                                                        >
                                                                                            Close
                                                                                                </button>
                                                                                        <button
                                                                                            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                                                            type="button"
                                                                                            style={{ transition: "all .15s ease" }}
                                                                                            values = "addVendor"
                                                                                            onClick={addVendor}
                                                                                        >
                                                                                            Save Changes
                                                                                                </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

                                                                    </>
                                                                ) : null}

                                                            </th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {Vendor.map((x) => {
                                                            return (
                                                                <VendorTable
                                                                    name={x.vendor_name}
                                                                    desc={x.vendor_desc}
                                                                />
                                                            )
                                                        })

                                                        }
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <h1 className="font-semibold text-lg text-gray-800">Vendor Rules Menu</h1>
                                <div class="container mx-auto px-4 sm:px-8 ">
                                    <div class="">
                                        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                                <table class="min-w-full leading-normal">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-600 font-semibold text-left text-md uppercase font-normal">
                                                                Vendor Name
                                                            </th>
                                                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-600 font-semibold text-left text-md uppercase font-normal">
                                                                Bill Amount
                                                            </th>
                                                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-600 font-semibold text-left text-md uppercase font-normal">
                                                                Vendor Price
                                                            </th>
                                                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-600 font-semibold text-left text-md uppercase font-normal">
                                                                Vendor Rules Description
                                                            </th>
                                                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200">
                                                                <button type="button" class="focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-white text-sm py-1 px-4 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg"
                                                                style={{ transition: "all .15 ease" }}
                                                                onClick={() => setShowModal(true)}>
                                                                    <span className="fas fa-plus-circle p-1" />Add Vendor Rules
                                                                </button>
                                                                {showModal ? (
                                                                    <>
                                                                        <div
                                                                            className="items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                                                            <div className="relative w-5/12 my-6 mx-auto">
                                                                                {/*content*/}
                                                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                                    {/*header*/}
                                                                                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                                                                        <h3 className="text-2xl font-semibold">
                                                                                            Vendor
                                                                                        </h3>
                                                                                        <button
                                                                                            className="p-1 ml-auto bg-transparent border-0 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                                                                                            onClick={() => setShowModal(false)}
                                                                                        >
                                                                                            <span className="fas fa-times" />

                                                                                        </button>
                                                                                    </div>
                                                                                    {/*body*/}
                                                                                    <div className="relative p-6 flex-auto">
                                                                                        <h1 className="font-semibold text-base text-gray-800 float-left">Vendor Name</h1>
                                                                                        <div class="mb-3 pt-0">
                                                                                            <input type="text" name="veru_vendor_name" value={veru_vendor_name} onChange={onChangeVeruName} class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                                                                                        </div>
                                                                                        <h1 className="font-semibold text-base text-gray-800 float-left">Bill Amount</h1>
                                                                                        <div class="mb-3 pt-0">
                                                                                            <input type="number" name="veru_bill_amount" value={veru_bill_amount} onChange={onChangeVeruAmount}class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                                                                                        </div>
                                                                                        <h1 className="font-semibold text-base text-gray-800 float-left">Bill Price</h1>
                                                                                        <div class="mb-3 pt-0">
                                                                                            <input type="number" name="veru_bill_price" value={veru_bill_price} onChange={onChangeVeruPrice} class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                                                                                        </div>
                                                                                        <h1 className="font-semibold text-base text-gray-800 float-left">Vendor Rules Description</h1>
                                                                                        <div class="mb-3 pt-0">
                                                                                            <input type="text" name="veru_desc" value={veru_desc} onChange={onChangeVeruDesc} class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                                                                                        </div>
                                                                                    </div>
                                                                                    {/*footer*/}
                                                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                                                                        <button
                                                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                                                                            type="button"
                                                                                            style={{ transition: "all .15s ease" }}
                                                                                            onClick={() => setShowModal(false)}
                                                                                        >
                                                                                            Close
                                                                                                </button>
                                                                                        <button
                                                                                            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                                                            type="button"
                                                                                            style={{ transition: "all .15s ease" }}
                                                                                            values = "addVeru"
                                                                                            onClick={addVeru}
                                                                                        >
                                                                                            Save Changes
                                                                                                </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

                                                                    </>
                                                                ):null}
                                                            </th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {VendorRules.map((x) => {
                                                            return (
                                                                <VendorRulesTable
                                                                    id={x.veru_id}
                                                                    name={x.veru_vendor_name}
                                                                    amount={x.veru_bill_amount}
                                                                    price={x.veru_bill_price}
                                                                    desc={x.veru_desc}
                                                                />
                                                            )
                                                        })

                                                        }
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


