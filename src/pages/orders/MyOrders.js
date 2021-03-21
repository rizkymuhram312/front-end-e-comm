import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { apiOrder } from "../../config/apiUrl";
import { numberWithCommas } from "../../utils/utils";
import ModalMyOrders from "./Modal/ModalMyOrders";

export default function MyOrders() {
  let history = useHistory();
  let [modal, setModal] = useState(false);
  let [dataFormOrderArrival, setDataFormArrival] = useState({});
  const [MyOrders, setMyOrders] = useState();
  const [accId, setaccId] = useState(localStorage.getItem("dataAccountId"));

  useEffect(() => {
    fetchMyOrders();
  }, [modal, dataFormOrderArrival]);

  const fetchMyOrders = async () => {
    let res = await axios({
      url: `${apiOrder}/orders/${accId}`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.data.map((x, y) => {
          let dateOrders = x.order_created_on.toString();
          let ordersDate = new Date(dateOrders).toLocaleString();
          res.data[y].order_created_on = ordersDate;
        });
        setMyOrders(res.data);
        console.log(res.data);
        console.log(res);
        console.log();
      })
      .catch((err) => console.error(err));
  };

  const onEditRow = (e) => {
    // ShippingArrival.map((data)=>{
    //     if(data.order_name === e.target.value){
    //         setDataFormArrival(data)
    //     }
    //     return setDataFormArrival(data)
    // })

    MyOrders.filter((data) => data.order_name === e.target.value).map((data) =>
      setDataFormArrival(data)
    );

    setModal(true);
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
                      Order Name
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
                      Subtotal
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Weight
                    </th>
                    {/* <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Discount
                    </th> */}
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
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
                  {MyOrders
                    ? MyOrders.filter(
                        (x) =>
                          x.order_stat_name === "ARRIVED" ||
                          x.order_stat_name === "CLOSED"
                      ).map((x) => (
                        <>
                          <tr>
                            <td>
                              <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                  {x.order_name}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                  {x.order_created_on}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                  {x.order_total_due}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                  {x.order_weight}
                                </div>
                              </div>
                            </td>
                            {/* <td>
                              <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                  {x.order_watr_numbers}
                                </div>
                              </div>
                            </td> */}
                            <td>
                              <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                  {x.order_stat_name}
                                </div>
                              </div>
                            </td>
                            {x.order_stat_name === "ARRIVED" ? (
                              <td>
                                <div class="ml-4">
                                  <button
                                    value={x.order_name}
                                    class="bg-blue-500 hover:bg-blue-800 focus:outline-none cursor-pointer text-white transition duration-200 font-sans-serif py-2 px-8 rounded-lg"
                                    onClick={onEditRow}
                                  >
                                    Diterima
                                  </button>
                                </div>
                              </td>
                            ) : (
                              <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                <button
                                  className="py-2 px-4 bg-gray-500 text-white reounded-lg w-100"
                                  onClick={() => {
                                    setModal(true);
                                  }}
                                  disabled="true"
                                  onClick={() => {
                                    setModal(true);
                                  }}
                                  disabled="true"
                                >
                                  Finish
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
        {modal ? (
          <ModalMyOrders
            setModal={setModal}
            setDataFormArrival={setDataFormArrival}
            dataFormOrderArrival={dataFormOrderArrival}
          />
        ) : null}
      </div>
    </>
  );
}
