import axios from 'axios';
import {apiProductMaster} from '../../config/apiUrl';

const listcate = async () => {
    try {
        // console.log(apiProductMaster)
        let response = await axios.get(`${apiProductMaster}/category/`)
        return await response.data
        
    }
    catch (err) {
        return await err.message
    }
};

const create = async (category) => {
    try {
        let response = await axios.post(`${apiProductMaster}/category/`,{
            data : category
        })
        return await response.data
    } catch(err ) {
        return await err.message
    }
}

const updatecate= async (category) => {
    try {
        let response = await axios.put(`${apiProductMaster}/category/${category.cate_id}`,{
            data : category
        })
        return await response.data 
    } catch(err) {
        return await err.message
    }
}

const deletecate = async (id) => {
    try {
        let response = await axios.delete(`${apiProductMaster}/category/${id}`)
        return await response.data
    } catch(err) {
        return await err.message
    }
};

export {deletecate,updatecate, create, listcate};