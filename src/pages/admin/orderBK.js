import React from 'react'
import SidebarAdmin from './sidebarAdmin'

export default function OrderBK() {
    return (
        <div className="flex flex-wrap">
        <SidebarAdmin />
        <div className="w-full md:w-9/12 md:mt-10">
        <div className="w-full x:w-8/12 mb-12 xl:mb-0 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-gray-800">Package Advertising</h3>
                        </div>
                        
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className=" px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">Package Name</th>
                                <th className=" px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">Duration</th>
                                <th className=" px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">Description</th>
                                <th className=" px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">Action</th>
                            </tr>
                        </thead>
                        <br />
                        <tbody >
                            
                                {/* // props.adv.length > 0 ?
                                //     props.adv.map((adv, index) => { */}
                                         <tr>
                                            <td className="text-center"></td>
                                            <td className="text-center"></td>
                                            <td className="text-center">Rp.</td>
                                            
                                        </tr>)
                                    
                                    {/* // <tr>
                                    //     <td colSpan={3}>No Records Found.</td>
                                    // </tr> */}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
