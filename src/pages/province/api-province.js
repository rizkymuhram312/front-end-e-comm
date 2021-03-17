import axios from 'axios'
import { apiUserMaster, apiUserAccount } from '../../config/apiUrl'




const listProvince = async () => {
    try {
        let response = await axios.get(`${apiUserAccount}/province/`)
        return await response.data
    }   catch(err){
        return await err.message
    }
}

//2.createRegion, gunakan variable data untuk di send ke backend
// di backend, jangan lupa pake req.body.data, agar bisa di extract ke tiap attribute
const create = async (province) => {
    try {
        let response = await axios.post(`${apiUserAccount}/province/`,{
          data : province
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const deleteProvince = async (provinceId) => {
    try {
        let response = await axios.delete(`${apiUserAccount}/province/${provinceId}`)
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const updateProvince = async (province) => {
    try {
        let response = await axios.put(`${apiUserAccount}/province/${province.prov_id}`,{
          data : province
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  

export {listProvince, create, deleteProvince, updateProvince}