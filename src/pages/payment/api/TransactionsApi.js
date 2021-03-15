import axios from 'axios'
import {useState,useEffect} from 'react'
import {apiPayment} from '../../../config/apiUrl'

const useTransactions = (acco_id) => {
    console.log(acco_id)
    let transactionsApi = apiPayment+"/walletTransaction/"+acco_id
    const [transaction,setTransaction] = useState([])
    
    useEffect(() => {
        axios.get(transactionsApi).then((result) => {
            console.log(result.data)
            if(result.data.length){
                result.data.map((x,y) => {
                    let dateTrans = x.watr_date.toString()
                    let watrDate = new Date(dateTrans).toLocaleString()
                    result.data[y].watr_date = watrDate
                })
                setTransaction(result.data)
            }
        }).catch((err) => {
            console.log(err)
        });
    }, [])

    return transaction
}

export {useTransactions}