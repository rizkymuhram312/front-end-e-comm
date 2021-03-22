import React from 'react'
import { useHistory } from 'react-router';
import IndexExRoute from './expedition/index'


export default function ExpeditionIndex() {
    let history = useHistory();


    return (
      <div>
        <div className="flex flex-wrap">
          
          <div className="md:w-2/12 flex flex-row justify-evenly md:flex-col">
          <div className="w-full md:mt-10 px-1 font-bold text-md flex flex-row justify-evenly md:flex-col ">

            <div className="py-5 px-2 hover:text-secondary bg-white hover:bg-gray-400" style={{cursor:'pointer'}} onClick={()=>history.push("/ordershipping")}>Shipping</div>
            <div className="py-5 px-2 hover:text-secondary bg-white hover:bg-gray-400" style={{cursor:'pointer'}} onClick={()=>history.push("/ordershippingarrival")}>Shipping Arrival</div>
            <div className="py-5 px-2 hover:text-secondary bg-white hover:bg-gray-400" style={{cursor:'pointer'}} onClick={()=>history.push("/expeditionsroutes")}>Expedition Route</div>
            <div className="py-5 px-2 hover:text-secondary bg-gray-300" style={{cursor:'pointer'}} onClick={()=>history.push("/expeditions")}>Expedition</div>
          </div>
          </div>
          <div className="w-full md:w-9/12">
            <IndexExRoute />
          </div>
        </div>
      </div>
    )
}
