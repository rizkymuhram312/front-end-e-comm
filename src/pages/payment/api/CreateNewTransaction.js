import axios from 'axios'
import {apiPayment} from '../../../config/apiUrl'
const createNewtransactionApi = apiPayment+"/walletTransaction"

const CreateNewTransaction = async (data) => {
    try {
        let result = await axios.post(createNewtransactionApi,data)
        console.log(result)
        return result
    } catch (error) {
        throw error
    }
}

export {CreateNewTransaction}