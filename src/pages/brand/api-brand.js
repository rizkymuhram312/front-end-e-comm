import axios from 'axios';
import {apiProductMaster} from '../../config/apiUrl';

const listbrand = async () => {
    try {
        let response = await axios.get(`${apiProductMaster}/brand/`)
        return await response.data        
    }
    catch (err) {
        return await err.message
    }
};

const create = async (brand) => {
    try {
        let response = await axios.post(`${apiProductMaster}/brand/`,{
            data : brand
        })
        return await response.data
    } catch(err ) {
        return await err.message
    }
}

const updatebrand = async (brand) => {
    try {
        let response = await axios.put(`${apiProductMaster}/brand/${brand.brand_id}`,{
            data : brand
        })
        return await response.data 
    } catch(err) {
        return await err.message
    }
}

const deletebrand = async (id) => {
    try {
        let response = await axios.delete(`${apiProductMaster}/brand/${id}`)
        return await response.data
    } catch(err) {
        return await err.message
    }
};

export {deletebrand,updatebrand, create, listbrand};