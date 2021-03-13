import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import {GetWallet} from './api/index'
const MyWallet = () => {
    let [wallet,setWallet] = useState({})
    let {acco_id} = useParams()

    useEffect(() => {
      const fetchData = async () => {
        let walletData = await GetWallet(acco_id)
        console.log(walletData)
        await saldoToString(walletData)
      }

      try {
        fetchData()
      } catch (error) {
        console.log(error)
      }
    }, [])

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
        setWallet(error)
        return setWallet({
          acco_id:" ID Tidak ditemukan",
          wale_saldo: ""
        }) 
      }
    }

    return (
      <>
      <div className=" font-sans ml-2 mt-2 h-24 bg-green-600 flex-wrap shadow-lg rounded-lg text-white font-light pl-2">
          <h4 className=" font-bold ml-2 pt-2">My Wallet</h4>
          <h4 className=" mt-2 ml-2">ID : {wallet.acco_id}</h4>
          <h4 className="ml-2">Saldo : Rp. {wallet.wale_saldo},00</h4>
      </div>
      <div>
        <button className=" ml-2 text-white font-light border outline-none bg-blue-500 shadow-lg overflow-hidden rounded-lg mt-1 px-2">Topup</button>
        <button className=" ml-2 text-white font-light border outline-none bg-blue-500 shadow-lg overflow-hidden rounded-lg mt-1 px-2">History Transaksi</button>      
      </div>
      </>
  )
}

export default MyWallet