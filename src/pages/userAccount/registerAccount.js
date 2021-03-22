import axios from "axios";
import React, { useEffect, useState } from "react";
import Upload from "./upload";
import { apiUserMaster, apiUserAccount } from "../../config/apiUrl";

export default function RegisterAccount() {
  const userName = localStorage.getItem("dataUserName");
  console.log(userName);
  const user_id = localStorage.getItem("dataUserId");
  const [value, setValue] = useState();
  const [isAccount, setisAccount] = useState(false)
  const [username, setUsername] = useState('');
  const [nama, setNama] = useState('');
  const [phone, setPhone] = useState('');
  const [shopName, setShopName] = useState('');
  const [gender, setGender] = useState('');
  const[birthdate, setBirthdate] = useState('');

  const[error, setError] = useState('');
  const[alert, setAlert] = useState('');
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)


  const refresh = () => {
    // re-renders the component
    setValue({});
  };

  useEffect(() => {
    // console.log(isAccount)
    if (
      localStorage.dataAccountId == null ||
      localStorage.dataAccountId == undefined
    ) {
      setisAccount(false);
      setValue({});
    } else {
      setisAccount(true);
      setValue({});
    }
    setValue({});
  }, [localStorage.dataAccountId]);

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
    setError("");
  };

  const onChangeNama = (e) => {
    const value = e.target.value;
    setNama(value);
    setError("");
  };

  const onChangePhone = (e) => {
    const value = e.target.value;
    setPhone(value);
    setError("");
  };

  const onChangeShopName = (e) => {
    const value = e.target.value;
    setShopName(value);
    setError("");
  };

  const onChangeGender = (e) => {
    const value = e.target.value;
    setGender(value);
    setError("");
  };

  const onChangeBirthdate = (e) => {
    const value = e.target.value;
    setBirthdate(value);
    setError("");
  };

  const daftarAccount = () => {
    const data = {
      acco_username: userName,
      acco_nama: nama,
      acco_phone: phone,
      acco_shopname: shopName,
      acco_gender: gender,
      acco_birthdate: birthdate,
      acco_avatar: null,
      acco_user_id: user_id,
    };

    axios
      .post(`${apiUserAccount}/account`, data)
      .then((result) => {
        if (result) {
          console.log(result.data);
          if (result.data) {
            console.log(result.data)
            localStorage.setItem("dataAccountId", result.data.data.acco_id);
            localStorage.setItem("dataAccountShopName",result.data.data.acco_shopname);
            localStorage.setItem("dataAccountPhone", result.data.data.acco_phone);
            localStorage.setItem("dataAccountBirthdate",result.data.data.acco_birthdate);
            setUsername("");
            setNama("");
            setPhone("");
            setShopName("");
            setGender("");
            setBirthdate("");
            setAlert(result.data.message);
            setTimeout(() => {
              setAlert("");
            }, 2500);
          }
        }
      })
      .catch((e) => {
        setError(e.response.data.message);
      });
  };

return (
    <>
      
    </>
  );
}
