import axios from "axios";
import react from "react";
import React, { useEffect, useState } from "react";
import { apiUserMaster, apiUserAccount } from "../../config/apiUrl";

// asda

const Address = () => {
  const [alamat, setAddress] = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [provinsi, setProvinsi] = useState([]);
  const [kota, setKota] = useState([]);
  const [kecamatan, setKecamatan] = useState("");
  const [kodepos, setKodepos] = useState("");
  const [jalan, setJalan] = useState("");
  const [optional, setOptional] = useState("");
  const [primary, setPrimary] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const ProvId = localStorage.getItem("AddProvId")

  const GetAlamat = async () => {
    const response = await axios.get(`${apiUserAccount}/address/search/1001`);
    return response.data;
  };

  const GetProvinsi = async () => {
    const response = await axios.get(`${apiUserAccount}/province`);
    return response.data;
  };

  useEffect(() => {
    const getListProvinsi = async () => {
      const listProvinsi = await GetProvinsi();
      if (listProvinsi) setProvinsi(listProvinsi);
    };
    getListProvinsi();
  }, []);

  const GetKota = async () => {
    const response = await axios.get(`${apiUserAccount}/city`);
    return response.data;
  };

  useEffect(() => {
    const getListKota = async () => {
      const listKota = await GetKota(ProvId);
      if (listKota) setKota(listKota);
    };
    getListKota();
  }, [ProvId]);

  useEffect(() => {
    const getListAlamat = async () => {
      const listAlamat = await GetAlamat();
      if (listAlamat) setAddress(listAlamat);
    };
    getListAlamat();
  }, []);

  console.log(alamat);
  console.log(provinsi);

  const OnChangeProvince = (e) => {
   const value = e.target.options[e.target.selectedIndex].value;
   localStorage.setItem('AddProvId',value)
  




    console.log(value);
  };

  return (
    <>
      {alamat[0] ? (
        <>
          <div class="w-full mb-12 xl:mb-0 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded bg-blue-400">
              <div class="rounded-t mb-0 px-4 py-3 border-0 bg-blue-500">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full px-4 max-w-full flex-grow flex-1 ">
                    <h3 class="font-semibold text-xl text-blue-50">
                      Alamat Saya
                    </h3>
                  </div>
                  <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <button
                      onClick={() => setShowModal(true)}
                      className="px-6 bg-blue-700 text-blue-50 align-middle border border-solid border-blue-800 hover:bg-blue-200 hover:text-blue-800 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                      type="button"
                    >
                      Tambah Alamat
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative p-6 flex-auto">
                <label>Nama : </label>
                <span>{alamat[0].acco_nama} </span>
                <br />
                <label>No. Telp : </label>

                <span>{alamat[0].acco_phone}</span>
                <br />
                <label>Alamat :</label>
                <div>
                  <span>
                    {alamat[0].addr_address}
                    <br />
                    {alamat[0].city_name} - {alamat[0].kec_name}
                    <br />
                    {alamat[0].prov_name}
                    <br />
                    {alamat[0].kodepos}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <label></label>
      )}

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-xl font-semibold">Tambah Alamat</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className=" grid grid-cols-6 gap-4 my-4 content-center items-center justify-center place-content-center">
                    <h1 className="justify-self-end">Provinsi : </h1>
                    <select
                      name="province"
                      id="province"
                      className="col-span-4 flex-1 border border-gray-300 py-2 px-2 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 mb-2"
                      
                      onChange={OnChangeProvince} 
                    >
                      {provinsi.map((e,index) => {
                        return <option value={e.prov_id} key={index} >{e.prov_name}</option>;
                      })}
                    </select>
                  </div>
                  <div className=" grid grid-cols-6 gap-4 my-4 content-center items-center justify-center place-content-center">
                    <h1 className="justify-self-end">Kota : </h1>
                    <select
                      name="kota"
                      id="kota"
                      className="col-span-4 flex-1 border border-gray-300 py-2 px-2 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 mb-2"
                      
                      // onChange={onChangeProvince} 
                    >

                      { kota ? (
                      kota.map((e,index) => {
                        return <option value={e.city_id} key={index} >{e.city_name}</option>;
                      })
                      ):
                      (
                        <option>Select</option>
                      )
                    }
                      
                    </select>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Address;
