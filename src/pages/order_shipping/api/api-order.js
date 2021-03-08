import axios from 'axios'

const listOrder = async ()=>{
    try{
        let response = await axios.get('http://192.168.100.21:3004/api/orders')
        console.log(response.data)
        return await response.data
    }catch(err){
        return await err.message
    }
}

export {listOrder}