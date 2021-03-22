import React, { Component } from 'react'
import axios from 'axios'
import Images from './images'
import { useEffect, useState } from 'react'
import convertToRupiah from './convertToRupiah'
import {apiCart, apiProductTransaction, apiUserAccount, apiUserMaster} from "../../config/apiUrl"
import { useHistory } from 'react-router'
import {toast} from 'react-toastify'

export default function Product() {

    const [selectedImg, setSelectetImg] = useState([]);
    const [count, setCount] = useState(0)
    const [Size, setSize] = useState([])
    const [Color, setColor] = useState([])
    const [Product, setProduct] = useState([]);
    const [Account, setAccount] = useState([])
    const [CartWeight, setCartWeight] = useState('')
    const [CartTotal, setCartTotal] = useState('')
    const [CartProdId, setCartProdId] = useState('')
    // const [CartQuantity, setCartQuantity] = useState('')
    const acco_id = localStorage.getItem("dataAccountId")
    const [CartId, setCartId] = useState()
    const [Error, setError] = useState('')
    const history = useHistory()
    const prod_id = localStorage.getItem("productDetail")
    const primId = localStorage.getItem("productImages")
    const shopName = localStorage.getItem("dataAccountShopName")

    toast.configure()
    const notify = () => {

        toast.success('Data berhasil ditambahkan', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        })
    }

    useEffect(() => {
        async function fetchCart(){
            return await axios({
                url:`${apiCart}/cart/${acco_id}`,
                method:'GET'
            }).then((result) => setCartId(result.data[0].cart_id) )
            .catch((err) => console.log(err));
        }
        fetchCart()
    }, [])

    useEffect(() => {
        async function fetchImg(){
            return await axios({
                url:`${apiProductTransaction}/productImages/${primId}`,
                method:'GET'
            }).then((result) => setSelectetImg(result.data.prim_path) )
            .catch((err) => console.log(err));
        }
        fetchImg()
    }, [])

    const klikCart = (x) => {
        x.preventDefault()
        const data = {
            clit_subweight: count * Number(Product.prod_weight),
            clit_subtotal: count * Number(Product.prod_price),
            clit_prod_id: 1511,
            clit_qty: count,
            clit_stat_name:'PENDING'
            

        }
        if(CartId!==undefined){
            console.log(data)
            axios.post(`${apiCart}/cartLineItems/${acco_id}/${CartId}/${prod_id}`, data)
                .then(result => {
                    if (result.data.error) {
                        console.log(result.data)
                        
                    } else {
                        if (result.data) {
                            
                            // setCartQuantity('')
                            setCartTotal('')
                            setCartWeight('')
                            setCartProdId('')
    
    
    
                        } 
                    }history.push('/cart')
                })
                .catch((e) => {
                    setError(e.response.message)
                })
        }
        else {

            console.log(data)
            axios.post(`${apiCart}/cartLineItems/${acco_id}`, data)
                .then(result => {
                    if (result.data.error) {
                        console.log(result.data)
                        
                    } else {
                        if (result.data) {
                            
                            // setCartQuantity('')
                            setCartTotal('')
                            setCartWeight('')
                            setCartProdId('')
    
    
    
                        } 
                    }history.push('/cart')
                })
                .catch((e) => {
                    setError(e.response.message)
                })
        }
        }

        const klikkeranjang = (x) => {
            x.preventDefault()
            const data = {
                clit_subweight: count * Number(Product.prod_weight),
                clit_subtotal: count * Number(Product.prod_price),
                clit_prod_id: 1511,
                clit_qty: count,
                clit_stat_name:'PENDING'
                
    
            }
            if(CartId!==undefined){
                console.log(data)
                axios.post(`${apiCart}/cartLineItems/${acco_id}/${CartId}/${prod_id}`, data)
                    .then(result => {
                        if (result.data.error) {
                            console.log(result.data)
                            
                        } else {
                            if (result.data) {
                                
                                // setCartQuantity('')
                                setCartTotal('')
                                setCartWeight('')
                                setCartProdId('')
        
        
        
                            } 
                        }notify()
                    })
                    .catch((e) => {
                        setError(e.response.message)
                    })
            }
            else {
    
                console.log(data)
                axios.post(`${apiCart}/cartLineItems/${acco_id}`, data)
                    .then(result => {
                        if (result.data.error) {
                            console.log(result.data)
                            
                        } else {
                            if (result.data) {
                                
                                // setCartQuantity('')
                                setCartTotal('')
                                setCartWeight('')
                                setCartProdId('')
        
        
        
                            } 
                        }notify()
                    })
                    .catch((e) => {
                        setError(e.response.message)
                    })
            }
            }

    useEffect(() => {
        let fetchProduct = async () => {
            await axios({
                url: `${apiProductTransaction}/product/${prod_id}`,
                method: "get",
                headers: {
                    "Content-type": "application/json"
                }
            }).then((res) => setProduct(res.data))
                .catch((err) => console.error(err));
        }
        fetchProduct()
    }, [])

    useEffect(() => {
        console.log(Product)
        if (Product.product_variants && Product.product_variants.length > 0) {
            Product.product_variants.map((x)=>{
                switch (x.prova_name) {
                    case "SIZE":
                        let variant = x.prova_option
                        setSize(variant.split(","))
                        break;
                    case "WARNA":
                        let color = x.prova_option
                        setColor(color.split(","))

                    default:
                        break;
                }
            })

            if(Product.product_variants.length > 1){

            }
            // console.log(variantArray)
        }
    }, [Product])

    useEffect(() => {
        axios({
            url: `${apiUserAccount}/api/account/1001`,
            method: "get",
            headers: {
                "Content-type": "application/json"
            }
        }).then((res) => setAccount(res.data))
            .catch((err) => console.error(err));
        console.log(Account)
    }, [])

    {
        return (
            <div>
                <div className="flex flex-wrap rounded-lg shadow py-5 mb-5 border-4 border-pink-500" >
                    <div className="w-1/2 sm:w-1/3 product">
                        <img src={selectedImg} alt="Selected"
                            className="selected"
                        />
                        <div className=" imgContainer">
                            {/* {Images.map((img, index) => (
                                <img className="product-image"
                                    style={{ border: selectedImg === img ? " 4px solid grey " : "" }}

                                    key={index}
                                    src={img}
                                    alt="kerudung"
                                    onClick={() => setSelectetImg(img)}
                                />

                            ))} */}

                        </div>

                    </div>
                    <div className="w-1/2 sm:w-2/3 flex flex-wrap content-evenly">
                        <div className="w-full mb-10">
                            <h1 class="flex-auto text-3xl font-semibold dark:text-black-50">
                                {Product.prod_name}
                            </h1>
                            <div class="w-full flex item-center text-sm font-medium text-gray-500 dark:text-gray-300 mt-2">
                                5.0
                            <svg class="w-5 h-5 fill-current text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                                    </path>
                                </svg>
                                <svg class="w-5 h-5 fill-current text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                                    </path>
                                </svg>
                                <svg class="w-5 h-5 fill-current text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                                    </path>
                                </svg>
                                <svg class="w-5 h-5 fill-current text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                                    </path>
                                </svg>
                                <svg class="w-5 h-5 fill-current text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        {/* <div className="w-4/12 mb-5">Harga</div> */}
                        <div className="w-full mb-5 text-4xl text-pink-500"values= "Color">{convertToRupiah(Product.prod_price)}</div>
                        <div className="w-4/12">Warna</div>
                        <div className="w-6/12">
                            {Color.map((x) =>
                                <button class="bg-white hover:bg-pink-700 mb-5 mr-2 text-black px-3 border border-pink-500 rounded active:bg-pink-500"
                                >
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
                                        <input type="radio" class=" w-4 h-4 flex items-center justify-center bg-pink-500 dark:bg-gray-600 rounded-lg" name="size" value="xs" />
                                        {x}
                                    </label>

                                )
                            }
                        </div>

                        <div className="w-full flex">
                            <div className="w-4/12 mb-10">Kuantitas</div>

                            <div class="flex flex-row h-10 w-2/12 rounded-lg relative bg-transparent mt-1">
                                <button onClick={() => count > 1 ? setCount(count - 1) : setCount(0)} data-action="increment" class="bg-pink-500 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span class="m-auto text-2xl font-thin text-white">−</span>
                                </button>
                                <input class="outline-none focus:outline-none text-center w-full bg-white-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={count}></input>
                                <button onClick={() => setCount(count + 1)}
                                    data-action="increment" class="bg-pink-500 text-gray-600 hover:text-gray-700 hover:bg-black-400 h-full w-20 rounded-r cursor-pointer">
                                    <span class="m-auto text-2xl font-thin text-white">+</span>
                                </button>

                            </div>
                            <div className="w-5/12 ml-5 mt-2 flex-none text-sm font-medium text-gray-500 dark:text-gray-300">
                                tersisa {Product.prod_stock} buah
                        </div>

                        </div>
                        <div className="w-full flex">
                            <div className="w-4/12">
                                <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparant border-2 border-pink-500 text-black-500 dark:text-white hover:bg-black-500 hover:text-black text-md"
                                values="klikKeranjang" onClick={klikkeranjang}
                                >
                                    MASUKKAN KERANJANG
                        </a>
                            </div>
                            <div class="w-6/12">
                                <a href="#" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-pink-500 text-white text-md mr-4 hover:bg-transparant 400" 
                                values="klikCart" onClick={klikCart}>
                                    BELI SEKARANG
                        </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full flex flex-wrap rounded-lg shadow py-5 mb-5 border-4" > */}
                    {/* <div className="w-1/3 ">
                        <img src="./samsung logo.png" class=" ml-5 rounded-lg inset-0 w-full h-full object-cover " />
                    </div> */}
                    {/* <div className="w-2/3 flex flex-wrap content-evenly">
                        <div className="w-3/4">
                            <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">
                                {shopName}
                        </h1>
                        </div>
                        <div className="w-4/12 mb-5">Jakarta</div>
                    </div> */}

                {/* </div> */}
                <div className="flex flex-wrap rounded-lg shadow py-5 mb-5 border-4 border-pink-500" >
                    <div className="w-full ml-10 mr-10 mb-5 shadow-none"> Deskripsi Product </div>
                    <div class="w-full ml-10 mr-10 text-gray-700 text-justify">
                        {Product.prod_desc}

                    </div>
                </div>
            </div>
        )
    }
}