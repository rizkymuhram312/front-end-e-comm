import React, { Component } from 'react'
import axios from 'axios'
import {useEffect, useState, useForm} from 'react'

export default function Product () {

    const [Product, setProduct] =useState([]);
    
    useEffect(() => {
      let fetchProduct = async () => {
       await axios({
           url : 'http://localhost:3002/api/product/1511',
           method :"get",
           headers:{
               "Content-type":"application/json"
           }
       }).then((res) => setProduct(res.data))
       .catch((err) => console.error(err));
   }
   fetchProduct()
   },[])
   useEffect(() => {
    // if(Product.product_variants){
    //     // let variant = Product.product_variants[0].prova_option
    //     // setSize(variant.split(","))
    //     // let color = Product.product_variants[1].prova_option
    //     // setColor(color.split(","))
        
    //     // console.log(variantArray)
    // }
  }, [Product])
  
  
     {
        return (
            <div>
                <div className="flex flex-wrap rounded-lg shadow border-4">
                
                    <form className="w-full flex flex-wrap content-evenly">
                        <div className="w-full">
                            <h1 class="flex-auto text-xl font-bold dark:text-gray-50 ml-5">
                                Tambah Produk Baru
                            </h1>
                        </div>
                        <div className="w-full ml-5 text-xs mb-10">
                            Pilih kategori yang tepat untuk produkmu
                </div>
                        <div className="w-4/12 ml-5 text-base">
                            Nama Produk
                </div>
                        <div className="w-6/12 ">
                            <div class=" relative ">
                                <input type="text" id="simple-email" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2" placeholder="Mohon masukkan" />
                            </div>
                        </div>
                        <div className="w-4/12 ml-5 text-base">
                            Deskripsi Produk
                </div>
                        <div className="w-6/12">

                            <label class="text-gray-700" for="name">
                                <textarea class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent" id="comment" placeholder="Mohon masukkan" name="comment" rows="5" cols="40">
                                </textarea>
                            </label>

                        </div>
                        <div className="w-4/12 ml-5 text base">
                            Jenis
                </div>
                        <div className="w-6/12">
                            <div class=" relative ">
                                <input type="text" id="simple-email" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2" placeholder="Mohon masukkan" />
                            </div>
                        </div>
                        <div className="w-4/12 ml-5 text base">
                            Kategori
                </div>
                <div className="w-6/12">
                            <div class=" relative ">
                                <input type="text" id="simple-email" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2" placeholder="Mohon masukkan" />
                            </div>
                        </div>
                        <div className="w-4/12 ml-5 text base">
                            Brand
                </div>
                <div className="w-6/12">
                            <div class=" relative ">
                                <input type="text" id="simple-email" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2" placeholder="Mohon masukkan" />
                            </div>
                        </div>
                        <div className="w-4/12 ml-5 text base">
                            Kondisi
                </div>
                <div className="w-6/12">
                            <div class=" relative ">
                                <input type="text" id="simple-email" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2" placeholder="Mohon masukkan" />
                            </div>
                        </div>
                        <div className="w-4/12 ml-5 text base">
                            Berat
                </div>
                <div className="w-6/12">
                            <div class=" relative ">
                                <input type="text" id="simple-email" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2" placeholder="Mohon masukkan" />
                            </div>
                        </div>
                        <div className="w-4/12 ml-5 text base">
                            Ukuran
                </div>
                <div className="w-6/12">
                            <div class=" relative ">
                                <input type="text" id="simple-email" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2" placeholder="Mohon masukkan" />
                            </div>
                        </div>
                        <div className="w-4/12 ml-5 text base">
                            Warna
                </div>
                <div className="w-6/12">
                            <div class=" relative ">
                                <input type="text" id="simple-email" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2" placeholder="Mohon masukkan" />
                            </div>
                        </div>
                        <div className="w-full ml-5 mb-2 text-xl font-semibold">
                            Informasi Penjualan
                </div>
                        <div className="w-4/12 ml-5 text base">
                            Harga
                </div>
                        <div className="w-6/12">

                            <div class="mt-1 relative rounded-md shadow-sm">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span class="text-gray-500 sm:text-sm ">
                                        Rp.
            </span>
                                </div>
                                <input type="text" name="price" id="price" class=" mb-2 focus:ring-indigo-500 border-l border-b border-t border-gray-300 py-2 px-4 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm rounded-md" placeholder="0.00" />
                                <div class="absolute inset-y-0 right-0 flex items-center">
                                    <label for="currency" class="sr-only">
                                        Currency
                </label>
                                </div>
                            </div>
                        </div>
                        <div className="w-4/12 ml-5 text base">
                            Stok
                </div>
                        <div className="w-6/12">
                            <div class=" relative ">
                                <input type="text" id="simple-email" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2" placeholder="Mohon masukkan" />
                            </div>
                        </div>
                        <div className="w-full ml-5 mb-2 text-xl font-semibold">
                            Informasi Media
                </div>
                        <div className="w-4/12 ml-5 text base">
                            Foto Produk
                </div>
                        <div className="w-6/12 grid grid-rows-2 grid-flow-col gap-4">
                            <label class=" mb-5 flex flex-col items-center px-1 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
                                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span class="mt-2 text-xs leading-normal">Select a images</span>
                                <input type='file' class="hidden" />
                            </label>
                            <label class=" mb-5 flex flex-col items-center px-1 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
                                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span class="mt-2 text-xs leading-normal">Select a images</span>
                                <input type='file' class="hidden" />
                            </label>
                            <label class=" mb-5 flex flex-col items-center px-1 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
                                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span class="mt-2 text-xs leading-normal">Select a images</span>
                                <input type='file' class="hidden" />
                            </label>
                            <label class=" mb-5 flex flex-col items-center px-1 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
                                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span class="mt-2 text-xs leading-normal">Select a images</span>
                                <input type='file' class="hidden" />
                            </label>
                            <label class=" mb-5 flex flex-col items-center px-1 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
                                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span class="mt-2 text-xs leading-normal">Select a images</span>
                                <input type='file' class="hidden" />
                            </label>
                        </div>
                        <div className="w-full grid justify-items-end">
                            <button class="bg-primary hover:bg-blue-dark text-white font-bold py-2 px-4 rounded m-auto">
                                Save
</button>
                        </div>
                    
                        </form>
                </div>
                
            </div>
        )
    }
}