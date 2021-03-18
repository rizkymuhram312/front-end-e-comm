import axios from 'axios'
import { apiUserMaster } from '../../config/apiUrl'




const listKecamatan = async () => {
    try {
        let response = await axios.get(`${apiUserMaster}/kecamatan/`)
        return await response.data
    }   catch(err){
        return await err.message
    }
}

//2.createRegion, gunakan variable data untuk di send ke backend
// di backend, jangan lupa pake req.body.data, agar bisa di extract ke tiap attribute
const create = async (kecamatan) => {
    try {
        let response = await axios.post(`${apiUserMaster}/kecamatan/`,{
          data : kecamatan
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const deleteKecamatan = async (kecamatanId) => {
    try {
        let response = await axios.delete(`${apiUserMaster}/kecamatan/${kecamatanId}`)
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const updateKecamatan = (kecamatan) => {
    try {
        let response = axios.put(`${apiUserMaster}/kecamatan/${kecamatan.kec_id}`,{
          data : kecamatan
        })
        return  response.data
      } catch(err) {
        return  err.message
      }
  };
  

export {listKecamatan, create, deleteKecamatan, updateKecamatan}