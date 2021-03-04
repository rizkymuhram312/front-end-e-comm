import { Link } from "react-router-dom"


export const allMaster = props => {

    return (
        <>
            <div class="grid grid-cols-3 gap-4 text-3xl rounded ">
                <div class="flex mt-5">
                    <div class="m-5">
                        <button
                            class="w-48 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                            <span class="mx-auto">Category</span>
                        </button>
                    </div>
                    <div class="m-5">
                        <button
                            class="w-48 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                            <span class="mx-auto">Brand</span>

                        </button>
                    </div>
                    <div class="m-5">
                        <button
                            class="w-48 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                            <span class="mx-auto">Condition</span>

                        </button>
                    </div>
                </div>
            </div>






        </>



    )
}
