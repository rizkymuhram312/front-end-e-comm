import axios from 'axios'




const listAccount = async () => {
    try {
        let response = await axios.get("http://192.168.100.35:3001/api/account/")
        return await response.data
    }   catch(err){
        return await err.message
    }
}

//2.createRegion, gunakan variable data untuk di send ke backend
// di backend, jangan lupa pake req.body.data, agar bisa di extract ke tiap attribute
const create = async (account) => {
    try {
        let response = await axios.post("http://192.168.100.35:3001/api/account/",{
          data : account
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const deleteAccount = async (accountId) => {
    try {
        let response = await axios.delete(`http://192.168.100.35:3001/api/account/${accountId}`)
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const updateAccount = async (account) => {
    try {
        let response = await axios.put(`http://192.168.100.35:3001/api/account/${account.acco_id}`,{
          data : account
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  

export {listAccount, create, deleteAccount, updateAccount}