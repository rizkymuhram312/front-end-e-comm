import React from "react";
import axios from "axios";
import Select from "react-select"
import { useEffect, useState } from "react";
import { apiAdvertising, apiProductTransaction } from "../../config/apiUrl";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";

export default function AddAdv() {
  let history = useHistory();
  const adv_id = localStorage.getItem("adv_id")
  const { register, handleSubmit, watch, errors, reset, setValue  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset()
  }
  const [Package, setPackage] = useState("Per Click")
  const [Pack, setPack] = useState([])
  const [Amount, setAmount] = useState(0)
  const [BillAmount, setBillAmount] = useState(0)
  const acco_id = localStorage.getItem("dataAccountId")

  // console.log(watch("example")); // watch input value by passing the name of it

  const [Product, setProduct] = useState([]);
  useEffect(() => {
    fetchProduct();
    fetchPack()
  }, []);

  const fetchProduct = async () => {
    return await axios({
      url: `${apiProductTransaction}/product/${adv_id}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  };
  
  const fetchPack = async () => {
    return await axios({
      url: `${apiAdvertising}/packageType/`,
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => setPack(res.data))
      .catch((err) => console.error(err));
  };

  const numberWithCommas = (n) => {
    let nString = ""
    let nStringCheck = n.toString()
    let nSLength = nStringCheck.length
    while(nSLength>3){
        nString = nStringCheck.slice(nSLength-3,nSLength) + "." + nString
        nSLength -= 3
    }
    nString = nStringCheck.slice(0,nSLength) + "." + nString
    nString = nString.slice(0,-1)
    return nString
}

  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-3/12 md:mt-10 px-1 text-center font-bold text-md flex flex-row justify-evenly md:flex-col md:justify-start ">
          <div
            className="py-5 px-2 hover:text-secondary hover:bg-white"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/advertising/my-pkg")}
          >
            Package Adv
          </div>
          <div
            className="py-5 px-2 hover:text-secondary hover:bg-white"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/advertising/my-adv")}
          >
            My Product
          </div>
          <div
            className="py-5 px-2 hover:text-secondary hover:bg-white"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/advertising/add-adv")}
          >
            Advertising
          </div>
        </div>
        <div className="w-full md:w-9/12">
            {Product.product_images && <img src={`../${Product.product_images[0]?Product.product_images[0].prim_filename:"adv.jpg"}`} class=" ml-5 rounded-lg inset-0 w-64 h-64 object-cover " alt="product" style={{display:'block', margin:'auto'}}/>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col content-evenly xl:px-32 md:px-24 p-5">
              <label className="mt-2">Published Date</label>
              <input
                name="publishedDate"
                type="date"
                ref={register({ required: true })}
                className="bg-gray-200 p-1 rounded"
              />
              {errors.publishedDate && (
                <span className="text-red-500">This field is required</span>
              )}
            
              <label className="mt-2">Package Type</label>
              <select name="packageType" onChange={(e)=>{
                var index = e.target.selectedIndex
                setPackage(e.target[index].text)
                setAmount(e.target.value)
              }
            } ref={register} 
                className="bg-gray-200 rounded p-1"
                >
                {
                  Pack.map(x=> <option value={x.pack_amount}>{x.pack_name}</option>)
                }
              </select>

            {
                Package.includes("hari") && <> 
                <label className="mt-2">Finished Date</label>
                    <input
                      name="finishedDate"
                      type="date"
                      className="bg-gray-200 rounded p-1"
                    />
                    {errors.finishedDate && (
                      <span className="text-red-500">This field is required</span>
                    )}
                </>
            }
              

              <label className="mt-2">Amount</label>
              <input
                name="amount"
                type="number"
                ref={register({ required: true })}
                className="bg-gray-200 rounded p-1"
                onChange={e=>setBillAmount(e.target.value)}
              />
              {errors.amount && (
                <span className="text-red-500">This field is required</span>
              )}

              <label className="mt-2">Total Bill Amount</label>
              <input
                name="totalBill"
                type="text"
                className="bg-gray-200 p-1 rounded "
                ref={register}
                value={"Rp. "+numberWithCommas(BillAmount * Amount) }
              />
              {errors.totalBill && (
                <span className="text-red-500">This field is required</span>
              )}

              <input type="submit" className="mt-5 bg-button hover:bg-green-300 rounded p-2 w-64 text-white font-bold block m-auto cursor-pointer" onClick={()=>setValue("totalBill",BillAmount * Amount)} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
