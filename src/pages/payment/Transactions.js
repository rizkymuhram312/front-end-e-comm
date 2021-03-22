import {useState,useEffect} from 'react'

const Transactions = (props) => {
    let [transactionsAccount,setTransactionsAccount] = useState([])
    const fixNotation = (n) => {
        try {
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
        } catch (error) {
            console.log(error)
            return ""
        }
    }

    useEffect(()=>{
        if(props.transactions == undefined){
            setTransactionsAccount([])
        }else{
            setTransactionsAccount(props.transactions)
        }
    },[props.refresh])

    return(
        <div className="grid max-h-full max-w-full mt-10 text-center border rounded-lg overflow-hidden text-white border-primary">
        <table>
        <thead>
          <tr className="h-10 shadow-md bg-table">
              <th className="w-3/12 font-extralight">Date</th>
              <th className="w-2/12 font-extralight">From</th>
              <th className="w-1/12 font-extralight">To</th>
              <th className="w-2/12 font-extralight">Credit</th>
              <th className="w-2/12 font-extralight">Debit</th>
              <th className="w-2/12 font-extralight">Transaction Number</th>
              <th className="w-1/12 font-extralight px-4">Type</th>
          </tr>
        </thead>
          <tbody>
              {
                transactionsAccount.length < 1 || transactionsAccount == undefined? (<tr className="text-white"><td>Belum ada transactions</td></tr>):(
                    transactionsAccount.map((x) => {
                        return (
                    <tr className=" text-gray-800 bg-white rounde-xl font-thin overflow-hidden">
                        <td className="py-3">{x.watr_date}</td>
                        <td>{x.watr_numbers.toString().split("-")[0] == x.watr_wale_id ? "MyWallet":x.watr_numbers.toString().split("-")[0]}</td>
                        <td>{x.watr_acc_target == 9999 ? 9999 : "MyWallet" }</td>
                        <td>Rp. {fixNotation(x.watr_credit)}</td>
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