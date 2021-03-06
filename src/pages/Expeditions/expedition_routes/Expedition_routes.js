import React from 'react';
import numberWithCommas from './numberWithCommas'

const TabelExpeditionRoutes = (props)=>{
    return (
        <>
            <div className="flex-wrap">
                    <div className="overflow-x-auto ">
                        <div className="py-2 my-4 align-middle inline-block min-w-4/6 sm:px-6">
                        <div className="my-8 text-bold">
                        <label className="font-medium">Expedition Name</label>
                        <select value={props.select} onChange={props.onHandleSelect} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>Choose...</option>
                        {
                            props.expedition.map((x)=>
                            x == null ? "test" : <option key={x.expe_id}>{x.expe_name}</option>
                            )
                        }
                        
                </select>    
                        </div>
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="divide-y divide-gray-200 ">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Id
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                From
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                To
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Cost
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Durasi
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Paket
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            <button className="py-2 px-4 mx-1 bg-green-500 text-white hover:bg-green-400 reounded-full" onClick={()=> props.setShowModal(true) }><li className="fas fa-plus text-lg"></li></button>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {
                                         props.expeditionRoute.filter((x)=>x.expedition.expe_name === props.select).map((expeditionRoute)=>{
                                                return(
                                                    <tr key={expeditionRoute.exro_id}>     
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <p className="id_expedition">{expeditionRoute.exro_id}</p>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <p className="name_expedition">{expeditionRoute.exro_from}</p>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <p className="name_expedition">{expeditionRoute.exro_to}</p>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <p className="name_expedition">Rp. {numberWithCommas(expeditionRoute.exro_cost)}</p>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <p className="name_expedition">{expeditionRoute.exro_duration}</p>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <p className="name_expedition">{expeditionRoute.exro_package}</p>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <button className="py-2 mx-2 px-2 bg-blue-500 text-white hover:bg-blue-400 reounded" onClick={()=> { props.setEdit(expeditionRoute) }}>&nbsp;<li className="fas fa-edit text-lg">&nbsp;</li></button>
                                                <button className="py-2 px-2 mx-1 bg-red-500 hover:bg-red-400 text-white reounded" onClick={()=> { props.setDelete(expeditionRoute.exro_id) }}>&nbsp;<li className="fas fa-trash-alt text-lg">&nbsp;</li></button>                  
                                            </td>
                                        </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>
                    </div>
                    
            </div>
        </>
    )
}

export default TabelExpeditionRoutes