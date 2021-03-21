import {useState,useEffect} from 'react'


const ExpeRouteModal= ({
    
    modal,
    expedition,
    setModal,
    editForm,
    onCreateExpeditionRoute,
    dataFormExpeditionRoute,
    setDataFormExpeditionRoute
    })=> {

        const showHideClassName = modal ? "modal display-block" : "modal display-none";
        const [from,setFrom]= useState("")
        const [to, setTo]= useState("")
        const [cost, setCost]= useState("")
        const [duration, setDuration]= useState("")
        const [selectedPackage, setSelectedPackage]= useState("")
        const [selectedExpedition, setSelectedExpedition] = useState("")

        const onHandleSubmit = async (x) => {
            x.preventDefault()
            let checkExpeditionOption = selectedExpedition === "" || selectedExpedition === "-1" || selectedPackage === "" || selectedPackage === -1 ? alert("Please Select The Bank") : ""
            setModal(false)
            editForm(false)
            onCreateExpeditionRoute()
        }


        useEffect(()=>{
            // Kalo Edit true, ini proses inisiasi form
            if(editForm){
                console.log(dataFormExpeditionRoute)
                setFrom(dataFormExpeditionRoute.exro_from)
                setTo(dataFormExpeditionRoute.exro_to)
                setCost(dataFormExpeditionRoute.exro_cost)
                setDuration(dataFormExpeditionRoute.exro_duration)
                setSelectedExpedition(dataFormExpeditionRoute.exro_expe_id)
                setSelectedPackage(dataFormExpeditionRoute.exro_package)

            }else{
                setFrom()
                setTo()
                setCost()
                setDuration()
                setSelectedExpedition()
                setSelectedPackage()
            }
        }, [editForm])


        const onCancelEdit = () => {
            editForm(false)
            setModal(false)
        }


        useEffect(()=> {
            setDataFormExpeditionRoute({...dataFormExpeditionRoute,
                exro_from: from,
                exro_to: to,
                exro_cost: cost,
                exro_duration:duration,
                exro_expe_id: selectedExpedition,
                exro_package: selectedPackage
            })
        },[from, to, cost, duration, selectedExpedition, selectedPackage])




        return(
            <div className={showHideClassName}>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-sm">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                                    Add Routes
                                </h6>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"

                                >
                                    <span className="bg-transparent text-gray-900 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form onSubmit={onHandleSubmit}>
                                    <div className="flex flex-wrap">
                                        
                                        <div className="w-full lg:w-full px-4">
                                            <div className="relative w-full my-3 ">
                                            <input required
                                                    type="text"
                                                    name="exroFrom"
                                                    
                                                    onChange={this.handleOnChange}
                                                    placeholder="From"
                                                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-xs shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 my-3"

                                                />
                                            <input required
                                                    type="text"
                                                    name="exroTo"
                                                    
                                                    onChange={this.handleOnChange}
                                                    placeholder="To"
                                                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-xs shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 my-3"

                                                />
                                                <div className="flex flex-row">
                                                    <input required
                                                        type="text"
                                                        name="exroCost"
                                                    
                                                    onChange={this.handleOnChange}
                                                        placeholder="Cost"
                                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-xs shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 my-3 mr-2"

                                                    />
                                                    <input required
                                                        type="text"
                                                        name="exroDuration"
                                                   
                                                    onChange={this.handleOnChange}
                                                        placeholder="Durasi"
                                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-xs shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 my-3 ml-2"

                                                    />
                                                </div>
                                                
                                                <div className="flex flex-row ">
                                                <select
                                                value={selectedExpedition}
                                                onChange={(x)=>setSelectedExpedition(x.target.value)}
                                                 className="text-gray-700 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-2">
                                                    <option value="-1">Select Expedition</option>
                                                    {
                                                        expedition.map((x)=>
                                                        <option key={x.expe_id} value={x.expe_id}>{x.expe_name}</option>

                                                        )
                                                    }
                                                </select>  

                                                <select 
                                                value={selectedPackage}
                                                onChange={(x)=>setSelectedPackage(x.target.value)}
                                                className="text-gray-700 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ml-2">
                                                    <option value="-1">Select Package</option>
                                                    <option value="1">Reguler</option>
                                                    <option value="2">Express</option>
                                                </select>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                        <button 
                                            onClick = {onCancelEdit}
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Close
                                </button>
                                        <button
                                            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Save Changes
                                </button>
                                    </div>
                                </form>


                            </div>

                        </div>

                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>  
            </div>
        )





    }


    


export default ExpeRouteModal