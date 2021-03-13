const Payment = () => {
    const orders = {
        "order_name":"",
    }
    return (
        <div className="grid place-content-center border-red-500">
            <form className="max-w-md">
                <input type="text" className="max-w-full p-3 mt-10 shadow-lg bg-white rounded-xl mr-2 focus:outline-none focus:ring-2 font-light"/>
                <input type="text" className="max-w-full p-3 mt-10 shadow-lg bg-white rounded-xl mr-2 focus:outline-none focus:ring-2 font-light"/>
                <input type="text" className="max-w-full p-3 mt-10 shadow-lg bg-white rounded-xl mr-2 focus:outline-none focus:ring-2 font-light"/>                
                <button type="submit" className="py-2 px-4 font-extralight text-white rounded-xl bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Search</button>
            </form>
        </div>
    )
}

export default Payment