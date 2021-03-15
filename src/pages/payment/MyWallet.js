import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import {CreateWallet} from './CreateNewWallet'
import {GetWallet} from './api/index'
import Transactions from './Transactions'
const MyWallet = () => {
    let [wallet,setWallet] = useState({})
    let [acco_id] = useState(localStorage.getItem('acco_id') || 1001)
    let [showHistoryTrans,setShowHistoryTrans] = useState(false)
    let [walletActivated,setWalletActivated] = useState(false)
    let [showActivateWalletForm,setShowActivateWalletForm] = useState(false)
  
    useEffect(() => {
      const fetchData = async () => {
        let walletData = await GetWallet(acco_id)
        console.log(walletData.length)
        if(walletData.length > 0){
          await saldoToString(walletData[0])
          setWalletActivated(true)
        }else{
          setWalletActivated(false)
          setWallet({
            acco_id:"Wallet tida ada",
            wale_saldo: ""
          }) 
        }
      }

      try {
        fetchData()
      } catch (error) {
        console.log(error)
      }
    }, [showActivateWalletForm])

    const saldoToString = async (data) => {
      let saldoStrings=""
        try {
        let saldoS = data.wale_saldo.toString()
        let saldoLength = saldoS.length
        while(saldoLength>3){
            saldoStrings = saldoS.slice(saldoLength-3,saldoLength) + "." + saldoStrings
            saldoLength -= 3
        }
        saldoStrings = saldoS.slice(0,saldoLength) + "." + saldoStrings
        saldoStrings = saldoStrings.slice(0,-1)
        return setWallet({
          acco_id:data.wale_acco_id,
          wale_saldo:saldoStrings
        })
      } catch (error) {
        console.log(error)
        return setWallet(error)
      }
    }

    const onHandleClickActivateWallet = (e) => {
      setShowActivateWalletForm(true)
    }

    const onHandleClickHistoryTrans = ()=>{
      setShowHistoryTrans(!showHistoryTrans)
    }

    return (
      <>
      <div className=" font-sans ml-2 mt-2 h-24 bg-green-600 flex-wrap shadow-lg rounded-lg text-white font-light pl-2">
          <h4 className=" font-bold ml-2 pt-2">My Wallet</h4>
          {
            walletActivated ? (
              <div>
                <h4 className="mt-2 ml-2">ID : {wallet.acco_id}</h4>
                <h4 className="ml-2">Saldo : Rp. {wallet.wale_saldo},00</h4>
              </div>
            )
            :(
              <div className="ml-2">
                <h1>Wallet Belum Aktif</h1>
                <button onClick={onHandleClickActivateWallet} className="bg-blue-500 rounded-md w-2/12 shadow-xl border"><h1>Activate Wallet</h1></button>
              </div>
            )
          }
      </div>
      <div>
        <button className=" ml-2 text-white font-light border outline-none bg-blue-500 shadow-lg overflow-hidden rounded-lg mt-1 px-2" >Topup</button>
        <button className=" ml-2 text-white font-light border outline-none bg-blue-500 shadow-lg overflow-hidden rounded-lg mt-1 px-2" onClick={onHandleClickHistoryTrans}>History Transaksi</button>      
      </div>
      {
        showHistoryTrans ? (
          <Transactions />
        ):null
      }
      {
        showActivateWalletForm ? (
          <>
            <CreateWallet 
            setShowActivateWalletForm={setShowActivateWalletForm}
            showActivateWalletForm={showActivateWalletForm}
            acco_id={acco_id}

            />
          </>
        ):null
      }
      </>
  )
}

export default MyWallet