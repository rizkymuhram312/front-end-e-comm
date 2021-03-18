import axios from "axios";
import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
import {apiCart} from '../../config/apiUrl'
import { numberWithCommas } from "../../utils/utils";


export default function AfterOrders() {
  let history = useHistory();
  const [AfterOrders, setAfterOrders] = useState([]);
  const [accId, setaccId] = useState(localStorage.getItem("dataAccountId"));
  const [cartId, setcartId] = useState([]);
  const [cartCreatedOn, setcartCreatedOn] = useState([]);
  const [cartTotalWeight, setcartTotalWeight] = useState([]);
  const [cartTotalAmount, setcartTotalAmount] = useState([]);
  const [cartTotalQty, setcartTotalQty] = useState([]);


  useEffect(() => {
    fetchAfterOrders();
  }, []);

  useEffect(()=>{
    if(AfterOrders[0]){
      setcartId(AfterOrders[0].cart_id);
      setcartCreatedOn(AfterOrders[0].cart_created_on);
      setcartTotalWeight(AfterOrders[0].cart_total_weight);
      setcartTotalAmount(AfterOrders[0].cart_total_amount);
      setcartTotalQty(AfterOrders[0].cart_total_qty);
    }


  },[AfterOrders])

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
          let dateTrans = x.cart_created_on.toString()
          let watrDate = new Date(dateTrans).toLocaleString()
          res.data[y].cart_created_on = watrDate
      })
        setAfterOrders(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  const onShow = ()=>{
    history.push('/cart-orders')
  }

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
                  <tr>
                    <td>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {cartId}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                        {cartCreatedOn}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {cartTotalWeight}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          Rp.{numberWithCommas(cartTotalAmount)}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {cartTotalQty}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="ml-4">
                        <button onClick={onShow} class="bg-blue-500 hover:bg-blue-800 focus:outline-none cursor-pointer text-white transition duration-200 font-sans-serif py-2 px-8 rounded-lg">
                          Show
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
