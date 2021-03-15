/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function index() {
  const [MyOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetchMyOrders();
  }, []);

  async function fetchMyOrders() {
    return await axios({
      url: `http://localhost:3003/api/cartLineitems`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => setMyOrders(res.data))
      .catch((err) => console.error(err));
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="md:w-3/12 md:mt-10 px-1 text-center font-bold text-xl pr-10">
          My Cart
        </div>
        <div className="md:w-3/12 md:mt-10 px-1 text-center font-bold text-xl pr-10">
          My Order
        </div>
        <div className="w-full md:w-9/12 px-1 ">
          <div className="text-sm block my-4 p-3 text-white rounded border border-solid border-gray-200 bg-primary">
            <div className="flex justify-between items-center font-bold">
              <div>Cart Id</div>
              <div>Created On</div>
              <div>Total Weight(kg)</div>
              <div>Total Amount(Rp.)</div>
              <div>Total Quantity</div>
            </div>
          </div>

          {MyOrders.map((x) => (
            <div className="text-sm block my-4 p-3 text-white rounded border border-solid border-gray-200 bg-primary">
              <hr />
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-20 w-20 m-2 rounded border border-solid border-white">
                    <img src="/logo192.png" alt="product" />
                  </div>
                  <div>Order Name</div>
                </div>
                <div>Created On</div>
              <div>Subtotal</div>
              <div>Weight</div>
              <div>Discount</div>
              <div>Status</div>
              <div>Aksi</div>
              </div>
              <hr />
            </div>
          ))}

          <div className="flex justify-between items-center">
            <div> </div>
            <div></div>
            <div>
              <button className=" font-bold bg-secondary text-white p-3 hover:bg-item rounded">
                Show
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="md:w-3/12 md:mt-10 px-1"></div>
        <div className="w-full md:w-9/12 px-1 "></div>
      </div>
    </>
  );
}
