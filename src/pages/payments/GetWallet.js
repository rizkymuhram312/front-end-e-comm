import axios from 'axios'
import url from '../../config/config'

const GetWallet = async (acco_id) => {
  const getWalletApi = url+"/api/wallet/"+acco_id
  let getWallet = await axios.get(getWalletApi)
console.log("tes")
  return getWallet.data[0]
}

export {GetWallet}