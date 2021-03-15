
import React, {Component} from 'react'
const VendorRulesTable = (props) => {
    return (
        <tr>
                            
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {props.name}
                                </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {props.amount}
                                </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {props.price}
                                </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {props.desc}
                                </p>
                            </td>
                           
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                
                                <button type="button" class="focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-white text-sm py-1 px-4 mx-2 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">
                                    <span className="fas fa-pen p-1"/>Edit
                                </button>
                                <button type="button" class="focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-white text-sm py-1 px-4 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg">
                                    <span className="fas fa-minus-circle p-1"/>Remove
                                </button>
                                
                            </td>
                        </tr>
    )
}

export default VendorRulesTable;


