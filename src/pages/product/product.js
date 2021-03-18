import React, { Component } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { apiProductTransaction } from '../../config/apiUrl';

export default function Product() {
    const { prod_id } = useParams();

    const [count, setCount] = useState(0)
    const [Size, setSize] = useState([])
    const [Color, setColor] = useState([])
    const [Product, setProduct] = useState({});
    console.log(Color)
    
    useEffect(() => {
        console.log(prod_id)
        let fetchProduct = async () => {
            await axios({
                url: `${apiProductTransaction}/product/${prod_id}`,
                method: "get",
                headers: {
                    "Content-type": "application/json"
                }
            }).then((res) => {
                console.log(res)
                setProduct(res.data)
            })
                .catch((err) => console.error(err));
        }
        console.log(Product)
        fetchProduct()
    }, [])

    // useEffect(() => {
    //     if (Product.product_variants) {
    //         let variant = Product.product_variants[0].prova_option
    //         setSize(variant.split(","));
    //         let color = Product.product_variants[1].prova_option
    //         setColor(color.split(","))

    //     }
    // }, [Product])

    return (
        <>
            <div className="flex flex-wrap rounded-lg shadow py-5 mb-5 border-4" >
                <div className="w-1/3 bg-primary">
                    <img src="./samsung.jpg" class=" rounded-lg inset-0 w-full h-full object-cover" />
                </div>
                <div className="w-2/3 flex flex-wrap content-evenly ">
                    <div className="w-full mb-10">
                        <h1 class="flex-auto text-3xl font-semibold dark:text-gray-50">
                            {Product.prod_name}
                        </h1>
                        <div class="w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 mt-2">
                            Stok : {Product.prod_stock}
                        </div>
                    </div>
                    <div className="w-4/12 mb-5">Harga</div>
                    <div className="w-6/12 mb-5 text-red-600">Rp.
    {Product.prod_price}
                    </div>
                    <div className="w-4/12">Warna</div>
                    <div className="w-6/12">
                        {
                        Color.map((x) =>
                            <button class="bg-white hover:bg-grey-700 mb-5 mr-2 text-black px-3 border border-black-400 rounded ">
                                {x}
                            </button>
                        )
                        }

                    </div>
                    <div className="w-4/12">Ukuran</div>

                    <div class="space-x-10 flex">
                        {
                            Size.map((x) =>
                                <label class="text-center text-sm mb-5 mr-2">
                                    <input type="radio" class=" w-4 h-4 flex items-center justify-center bg-gray-100 dark:bg-gray-600 rounded-lg" name="size" value="xs" />
                                    {x}
                                </label>

                            )
                        }
                    </div>

                    <div className="w-full flex">
                        <div className="w-4/12 mb-10">Kuantitas</div>

                        <div class="flex flex-row h-10 w-2/12 rounded-lg relative bg-transparent mt-1">
                            <button onClick={() => setCount(count - 1)} data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                <span class="m-auto text-2xl font-thin">−</span>
                            </button>
                            <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={count}></input>
                            <button onClick={() => setCount(count + 1)}
                                data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                <span class="m-auto text-2xl font-thin">+</span>
                            </button>

                        </div>

                    </div>
                    <div className="w-4/12">
                        <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparant border-2 border-black text-black-500 dark:text-white hover:bg-black-500 hover:text-black text-md">
                            MASUKKAN KERANJANG
    </a>
                    </div>
                    <div class="w-6/12">
                        <a href="#" class="uppercase py-2 px-4 rounded-lg bg-black border-2 border-black text-white text-md mr-4 hover:bg-transparant 400">
                            BELI SEKARANG
    </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap rounded-lg shadow py-5 mb-5 border-4" >
                <div className="w-1/3 ">
                    <img src="./samsung logo.png" class=" ml-5 rounded-lg inset-0 w-full h-full object-cover " />
                </div>
                <div className="w-2/3 flex flex-wrap content-evenly">
                    <div className="w-3/4">
                        <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">
                            Samsung Store
    </h1>
                    </div>
                    <div className="w-4/12 mb-5">Jakarta</div>
                </div>

            </div>
            <div className="flex flex-wrap rounded-lg shadow py-5 mb-5 border-4" >
                <div className="w-full ml-10 mr-10 mb-5 shadow-none"> Deskripsi Product </div>
                <div class="w-full ml-10 mr-10 text-gray-700 text-justify">
                    {Product.prod_desc}

                </div>
            </div>
        </>




    )


}


