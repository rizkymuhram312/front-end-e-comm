import React from 'react'
import { useHistory } from 'react-router';
import IndexOrderShippingArrival from './order_shipping_arival/Index'


export default function OrderShippingIndex() {
    let history = useHistory();


    return (
        <div className="flex flex-wrap">
          <div className="md:w-2/12 flex flex-row  md:flex-col">
            <div className="w-full md:mt-10 px-1 font-bold text-md flex flex-row md:flex-col ">
              <div className="py-5 px-2 bg-white hover:bg-primary" style={{cursor:'pointer'}} onClick={()=>history.push("/ordershipping")}>Shipping</div>
              <div className="py-5 px-2 bg-primary" style={{cursor:'pointer'}} onClick={()=>history.push("/ordershippingarrival")}>Shipping Arrival</div>
              <div className="py-5 px-2 bg-white hover:bg-primary" style={{cursor:'pointer'}} onClick={()=>history.push("/expeditionsroutes")}>Expedition Route</div>
              <div className="py-5 px-2 bg-white hover:bg-primary" style={{cursor:'pointer'}} onClick={()=>history.push("/expeditions")}>Expedition</div>
            </div>
          </div>
          <div className="w-full md:w-9/12">
            <IndexOrderShippingArrival />
          </div>
        </div>
    )
}
