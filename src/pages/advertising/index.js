import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import {TableAdvertising} from './tableAdvertising'

export default function Advertising() {
  const [Adv, setAdv] = useState([])
  let history = useHistory();
  
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
          <div className="py-5 px-2 hover:text-secondary hover:bg-white" style={{cursor:'pointer'}} onClick={()=>history.push("/advertising/my-pkg")}>Package Adv</div>
          <div className="py-5 px-2 hover:text-secondary hover:bg-white" style={{cursor:'pointer'}} onClick={()=>history.push("/advertising/my-adv")}>My Product</div>
          <div className="py-5 px-2 hover:text-secondary hover:bg-white" style={{cursor:'pointer'}} onClick={()=>history.push("/advertising/add-adv")}>Advertising</div>
        </div>
        <div className="w-full md:w-9/12">
          <TableAdvertising adv={Adv}/>
        </div>
      </div>
    );
}
