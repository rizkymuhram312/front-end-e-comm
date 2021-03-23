import {useState,useEffect} from 'react'

const AddBankAccountModal = ({
    acco_id,
    modal,
    banks,
    setModal,
    editForm,
    setEditForm,
    onCreateBankAccount,
    dataFormBankAccount,
    setDataFormBankAccount
    }) => {

    const showHideClassName = modal ? "modal display-block" : "modal display-none";
    const [selectedBank,setSelectedBank] = useState("")
    const [owner,setOwner] = useState("")
    const [accountNum,setAccountNum] = useState("")

    const onHandleSubmit = async (x) => {
        x.preventDefault()
        let checkBankOption = selectedBank === "" || selectedBank === "-1" ? alert("Please Select The Bank") : ""
        setModal(false)
        setEditForm(false)
        onCreateBankAccount()
    }

    useEffect(() => {
        // Kalo Edit true, ini proses inisiasi form
        if (editForm) {
            setSelectedBank(dataFormBankAccount.bacc_bank_id)
            setOwner(dataFormBankAccount.bacc_owner)
            setAccountNum(dataFormBankAccount.bacc_acc_number)
        }else{
            //form dikosongkan
            setSelectedBank()
            setOwner()
            setAccountNum()
        }
    }, [editForm])

    const onCancelEdit = () => {
        setEditForm(false)
        setModal(false)
    }
    
    useEffect(() => {
        setDataFormBankAccount({...dataFormBankAccount,
            bacc_bank_id : selectedBank,
            bacc_owner : owner,
            bacc_acc_number : accountNum,
            bacc_acco_id : acco_id
            })
    }, [selectedBank,owner,accountNum])

    return (
    <div className={showHideClassName}>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="mt-2">
                    <div className="block pl-2 font-semibold text-xl text-center text-gray-700">
                        <h2 className="">Add Bank Account</h2>
                    </div>
                    <form className="mt-5" onSubmit={onHandleSubmit}>
                        <div className="flex flex-col">
                            <label className="leading-loose">Bank</label>
                            <select value={selectedBank} className="h-10 rounded-lg text-white bg-gray-600 mb-1" onChange={(x)=>setSelectedBank(x.target.value)}>
                                <option value="-1" >Select Bank</option>
                                {
                                    banks.map((x) => {
                                      return <option key={x.bank_id} className="rounded-lg" value={x.bank_id}>{x.bank_name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="leading-loose">Nama Pemilik</label>
                            <input required value={owner} onChange={(x)=>setOwner(x.target.value)} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title"/>
                        </div>  
                        <div className="flex flex-col">
                            <label className="leading-loose">Nomor Rekening</label>
                            <input required value={accountNum} onChange={(x)=>setAccountNum(x.target.value)} type="number" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title"/>
                        </div>
                        <input type="submit" className=" mt-4 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-button text-base font-medium text-text_primary hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"/>
                        <button onClick={onCancelEdit} className="mt-4 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </form>
                    </div>
                  </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AddBankAccountModal