import axios from 'axios'




const listCity = async () => {
    try {
        let response = await axios.get("http://192.168.100.35:3001/api/city/")
        return await response.data
    }   catch(err){
        return await err.message
    }
}

//2.createRegion, gunakan variable data untuk di send ke backend
// di backend, jangan lupa pake req.body.data, agar bisa di extract ke tiap attribute
const create = async (city) => {
    try {
        let response = await axios.post("http://192.168.100.35:3001/api/city/",{
          data : city
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const deleteCity = async (cityId) => {
    try {
        let response = await axios.delete(`http://192.168.100.35:3001/api/city/${cityId}`)
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const updateCity = async (city) => {
    try {
        let response = await axios.put(`http://192.168.100.35:3001/api/city/${city.city_id}`,{
          data : city
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  

export {listCity, create, deleteCity, updateCity}