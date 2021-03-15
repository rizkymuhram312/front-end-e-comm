import {useTransactions} from './api/index'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

const Transactions = () => {
    let [transactionsAccount,setTransactionsAccount] = useState([])
    let {acco_id} = useParams()
    let transactions = useTransactions(acco_id)

    const fixNotation = (n) => {
        let nString = ""
        let nStringCheck = n.toString()
        let nSLength = nStringCheck.length
        while(nSLength>3){
            nString = nStringCheck.slice(nSLength-3,nSLength) + "." + nString
            nSLength -= 3
        }
        nString = nStringCheck.slice(0,nSLength) + "." + nString
        nString = nString.slice(0,-1)
        return nString
    }

    useEffect(() => {
        if (Array.isArray(transactions)) {
            setTransactionsAccount(transactions)  
        }else{
            setTransactionsAccount([])
        }
    }, [transactions])

    return(
        <div className="grid max-w-full mx-auto mt-10 text-center border border-gray-500 rounded-lg overflow-hidden text-white">
        <table>
        <thead>
          <tr className=" h-8 shadow-2xl bg-gray-700 ">
              <th className="w-2/12 font-extralight">Date</th>
              <th className="w-1/12 font-extralight">From</th>
              <th className="w-1/12 font-extralight">To</th>
              <th className="w-2/12 font-extralight">Debit</th>
              <th className="w-2/12 font-extralight">Transaction Number</th>
              <th className="w-1/12 font-extralight">Transaction Type</th>
          </tr>
        </thead>
          <tbody>
              {
                transactionsAccount.length < 1 ? (<tr className="text-black"><td>Belum ada transactions</td></tr>):(
                    transactionsAccount.map((x) => {
                        return (
                    <tr className=" text-black bg-white rounde-xl">
                        <td>{x.watr_date}</td>
                        <td>Wallet</td>
                        <td>{x.watr_acc_target}</td>
                        <td>Rp. {fixNotation(x.watr_debet)}</td>
                        <td>{x.watr_numbers}</td>
                        <td>{x.watr_paty_name}</td>
                    </tr>   
                    )
                })
                )
              }
          </tbody>
        </table>
    </div>
    )
}
export default Transactions 