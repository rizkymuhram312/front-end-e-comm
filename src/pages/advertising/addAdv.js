import React from "react";
import axios from "axios";
import Select from "react-select"
import { useEffect, useState } from "react";
import { apiProductTransaction } from "../../config/apiUrl";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";

export default function AddAdv() {
  let history = useHistory();
  const { register, handleSubmit, watch, errors, reset  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset()
  }
  const [Package, setPackage] = useState("Per Click")

  console.log(watch("example")); // watch input value by passing the name of it

  const [Product, setProduct] = useState([]);
  useEffect(() => {
    let fetchProduct = async () => {
      await axios({
        url: `${apiProductTransaction}/api/product/1511`,
        method: "get",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => setProduct(res.data))
        .catch((err) => console.error(err));
    };
    fetchProduct();
  }, []);

  return (
    <div>
        {/* {console.log(control.getValues("packageType").label)} */}
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
            <img src="../samsung.jpg" class=" ml-5 rounded-lg inset-0 w-50 h-50 object-cover " alt="product" style={{display:'block', margin:'auto'}}/>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col content-evenly xl:px-32 md:px-24 p-5">
              <label>Published Date</label>
              <input
                name="publishedDate"
                type="date"
                ref={register({ required: true })}
              />
              {errors.publishedDate && (
                <span className="text-red-500">This field is required</span>
              )}
            
              <label>Package Type</label>
              <select name="packageType" onChange={(e)=>setPackage(e.target.value)} ref={register} >
                <option value="Per Click">Per Click</option>
                <option value="Per Hari">Per Hari</option>
              </select>

            {
                Package==="Per Hari" && <> 
                <label>Finished Date</label>
                    <input
                      name="finishedDate"
                      type="date"
                      ref={register({ required: true })}
                    />
                    {errors.finishedDate && (
                      <span className="text-red-500">This field is required</span>
                    )}
                </>
            }
              

              <label>Amount</label>
              <input
                name="amount"
                type="number"
                ref={register({ required: true })}
              />
              {errors.amount && (
                <span className="text-red-500">This field is required</span>
              )}

              <label>Total Bill Amount</label>
              <input
                name="totalBill"
                type="number"
                ref={register({ required: true })}
              />
              {errors.totalBill && (
                <span className="text-red-500">This field is required</span>
              )}

              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
