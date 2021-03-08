import axios from 'axios';
import React, { useEffect, useState } from 'react'
import numberWithCommas from '../numberWithCommas'


function JNE() {

    let [JNE, setJNE] = useState([]);


    useEffect( ()=>{
        fetchJNE()
    },[])


    const fetchJNE = async ()=>{
        return await axios({
            url:`http://localhost:3007/api/expeditionroute`,
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res)=>{
            setJNE(res.data)
        }).catch((err)=> console.log(err))
    }


    return (
        <div>
            {
                JNE.filter(x => x.expedition.expe_name === "JNE").map(x => 
                    
                    <div>
                        <label className=" font-bold text-xl mr-20">JNE  (EXPRESS)</label>
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

export default JNE
