import axios from 'axios';

const listExpedition = async ()=> {
    try {
        let response = await axios.get('http://localhost:3007/api/expedition')
        return await response.data
    }catch(err){
        return await err.message
    }
}


const deleteExpedition = async (id)=>{
    try{
        let response = await axios.delete(`http://localhost:3007/api/expedition/${id}`)
        return await response.data
    }catch(err){
        return await err.message
    }
}


const createExpedition = async (expedition) =>{
    try {
        let response = await axios.post(`http://localhost:3007/api/expedition/`,{
            data : expedition
        })
        console.log(response)
        return await response.data
    } catch (error) {
        return await error.message
    }
}


const updateExpedition = async (expedition) => {
    try {
        let response = await axios.put(`http://localhost:3007/api/expedition/${expedition.expe_id}`,{
          data : expedition
        })
        console.log(response.data)
        return await response.data
      } catch(err) {
        return await err.message
      }
  };

  



export {listExpedition, deleteExpedition, createExpedition, updateExpedition}