import axios from 'axios';
import apiURL from '../config/config-url';

const listbrand = async () => {
    try {
        // console.log(apiURL)
        let response = await axios.get(`${apiURL}/api/brand/`)
        return await response.data
        
    }
    catch (err) {
        return await err.message
    }
};

const create = async (brand) => {
    try {
        let response = await axios.post(`${apiURL}/api/brand/`,{
            data : brand
        })
        return await response.data
    } catch(err ) {
        return await err.message
    }
}

const updatebrand = async (brand) => {
    try {
        let response = await axios.put(`${apiURL}/api/brand/${brand.brand_id}`,{
            data : brand
        })
        return await response.data 
    } catch(err) {
        return await err.message
    }
}

const deletebrand = async (id) => {
    try {
        let response = await axios.delete(`${apiURL}/api/brand/${id}`)
        return await response.data
    } catch(err) {
        return await err.message
    }
};

export {deletebrand,updatebrand, create, listbrand};