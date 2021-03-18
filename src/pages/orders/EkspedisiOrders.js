import React, { useEffect, useState } from "react";
import CartOrders from "./CartOrders";
import axios from "axios";
import { apiExpedition } from "../../config/apiUrl";
import { numberWithCommas } from "../../utils/utils";

export default function EkspedisiOrders(props) {
  const [EkspedisiOrders, setEkspedisiOrders] = useState();
  

  useEffect(()=>{
      console.log(props.dataEkspedisi)
      if(props.dataEkspedisi !== undefined){
          setEkspedisiOrders(props.dataEkspedisi)
      }
  },[props])

  return (
    <div>
      <select value={props.selectedEkspedisi} onChange={(e)=>props.setSelectedEkspedisi(e.target.value)} class="text-black font-sans-serif py-2 px-4 ml-4 border border-gray-600 outline-none w-100">
        {EkspedisiOrders !== undefined
          ? EkspedisiOrders.map((x) => (
              <>
                <option value={x.expe_id}>{x.expe_name}</option>
              </>
            ))
          : null}
      </select>
    </div>
  );
}
