import {useState,useEffect} from 'react'
import {useGetSaldo} from './GetSaldo'
import {useParams} from 'react-router-dom'

const NewTransaction = () => {
    const order = {
        "total_amount":10000000,
        "order_name":"666666666",
        "transaction_type":"order"
    }

    let {acco_id} = useParams()
    let [less,setLess] = useState()
    let saldo = useGetSaldo({total:order.total_amount,acco_id})
    
    useEffect(() => {
       if (saldo< order.total_amount) {
           setLess(true)
       }else{
           setLess(false)
       }
    },[saldo])


const onClick = (x) => {
    console.log(x)
}
    return (
        <div>
            <div>
                <p>total : {order.total_amount}</p>
                <h1>order name : {order.order_name}</h1>
                <h1>transactions_type : {order.transaction_type}</h1>
                {
                    less ? <h1 className=" text-red-600">Saldo Kurang jancuk</h1> : null
                }
                <button className="bg-gray-500 text-white w-1/12 rounded-lg"  onclick={onClick}>Pay</button>
            </div>
        </div>
    )
}

export {NewTransaction}