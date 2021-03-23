import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiPayment } from '../../config/apiUrl'

const VerifyPayment = (props) => {
    let acco_id = props.acco_id
    let apiPin = apiPayment + "/walletTransaction"
    const [pin, setPin] = useState('s')
    const data = props.data
    
    const onSubmit = (e) => {
        e.preventDefault()
        data.pin_number = pin
        axios.post(apiPin, data).then((result) => {
            console.log(result)
            if (result.data) {
                props.setLoading(true)
                setTimeout(() => {
                    props.setShowVerifyPin(false)
                    props.setVerified(true)
                    props.setPaid(true)
                    props.setLoading(false)
                }, 5000);
            } else {
                props.setVerified(false)
            }
        }).catch((err) => {
            console.log(err)
        });
    }


  const onHandlePinInputChange = (event) => {
    let checkInput = "";
    event.target.value == undefined || null
      ? (checkInput = "")
      : (checkInput = event.target.value);
    if (checkInput.toString().length > 6) {
    } else {
      setPin(event.target.value);
    }
  };

    return (
        <>
            {
                <div className="flex flex-col h-screen place-content-center text-center">
                    <header className="h-10 mt-28">
                        <h1 className="font-bold text-4xl">Securing your transaction</h1>
                    </header>
                    <main className="mb-auto h-10 ">    
                        <form onSubmit={onSubmit}>
                            <input type="password" value={pin} onChange={onHandlePinInputChange} name="pin" placeholder="WALLET PIN NUMBER" className="w-2/12 p-3 mt-5 shadow-lg bg-white rounded-xl mr-2 focus:outline-none focus:ring-2 font-light"></input>
                            <button type="submit" className="py-2 px-4 font-extralight text-white rounded-xl bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">VERIFY</button>
                        </form>
                        <h1 className="text-red-600" style={{ visibility: props.verified || props.verified === null ? 'hidden' : 'visible' }} >PIN SALAH, SILAHKAN INPUT KEMBALI</h1>
                    </main>
                    <footer>Supported By Code.ID</footer>
                </div>
            }
        </>
    )
}

export default VerifyPayment;
