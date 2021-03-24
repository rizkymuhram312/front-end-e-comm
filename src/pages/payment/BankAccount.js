import { GetBankAccount, CreateBankAccount, UpdateBankAccount, DeleteBankAccount } from './api/index'
import { useState, useEffect } from 'react'
import AddBankAccountModal from './BankAccountModal'
import { useBanks } from './api/index'

const BankAccount = () => {
  let banks = useBanks({})
  let [editForm, setEditForm] = useState(false)
  let [bankAccount, setBankAccount] = useState([])
  let [dataFormBankAccount, setDataFormBankAccount] = useState({})
  let [refresh, setRefresh] = useState(false)
  let acco_id = localStorage.getItem("dataAccountId")
  let [errorApi, setErrorApi] = useState("")
  let [modal, setModal] = useState(false)

  useEffect(() => {
    fetchData()
  }, [refresh])

  let fetchData = async () => {
    try {
      let getBankAccount = await GetBankAccount(acco_id)
      setBankAccount(getBankAccount)
    } catch (err) {
      if (err === -4073) {
        setBankAccount([])
        setErrorApi("Server in trouble")
      } else {
        setBankAccount([])
        setErrorApi("Belum ada akun bank")
      }
    }
  };

  const onDelete = async (x) => {
    await DeleteBankAccount(x.target.value);
    setRefresh(!refresh);
  };

  const onCreateBankAccount = async () => {
    if (editForm) {
      await UpdateBankAccount(dataFormBankAccount)
      setRefresh(!refresh)
    } else {
      await CreateBankAccount(dataFormBankAccount)
      setRefresh(!refresh)
    }
  }

  const onEdit = (x) => {
    try {
      bankAccount.map((data) => {
        if (Number(x.target.value) === data.bacc_id) {
          setDataFormBankAccount(data)
        }
      })
      setEditForm(true)
      setModal(true)      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="grid max-w-full mx-auto mt-10 text-center border border-primary rounded-md overflow-hidden text-text_primary">
        <table>
          <thead>
            <tr className="bg-table">
              <th className="w-1/4 font-extralight">Bank</th>
              <th className="w-1/4 font-extralight" >Pemilik</th>
              <th className="w-1/4 font-extralight">No Rek</th>
              <th className="w-1/4"></th>
            </tr>
          </thead>
          <tbody>
            {
              bankAccount == undefined ?
                <tr key="error" className="text-gray-700"><td>{errorApi}</td></tr>
                :
                bankAccount.map((x) => {
                  return (
                    <tr className="text-text_primary" key={x.bacc_id}>
                      <td>{x.bank.bank_name}</td>
                      <td>{x.bacc_owner}</td>
                      <td>{x.bacc_acc_number}</td>
                      <td>
                        <button defaultValue={x.bacc_id} value={x.bacc_id}>
                          <img className="w-8 h-8" src="delete-icon.png" onClick={onDelete}/>
                        </button>
                        <button defaultValue={x.bacc_id} onClick={onEdit} className=" outline-none">
                          <img className="w-7 h-7 mx-2" src="modify-icon.png" />
                        </button>
                      </td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>
      </div>

      <button onClick={() => { setModal(true) }} className=" font-medium max-w-lg px-3 p-1 bg-button rounded-lg mt-2 text-text_primary">Add Bank Account</button>
      {
        modal ?
          <AddBankAccountModal
            onCreateBankAccount={onCreateBankAccount}
            acco_id={acco_id}
            modal={modal}
            banks={banks.data}
            setModal={setModal}
            setDataFormBankAccount={setDataFormBankAccount}
            dataFormBankAccount={dataFormBankAccount}
            editForm={editForm}
            setEditForm={setEditForm}
          />
          : null
      }
    </>
  )
}

export default BankAccount;
