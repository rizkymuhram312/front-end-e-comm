import React, { Component } from 'react'

export default class Profil extends Component {
    render() {
        return (
            <div>
                <center>
                    <div class="flex flex-wrap justify-center">
                        <div class="w-6/12 sm:w-4/12 px-4">
                            
                            <img src="cewe.jpg" alt="..." class="shadow rounded-full max-w-full h-40 align-middle border-none" /> 

                            <div class=" grid grid-cols-1 gap-4 my-2 mt-12 content-center items-center justify-center place-content-center">
                                <p className="justify-center font-semibold">Username : {localStorage.getItem('dataUserName')} </p>
                            </div>
                            <div class=" grid grid-cols-1 gap-4 my-2 content-center items-center justify-center place-content-center">
                                <p className="justify-center font-semibold">Email : {localStorage.getItem('dataUserEmail')} </p>
                            </div>

                        </div>
                    </div>
                </center>
            </div>

        )
    }
}