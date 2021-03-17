import axios from 'axios';
import apiURL from '../config/config-url';

const listcate = async () => {
    try {
        // console.log(apiURL)
        let response = await axios.get(`${apiURL}/api/category/`)
        return await response.data
        
    }
    catch (err) {
        return await err.message
    }
};

const create = async (category) => {
    try {
        let response = await axios.post(`${apiURL}/api/category/`,{
            data : category
        })
        return await response.data
    } catch(err ) {
        return await err.message
    }
}

const updatecate= async (category) => {
    try {
        let response = await axios.put(`${apiURL}/api/category/${category.cate_id}`,{
            data : category
        })
        return await response.data 
    } catch(err) {
        return await err.message
    }
}

const deletecate = async (id) => {
    try {
        let response = await axios.delete(`${apiURL}/api/category/${id}`)
        return await response.data
    } catch(err) {
        return await err.message
    }
};

export {deletecate,updatecate, create, listcate};