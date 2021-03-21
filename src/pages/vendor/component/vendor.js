
import React, { Component, useEffect, useState } from 'react'
import { apiTopup } from '../../../config/apiUrl'
import axios from 'axios'

const VendorTable = (props) => {
    const [showModal, setShowModal] = React.useState(false);
    const [vendorName,setVendorName] = useState(props.name);
    const [vendorDesc,setVendorDesc] = useState("")


    
    const updateVendor = async (vendor) => {
        console.log('Params : '+vendorName);
        try {
            let result = await axios.put(`${apiTopup}/vendor/updateVendor/${vendorName}`,{
              data : vendor
            })
            console.log(result);
            return await result.data
          } catch(err) {
            return await err.message
          }
      };

      const deleteVendor = async (vendorName) => {
        try {
            let response = await axios.delete(`${apiTopup}/vendor/deleteVendor/${vendorName}`)
            return await response.data
          } catch(err) {
            return await err.message
          }
      };

    
    

    const onChangeDesc = (e) =>{
        const value = e.target.value
        setVendorDesc(value)
        console.log(vendorDesc);
    }

    const updateVendorModal = () =>{
        setVendorName(vendorName)
        const vendor_desc = vendorDesc
        const vendor = {
            vendor_desc : vendor_desc
        }
        console.log(vendorName);
        console.log(vendor);

        updateVendor(vendor).then(result=>{
            console.log(result)
        }).catch((err)=>{
            console.log(err);
        })
        
        setShowModal(false)
    }

    const removeVendor = () =>{
        console.log(vendorName);
        deleteVendor(vendorName).then(response=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })
    }

    

    return (
        <tr>

            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {props.name}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {props.desc}
                </p>
            </td>

            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">

                <button type="button"
                    class="focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-white text-sm py-1 px-4 mx-2 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
                    onClick={() => setShowModal(true)}
                >
                    <span className="fas fa-pen p-1" />Edit
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
                                            <input disabled type="text" name="vendorName" value={vendorName} class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-gray-100 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                                        </div>
                                        <h1 className="font-semibold text-base text-gray-800 float-left">Vendor Description</h1>
                                        <div class="mb-3 pt-0">
                                            <input type="text" name="vendorDesc" value={vendorDesc} onChange={onChangeDesc} class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
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
                                            values="addVendor"
                                            onClick={updateVendorModal}    
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
                <button type="button" 
                class="focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-white text-sm py-1 px-4 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg"
                onClick={removeVendor}
                >
                    <span className="fas fa-minus-circle p-1" />Remove
                </button>
                

            </td>
        </tr>
    )
}

export default VendorTable;


