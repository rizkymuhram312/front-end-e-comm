import axios from 'axios'
import { apiPayment } from '../../../config/apiUrl'

const GetTransactions = async (acco_id) => {
    let transactionsApi = apiPayment + "/walletTransaction/" + acco_id
    let result = await axios.get(transactionsApi)
    result.data.map((x, y) => {
        let dateTrans = x.watr_date.toString()
        let watrDate = new Date(dateTrans).toLocaleString()
        result.data[y].watr_date = watrDate
    })
    console.log(result)
    return result
}
export { GetTransactions }