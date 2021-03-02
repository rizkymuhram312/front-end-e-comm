// import { useState } from 'react';


export const TableKecamatan = props => {
    return (
        <div className="w-full x:w-8/12 mb-12 xl:mb-0 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-gray-800">List kecamatan</h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <button onClick= {() => props.setShowModal(true) }
                                className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                                type="button">Add kecamatan</button>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="text-center px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">kecamatan Id</th>
                                <th className="text-center px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">kecamatan Name</th>
                                <th className="text-center px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">city id</th>
                                <th className="text-center px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                props.kecamatan.length > 0 ?
                                    props.kecamatan.map((kecamatan, index) => {
                                        return (<tr key={kecamatan.id} >
                                            
                                            
                                            <td className="text-center" key="{kec_id}">{kecamatan.kec_id}</td>
                                            <td className="text-center" key="{kec_name}">{kecamatan.kec_name}</td>
                                            <td className="text-center" key="{kec_city_id}">{kecamatan.kec_city_id}</td>

                                            <td className="text-center">
                                                <button onClick= {() => {
                                                    props.setEdit(kecamatan)
                                                }}
                                                    className="text-gray-600 bg-transparent border border-solid border-gray-300 hover:bg-gray-600 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                    Edit
                                    </button>
                                    
                                        
                                     
                                    

                                                <button onClick = { () => {
                                                    if (window.confirm("apakah anda yakin ingin menghapus data ini?")) {
                                                        props.setDelete(kecamatan.kec_id);
                                                      }
                                                    
                                                }}
                                                    className="text-gray-600 bg-transparent border border-solid border-gray-300 hover:bg-gray-600 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
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
                </div>
            </div>
        </div>
    )
}