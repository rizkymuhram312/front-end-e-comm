const Payment = () => {
    let [counter, setCounter] = useState(0);
    let text = " . . . . . . . .".split("")
    let [loadingText, setLoadingText] = useState(text[0])
    let [refresh, setRefresh] = useState(false)
    let [showVerifyPin, setShowVerifyPin] = useState(false)
    let [loading, setLoading] = useState(false)
    let [verified, setVerified] = useState(false)
    let [paid, setPaid] = useState(false)

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
                        </div> :null
        }
        </>
    )
}

export default Payment