import React from 'react'
import {useHistory} from "react-router-dom"


export default function SummaryPDAM() {
    const history = useHistory();

    const routeChange = () => {
      let path = `/billTopup`
      history.push(path)
    }
        return (
        <div className="flex justify-center">
            <div className="w-4/12">
                <div className="relative flex min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="px-4 py-5 flex-auto">
                    <span class="fas fa-chevron-left float-left text-primary text-xl cursor-pointer" onClick={routeChange}/>
                    <h3 class="text-primary text-xl font-medium text-center">Summary Transaction</h3>
                    <hr className="mt-2 mb-4 border-b-4 border-gray-300 rounded"/>
                    <div class="mb-10">
                        <span class="float-left text-base font-semibold text-gray-400">Customer Name</span>
                        <span class="float-right text-base font-semibold text-gray-700">Farhan Ali</span>
                        <br/>
                        <span class="float-left text-base font-semibold text-gray-400">Bill Number</span>
                        <span class="float-right text-base font-semibold text-gray-700">PDAM-23212</span>
                        <br/>
                        <span class="float-left text-base font-semibold text-gray-400">Bill Price</span>
                        <span class="float-right text-base font-semibold text-gray-700">152.000</span>
                        <br/>
                        <span class="float-left text-base font-semibold text-gray-400">Description</span>
                        <p class="float-right text-base font-semibold text-gray-700">Pembayaran PDAM</p>
                    </div>
                    
                        <div class="flex justify-end">
                            <button class="bg-button text-green-700 font-bold text-sm px-7 py-3 rounded shadow hover:bg-green-300 outline-none focus:outline-none mr-1 mb-1" 
                            type="button" 
                            style={{ transition: "all .15s ease" }}
                            onClick={routeChange}>
                            Done
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        )
    
}

