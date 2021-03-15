import axios from "axios";
import React, { useEffect, useState } from "react";
import {numberWithCommas} from '../../utils/utils'



export default function Orders() {
  const [Orders, setOrders] = useState([]);
  const [Account, setAccount] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  // const [Images, setImages] = useState("");
  // const [Expedition, setExpedition] = useState("");

  useEffect(() => {
    fetchOrders();
    // fetchExpedition()
  }, []);

  useEffect(() => {
    if (Orders[0]) {
      setAccount(Orders[0].account.acco_nama);
      setPhone(Orders[0].account.acco_phone);
      setAddress(Orders[0].account.addresses[0].addr_address);

      // setImages(Orders[0].orders_line_items.product.product_images[0].prim_filename)
    }
  }, [Orders]);

  // useEffect(()=>{
  //   if(Expedition){
  //     setExpedition(Expedition.expedition.expe_name)
  //   }
  // },[Expedition])

  const fetchOrders = async () => {
    return await axios({
      url: `http://localhost:3004/api/orders`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setOrders(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

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
        <h1 class=" font-bold text-left font-sans-serif ">
          <span class=" text-gray-400 fas fa-truck-moving" /> Informasi
          Pengiriman
        </h1>

        <div>{Phone}</div>

        <h1 class="font-bold text-left font-sans-serif">
          <span class=" text-gray-400 fas fa-map-marker-alt" /> Alamat
          Pengiriman
        </h1>
        <div class="flex justify-between">
          <div>{Account}</div>
          <div>({Phone})</div>
          <div>{Address}</div>
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

        {Orders.map((x) => (
          <>
            <div class="flex flex-wrap md:w-6/12 md:mt-1 px-5 font-normal md:font-light text-left font-sans-serif">
              <img
                class="h-20 w-20 "
                src={
                  x.orders_line_items[0].product.product_images[0].prim_filename
                }
              />
              <label class="p-5">
                {x.orders_line_items[0].product.prod_name}{" "}
              </label>
            </div>
            <div className="w-full md:w-5/12">
              <div className="text-sm my-4 p-3 text-black">
                <div className="flex justify-between text-black">
                  <div>{x.orders_line_items[0].product.prod_price}</div>
                  <div>{x.order_total_qty}</div>
                  <div>{x.order_subtotal}</div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
