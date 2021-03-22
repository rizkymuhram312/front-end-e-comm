// import { useState } from 'react';



export const TableProvince = props => {
    

    return (

        <div className="w-full x:w-8/12 mb-12 xl:mb-0 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="uppercase font-semibold text-base text-gray-800">List Province</h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        
                            <button onClick= {() => props.setShowModal(true) }
                                className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left hover:bg-gray-300"
                                type="button">Add Province</button>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="uppercase text-center px-6 bg-gray-100 text-gray-600 font-bold align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">Province Id</th>
                                <th className="uppercase text-center px-6 bg-gray-100 text-gray-600 font-bold align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">Province Name</th>
                                <th className="uppercase text-center px-6 bg-gray-100 text-gray-600 font-bold align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                props.province.length > 0 ?
                                    props.province.map((province, index) => {
                                        return (<tr key={province.id} >
                                            
                                            
                                            <td className="uppercase text-center" key="{prov_id}">{province.prov_id}</td>
                                            <td className="uppercase text-center" key="{prov_name}">{province.prov_name}</td>

                                            <td className="text-center">
                                                <button onClick= {() => {
                                                    props.setEdit(province)
                                                }}
                                                    className="text-white bg-green-500 border border-solid border-gray-300 mt-1 hover:bg-green-800 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                    Edit
                                    </button>
                                    
                                        
                                     
                                    

                                                <button onClick = { () => {
                                                    if (window.confirm("apakah anda yakin ingin menghapus data ini?")) {
                                                        props.setDelete(province.prov_id);
                                                        props.setDelete(province.prov_id);
                                                      }
                                                    
                                                }}
                                                    className="text-white bg-red-500 border border-solid border-gray-300 hover:bg-red-800 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
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