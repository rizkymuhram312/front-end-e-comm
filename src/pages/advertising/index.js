import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {TableAdvertising} from './tableAdvertising'

export default function Advertising() {
  const [Adv, setAdv] = useState([])
  
  useEffect(() => {
    fetchAdv()
  }, [])

  async function fetchAdv(){
    return await axios({
      url: `http://localhost:3008/api/orderAdvertising/1001`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setAdv(res.data[0])
      })
      .catch((err) => console.error(err));
  }


    return (
      <div className="flex flex-wrap">
        <div className="w-full md:w-3/12 md:mt-10 px-1 text-center font-bold text-md flex flex-row justify-evenly md:flex-col ">
          <div className="py-3 px-2 hover:text-secondary hover:bg-white" style={{cursor:'pointer'}}>Package Adv</div>
          <div className="py-3 px-2 hover:text-secondary hover:bg-white" style={{cursor:'pointer'}}>My Product</div>
          <div className="py-3 px-2 hover:text-secondary hover:bg-white" style={{cursor:'pointer'}}>Advertising</div>
        </div>
        <div className="w-full md:w-9/12">
          <TableAdvertising adv={Adv}/>
        </div>
      </div>
    );
}
