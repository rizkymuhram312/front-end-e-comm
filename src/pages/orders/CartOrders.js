import axios from "axios";
import React, { useEffect, useState } from "react";
import NumberFormat from 'react-number-format';


export default function CartOrders(){
    const [CartOrders, setCartOrders] = useState([]);
    // const [Account,setAccount] = useState("");
    // const [Phone, setPhone] = useState("");
    // const [Address, setAddress] = useState("");
    // const [Images, setImages] = useState("");
    // const [Expedition, setExpedition] = useState("");
    let [SubTotal, setSubtotal] = useState("");

    useEffect( () => {
      fetchCartOrders()
      // fetchExpedition()
    },[]);

    useEffect(()=>{
      console.log(CartOrders)
      if(CartOrders){
        setSubtotal(CartOrders.cart_line_items[0].clit_subtotal)
      }
    },[CartOrders]);

    // useEffect(()=>{
    //   if(CartOrders[0]){
    //     setAccount(CartOrders[0].account.acco_nama)
    //     setPhone(CartOrders[0].account.acco_phone)
    //     setAddress(CartOrders[0].account.addresses[0].addr_address)
        
        
    //     setImages(Orders[0].orders_line_items.product.product_images[0].prim_filename)
    //   }
    // },[CartOrders])

    // useEffect(()=>{
    //   if(Expedition){
    //     setExpedition(Expedition.expedition.expe_name)
    //   }
    // },[Expedition])


    const fetchCartOrders = async ()=> {
      return await axios({
        url: `http://192.168.100.33:3003/api/cart/1001/CHECKOUT`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data[0].cart_line_items)
        setCartOrders(res.data[0].cart_line_items)
      })
      .catch((err) => console.error(err));
    }

    // const fetchExpedition = async ()=> {
    //   return await axios({
    //     url: `http://192.168.100.23:3007/api/expeditionroute`,
    //     method: "get",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((res) => {
    //     setOrders(res.data)
    //     console.log(res.data)
    //   })
    //   .catch((err) => console.error(err));
    // }

    return (
      <>
        <div class="container-md mx-auto p-4 rounded-lg shadow py-4 mb-5 border-4">
          <h1 class="text-red-500 text-left font-sans-serif fas fa-map-marker-alt">
            Alamat Pengiriman
          </h1>
          <div class="flex justify-between ...">
            {/* <h1>{Account} ({Phone})</h1>
            <div>{Address}</div> */}
            <div>
              <button class=" focus:outline-none bg-none mr-2 text-black py-2 px-4 border-none border-blue-400 rounded-lg">
                Utama
              </button>
              <button class="focus:outline-none bg-none text-blue-500 font-sans-serif py-2 px-4 border-none border-blue-400 rounded-lg">
                Ubah
              </button>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap rounded-lg shadow py-2 mb-5 border-4">
          <div class="md:w-6/12 md:mt-6 px-5 text-gray-600 text-left font-sans-serif">
            Product dipesan
          </div>
          <div className="w-full md:w-5/12">
            <div className="text-sm block my-4 p-3 text-black">
              <div className="flex justify-between text-gray-300">
                <div>Harga Satuan</div>
                <div>Jumlah</div>
                <div>Subtotal Produk</div>
              </div>
            </div>
          </div>

          { CartOrders.cart_line_items?(

            CartOrders.map((x)=>
            <>
            <div class="flex flex-wrap md:w-6/12 md:mt-1 px-5 font-normal md:font-light text-left font-sans-serif">
             <img class="h-20 w-20 "src={x.cart_line_items[0].product.product_images[0].prim_filename}/><label class="p-5">{x.cart_line_items[0].product.prod_name} </label>
            </div>
            <div className="w-full md:w-5/12">
              <div className="text-sm block my-4 p-3 text-black">
                <div className="flex justify-between text-gray-500">
                  <div><NumberFormat thousandSeparator={true} prefix={'Rp.'} value={x.cart_line_items[0].product.prod_price}/></div>
                  <div>{x.cart_line_items[0].clit_qty}</div>
                  <div><NumberFormat className=" text-right" thousandSeparator={true} prefix={'Rp.'} value={SubTotal}/></div>
                </div>
              </div>
            </div>
            </>
            )
          ):null
          }
        </div>

        <div class="flex flex-wrap mx-auto rounded-lg shadow py-2 mb-5 border-4">
          <div class="md:w-2/12 md:mt-6 px-5 font-bold text-left font-sans-serif">
            Metode Pembayaran
          </div>
          <div className="w-full p-4">
            <div className="text-sm block my-1 p-2 text-black">
              <div className="flex flex-wrap justify-between text-gray-500">
                <button class="bg-white hover:border-blue-800 hover:text-blue-800 py-2 px-4 border border-gray-400 rounded shadow-lg">
                  CodePay
                </button>
                <button
                  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-lg cursor-not-allowed opacity-50"
                  disabled
                >
                  Transfer Bank
                </button>
                <button
                  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-lg cursor-not-allowed opacity-50"
                  disabled
                >
                  Kartu Kredit/Debit Online
                </button>
                <button
                  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-lg cursor-not-allowed opacity-50"
                  disabled
                >
                  COD(Bayar di tempat)
                </button>
                <button
                  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-lg cursor-not-allowed opacity-50"
                  disabled
                >
                  Cicilan Kartu Kredit
                </button>
                <button
                  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-lg cursor-not-allowed opacity-50"
                  disabled
                >
                  Alfamart
                </button>
                <button
                  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-lg cursor-not-allowed opacity-50"
                  disabled
                >
                  Indomaret
                </button>
              </div>
            </div>
            <div class="mt-10 py-3 border-t border-gray-300">
              <div class="flex flex-col-2">

                
                <h1 class="m-2">Ekspedisi</h1>
                <button className="border-current hover:border-yellow-500 hover:text-yellow-500 hover:outline-none text-black font-sans-serif py-2 px-4 ml-4 border rounded-lg w-40">
                  JNE
                </button>
                <button class="border-current hover:border-yellow-500 hover:text-yellow-500 text-black font-sans-serif py-2 px-4 ml-4 border rounded-lg w-40">
                  JNT
                </button>
                <button class="border-current hover:border-yellow-500 hover:text-yellow-500 text-black font-sans-serif py-2 px-4 ml-4 border rounded-lg w-40">
                  SICEPAT
                </button>
              </div>
              <div class="grid col-4 justify-end">
                <div class="text-center mr-6 px-4 py-2 -my-10">
                  Subtotal untuk produk
                </div>
                <div class="text-center mr-6 px-4 py-2 m-2">
                  Total Ongkos Kirim
                </div>
                <div class="text-center mr-6 px-4 py-2 m-2">
                  Total Pembayaran
                </div>
                <button class="border-current bg-yellow-400 text-white font-sans-serif py-2 px-4 border rounded-lg">
                  Buat Pesanan
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
