import axios from 'axios';
import {apiProductMaster} from '../../config/apiUrl';

const listCond = async () => {
    try {
        // console.log(apiProductMaster)
        let response = await axios.get(`${apiProductMaster}/condition/`)
        return await response.data
        
    }
    catch (err) {
        return await err.message
    }
};

const create = async (condition) => {
    try {
        let response = await axios.post(`${apiProductMaster}/condition/`,{
            data : condition
        })
        return await response.data
    } catch(err ) {
        return await err.message
    }
}

const updateCond= async (condition) => {
    try {
        let response = await axios.put(`${apiProductMaster}/condition/${condition.cond_name}`,{
            data : condition
        })
        return await response.data 
    } catch(err) {
        return await err.message
    }
}

const deleteCond = async (name) => {
    try {
        let response = await axios.delete(`${apiProductMaster}/condition/${name}`)
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