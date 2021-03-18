import React, { Component } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import EditProduct from './editProduct'
import { apiProductMaster, apiProductTransaction } from '../../config/apiUrl'

export default function ProductVariant() {
  const history = useHistory()
  const [Product, setProduct] = useState([]);
  const [Category, setCategory] = useState([]);
  const [search, setSearch] = useState('')
  const [showEdit, setShowEdit] = useState(false)
  const [showTambah, setShowTambah] = useState(false)
  const [filterProduct, setFilterProduct] = useState([])
  const [prodToEdit, setProdToEdit] = useState()
  const acco_id = localStorage.getItem("acco_id")
  const [ProductVariant, setProductVariant] = useState([])
//   const onClickAddProduct = () => {
//     history.push('/tambahProduct')
//   }
//   const onClickEditProduct = (e) => {
//     console.log(e)
//     setProdToEdit(e.target.value)
//     setShowEdit(true)
//     // history.push('/editProduct')
//     localStorage.setItem("id", e.target.value)
//   }

//   const deleteProduct = async (y) => {

//     const response = await axios.delete(`${apiProductTransaction}/product/${y}`)
//     return response.data
//   }

  useEffect(() => {
    axios({
      url: `http://localhost:3002/api/account/${acco_id}`,
      method: "get",
      headers: {
        "Content-type": "application/json"
      }
    }).then((res) => setProductVariant(res.data.ProductVariant))
      .catch((err) => console.error(err));
      console.log(ProductVariant)
  }, [showEdit])


//    useEffect(() => {
//     axios({
//       url: `${apiProductTransaction}/productvariant`,
//       method: "get",
//       headers: {
//         "Content-type": "application/json"
//       }
//     }).then((res) => setProductVariant(res.data.ProductVariant))
//       .catch((err) => console.error(err));
//     console.log(ProductVariant)
//   }, [])


//   useEffect(() => {
//     axios({
//       url: `${apiProductMaster}/category`,
//       method: "get",
//       headers: {
//         "Content-type": "application/json"
//       }
//     }).then((res) => setCategory(res.data))
//       .catch((err) => console.error(err));
//     console.log(Category)
//   }, [])
  //  useEffect(() => {
  //       Product.map((x)=> {
  //         if(x.category.cate_name.includes(Category))
  //         setCategory(Category=>[...Category,x.category.cate_name])
  //       })
  //       console.log(Category)
  // }, [Product])

  // useEffect(() => {
  //   setFilterProduct(
  //     Product.filter((product) =>
  //       prod_name.name.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  // }, [search, Product]);

  {
    return (
      <div>
        { !showEdit ? ( //jika showEdit false, maka tampilkan product, jika true maka tampilkan edit form
          <div className="flex flex-wrap rounded-lg shadow py-5 mb-5 border-4">
            <div className="w-full flex flex-wrap content-evenly">
              <div className="w-2/12 md:mt-10 px-1 ml-10">
                Nama Product
                </div>
              <div className="w-3/12 md:mt-10 px-1 mr-5">
                <div class="relative">
                  <div class="absolute top-4 left-3"> <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
                  <input type="search" class="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                    placeholder="Search anything..."
                    onChange={(event) => {
                      setSearch(event.target.value)
                    }}
                  >
                  </input>
                </div>
              </div>
              <div className="w-2/12 md:mt-10 px-1 text-center">
                Kategori
                </div>
              <div className="w-3/12 md:mt-10 px-1">
                <select class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                  <option value="">
                    Select an kategori
                </option>
                  {/* {Category.map((x) => (
                    <option value={x.cate_id}>{x.cate_name}

                    </option>))} */}

                </select>

              </div>
              <div className="w-full mt-10 flex justify-end">
                {/* <button onClick={onClickAddProduct} class="bg-primary hover:bg-blue-dark text-white font-bold py-2 px-4 rounded m-auto">
                  Tambah Produk Baru
          </button> */}
              </div>

              <table class="border-collapse w-full mr-10 ml-10 mt-5">
                <thead>
                  <tr>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Prova Id</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Prova Name</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Prova Option</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
                    {/* <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Stok</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Berat</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th> */}
                    {/* <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th> */}
                  </tr>
                </thead>
                <tbody>
                  {/* {ProductVariant
                    .map((x) => {
                      return (
                        <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                          <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Produk Id</span>

                            {x.prova_id}
                          </td>
                          <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Nama Produk</span>
                            {x.prova_name}
                          </td>
                          <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Deskripsi</span>
                            {x.prova_option}
                          </td>
                          
                          
                         
                          <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                            <button class="text-blue-400 hover:text-blue-600 underline">Edit</button>
                            <a href="" class="text-blue-400 hover:text-blue-600 underline pl-6" 
                              
                            
                        
                            >Hapus</a>
                          </td>
                        </tr>)
                    })} */}
                </tbody>
              </table>
            </div>
          </div>
        ) : //showEdit true, menampilkan form edit, tampilan product tidak dtiampilkan
          <EditProduct
            setShowEdit={setShowEdit}


          />
        }
      </div>
    )
  }
}