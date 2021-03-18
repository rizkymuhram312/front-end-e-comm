import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

export default function Profil2({ fixed }) {

    const [isAccount, setisAccount] = useState(false)


    const [value, setValue] = useState();
    const refresh = () => {
        // re-renders the component
        setValue({});
    }



    useEffect(() => {
        // console.log(isAccount)
        if (localStorage.dataAccountId == null || localStorage.dataAccountId == undefined) {
            setisAccount(false);
            setValue({});

        }
        else {

            setisAccount(true);
            setValue({});
        }
        setValue({});
    }, [localStorage.dataAccountId])


    const fotoprofil = localStorage.getItem('profilImage')


    return (


        <div>

            

                <center>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-6/12 sm:w-4/12 px-4">

                            <img src={fotoprofil === "null" || fotoprofil === null  ? "defaultpic.png" : fotoprofil} alt="..." className="shadow rounded-full max-w-full h-40 align-middle border-none" />

                            <div className=" grid grid-cols-1 gap-4 my-2 mt-12 content-center items-center justify-center place-content-center">
                                <p className="justify-center font-semibold">Username : {localStorage.getItem('dataUserName')} </p>
                            </div>
                            <div className=" grid grid-cols-1 gap-4 my-2 content-center items-center justify-center place-content-center">
                                <p className="justify-center font-semibold">Email : {localStorage.getItem('dataUserEmail')} </p>
                            </div>
                            <br></br>
                <hr className="border-solid"></hr>
                <hr className="border-solid"></hr>
                <hr className="border-solid"></hr>
                <hr className="border-solid"></hr>
                        </div>
                    </div>
                </center>

                {isAccount ? (
                <center>
                    <div>
                        <div className="mt-6">
                            <div className=" grid grid-cols-1 gap-4 my-2 content-center items-center justify-center place-content-center">
                                <p className="justify-center font-semibold">Account Id : {localStorage.getItem('dataAccountId')} </p>
                            </div>
                            <div className=" grid grid-cols-1 gap-4 my-2 content-center items-center justify-center place-content-center">
                                <p className="justify-center font-semibold">Shop Name : {localStorage.getItem('dataAccountShopName')} </p>
                            </div><div className=" grid grid-cols-1 gap-4 my-2 content-center items-center justify-center place-content-center">
                                <p className="justify-center font-semibold">Birthdate : {localStorage.getItem('dataAccountBirthdate')} </p>
                            </div><div className=" grid grid-cols-1 gap-4 my-2 content-center items-center justify-center place-content-center">
                                <p className="justify-center font-semibold">Phone Number : {localStorage.getItem('dataAccountPhone')} </p>
                            </div>
                            <div>
                                
                            </div>

                        </div>
                    </div>
                </center>

            ) : (
                    <div className="capitalize text-center text-3xl font-bold mt-6">
                        anda belum memiliki account <br></br>
                        silakan membuat account terlebih dahulu pada tab 'Akun Saya'

                    </div>
                )}
        </div>

    );
}
