import React, { Component } from 'react';
import { create, updateKodepos } from './api-kodepos';

export default class AddEditForm extends Component {

    state = {
        kodeposId: null,
        kodeposKecId: null,
        isEdit : false
    }

    refresh = () => {
        // re-renders the component
        this.setState({});
      };


    componentDidMount(){

        console.log(this.props)
        if (this.props.Kodepos !== null){
            this.setState({
                kodeposId : this.props.Kodepos.kodepos,
                kodeposKecId : this.props.Kodepos.kodepos_kec_id,

                isEdit : true
            })
           
        }

    }


    

    handleOnChange = e => {
        const { target: { value, name } } = e;
        this.setState({
            [name]: value
        })
    }


    handleOnSubmit = async e => {
        e.preventDefault();
        const kodepos = {
            kodepos : this.state.kodeposId,
            kodepos_kec_id : this.state.kodeposKecId,

        };
        // console.log(this.state.isEdit)
 
        if (!this.state.isEdit){
            await create(kodepos).then(response => {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });;
        }else{
            await updateKodepos(kodepos, this.props.kodepos_id).then(response => {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });;
        }
    


        // jika ada udah sukses or error then, close modal
        // lalu refresh table 
        this.props.setShowModal(false);
        this.props.setRefreshTable();

    }

    render() {
        const { kodeposId, kodeposKecId, updateKodepos } = this.state;
  
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
                                    Add Edit Kodepos
                                </h6>
                                <button onClick={() => this.props.setShowModal(false)}
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"

                                >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form onSubmit={this.handleOnSubmit}>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-full px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Kodepos Id
                                             </label>
                                                <input required
                                                    type="text"
                                                    name="kodeposId"
                                                    value={kodeposId}
                                                    onChange={this.handleOnChange}
                                                    className="px-3 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-600  bg-white rounded shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"

                                                />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-full px-4">
                                            <div className="relative w-full mb-3">
                                            <label
                                                    className="block uppercase text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Kodepos Kecamatan Id
                                            </label>
                                                {/* <input required
                                                    type="text"
                                                    name="kodeposKecId"
                                                    value={kodeposKecId}
                                                    onChange={this.handleOnChange}
                                                    className="px-3 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-600  bg-white rounded shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"

                                                /> */}
                                                <select className="w-full border border-gray-300 py-2 px-2 bg-white  focus:ring-2 focus:ring-blue-600 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 mb-2" name="kodeposKecId" value={kodeposKecId} onChange={this.handleOnChange}>
                                                    <option>silakan pilih kecamatan</option>
                                                    {
                                                        this.props.kecamatan.map((e) => {

                                                            return (<option value={e.kec_id}>{e.kec_id} - {e.kec_name}</option>)
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        
                                       
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                        <button onClick={() => this.props.setShowModal(false)
                                        }

                                        
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                        >

        
                                            

                                            Close
                                </button>
                                        <button onClick={() => this.props.setRefreshTable(false)}
                                            className="bg-pink-600 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-pink-500 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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