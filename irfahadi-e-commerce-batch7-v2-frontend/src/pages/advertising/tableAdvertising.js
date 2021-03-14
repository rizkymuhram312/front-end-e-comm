export const TableAdvertising = props => {
    return (
        <div className="w-full x:w-8/12 mb-12 xl:mb-0 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-gray-800">Package Advertising</h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <button 
                            // onClick= {() => props.setShowModal(true) }
                                className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left hover:bg-item hover:text-white"
                                type="button">Add</button>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="text-center px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">Package Name</th>
                                <th className="text-center px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">Duration</th>
                                <th className="text-center px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">Description</th>
                                <th className="text-center px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                props.adv.length > 0 ?
                                    props.adv.map((adv, index) => {
                                        return (<tr key={adv.id} >
                                            
                                            
                                            <td className="text-center">{adv.adv_id}</td>
                                            <td className="text-center">{adv.adv_name}</td>
                                            <td className="text-center">{adv.adv_prov_id}</td>
                                            <td className="text-center">
                                                <button onClick= {() => {
                                                    props.setEdit(adv)
                                                }}
                                                    className="text-gray-600 bg-transparent border border-solid border-gray-300 hover:bg-gray-600 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                    Edit
                                    </button>
                                                <button onClick = { () => {
                                                    if (window.confirm("apakah anda yakin ingin menghapus data ini?")) {
                                                        props.setDelete(adv.adv_id);
                                                      }
                                                    
                                                }}
                                                    className="text-gray-600 bg-transparent border border-solid border-gray-300 hover:bg-gray-600 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                    Delete
                                    </button>


                                            </td>
                                        </tr>
                                        )
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