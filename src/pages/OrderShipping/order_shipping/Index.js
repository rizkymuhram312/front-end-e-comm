import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { apiOrder } from '../../../config/apiUrl'
import ModalOship from './OshipModal'
import numberWithCommas from '../../Expeditions/expedition_routes/numberWithCommas'

function Index() {

    let [OrderShipping, setOrderShipping] = useState([]);
    let [updateOrderShipping, setUpdateOrderShipping] = useState()
    // let [orderName, setOrderName] = useState("")
    let [modal, setModal] = useState(false);
    let [dataFormOrderShipping, setDataFormOrderShipping] = useState("")
    // let [dataEditRow] = useState(null)


    useEffect(() => {
        fetchOrderShipping()
        // fetchUpdateOrderShipping()
    }, [modal, dataFormOrderShipping])


    console.log(localStorage.getItem('dataAccountId'))

    // console.log("Naha")
    //     console.log(OrderShipping.map(x => x.order_acco_id_seller))    

    const fetchOrderShipping = async () => {
        return await axios({
            url: `${apiOrder}/orders/`,
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((res) => {
                res.data.map((x, y) => {
                    let dateOrders = x.order_created_on.toString();
                    let ordersDate = new Date(dateOrders).toLocaleString();
                    res.data[y].order_created_on = ordersDate;
                });
                setOrderShipping(res.data)
                console.log(res.data);
                console.log(res);
                console.log();
            })
            .catch((err) => console.error(err));

    }



    const onEditRow = (e) => {
        console.log(e.target.value)
        // OrderShipping.map((data)=>{
        //     if(data.order_name === e.target.value){
        //         setDataFormOrderShipping(data)

        //     }
        //     return setDataFormOrderShipping(data)
        // }
        // )



        OrderShipping.filter((data) =>
            data.order_name === e.target.value
        ).map(data => setDataFormOrderShipping(data))




        setModal(true)
    }
    // console.log(localStorage.getItem('dataAccountId'))

    console.log(OrderShipping)


    return (
        <div>
            <div class="flex flex-wrap">
                <div class="-my-2 p-8 overflow-x-auto">
                    <div class="py-2 align-middle inline-block max-w-full">
                        <table class="min-w-full divide-y divide-gray-200 ">
                            <thead class="bg-gray-50">

                                <tr>
                                    <th scope="col" class="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Order Name
                                            </th>
                                    <th scope="col" class="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Created On
                                            </th>
                                    <th scope="col" class="px-5 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Subtotal
                                            </th>
                                    <th scope="col" class="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Weight
                                            </th>
                                    <th scope="col" class="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Discount
                                            </th>
                                    <th scope="col" class="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                            </th>
                                    <th scope="col" class="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Action
                                            </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                {
                                    OrderShipping.length > 0 ?
                                        OrderShipping.filter((x) => x.status.stat_name === "PAID" && x.order_acco_id_seller == localStorage.getItem('dataAccountId')).map(x => {
                                            return( <tr key={x.order_name}>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {x.order_name}
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {x.order_created_on}
                                                </td>
                                                <td class="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                                    Rp. {numberWithCommas(x.order_subtotal)}
                                                </td>
                                                <td class="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                                    {x.order_weight} Kg
                                                        </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {x.order_discount} %
                                                            {/* {x.order_acco_id_seller} */}
                                                    {/* {x.orders_line_items[2].product.prod_acco_id} */}
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {x.order_stat_name}
                                                    </span>
                                                </td>
                                                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                                    <button className="py-2 px-4 bg-blue-500 hover:bg-blue-400 text-white reounded" onClick={onEditRow} value={x.order_name}>SHIPPING</button>
                                                </td>
                                            </tr>)
                                        })
                                        :
                                        <tr>
                                            <td colSpan={3}>No Records Found.</td>
                                        </tr>
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {
                modal ?
                    <ModalOship
                        setModal={setModal}
                        OrderShipping={OrderShipping}
                        dataFormOrderShipping={dataFormOrderShipping}
                    // updateOrderShipping={updateOrderShipping}
                    // setUpdateOrderShipping={setUpdateOrderShipping}
                    // OrderShipping={OrderShipping}
                    // setOrderShipping={setOrderShipping}
                    // order = {onEditRow}
                    />
                    :
                    null
            }

        </div>
    )
}

export default Index
