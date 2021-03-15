import React, { useEffect,useState } from 'react'
import Pricecardpulsa from './component/pricecardPulsa'
import PricecardInternet from './component/pricecardInternet'
import axios from 'axios'



const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    const [Pulsa,setPulsa] = useState([]);
    const [Bill,setBill] = useState([]);

   

    
    useEffect( ()=>{
      fetchPulsa()
      fetchBill()
    },[])

    
    

    const fetchBill = async () => {
      return await axios({
        url: `http://localhost:3009/api/billTopup`,
        method : "get",
        headers : {
          "Content-Type" : "application/json"
        },
      }).
      then((res)=>{
        setBill(res.data)
        console.log(res.data);
      }).catch((err) => console.log(err))
    }

    const fetchPulsa = async ()=> {
      return await axios({
        url:`http://localhost:3009/api/vendor`,
        method : "get",
        headers: {
          "Content-Type": "application/json",
        },
      }).
      then((res)=>{
        setPulsa(res.data)
        console.log(res.data)
      }).
      catch((err) => console.log(err))
    }
    return (
      
      <>
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <i className="fas fa-space-shuttle text-base mr-1"></i> Pulsa
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <i className="fas fa-cog text-base mr-1"></i>  Internet
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  <i className="fas fa-briefcase text-base mr-1"></i>  Voucher Game
                </a>
              </li>

              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 4
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  <i className="fas fa-briefcase text-base mr-1"></i>  PLN
                </a>
              </li>

              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 5
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(5);
                  }}
                  data-toggle="tab"
                  href="#link5"
                  role="tablist"
                >
                  <i className="fas fa-briefcase text-base mr-1"></i>  PDAM
                </a>
              </li>

              
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <h1 className ="font-semibold text-base text-gray-800">Pulsa</h1>
                    <div class="mb-3 pt-0">
                        <input type="text" placeholder="Nomer Telepon" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                    </div>

                    <div class="flex flex-wrap">
                      {Pulsa.map((x)=>
                        {if (x.vendor_name === "TELKOMSEL"){
                          return x.vendor_rules.map((y)=>{
                            return (
                              <>
                                <Pricecardpulsa
                                  nominal={y.veru_bill_amount}
                                  harga={y.veru_bill_price}
                                />
                              </>
                            )
                          })
                          
                        }}
                        
                      )}
                    </div>
                    
                    
                    <div class="grid justify-items-stretch">
                        <button class="justify-self-end bg-secondary text-white font-bold text-sm px-4 py-3 rounded shadow hover:bg-item outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                            Beli Sekarang
                        </button>
                    </div>
                    
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <h1 className ="font-semibold text-base text-gray-800">Tagihan Internet</h1>
                        <div class="mb-3 pt-0">
                            <input type="text" placeholder="Nomer Telepon" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
                        </div>
                        

                        <div class="flex flex-wrap">
                          {Bill.map((x)=>{
                            if (x.bito_vendor_name === "TELKOM"){
                            return (
                              
                              <>
                                <PricecardInternet
                                    vendor = {x.bito_vendor_name}
                                    nama = {x.account.acco_nama}
                                    no_tagihan = {x.bito_token}
                                    total_bayar = {x.bito_amount}
                                    deskripsi = {x.bito_desc}
                                  />
                              </>
                            )
                          }})
                        }
                          
                        </div>

                        
                        <div class="grid justify-items-stretch">
                            <button class="justify-self-end bg-secondary text-white font-bold text-sm px-4 py-3 rounded shadow hover:bg-item outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                Beli Sekarang
                            </button>
                        </div>
                  </div>
                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <h1 className ="font-semibold text-base text-gray-800">Voucher Game</h1>
                    <div class="flex justify-center flex-wrap">
                        <div class="cursor-pointer h-32 w-32 m-6 bg-background rounded-lg shadow-lg p-6 hover:bg-gray-200" tabIndex="0">
                            <div class="flex justify-center">
                                <img class="h-10 w-10" src="./steam.png"/>
                            </div>
                            <p class="text-center">Steam Wallet IDR</p>
                        </div>
                        <div class="cursor-pointer h-32 w-32 m-6 bg-background rounded-lg shadow-lg p-6 hover:bg-gray-200" tabIndex="1">
                            <div class="flex justify-center">
                                <img class="h-10 w-10" src="./mobile_legends.png"/>
                            </div>
                            
                            <p class="text-center">Mobile Legends</p>
                        </div>
                        <div class="cursor-pointer h-32 w-32 m-6 bg-background rounded-lg shadow-lg p-6 hover:bg-gray-200" tabIndex="2">
                            <div class="flex justify-center">
                                <img class="h-10 w-10" src="./garena.png"/>
                            </div>
                            
                            <p class="text-center">Garena</p>
                        </div>
                        <div class="cursor-pointer h-32 w-32 m-6 bg-background rounded-lg shadow-lg p-6 hover:bg-gray-200" tabIndex="3">
                            <div class="flex justify-center">
                                <img class="h-10 w-10" src="./pubg.png"/>
                            </div>
                            
                            <p class="text-center">PUBG Mobile</p>
                        </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default function TabsRender() {
    return (
      <>
         <Tabs color="gray" />
      </>
    );
  }
