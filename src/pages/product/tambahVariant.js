import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { apiProductTransaction } from '../../config/apiUrl'
import { toast } from 'react-toastify'


export default function TambahVariant() {
    const [prova_name, setProvaName] = useState('')
    const [prova_option, setProvaOption] = useState('')
    const [prova_prod_id, setProvaProdId] = useState('')
    const [prova, setProva] = useState('')
    const [erorr, setError] = useState('')

    toast.configure()
    const notify = () => {
        // toast('Basic notification', { position: toast.POSITION.TOP_LEFT})
        toast.success('Success notification', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        })
    }

    const notifyErr = () => {
        // toast('Basic notification', { position: toast.POSITION.TOP_LEFT})
        
        toast.error('gagal menambahkan data', {

            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        })
    }
    
    
    const onChangeProvaName = (e) => {
        const value = e.target.value
        setProvaName(value)
        setError('')
    }
    const onChangeProvaOption = (e) => {
        const value = e.target.value
        setProvaOption(value)
        setError('')
    }
    const onChangeProvaProdId = (e) => {
        const value = e.target.value
        setProvaProdId(value)
        setError('')
    }

    const klikDaftar = (x) => {
        x.preventDefault()
        const data = {
            prova_name: prova_name,
            prova_option: prova_option,
            prova_prod_id: Number(prova_prod_id)

        }
        console.log(data)
        axios.post(`${apiProductTransaction}/productvariant`, data)
            .then(result => {
                console.log(result.data)

                if (result.data.error) {
                // alert("gagal menambahkan data!")
                notifyErr()

                }else{
                    console.log(result.data)
                    if (result.data) {
                        setProvaName('')
                        setProvaOption('')
                        setProvaProdId('')
                        
                    }
                    notify()
                }
                console.log(result)
            }
            ).catch((e) => {
                console.log(e)
                setError(e.response.message)
            })
    }
    return (
        <div>
            <div className="flex flex-wrap roundend-lg shadow border-4">
                <form className="w-full flex flex-wrap content-evenly" onSubmit={klikDaftar}>
                    <div className="w-full">
                        <h1 class="flex-auto text-xl font-bold dark:text-gray-50 ml-5" >
                            tambah variant

             </h1>
                    </div>
                    <div className=" w-full ml-5 text-xs mb-10">
                        tambah variant yang tepat pada produkmu
         </div>
                    <div className=" w-4/12 ml-5 text-base">
                        Nama variant
         </div>
                    <div className="w-6/12">
                        <div className="relative">
                            <input type="text" id="prod_name" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2"
                                placeholder="Mohon masukkan nama produk"
                                value={prova_name}
                                onChange={onChangeProvaName}
                            />
                        </div>
                    </div>
                    <div className="w-4/12 ml-5 text-base">
                        Option variant
         </div>
                    <div className="w-6/12">
                        <div className="relative">
                            <input type="text" id="prod_name" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2"
                                placeholder="Mohon masukkan nama produk"
                                value={prova_option}
                                onChange={onChangeProvaOption}
                            />
                        </div>
                    </div>
                    <div className="w-4/12 ml-5 text-base">
                        Produk id
         </div>
                    <div className="w-6/12">
                        <div className="relative">
                            <input type="text" id="prod_name" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2"
                                placeholder="Mohon masukkan nama produk"
                                value={prova_prod_id}
                                onChange={onChangeProvaProdId}
                            />
                        </div>
                    </div>
                    <div className="w-2/4 grid justify-items-end">
                        <button class="bg-primary hover:bg-blue-dark text-white font-bold py-2 px-4 rounded m-auto"
                            values="klikDaftar" onClick={klikDaftar}> Simpan
</button>
                    </div>
                    {/* <div className = "6/12 grid justify-items-end">
                        <button onClick={notify}> notify!</button>
                    </div> */}
                </form>
            </div>
        </div>
    )
}
