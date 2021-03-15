import axios from 'axios';
import {apiExpedition} from "../../../config/apiUrl"

const listExpedition = async ()=> {
    try {
        let response = await axios.get(`${apiExpedition}/expedition`)
        return await response.data
    }catch(err){
        return await err.message
    }
}


const deleteExpedition = async (id)=>{
    try{
        let response = await axios.delete(`${apiExpedition}/expedition/${id}`)
        return await response.data
    }catch(err){
        return await err.message
    }
}


const createExpedition = async (expedition) =>{
    try {
        let response = await axios.post(`${apiExpedition}/expedition/`,{
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
        let response = await axios.put(`${apiExpedition}/expedition/${expedition.expe_id}`,{
          data : expedition
        })
        console.log(response.data)
        return await response.data
      } catch(err) {
        return await err.message
      }
  };

  



export {listExpedition, deleteExpedition, createExpedition, updateExpedition}