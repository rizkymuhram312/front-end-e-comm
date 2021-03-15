import React, { Component } from 'react'
import Upload from './upload'

export default class Account extends Component {
    render() {
        return (
            <div>
            {/* <div className="mx-12">
                <h1 className="font-bold text-xl">Profil Saya</h1>
                <p>Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</p>
                <hr className="my-4"></hr>
                <div class=" flex-wrap">
                <div class=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
                    <h1 className="justify-self-end">Username : </h1>
                    <h1>{localStorage.getItem('dataUserName')}</h1>
                </div>
                <div class=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
                    <h1 className="justify-self-end">Nama : </h1>
 
                    <input type="text" id="nama" class="col-span-2 flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2" placeholder="Mohon masukkan" value={nama}
                    onChange={onChangeNama}/>
 
                </div>
                <div class=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
                    <h1 className="justify-self-end">Email : </h1>
                    <h1>{localStorage.getItem('dataUserEmail')}</h1>
                </div>
                <div class=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
                    <h1 className="justify-self-end">Nomor Telepon : </h1>
                    <input type="text" id="nama" class="col-span-2 flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2" placeholder="Mohon masukkan" value={phone}
                    onChange={onChangePhone}/>
                    
                </div>
                <div class=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
                    <h1 className="justify-self-end">Nama Toko : </h1>
                    <input type="text" id="nama" class="col-span-2 flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2" placeholder="Mohon masukkan"  value={shopName}
                    onChange={onChangeShopName}/>
                </div>
               
                <div class=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
                    <label
                        for="gender"
                        class=" justify-self-end">
                        Jenis Kelamin :
                    </label>
                    <span className="col-span-2">
                        <input type="radio" id="laki" name="gender" value="L"  onClick={onChangeGender}/>
                        <label className="mr-10" for="male"> Lelaki</label>
                        <input type="radio" id="perempuan" name="gender" value="P" onClick={onChangeGender}/>
                        <label for="female"> Perempuan </label>
                    </span>
                </div>


              
                <div class=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
                    
                    <label for="birthdate" class=" justify-self-end">
                    Tanggal Lahir
                    </label>
                     <input
                    type="date"
                    placeholder="Tanggal lahir"
                    className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                    value={birthdate}
                    onChange={onChangeBirthdate}/>
                    </div>
                </div>
            <div className="flex justify-center items-baseline">
                <Upload  />
                </div>
            </div>
            <div className="flex justify-center items-baseline">
            <button
              className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg"
              values="daftarAccount"
              onClick={daftarAccount}
            >
              Create Account
            </button>
          </div> */}
          </div>
        )
    }
}