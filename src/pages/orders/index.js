import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Orders(){
    const [Orders, setOrders] = useState([]);
    const [Account,setAccount] = useState("");
    const [Phone, setPhone] = useState("");

    useEffect( () => {
      fetchOrders()
    },[]);

    useEffect(()=>{
      if(Orders[0]){
        setAccount(Orders[0].account.acco_nama)
        setPhone(Orders[0].account.acco_phone)
      }
    },[Orders])


    const fetchOrders = async ()=> {
      return await axios({
        url: `http://localhost:3004/api/orders`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setOrders(res.data)
        console.log(res.data)
      })
      .catch((err) => console.error(err));
    }

    return (
      <>
        <div class="container-md mx-auto p-4 rounded-lg shadow py-4 mb-5 border-4">
          <h1 class="text-red-500 text-left font-sans-serif fas fa-map-marker-alt">
            Alamat Pengiriman
          </h1>
          <div class="flex justify-between ...">
            <h1>{Account} ({Phone})</h1>
            <div>Komplek Margaasih, Jalan jati Rukun B3 No.19, Margaasih </div>
            <div>
              <button class=" focus:outline-none bg-white mr-2 text-black py-2 px-4 border-none border-blue-400 rounded-lg">
                Utama
              </button>
              <button class="focus:outline-none bg-white text-blue-500 font-sans-serif py-2 px-4 border-none border-blue-400 rounded-lg">
                Ubah
              </button>
            </div>
          </div>

          <div class="mt-10 py-3 border-t border-gray-300">
            <div class="flex flex-wrap justify-left">
              <div class="w-full lg:w-9/12 px-4">
                <label>
                  <input type="checkbox"></input>
                  <span class="ml-1">Kirim sebagai Dropshipper</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap rounded-lg shadow py-2 mb-5 border-4">
          <div class="md:w-6/12 md:mt-6 px-5 font-bold text-left font-sans-serif">
            Product dipesan
          </div>
          <div className="w-full md:w-5/12">
            <div className="text-sm block my-4 p-3 text-black">
              <div className="flex justify-between text-gray-500">
                <div>Harga Satuan</div>
                <div>Jumlah</div>
                <div>Subtotal Produk</div>
              </div>
            </div>
          </div>

          {Orders.map((x)=>
          <>
          <div class="md:w-6/12 md:mt-6 px-5 font-bold text-left font-sans-serif">
            {x.orders_line_items[0].product.prod_name}
          </div>
          <div className="w-full md:w-5/12">
            <div className="text-sm block my-4 p-3 text-black">
              <div className="flex justify-between text-gray-500">
                <div>{x.orders_line_items[0].product.prod_price}</div>
                <div>{x.order_total_qty}</div>
                <div>{x.order_subtotal}</div>
              </div>
            </div>
          </div>
          </>
          )}
          

          <div class="mt-10 py-8 px-5">
            <div class="flex flex-wrap">
              <span class="px-1 text-gray-800 p-4">Pesan:</span>
              <input type="text"
                placeholder="Tinggalkan pesan ke penjual"
                class="rounded-l p-4 border text-gray-800 border-gray-200 bg-white w-100"
              />

              <div class="flex flex-wrap mx-24 py-4 font-sans-serif">
                <span class="text-blue-400">Opsi Pengiriman:</span>
              </div>
              <div className="text-sm block my-4 py-1 text-black">
                <div className="flex text-gray-500">
                  <div>
                    <span class="font-bold p-14">Regular</span>
                  </div>
                  <button class="focus:outline-none px-36 text-blue-500">Ubah</button>
                  <div class=""> 200000</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap mx-auto rounded-lg shadow py-2 mb-5 border-4">
          <div class="md:w-2/12 md:mt-6 px-5 font-bold text-left font-sans-serif">
            Metode Pembayaran
          </div>
          <div className="w-full p-4">
            <div className="text-sm block my-1 p-2 text-black">
              <div className="flex flex-wrap justify-between text-gray-500">
                <button class="bg-white hover:border-blue-800 hover:text-blue-800 font-bold py-2 px-4 border border-gray-400 rounded shadow-lg">
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
                <button class="border-blue-500 hover:bg-blue-600 text-black font-sans-serif py-2 px-4 ml-4 border rounded-lg w-40">
                  JNE
                </button>
                <button class="border-blue-500 hover:bg-blue-600 text-black font-sans-serif py-2 px-4 ml-4 border rounded-lg w-40">
                  JNT
                </button>
                <button class="border-blue-500 hover:bg-blue-600 text-black font-sans-serif py-2 px-4 ml-4 border rounded-lg w-40">
                  Kantor POS
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
                  Total Pembayarank
                </div>
                <button class="border-blue-500 hover:bg-blue-600 text-black font-sans-serif py-2 px-4 border rounded-lg">
                  Buat Pesanan
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
