import axios from 'axios'




const listKecamatan = async () => {
    try {
        let response = await axios.get("http://192.168.100.35:3001/api/kecamatan/")
        return await response.data
    }   catch(err){
        return await err.message
    }
}

//2.createRegion, gunakan variable data untuk di send ke backend
// di backend, jangan lupa pake req.body.data, agar bisa di extract ke tiap attribute
const create = async (kecamatan) => {
    try {
        let response = await axios.post("http://192.168.100.35:3001/api/kecamatan/",{
          data : kecamatan
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const deleteKecamatan = async (kecamatanId) => {
    try {
        let response = await axios.delete(`http://192.168.100.35:3001/api/kecamatan/${kecamatanId}`)
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const updateKecamatan = async (kecamatan) => {
    try {
        let response = await axios.put(`http://192.168.100.35:3001/api/kecamatan/${kecamatan.kec_id}`,{
          data : kecamatan
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  

export {listKecamatan, create, deleteKecamatan, updateKecamatan}