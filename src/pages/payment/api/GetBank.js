import { useEffect, useState } from "react"
import axios from 'axios'
import url from '../../config/config'

const useBanks = () => {
    const getBankApi = url+"/api/bank/"
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