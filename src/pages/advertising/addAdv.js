import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import { apiProductTransaction } from '../../config/apiUrl';

export default function AddAdv() {

    const [Product, setProduct]= useState([]);
    useEffect(() => {
       let fetchProduct = async () => {
        await axios({
            url : `${apiProductTransaction}/api/product/1511`,
            method :"get",
            headers:{
                "Content-type":"application/json"
            }
        }).then((res) => setProduct(res.data))
        .catch((err) => console.error(err));
    }
    fetchProduct()
    },[])
    
    return (
        <div>
            <div className="flex flex-wrap rounded-lg shadow py-5 mb-5 border-4" >
                    <div className="w-1/3 bg-primary">
                        <img src="./samsung.jpg" class=" rounded-lg inset-0 w-full h-full object-cover " alt="product"/>
                    </div>
                    <div className="w-2/3 bg-primary">
                        
                    </div>
            </div>
        </div>
    )
}
