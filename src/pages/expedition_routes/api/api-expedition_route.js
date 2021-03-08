import axios from 'axios'

const ListExpeditionRoute = async ()=> {
    try {
        let response = await axios.get('http://localhost:3007/api/expeditionroute')
        return await response.data
    }catch(err){
        return await err.message
    }
}



const CreateExpeditionRoute= async (expeditionRoutes)=>{
    console.log("CreateExpeditionRoute")
    console.log(expeditionRoutes)
    try{
        let response = await axios.post('http://localhost:3007/api/expeditionroute',{
            data: expeditionRoutes
        })
        return await response.data
    }catch(err){
        return await err.message
    }
}


const DeleteExpeditionRoute = async (id)=>{
    try{
        let response = await axios.delete(`http://localhost:3007/api/expeditionroute/${id}`)
        return await response.data
    }catch(err){
        return await err.message
    }
}


const UpdateExpeditionRoute = async (expeditionRoutes) => {
    try {
        let response = await axios.put(`http://localhost:3007/api/expedition/${expeditionRoutes.exro_id}`,{
          data : expeditionRoutes
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };




export {ListExpeditionRoute, CreateExpeditionRoute, DeleteExpeditionRoute, UpdateExpeditionRoute}