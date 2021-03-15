import axios from "axios";
import React, { useEffect, useState } from "react";
import { numberWithCommas } from "../../utils/utils";
import { apiUrl, apiCart, apiUserAccount } from "../../config/apiUrl";

export default function CartOrders() {
  const [CartOrders, setCartOrders] = useState([]);
  const [Address, setAddress] = useState([]);
  const [Account, setAccount] = useState([]);
  const [Phone, setPhone] = useState([]);
  const [Add, setAdd] = useState([]);
  let [SubTotal, setSubtotal] = useState(0);
  // let [Ongkir, setOngkir] = useState(0);
  // let [TotalBayar, setTotalBayar] = useState(0);

  useEffect(() => {
    fetchCartOrders();
    fetchAddress();
  }, []);

  useEffect(() => {
    let st = 0;
    if (CartOrders.cart_line_items) {
      CartOrders.cart_line_items.map((x) => (st += x.clit_subtotal));
      setSubtotal(st);
    }
  }, [CartOrders]);

  useEffect(() => {
    if (Address) {
      setAccount(Address.acco_nama);
      setPhone(Address.acco_phone);
      setAdd(Address.addr_address);
    }
    // console.log(Account, Phone, Address)
  }, [Address]);

  const fetchCartOrders = async () => {
    return await axios({
      url: `${apiCart}/cart/1001/CHECKOUT`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data[0]);
        setCartOrders(res.data[0]);
      })
      .catch((err) => console.error(err));
  };

  const fetchAddress = async () => {
    let result = await axios({
      url: `${apiUserAccount}/address/search/1001`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(result.data[0].acco_nama)
    setAddress(result.data[0]);
  };

  return (
    <>
      <div class="container-md mx-auto p-4 rounded-lg shadow py-4 mb-5 border-4">
        <h1 class="text-red-500 text-left font-sans-serif fas fa-map-marker-alt">
          Alamat Pengiriman
        </h1>
        <div class="flex justify-between ...">
          <h1>
            {Account} ({Phone})
          </h1>
          <div>{Add}</div>
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

        {CartOrders.cart_line_items
          ? CartOrders.cart_line_items.map((x) => (
              <>
                <div class="flex flex-wrap md:w-6/12 md:mt-1 px-5 font-normal md:font-light text-left font-sans-serif">
                  <img
                    class="h-20 w-20 "
                    src={x.product.product_images[0].prim_filename}
                  />
                  <label class="p-5">{x.product.prod_name} </label>
                </div>
                <div className="w-full md:w-5/12">
                  <div className="text-sm block my-4 p-3 text-black">
                    <div className="flex justify-between text-gray-500">
                      <div>Rp.{numberWithCommas(x.product.prod_price)}</div>
                      <div>{x.clit_qty}</div>
                      <div>Rp.{numberWithCommas(x.clit_subtotal)}</div>
                    </div>
                  </div>
                </div>
              </>
            ))
          : null}
      </div>

      <div class="flex flex-wrap mx-auto rounded-lg shadow py-2 mb-5 border-4">
        <div class="md:w-2/12 md:mt-6 px-5 font-bold text-left font-sans-serif">
          Metode Pembayaran
        </div>
        <div className="w-full p-4">
          <div className="text-sm block my-1 p-2 text-black">
            <div className="flex flex-wrap justify-between text-gray-500">
              <button class="bg-blue-500 hover:bg-blue-800 focus:outline-none cursor-pointer text-white transition duration-200 font-sans-serif py-2 px-8 rounded-lg">
                CodePay
              </button>
              <button
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow-lg cursor-not-allowed opacity-50"
                disabled
              >
                Transfer Bank
              </button>
              <button
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow-lg cursor-not-allowed opacity-50"
                disabled
              >
                Kartu Kredit/Debit Online
              </button>
              <button
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow-lg cursor-not-allowed opacity-50"
                disabled
              >
                COD(Bayar di tempat)
              </button>
              <button
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow-lg cursor-not-allowed opacity-50"
                disabled
              >
                Cicilan Kartu Kredit
              </button>
              <button
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow-lg cursor-not-allowed opacity-50"
                disabled
              >
                Alfamart
              </button>
              <button
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow-lg cursor-not-allowed opacity-50"
                disabled
              >
                Indomaret
              </button>
            </div>
          </div>
          <div class="mt-10 py-3 border-t border-gray-300">
            <div class="flex flex-col-2">
              <h1 class="m-2">Ekspedisi</h1>
              {/* <button className="border-current hover:border-yellow-500 hover:text-yellow-500 focus:outline-none  text-black font-sans-serif py-2 px-4 ml-4 border rounded-lg w-40">
                JNE
              </button>
              <button class="border-current hover:border-yellow-500 hover:text-yellow-500 focus:outline-none  text-black font-sans-serif py-2 px-4 ml-4 border rounded-lg w-40">
                JNT
              </button>
              <button class="border-current hover:border-yellow-500 hover:text-yellow-500 focus:outline-none  text-black font-sans-serif py-2 px-4 ml-4 border rounded-lg w-40">
                SICEPAT
              </button> */}

              <select class="text-black font-sans-serif py-2 px-4 ml-4 border border-gray-600 outline-none w-100">
                <option>===Pilih Jasa Kirim===</option>
                <option>JNE</option>
                <option>JNT</option>
                <option>SICEPAT</option>
              </select>
            </div>
            <div class="grid col-4 justify-end">
              <div class="text-center mr-6 px-4 py-2 -my-10">
                Subtotal untuk produk : Rp. {numberWithCommas(SubTotal)}
              </div>
              <div class="text-center mr-6 px-4 py-2 m-2">
                Total Ongkos Kirim : Rp. {numberWithCommas}16000
              </div>
              <div class="text-center mr-6 px-4 py-2 m-2">
                Total Pembayaran : Rp. {numberWithCommas}
              </div>
              <button class=" bg-yellow-300 hover:bg-yellow-500 focus:outline-none cursor-pointer text-gray-500 hover:text-gray-900 transition duration-200 font-sans-serif py-2 px-4 rounded-lg">
                <span class="fas fa-shopping-cart"> Buat Pesanan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
