import React, { useEffect, useState } from 'react'
import Pricecardpulsa from './component/pricecardPulsa'
import PricecardInternet from './component/pricecardInternet'
import GameCard from './component/gameCard'
import Pricevouchergame from './component/pricevoucherGame'
import PricecardPLN from './component/pricecardPLN'
import PricecardPdam from './component/pricecardPdam'
import axios from 'axios'
import { apiTopup } from '../../config/apiUrl'



const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const [Pulsa, setPulsa] = useState([]);
  const [Bill, setBill] = useState([]);
  const [VPdam, setVPdam] = useState([]);
  const [internet, setInternet] = useState("")
  const [pdam, setPdam] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [flag, setFlag] = useState(false);
  const [vGame, setVGame] = useState([]);
  const [Pln, setPLN] = useState([])
  const [tokenNum, setTokenNum] = useState("")
  let [gameCard, setGameCard] = useState("Steam")
  // const [allValPulsa, setAllValPulsa] = useState({
  //   bito_acco_id : ''
  // })
  
  const userId = localStorage.getItem('dataAccountId')

  useEffect(() => {
    fetchPulsa()
    //fetchBill()
    // fetchVGame()
  }, [flag === true])


  useEffect(() => {
    console.log('usereffect : ' + gameCard);
    fetchVGame()
  }, [gameCard])

  const onChangePln = (e) => {
    const value = e.target.value;
    setTokenNum(value)
    console.log(value);
  }

  const handleKeypressPLN = (e) => {
    if (e.keyCode == 13) {
      console.log('keycode enter')
      console.log('key enter ' + e.target.value)
      // setInternet(e.target.value);
      setFlag(true)
      console.log('TokenPLN : ' + { tokenNum })
      fetchPLN();
    }
  }


  const onChangeToken = (e) => {

    const value = e.target.value;
    setInternet(value);
    console.log(value);

  }

  const onChangePdam = (e) => {

    const value = e.target.value;
    setPdam(value);
    console.log(value);

  }

  const onChangePhoneNumber = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    console.log(value);
  }

  const handleKeypress = (e) => {
    if (e.keyCode == 13) {
      console.log('keycode enter')
      console.log('key enter ' + e.target.value)
      // setInternet(e.target.value);
      setFlag(true)
      console.log('internet : ' + { internet })
      fetchBill();
      console.log('id nyaa '+userId)
    }
  }

  const handleKeypressPdam = (e) => {
    if (e.keyCode == 13) {
      console.log('keycode enter')
      console.log('key enter ' + e.target.value)
      // setInternet(e.target.value);
      setFlag(true)
      console.log('pdam : ' + {pdam})
      fetchPdam();
    }
  }

  const addPulsa = () =>{
    
    console.log(userId)
    console.log(phoneNumber);
    console.log();
    
  }

  const fetchPLN = async () => {
    return await axios({
      url: `${apiTopup}/vendor/byVendorName/PLN`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).
      then((res) => {
        setPLN(res.data)
        console.log(res.data)
      }).
      catch((err) => console.log(err))
  }


  const fetchBill = async () => {
    return await axios({
      url: `${apiTopup}/billCustomer/readbytoken/${internet}`,
      method: "get",
      headers: {
        "Content-Type": "application/json"
      },
    }).
      then((res) => {
        setBill(res.data)
        console.log('result bill : ')
        console.log(res.data);
      }).catch((err) => console.log(err))
  }

  const fetchPdam = async () => {
    return await axios({
      url: `${apiTopup}/billCustomer/readbytoken/${pdam}`,
      method: "get",
      headers: {
        "Content-Type": "application/json"
      },
    }).
      then((res) => {
        setVPdam(res.data)
        console.log('result pdam : ')
        console.log(res.data);
      }).catch((err) => console.log(err))
  }

  const fetchVGame = async () => {
    return await axios({
      url: `${apiTopup}/vendor/byVendorName/${gameCard}`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).
      then((res) => {
        setVGame(res.data)
        console.log(res.data)
      }).
      catch((err) => console.log(err))
  }


  const fetchPulsa = async () => {
    return await axios({
      url: `${apiTopup}/vendor`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).
      then((res) => {
        setPulsa(res.data)
        console.log(res.data)
      }).
      catch((err) => console.log(err))
  }

  

  const addBillPulsa = () => {
    const data = {
      bito_created_on: "bito_created_on",
      bito_type: "bito_type",
      bito_amount: "bito_amount",
      bito_desc: "bito_desc",
      bito_watr_numbers: "bito_watr_numbers",
      bito_token: "bito_token",
      bito_vendor_name: "bito_vendor_name",
      bito_acco_id: "bito_acco_id",
      bito_watr_id: "bito_watr_id"
    };

    axios.post(`${apiTopup}/billTopup/insertbillTopup`, data).
      catch((err) => {
        console.log(err);
      })
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
                <i className="fas fa-mobile-alt text-base mr-1"></i> Pulsa
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
                <i className="fas fa-wifi text-base mr-1"></i>  Internet
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
                <i className="fas fa-gamepad text-base mr-1"></i>  Voucher Game
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
                <i className="fas fa-bolt text-base mr-1"></i>  PLN
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
                <i className="fas fa-tint text-base mr-1"></i>  PDAM
                </a>
            </li>


          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <h1 className="font-semibold text-base text-gray-800">Pulsa</h1>
                  <div class="mb-3 pt-0">
                    <input type="text" placeholder="Nomer Telepon" name="phoneNumber" value={phoneNumber} onChange={onChangePhoneNumber} class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                  </div>

                  <div class="flex flex-wrap">
                    {Pulsa.map((x) => {
                      if (x.vendor_name === "TELKOMSEL") {
                        return x.vendor_rules.map((y) => {
                          return (
                            <>
                              <Pricecardpulsa
                                nominal={y.veru_bill_amount}
                                harga={y.veru_bill_price}
                              />
                            </>
                          )
                        })

                      }
                    }

                    )}
                  </div>


                  <div class="grid justify-items-stretch">
                    <button class="justify-self-end bg-secondary text-white font-bold text-sm px-4 py-3 rounded shadow hover:bg-item outline-none focus:outline-none mr-1 mb-1" 
                    type="button" 
                    style={{ transition: "all .15s ease" }}
                    onClick={addPulsa}>
                      Beli Sekarang
                        </button>
                  </div>

                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <h1 className="font-semibold text-base text-gray-800">Tagihan Internet</h1>
                  <div class="mb-3 pt-0">
                    <input type="text" name="token" value={internet} onChange={onChangeToken} onKeyDown={handleKeypress} placeholder="No Tagihan" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                  </div>


                  <div class="flex flex-wrap">
                    {
                      Bill.bilc_id > 0 ?
                        <PricecardInternet
                          vendor={Bill.bilc_vendor_name}
                          nama={Bill.account.acco_nama}
                          harga={Bill.vendor.vendor_rules[0].veru_bill_price}
                          no_tagihan={Bill.bilc_token}
                          deskripsi={Bill.vendor.vendor_rules[0].veru_desc}
                        />
                        : null
                    }

                  </div>


                  <div class="grid justify-items-stretch">
                    <button class="justify-self-end bg-secondary text-white font-bold text-sm px-4 py-3 rounded shadow hover:bg-item outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                      Beli Sekarang
                            </button>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <h1 className="font-semibold text-base text-gray-800">Voucher Game</h1>
                  <div class="flex justify-center flex-wrap">
                    {Pulsa.map((x) => {
                      let onClickGame = (e) => {
                        let value = e.target.value = x.vendor_name
                        console.log('hasil : ' + value);
                        setGameCard(value)
                        //fetchVGame()
                      }


                      if (x.vendor_name === 'Steam') {
                        return (
                          <>
                            <div value={gameCard} onClick={onClickGame} class="cursor-pointer h-32 w-32 m-6 bg-background rounded-lg shadow-lg p-6 hover:bg-gray-200" tabIndex="0">
                              <div class="flex justify-center">
                                <img class="h-10 w-10" src="./steam.png" />
                              </div>
                              <GameCard
                                vendor={x.vendor_name}
                              />
                            </div>


                          </>
                        )
                      }
                      else if (x.vendor_name === 'MobileLegends') {
                        return (
                          <>
                            <div value={gameCard} onClick={onClickGame} class="cursor-pointer h-32 w-32 m-6 bg-background rounded-lg shadow-lg p-6 hover:bg-gray-200" tabIndex="0">
                              <div class="flex justify-center">
                                <img class="h-10 w-10" src="./mobile_legends.png" />
                              </div>
                              <GameCard
                                vendor={x.vendor_name}
                              />
                            </div>

                          </>
                        )
                      }

                      else if (x.vendor_name === 'Garena') {
                        return (
                          <>
                            <div value={gameCard} onClick={onClickGame} class="cursor-pointer h-32 w-32 m-6 bg-background rounded-lg shadow-lg p-6 hover:bg-gray-200" tabIndex="0">
                              <div class="flex justify-center">
                                <img class="h-10 w-10" src="./garena.png" />
                              </div>
                              <GameCard
                                vendor={x.vendor_name}
                              />
                            </div>

                          </>
                        )
                      }

                      else if (x.vendor_name === 'PUBG') {
                        return (
                          <>
                            <div value={gameCard} onClick={onClickGame} class="cursor-pointer h-32 w-32 m-6 bg-background rounded-lg shadow-lg p-6 hover:bg-gray-200" tabIndex="0">
                              <div class="flex justify-center">
                                <img class="h-10 w-10" src="./pubg.png" />
                              </div>
                              <GameCard
                                vendor={x.vendor_name}
                              />
                            </div>

                          </>
                        )
                      }





                    })



                    }
                    


                  </div>
                  <div class="flex justify-center flex-wrap">
                  {
                      vGame.vendor_rules && vGame.vendor_rules.map((x) => {

                        return (
                          <>
                            <Pricevouchergame
                              nominal={x.veru_bill_amount}
                              harga={x.veru_bill_price} />
                          </>
                        )
                      })
                    }
                  </div>

                  <div class="grid justify-items-stretch">
                    <button class="justify-self-end bg-secondary text-white font-bold text-sm px-4 py-3 rounded shadow hover:bg-item outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                      Beli Sekarang
                            </button>
                  </div>

                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <h1 className="font-semibold text-base text-gray-800">Token PLN</h1>
                  <div class="mb-3 pt-0">
                    <input type="text" placeholder="Token Number" name="tokenNum" value={tokenNum} onChange={onChangePln} onKeyDown={handleKeypressPLN} class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                  </div>

                  <div class="flex flex-wrap">

                    {Pln.vendor_rules && Pln.vendor_rules.map((x) => {

                      return (
                        <>
                          <PricecardPLN
                            nominal={x.veru_bill_amount}
                            harga={x.veru_bill_price} />
                        </>
                      )
                    })
                    }
                  </div>


                  <div class="grid justify-items-stretch">
                    <button class="justify-self-end bg-secondary text-white font-bold text-sm px-4 py-3 rounded shadow hover:bg-item outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                      Beli Sekarang
                        </button>
                  </div>

                </div>

                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <h1 className="font-semibold text-base text-gray-800">Tagihan PDAM</h1>
                  <div class="mb-3 pt-0">
                    <input type="text" name="token" value={pdam} onChange={onChangePdam} onKeyDown={handleKeypressPdam} placeholder="No Tagihan" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                  </div>


                  <div class="flex flex-wrap">
                    {
                      VPdam.bilc_id > 0 ?
                        <PricecardPdam
                          vendor={VPdam.bilc_vendor_name}
                          nama={VPdam.account.acco_nama}
                          harga={VPdam.vendor.vendor_rules[0].veru_bill_price}
                          no_tagihan={VPdam.bilc_token}
                          deskripsi={VPdam.vendor.vendor_rules[0].veru_desc}
                        />
                        : null
                    }

                  </div>


                  <div class="grid justify-items-stretch">
                    <button class="justify-self-end bg-secondary text-white font-bold text-sm px-4 py-3 rounded shadow hover:bg-item outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                      Beli Sekarang
                            </button>
                  </div>
                </div>

              </div>{/*end of tab*/}

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
