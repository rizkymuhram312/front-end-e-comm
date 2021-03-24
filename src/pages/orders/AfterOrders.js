import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { apiCart } from "../../config/apiUrl";
import { numberWithCommas } from "../../utils/utils";

export default function AfterOrders() {
  let history = useHistory();
  let [modal, setModal] = useState(false);
  let [dataFormOrderArrival, setDataFormArrival] = useState({});
  const [AfterOrders, setAfterOrders] = useState([]);
  const [accId, setaccId] = useState(localStorage.getItem("dataAccountId"));

  useEffect(() => {
    fetchAfterOrders();
  }, [modal, dataFormOrderArrival]);

  const fetchAfterOrders = async () => {
    return await axios({
      url: `${apiCart}/cart/${accId}/CHECKOUT`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.data.map((x, y) => {
          let dateTrans = x.cart_created_on.toString();
          let watrDate = new Date(dateTrans).toLocaleString();
          res.data[y].cart_created_on = watrDate;
        });
        setAfterOrders(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  const onShow = (e) => {
    // ShippingArrival.map((data)=>{
    //     if(data.order_name === e.target.value){
    //         setDataFormArrival(data)
    //     }
    //     return setDataFormArrival(data)
    // })

    AfterOrders.filter(
      (data) => data.order_name === e.target.value
    ).map((data) => setDataFormArrival(data));
    history.push("/orders");

    // setModal(true);
  };

  return (
    <>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Cart Id
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Created On
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total Weight(kg)
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total Amount(Rp)
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total Quantity
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  {AfterOrders
                    ? AfterOrders.filter(
                        (x) =>
                          x.cart_stat_name === "PENDING" ||
                          x.cart_line_items[0].clit_stat_name === "CHECKOUT"
                      ).map((x) => (
                        <>
                          <tr>
                            <td>
                              <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                  {x.cart_id}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                  {x.cart_created_on}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                  {x.cart_total_weight}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                  {x.cart_total_amount}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                  {x.cart_total_qty}
                                </div>
                              </div>
                            </td>
                            {x.cart_line_items[0].clit_stat_name === "CHECKOUT" ? (
                              <td>
                                <div class="ml-4">
                                  <button
                                    onClick={onShow}
                                    class="bg-blue-500 hover:bg-blue-800 focus:outline-none cursor-pointer text-white transition duration-200 font-sans-serif py-2 px-8 rounded-lg"
                                  >
                                    Show
                                  </button>
                                </div>
                              </td>
                            ) : (
                              <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                <button
                                  className="py-2 px-4 bg-gray-500 text-white reounded"
                                  onClick={onShow}
                                  disabled="true"
                                >
                                  Diterima
                                </button>
                              </td>
                            )}
                          </tr>
                        </>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
