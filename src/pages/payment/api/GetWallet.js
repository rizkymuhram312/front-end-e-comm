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

export {GetWallet,CreateWalletApi}