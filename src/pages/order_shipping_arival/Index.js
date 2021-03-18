import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ModalOshipval from './OshipvalModal'



function Index() {

    let [ShippingArrival, setShippingArrival]= useState([]);
    let [modal, setModal]= useState (false);


    useEffect(()=>{
        fetchShippingArrival()
    },[modal])
    

    const fetchShippingArrival = async ()=>{
        return await axios({
            url:`http://192.168.100.21:3004/api/orders`,
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res)=>{
            setShippingArrival(res.data)
        }).catch((err)=> console.log(err))
    }

    return (
        <div>
             <div class="flex flex-wrap">
                    <div class="-my-2 p-8 overflow-x-auto">
                        <div class="py-2 align-middle inline-block max-w-full">
                                <table class="min-w-full divide-y divide-gray-200 ">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Order Name
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Created On
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Subtotal
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Weight
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Discount
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        {
                                            ShippingArrival.filter((x)=> x.status.stat_name=== "PENDING" || x.status.stat_name=== "Paid" || x.status.stat_name=== "PAID" ||  x.status.stat_name=== "arrived" || x.status.stat_name=== "Arrived" || x.status.stat_name=== "ARRIVED").map(x=>
                                            
                                            <tr key={x.order_name}>     
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {x.order_name}
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {x.order_created_on}
                                            </td>
                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                            {x.order_subtotal}
                                            </td>
                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                            {x.order_weight} Kg
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {x.order_discount} %
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {x.status.stat_name}
                                                </span>
                                            </td>
                                            {
                                            (x.status.stat_name === "PENDING") ?
                                            
                                            <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                            <button className="py-2 px-4 bg-blue-500 hover:bg-blue-400 text-white reounded" onClick={()=>{setModal(true)}}>ARRIVED</button>
                                            </td>
                                            :
                                            <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                            <button className="py-2 px-4 bg-gray-500 text-white reounded" onClick={()=>{setModal(true)}} disabled="true">ARRIVED</button>
                                            </td>
                                            }
                                            
                                        </tr>

                                            )}
                                            
                                            
                                                 
                                        
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>

                {
                    modal ? 
                    <ModalOshipval
                    modal= {modal}
                    setModal={setModal}
                    />
                    :
                    null
                }
        </div>
    )
}

export default Index
