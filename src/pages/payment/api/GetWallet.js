import axios from 'axios'
import {paymentUrl} from '../../config/config'

const GetWallet = async (acco_id) => {
  const getWalletApi = paymentUrl+"/api/wallet/"+acco_id
  let getWallet = await axios.get(getWalletApi)
  return getWallet.data[0]
}

export {GetWallet}