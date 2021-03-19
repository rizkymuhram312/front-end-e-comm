import React, { Component } from 'react'
import {listExpedition} from '../expedition/api/api-expedition'
import {CreateExpeditionRoute, UpdateExpeditionRoute} from './api/api-expedition_route'



export default class Modal extends Component {

    state = {
        expedition: [],
        exroId: null,
        exroFrom: '',
        exroTo: '',
        exroCost: '',
        exroDuration: '',
        exroExpedition: '',
        exroPackage: '',
        isEdit: false,

    }

    componentDidMount(){
        this.showListExpedition()
        console.log(this.props.expeditionRoute)
        if(this.props.expeditionRoute !== null){
            this.setState({
                exroId: this.props.expeditionRoute.exro_id,
                exroFrom: this.props.expeditionRoute.exro_from,
                exroTo: this.props.expeditionRoute.exro_to,
                exroCost: this.props.expeditionRoute.exro_cost,
                exroDuration: this.props.expeditionRoute.exro_duration,
                exroExpedition: this.props.expeditionRoute.exro_expe_id,
                exroPackage: this.props.expeditionRoute.exro_package,
                isEdit: true
            })
        }
    }

    handleOnChange = e=>{
        const { target: { value, name } } = e;
        this.setState({
            [name]: value
        })
    }

    showListExpedition=()=>{
        listExpedition().then(data=>{
            this.setState({
                expedition:data
            })
        })
        // console.log(listExpedition())

    }


    



    handleOnSubmit =  e =>{
        e.preventDefault();
        const expeditionRoute = {
            exro_id: this.state.exroId,
            exro_from : this.state.exroFrom,
            exro_to: this.state.exroTo,
            exro_cost: Number(this.state.exroCost),
            exro_duration: this.state.exroDuration,
            exro_package: this.state.exroPackage,
            exro_expe_id: Number(this.state.exroExpedition),

        }     
        // console.log(expeditionRoute)
        if(!this.state.isEdit){
             CreateExpeditionRoute(expeditionRoute).then(res=>{
                console.log(res)
                this.props.setRefreshTabel();
            }).catch((err)=> {
                console.log(err.message)
            });
        }else{
             UpdateExpeditionRoute(expeditionRoute).then(res=>{
                console.log(res)
                this.props.setRefreshTabel();
            }).catch((err)=>{
                console.log(err.message)
            })
        }

        this.props.setShowModal(false);
        this.props.setRefreshTabel();
    }



    render() {
        const {expedition, exroFrom, exroTo, exroCost, exroDuration, exroExpedition, exroPackage}= this.state
        return (
            <>
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
                                <button onClick={() => this.props.setShowModal(false)}
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"

                                >
                                    <span className="bg-transparent text-gray-900 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form onSubmit={this.handleOnSubmit}>
                                    <div className="flex flex-wrap">
                                        
                                        <div className="w-full lg:w-full px-4">
                                            <div className="relative w-full my-3 ">
                                            <input required
                                                    type="text"
                                                    name="exroFrom"
                                                    value={exroFrom}
                                                    onChange={this.handleOnChange}
                                                    placeholder="From"
                                                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-xs shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 my-3"

                                                />
                                            <input required
                                                    type="text"
                                                    name="exroTo"
                                                    value={exroTo}
                                                    onChange={this.handleOnChange}
                                                    placeholder="To"
                                                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-xs shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 my-3"

                                                />
                                                <div className="flex flex-row">
                                                    <input required
                                                        type="text"
                                                        name="exroCost"
                                                    value={exroCost}
                                                    onChange={this.handleOnChange}
                                                        placeholder="Cost"
                                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-xs shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 my-3 mr-2"

                                                    />
                                                    <input required
                                                        type="text"
                                                        name="exroDuration"
                                                    value={exroDuration}
                                                    onChange={this.handleOnChange}
                                                        placeholder="Durasi"
                                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-xs shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 my-3 ml-2"

                                                    />
                                                </div>
                                                <div className="flex flex-row ">
                                                <select 
                                                name="exroExpedition"
                                                value={exroExpedition}
                                                onChange={this.handleOnChange}
                                                 className="text-gray-700 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-2">
                                                        <option value="0">Select Expedition</option>
                                                    {
                                                        expedition.map((x)=>
                                                        <option key={x.expe_id} value={x.expe_id}>{x.expe_name}</option>

                                                        )
                                                    }
                                                </select>  

                                                <select 
                                                name="exroPackage"
                                                value={exroPackage}
                                                onChange={this.handleOnChange}
                                                className="text-gray-700 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ml-2">
                                                    <option>Pilih Package..</option>
                                                    <option value="reguler">Reguler</option>
                                                    <option value="EXPRESS">Express</option>
                                                </select>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                        <button 
                                            onClick = {() => this.props.setShowModal(false)} 
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Close
                                </button>
                                        <button onClick={()=> this.props.setRefreshTabel()}
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
            </>
        )
    }
}
