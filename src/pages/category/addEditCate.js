import React, { Component } from 'react';
import { create, updatecate } from './api-category';


export default class addEditCate extends Component {
    state = {
        cateId: null,
        cateName: '',
        isEdit: false
    }

    componentDidMount() {
        if (this.props.category !== null) {
            this.setState({
                cateId: this.props.category.cate_id,
                cateName: this.props.category.cate_name,
                // caimId: this.props.categoryImg.caim_id,
                isEdit: true,
            })
        }
    }
    
    handleOnChange = e => {
        const { target: { value, name } } = e;
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault();
        const category = {
            cate_id: this.state.cateId,
            cate_name: this.state.cateName,
            // caim_id: this.state.caimId
        };

        if (!this.state.isEdit) {
            console.log(category)
            create(category).then(response => {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        } else {
            console.log(category)
            updatecate(category).then(response => {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });;
        }
        this.props.setShowModal(false);        
        this.props.setRefreshTable();
    }
    render() {
        const { cateId, cateName } = this.state;
        return (
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-lg">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                <h6 className="text-gray-500 text-md mt-3 mb-6 font-bold uppercase">
                                    Add category
                                </h6>
                                <button
                                    onClick={() => this.props.setShowModal(false)}
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"

                                >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">

                                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form onSubmit={this.handleOnSubmit}>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    category Id
                                             </label>
                                                <input disabled
                                                    type="text"
                                                    name="cateId"
                                                    value={cateId}
                                                    onChange={this.handleOnChange}
                                                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-md shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"

                                                />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                    htmlFor="grid-password">
                                                    category Name
                                            </label>
                                                <input required
                                                    type="text"
                                                    name="cateName"
                                                    value={cateName}
                                                    onChange={this.handleOnChange}
                                                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-md shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"

                                                />
                                            </div>
                                        </div>
                                        <div class="w-full  px-4">
                                            <div class="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-md font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Category Images
                                            </label>
                                                <label class=" mb-5 flex flex-col items-center px-1 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
                                                    <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                                    </svg>
                                                    <span class="mt-2 text-xs leading-normal">Select a images</span>
                                                    <input type='file' class="hidden" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                        <button
                                            onClick={() => this.props.setShowModal(false)}
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button">
                                            Close
                                        </button>
                                        <button
                                            onClick={() => this.props.setRefreshTable()}
                                            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit">
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
