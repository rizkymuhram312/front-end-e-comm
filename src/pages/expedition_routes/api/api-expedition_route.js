import axios from 'axios'
import {apiExpedition} from "../../../config/apiUrl" 

const ListExpeditionRoute = async ()=> {
    try {
        let response = await axios.get(`${apiExpedition}/expeditionroute`)
        return await response.data
    }catch(err){
        return await err.message
    }
}



const CreateExpeditionRoute= async (expeditionRoutes)=>{
    console.log("CreateExpeditionRoute")
    console.log(expeditionRoutes)
    try{
        let response = await axios.post(`${apiExpedition}/expeditionroute`,{
            data: expeditionRoutes
        })
        
        return await response.data
    }catch(err){
        return await err.message
    }
}


const DeleteExpeditionRoute = async (id)=>{
    try{
        let response = await axios.delete(`${apiExpedition}/expeditionroute/${id}`)
        return await response.data
    }catch(err){
        return await err.message
    }
}


const UpdateExpeditionRoute = async (expeditionRoute) => {
    console.log(expeditionRoute)
    try {
        let response = await axios.put(`${apiExpedition}/expeditionroute/${expeditionRoute.exro_id}`,{
          data : expeditionRoute
        })
        console.log(response.data)
        return await response.data
      } catch(err) {
        return await err.message
      }
  };



export {ListExpeditionRoute, CreateExpeditionRoute, DeleteExpeditionRoute, UpdateExpeditionRoute}