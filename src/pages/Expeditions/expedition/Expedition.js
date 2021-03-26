import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import {toast} from 'react-toastify'


const TabelExpedition = (props) =>{

    toast.configure()
    const notify = () => {
       
        toast.success('Data berhasil diperbarui', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        })
    }

    return (
        <>
            <div className="flex-wrap">
                    <div class="overflow-x-auto ">
                        <div class="py-2 my-4 align-middle inline-block min-w-4/6 sm:px-6">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="divide-y divide-gray-200 ">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Expedition Id
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Action
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            <button className="py-2 px-4 mx-1 bg-green-500 text-white hover:bg-green-400 reounded" onClick={()=> props.setShowModal(true)}><li className="fas fa-plus text-lg"> </li></button>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        {
                                            props.expedition.map((expedition,index)=> {
                                                return(
                                                    <tr key={expedition.expe_id}>     
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <p className="id_expedition">{expedition.expe_id}</p>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <p className="name_expedition">{expedition.expe_name}</p>
                                            </td>
                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                                <button className="py-2 mx-1 px-4 bg-blue-500 text-white hover:bg-blue-400 reounded" onClick={()=> { props.setEdit(expedition) }}>&nbsp;<li className="fas fa-edit text-lg">&nbsp;</li></button>
                                                <button className="py-2 px-4 mx-1 bg-red-500 hover:bg-red-400 text-white reounded" onClick={()=> {
                                                    props.setDelete(expedition.expe_id)
                                                    notify()
                                                }}>&nbsp;<li className="fas fa-trash-alt text-lg">&nbsp;</li></button>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        
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


export default TabelExpedition;