import axios from 'axios'
import {apiPayment} from '../../../config/apiUrl'

const GetWallet = async (acco_id) => {
  const getWalletApi = apiPayment+"/wallet/"+acco_id
  let getWallet = await axios.get(getWalletApi)
  console.log(getWallet)
  return getWallet.data
}

const CreateWalletApi= async (data)=>{
  console.log(data)
  const createWalletApi = apiPayment+"/wallet"
  let createWallet = await axios.post(createWalletApi,data)
  console.log(createWallet)
  return createWallet
}

const AddSaldo = async (data)=>{
  console.log(data)
  const addSaldoWalletApi = apiPayment+"/wallet/saldo/add"
  let addSaldoWallet = await axios.post(addSaldoWalletApi,data)
  console.log(addSaldoWallet)
  return addSaldoWallet
}

export {GetWallet,CreateWalletApi,AddSaldo}