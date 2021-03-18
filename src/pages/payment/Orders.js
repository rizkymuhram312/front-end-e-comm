import { useState, useEffect } from "react";
import VerifyPayment from './VerifyPayment'

const OrdersKw = () => {
    let [counter, setCounter] = useState(0);
    let text = " . . . . . . . .".split("")
    let [loadingText, setLoadingText] = useState(text[0])
    let [refresh, setRefresh] = useState(false)
    let [showVerifyPin, setShowVerifyPin] = useState(false)
    let [loading, setLoading] = useState(false)
    let [verified, setVerified] = useState(false)
    let [paid, setPaid] = useState(false)

    const data = {
        "acco_id": 1006,
        "wale_id": 1031,
        "total_amount": 100000,
        "transaction_type": "Order",
        "order_name": "order12345"
    }

    useEffect(() => {
        console.log(counter)
        if (loading) {
            if (counter > text.length - 1) {
                setCounter(0)
                setLoadingText("")
                setRefresh(!refresh)
            } else {
                setCounter(counter + 1)
                setTimeout(() => {
                    setLoadingText(loadingText + text[counter])
                    setRefresh(!refresh)
                }, 500)
            }
        } else {
            console.log("do nothing")
        }
    }, [loading, refresh])

    const onHandleClickPay = async (e) => {
        try {
            setLoading(true)
            // await CreateNewTransaction(data)
            setTimeout(() => {
                setLoading(false)
                setShowVerifyPin(true)
            }, 2000)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {
                loading ?
                    <div className="grid w-80 mx-auto mt-10 my-2 text-center border shadow-md border-gray-300 rounded-md overflow-hidden text-black bg-gray-100">
                        <h1 className="font-bold">PROCESSING YOUR REQUEST {loadingText}</h1>
                    </div> :
                    showVerifyPin ?
                        <VerifyPayment
                            wale_id={data.wale_id}
                            acco_id={data.acco_id}
                            setShowVerifyPin={setShowVerifyPin}
                            setVerified={setVerified}
                            verified={verified}
                            setLoading={setLoading}
                            setPaid={setPaid}
                            data={data}
                        />
                        : paid ? <div>
                            <h1>Pembayaran Berhasil</h1>
                        </div> :
                            (
                                <div>
                                    <p>{data.acco_id}</p>
                                    <p>{data.wale_id}</p>
                                    <p>{data.total_amount}</p>
                                    <p>{data.transaction_type}</p>
                                    <p>{data.order_name}</p>
                                    <button className="py-2 px-4 font-extralight text-white rounded-xl bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50" onClick={onHandleClickPay}>
                                        Proceed to Payment
                                    </button>
                                </div>
                            )
            }
        </>
    )
}

export default OrdersKw