import {useEffect, useState } from 'react';
import {CreateWallet} from './CreateNewWallet'
import {GetWallet, GetTransactions} from './api/index'
import Transactions from './Transactions'
import {TopUpWallet} from './TopUpWallet'

const MyWallet = () => {
    let [wallet,setWallet] = useState({})
    let [acco_id] = useState(localStorage.getItem('dataAccountId'))
    let [showHistoryTrans,setShowHistoryTrans] = useState(false)
    let [walletActivated,setWalletActivated] = useState(false)
    let [showActivateWalletForm,setShowActivateWalletForm] = useState(false)
    let [showTopUpForm,setShowTopUpForm] = useState()
    let [transactions,setTransactions] = useState([])
    let [refresh,setRefresh] = useState(false)

    useEffect(() => {
      const fetchDataTrans = async () => {
        try {
          let result = await GetTransactions(acco_id)
          setTransactions(result) 
          console.log(result)
        } catch (error) {
          console.log(error)          
        }      
      }

      const fetchData = async () => {
        console.log(acco_id)
        if(acco_id !== undefined) {
          try {
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
          } catch (error) {
            console.log(error)
          }
        }else{
          setWallet({
            acco_id:"Belum ada Akun, silahkan tambahkan akun",
            wale_saldo: ""
          })
        }
      }

      try {
        fetchData()
        fetchDataTrans()
      } catch (error) {
        console.log(error)
      }
    }, [showActivateWalletForm,showTopUpForm,showHistoryTrans,refresh])

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
          wale_id:data.wale_id,
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

    const onHandleClikTopUp = (e) =>{
      setShowTopUpForm(true)
      setShowHistoryTrans(false)
    }

    const onHandleClickHistoryTrans = ()=>{
      setShowHistoryTrans(true)
      setShowTopUpForm(false)
    }

    return (
      <>
      <div className="grid-flow-row">
        <div>
          
        </div>

      </div>
      <div className=" font-sans ml-2 mt-2 h-36 bg-green-600 flex-wrap shadow-lg rounded-lg text-white font-light pl-2">
          <h4 className=" font-bold ml-2 pt-2">My Wallet</h4>
          {
            walletActivated ? (
              <div>
                <h4 className="mt-2 ml-2">ID Account: {wallet.acco_id}</h4>
                <h4 className="ml-2">ID Wallet: {wallet.wale_id}</h4>                
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
        <button className=" ml-2 text-white font-light border outline-none bg-blue-500 shadow-lg overflow-hidden rounded-lg mt-1 px-2" onClick={onHandleClikTopUp}>Topup</button>
        <button className=" ml-2 text-white font-light border outline-none bg-blue-500 shadow-lg overflow-hidden rounded-lg mt-1 px-2" onClick={onHandleClickHistoryTrans}>History Transaksi</button>      
      </div>
      {
        showHistoryTrans ? (
          <Transactions 
          transactions={transactions.data}
          />
        ):null
      }
      {
        showTopUpForm ? (
          <TopUpWallet 
          acco_id={wallet.acco_id}
          wale_id={wallet.wale_id}
          setShowTopUpForm={setShowTopUpForm}
          setRefresh={setRefresh}
          refresh={refresh}
          setShowHistoryTrans={setShowHistoryTrans}
          />
        ):null
      }
      {
        showActivateWalletForm ? (
          <>
            <CreateWallet
            setShowActivateWalletForm={setShowActivateWalletForm}
            showActivateWalletForm={showActivateWalletForm}
            acco_id={acco_id}
            refresh={refresh}
            />
          </>
        ):null
      }
      </>
  )
}

export default MyWallet