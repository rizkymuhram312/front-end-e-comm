import {useState,useEffect} from 'react'
import {GetWallet} from '../api/index'

const useGetSaldo = (props)=> {
    let [saldo,setSaldo] = useState(0)

    useEffect(async () => {
        console.log(props)
        let result = await GetWallet(props.acco_id)
        setSaldo(result.wale_saldo)
    },[])
    return saldo
}

export {useGetSaldo}