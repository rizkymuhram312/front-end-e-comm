import axios from 'axios';
import apiURL from '../config/config-url';

const listCond = async () => {
    try {
        // console.log(apiURL)
        let response = await axios.get(`${apiURL}/api/condition/`)
        return await response.data
        
    }
    catch (err) {
        return await err.message
    }
};

const create = async (condition) => {
    try {
        let response = await axios.post(`${apiURL}/api/condition/`,{
            data : condition
        })
        return await response.data
    } catch(err ) {
        return await err.message
    }
}

const updateCond= async (condition) => {
    try {
        let response = await axios.put(`${apiURL}/api/condition/${condition.cond_name}`,{
            data : condition
        })
        return await response.data 
    } catch(err) {
        return await err.message
    }
}

const deleteCond = async (name) => {
    try {
        let response = await axios.delete(`${apiURL}/api/condition/${name}`)
        return await response.data
    } catch(err) {
        return await err.message
    }
};

export {
    deleteCond,
    updateCond, 
    create, 
    listCond};