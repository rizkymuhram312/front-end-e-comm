import { useEffect, useState } from "react"
import axios from 'axios'
import {apiPayment} from '../../../config/apiUrl'

const useBanks = () => {
    const getBankApi = apiPayment+"/bank/"
    const [bank,setBank] = useState()

  useEffect(() => {
    axios.get(getBankApi).then((result) => {
      setBank(result)
    }).catch((err) => {
      return err
    });
  },[])
  return bank
}

export {useBanks}