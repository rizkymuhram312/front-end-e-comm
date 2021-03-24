import {useState,useEffect} from 'react'
import {GetWallet} from './api/index'

const useGetSaldo = (props)=> {
    let [saldo,setSaldo] = useState(0)

    useEffect(async () => {
        let result = await GetWallet(props.acco_id)
        setSaldo(result[0].wale_saldo)
        console.log(result)
        console.log(saldo)
    },[])
    return saldo
}
export {useGetSaldo}