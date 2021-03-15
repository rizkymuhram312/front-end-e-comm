const HistoryTransaction = () => {
    
    return(
        <div className="grid max-w-full mx-auto mt-10 text-center border border-gray-500 rounded-xl overflow-hidden text-white">
        <table>
        <thead>
          <tr className=" bg-gray-700">
              <th className="w-1/4 font-extralight">No Transaction</th>
              <th className="w-1/2 font-extralight">Trannsaction Number</th>
          </tr>
        </thead>
          <tbody>
            {
              dataAccountBank.map((x) => {
                return (
                <tr className=" text-black bg-white rounde-xl">
                    <td>{x.bank}</td>
                    <td>{x.no_rek}</td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>

    )
}

export default HistoryTransaction