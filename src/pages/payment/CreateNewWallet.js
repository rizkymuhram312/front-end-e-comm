import {useState,useEffect} from 'react'
import {CreateWalletApi} from './api/GetWallet'
const CreateWallet = (props) => {
    let [pinNumber,setPinNumber] = useState()
    let [valid,setValid] = useState(null)
    let [pin1,setPin1] = useState()
    let [pin2,setPin2] = useState()

    const onHandleSubmitPinNumber = async (e) => {
        e.preventDefault()
        if(valid){
            console.log("valid")
            const data = {
                wale_acco_id:props.acco_id,
                wale_pin_number:pin1,
                wale_saldo:0
            }
            let result = await CreateWalletApi(data)
            console.log(result)
            props.setShowActivateWalletForm(false)
        }
    }

    useEffect(() => {
        setValid(pin1===pin2)
    },[pin1,pin2])

  return(
      <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75 "onClick={()=>props.setShowActivateWalletForm(!props.showActivateWalletForm)}></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform trantition-all sm:my-8 sm:align-middle" role="dialog" aria-modal="true" aria-labelledby="modal-header">
                  <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                        <form className="flex flex-col z-50" onSubmit={onHandleSubmitPinNumber}>
                            <input maxlength="6" className="border py-2 my-2 rounded-md px-2" value={pin1} onChange={(e)=>setPin1(e.target.value)} type="password" name="pin1" placeholder="Enter wallet pin number"/>
                            <input maxlength="6" className={valid===false?"border rounded-md px-2 border-red-500 focus:outline-none focus:ring-0.2 focus:ring-red-500 py-2 my-2":"rounded-md border py-2 my-2 px-2"} value={pin2} onChange={(e)=>setPin2(e.target.value)} type="password" name="pin2" placeholder="Re-enter wallet pin number"/>
                            <input type="submit" className=" bg-gray-700 text-white rounded-lg py-2 shadow-lg"/>
                        </form>
                    </div>
                </div>
              </div>
          </div>
      </div>
  )
}

export {CreateWallet}