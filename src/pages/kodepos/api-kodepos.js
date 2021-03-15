import axios from 'axios'
import {apiUserAccount} from '../../config/apiUrl'




const listKodepos = async () => {
    try {
        let response = await axios.get(`${apiUserAccount}/kodepos/`)
        return await response.data
    }   catch(err){
        return await err.message
    }
}

//2.createRegion, gunakan variable data untuk di send ke backend
// di backend, jangan lupa pake req.body.data, agar bisa di extract ke tiap attribute
const create = async (kodepos) => {
    try {
        let response = await axios.post(`${apiUserAccount}/kodepos/`,{
          data : kodepos
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const deleteKodepos = async (kodeposId) => {
    try {
        let response = await axios.delete(`${apiUserAccount}/kodepos/${kodeposId}`)
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const updateKodepos = async (kodepos) => {
    try {
        let response = await axios.put(`${apiUserAccount}/kodepos/${kodepos.kodepos}`,{
          data : kodepos
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  

export {listKodepos, create, deleteKodepos, updateKodepos}