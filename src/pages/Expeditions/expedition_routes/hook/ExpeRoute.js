// import axios from "axios";
// import { useEffect, useState } from "react";
// import {ListExpeditionRoute, CreateExpeditionRoute, DeleteExpeditionRoute, UpdateExpeditionRoute} from '../api/api-expedition_route'
// import {listExpedition} from '../../expedition/api/api-expedition'
// import ExpeRouteModal from "./ExpeRouteModal";



// export default function ExpeRoute() {
//     let expedition= listExpedition(0)
//     let [ExpeRoute, setExpeRoute]= useState([]);
//     let [Expedition, setExpedition]= useState([]);
//     let [createExpeditionRoute, setCreateExpeditionRoute]= useState()
//     let [updateExpeditionRoute, setUpdateExpeditionRoute]= useState()
//     let [deleteExpeditionRoute, setDeleteExpeditionRoute]= useState()
//     // let [Select]= useState("");
//     let [dataFormExpeditionRoute,setDataFormExpeditionRoute] = useState({})
//     let [modal, setModal]= useState(false)
//     let {exro_id} = useParams()
//     let [errorApi,setErrorApi] = useState("")
//     let [editForm,setEditForm] = useState(false)



 


//     useEffect( ()=> {
//         fetchExpeRoute()
//         fetchExpedition()
//         fetchData()
//     },[modal, errorApi,dataFormExpeditionRoute,createExpeditionRoute,updateExpeditionRoute,deleteExpeditionRoute]);


//     let fetchData = async ()=> {
//         try {
//             let expeRoute = await ListExpeditionRoute(exro_id)
//             setExpeRoute(expeRoute)
//         }catch (err){
//             if (err === -4073) {
//                 setExpeRoute([])
//                 setErrorApi("Server in trouble")
//               }else{
//                 setExpeRoute([])
//                 setErrorApi("Belum ada akun bank")
//               }
//         }
//     }


//     const onDelete = (x) => {
//         let exro_id = x.target.value
//         axios.delete("http://localhost:3007/api/expeditionroute/"+exro_id).then((result) => { 
//         setDeleteExpeditionRoute(exro_id)
//         }).catch((err) => {
//           console.log(err)
//         });
//       }

//       const onEdit = (x) => {
//         ExpeRoute.map((data) => {
//             console.log(data)
//             if(Number(x.target.value) === data.exro_id) {
//               setDataFormExpeditionRoute(data)
//             }
//           })
//           setEditForm(true)
//           console.log(editForm)
//           setModal(true)
//         }


//     const onCreateExpeditionRoute = async ()=>{
//         console.log(editForm)
//         if(editForm){
//             await UpdateExpeditionRoute(dataFormExpeditionRoute)
//             setUpdateExpeditionRoute(dataFormExpeditionRoute)
//         }else{
//             await CreateExpeditionRoute(dataFormExpeditionRoute)
//             setCreateExpeditionRoute(dataFormExpeditionRoute)
//         }
//     }

//     // onHandleSelect = e => {
//     //     // ternary operation
//     //     const value = e.target.selectedIndex !== 0 ? e.target.options[e.target.selectedIndex].value : null;
//     //     console.log(value)
//     //     if(value !== 0){
//     //         this.useState({
//     //             select:value
//     //         })
//     //     }
//     // }


//     const fetchExpeRoute = async ()=> {
//         return await axios({
//             url:`http://localhost:3007/api/expeditionroute`,
//             method: "get",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//         }).then((res)=> {
//             setExpeRoute(res.data)
//         }).catch((err)=> console.log(err));
//     }

//     const fetchExpedition = async ()=> {
//         return await axios({
//             url:`http://localhost:3007/api/expedition`,
//             method: "get",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//         }).then((res)=> {
//             setExpedition(res.data)
//         }).catch((err)=> console.log(err));
//     }
    
    
//     return(
//         <>
//         <div className="flex-wrap">
//                     <div class="overflow-x-auto ">
//                         <div class="py-2 my-4 align-middle inline-block min-w-4/6 sm:px-6">
//                         <div className="my-8 text-bold">
//                             <select class="   mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
//                   {
                      
//                         Expedition.map((x)=>
//                         <option >{x.expe_name}</option>

//                       )}
//                     </select>    
                  
//                         </div>
//                             <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//                                 <table class="divide-y divide-gray-200 ">
//                                     <thead class="bg-gray-50">
//                                         <tr>
//                                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                                 Id
//                                             </th>
//                                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                                 From
//                                             </th>
//                                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                                 To
//                                             </th>
//                                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                                 Cost(Rp)
//                                             </th>
//                                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                                 Durasi
//                                             </th>
//                                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                                 Paket
//                                             </th>
//                                             <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             <button onClick={()=>{setModal(true)}} className="py-2 px-4 mx-1 bg-green-500 text-white hover:bg-green-400 reounded-full">TAMBAH</button>
//                                             {
//                                                 modal ?
//                                                 <ExpeRouteModal
//                                                 onCreateExpeditionRoute = {onCreateExpeditionRoute}
//                                                 exro_id= {exro_id}
//                                                 modal={modal}
//                                                 expeditions={expedition.data}
//                                                 setModal={setModal}
//                                                 setDataFormExpeditionRoute= {setDataFormExpeditionRoute}
//                                                 dataFormExpeditionRoute= {dataFormExpeditionRoute}
//                                                 editForm={editForm}
//                                                 setEditForm={setEditForm}
//                                                 />
//                                                 : null
//                                             }
//                                             </th>
//                                         </tr>
//                                     </thead>
//                                     <tbody class="bg-white divide-y divide-gray-200">
                                        
//                                     {
//                                         ExpeRoute.map((x)=>

//                                         <tr >     
//                                         <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                             <p className="id_expedition">{x.exro_id}</p>
//                                         </td>
//                                         <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                             <p className="name_expedition">{x.exro_from}</p>
//                                         </td>
//                                         <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                             <p className="name_expedition">{x.exro_to}</p>
//                                         </td>
//                                         <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                             <p className="name_expedition">{x.exro_cost}</p>
//                                         </td>
//                                         <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                             <p className="name_expedition">{x.exro_duration}</p>
//                                         </td>
//                                         <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                             <p className="name_expedition">
//                                                 {x.exro_package}   
//                                                 {/* {x.expedition.expe_name} */}
//                                             </p>
//                                         </td>
//                                         <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                                <button className="py-1 mx-1 px-2 bg-blue-500 text-white hover:bg-blue-400 reounded" onClick={onDelete}>EDIT</button>
//                                                <button className="py-1 px-2 mx-1 bg-red-500 hover:bg-red-400 text-white reounded" onClick={onEdit}>HAPUS</button>                  
//                                            </td>
//                                     </tr>


//                                         )}
                                                                                    
//                                     </tbody>
//                                 </table>
                                
//                             </div>
//                         </div>
//                     </div>
                    
//             </div>
//         </>
//     );
// }