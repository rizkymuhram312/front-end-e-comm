import {GetBankAccount,CreateBankAccount,UpdateBankAccount,DeleteBankAccount} from './api/index'
import {useState, useEffect} from 'react'
import AddBankAccountModal from './BankAccountModal'
import {useBanks} from './api/index'

const BankAccount = () => {
  let banks = useBanks({})
  let [editForm,setEditForm] = useState(false)
  let [bankAccount,setBankAccount] = useState([])
  let [dataFormBankAccount,setDataFormBankAccount] = useState({})
  let [refresh,setRefresh] = useState(false)
  let acco_id = localStorage.getItem("dataAccountId")
  let [errorApi,setErrorApi] = useState("")
  let [modal,setModal] = useState(false)

  useEffect(() => {
    fetchData()
    console.log(acco_id)
  },[refresh])

  let fetchData = async () => {
    try {
      let getBankAccount = await GetBankAccount(acco_id);
      setBankAccount(getBankAccount);
    } catch (err) {
      if (err === -4073) {
        setBankAccount([]);
        setErrorApi("Server in trouble");
      } else {
        setBankAccount([]);
        setErrorApi("Belum ada akun bank");
      }
    }
  };

  const onDelete = async (x) => {
    await DeleteBankAccount(x.target.value);
    setRefresh(!refresh);
  };

  const onCreateBankAccount = async () => {
    if (editForm) {
      await UpdateBankAccount(dataFormBankAccount);
      setRefresh(!refresh);
    } else {
      console.log("inside a create and waiting");
      let createAccount = await CreateBankAccount(dataFormBankAccount);
      console.log("create done");
      setRefresh(!refresh);
    }
  };

  const onEdit = (x) => {
    bankAccount.map((data) => {
      console.log(data);
      if (Number(x.target.value) === data.bacc_id) {
        setDataFormBankAccount(data);
      }
    });
    setEditForm(true);
    setModal(true);
  };

  return (
    <>
      <div className="grid max-w-full mx-auto mt-10 text-center border border-gray-500 rounded-xl overflow-hidden text-white">
        <table>
          <thead>
            <tr className=" bg-gray-700">
              <th className="w-1/4 font-extralight">Bank</th>
              <th className="w-1/4 font-extralight">Pemilik</th>
              <th className="w-1/4 font-extralight">No Rek</th>
              <th className="w-1/4"></th>
            </tr>
          </thead>
            <tbody>
              {
                bankAccount.length < 1 ?
                <tr key="error" className="text-gray-900"><td>{errorApi}</td></tr> 
                : 
                bankAccount.map((x) => {
                  return (
                  <tr key={x.bacc_id} className=" text-black bg-white rounde-xl">
                      <td>{x.bank.bank_name}</td>
                      <td>{x.bacc_owner}</td>
                      <td>{x.bacc_acc_number}</td>
                      <td>
                          <button value={x.bacc_id} className=" w-4/12 bg-red-500 hover:bg-red-800 font-light rounded-lg text-white mr-5" onClick={onDelete}>DELETE</button>
                          <button value={x.bacc_id} className=" w-4/12 bg-blue-500 hover:bg-blue-800 font-light rounded-lg text-white mr-5" onClick={onEdit}>EDIT</button>
                      </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>

      <button
        onClick={() => {
          setModal(true);
        }}
        className=" max-w-lg px-3 p-1 bg-green-600 rounded-lg mt-2 text-white font-extralight"
      >
        Add Bank Account
      </button>
      {modal ? (
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
      ) : null}
    </>
  );
};

export default BankAccount;
