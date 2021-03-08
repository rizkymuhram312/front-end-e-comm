import axios from 'axios';
import React, { useEffect, useState } from 'react'
import numberWithCommas from '../numberWithCommas'


function SICEPAT() {

    let [Sicepat, setSicepat]= useState([]);


    useEffect(()=>{
        fetchSicepat()
    },[])


    const fetchSicepat = async ()=>{
        return await axios({
            url:`http://localhost:3007/api/expeditionroute`,
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res)=>{
            setSicepat(res.data)
        }).catch((err)=> console.log(err))
    }
    

    return (
        <div>
            {
                Sicepat.filter(x => x.expedition.expe_name === "SICEPAT").map(x => 
                    
                    <div>
                        <label className=" font-bold text-xl mr-20">SICEPAT  (EXPRESS)</label>
                        <label className="font-semibold text-xl">Rp. {numberWithCommas(x.exro_cost)}</label>   
                        <div  className="text-sm">
                    <label>Durasi: {x.exro_duration}</label>
                        </div>
                    </div>
                   
                   
                   
                    )    
                }    
        </div>
    )
}

export default SICEPAT
