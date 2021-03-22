import { Route, Router, Switch } from "react-router"
import { BrowserRouter, Link } from "react-router-dom"
import Brand from "../../pages/brand/brand"

const sidebar = (props) => {

    return (
        <div class="w-screen h-screen flex  justify-center bg-gray-100">
            <div class="w-full mx-auto">
                <div class="bg-white px-6 py-4 my-3 w-3/4 mx-auto shadow rounded-md flex justify-between"
                >
                    <div class="w-full text-center flex justify-between mx-auto">
                        <button
                            type="button"
                            class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                        >
                            <Link to={"/productSaya"}>
                            Product
                            </Link>
              </button>
                        <button
                            type="button"
                            class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                        >
                            <Link to={"/brand"}>
                            Brand
                            </Link>
              </button>
                        <button
                            type="button"
                            class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                        >
                            <Link to={"/category"}>
                            Category
                            </Link>
              </button>



                        <button
                            type="button"
                            class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                        >
                            <Link to={"/condition"}>
                            Condition
                            </Link>
              </button>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default sidebar
