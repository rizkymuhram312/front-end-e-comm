
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function RegisterAccount() {
  const userName = localStorage.getItem('dataUserName');
  const user_id = localStorage.getItem('dataId');
  const [username, setUsername] = useState(userName);
  const [nama, setNama] = useState('');
  const [phone, setPhone] = useState('');
  const [shopName, setShopName] = useState('');
  const [gender, setGender] = useState('');
  const[birthdate, setBirthdate] = useState('');
  const[error, setError] = useState('');
  const[alert, setAlert] = useState('');

  useEffect(() => {
    console.log('ubah')
  },[username])

  const onChangeUsername = (e) => {
    const value = e.target.value
    setUsername(value)
    setError('')

}

const onChangeNama = (e) => {
  const value = e.target.value
  setNama(value)
  setError('')

}
const onChangePhone = (e) => {
  const value = e.target.value
  setPhone(value)
  setError('')

}
const onChangeShopName = (e) => {
  const value = e.target.value
  setShopName(value)
  setError('')

}
const onChangeGender = (e) => {
  const value = e.target.value
  setGender(value)
  setError('')

}
const onChangeBirthdate = (e) => {
  const value = e.target.value
  setBirthdate(value)
  setError('')

}

const daftarAccount = () => {
  const data = {
    acco_username: userName,
    acco_nama: nama,
    acco_phone: phone,
    acco_shopname: shopName,
    acco_gender: gender,
    acco_birthdate: birthdate,
    acco_avatar: null,
    acco_user_id: user_id

      
  }
  axios.post('http://localhost:3001/api/account', data)
  .then(result => {
      if ( result ) {
          console.log(result.data)
          if (result.data) {
              setUsername('')
              setNama('')
              setPhone('')
              setShopName('')
              setGender('')
              setBirthdate('')
              setAlert(result.data.message)
              setTimeout (() => {
                  setAlert('')
              }, 2500)
          }
      }
  })
  .catch (e => {
      setError(e.response.data.message)

  })
}

  return (
    <>


                <div className="relative py-1 sm:max-w-xl mx-auto text-center">

                    {
                        error && (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                                <p>{error}</p>
                            </div>
                       )
                    }   

                    {
                        alert && (
                            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
                                <p>{alert}</p>
                            </div>
                        )
                    }   
</div>

      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-6 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p class="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-4">
            <form>
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-blue-400 sm:p-6">
                  <label
                    for="username"
                    class="block text-lg font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                    value={username}
                    onChange={onChangeUsername}
                    readOnly
                  />
                  <label
                    for="nama"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    placeholder="Nama"
                    className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                    value={nama}
                    onChange={onChangeNama}
                  />
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700"
              
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Nomor Telepon"
                    className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                    value={phone}
                    onChange={onChangePhone}
                  />
                  <label
                    for="shopname"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Nama Toko
                  </label>
                  <input
                    type="text"
                    placeholder="Nama Toko"
                    className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                    value={shopName}
                    onChange={onChangeShopName}
                  />
                   <label
                    for="gender"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Jenis Kelamin
                  </label>
                  
  <input class="h-5 w-5 text-gray-600" type="radio"  id="laki" name="gender" value="L" onClick={onChangeGender}/>
  <label class="inline-flex items-center text-gray-600 w=4/12 mt-3 mx-5" for="male">Lelaki</label>
  <input class="h-5 w-5 text-gray-600" type="radio" id="perempuan" name="gender" value="P" onClick={onChangeGender}/>
  <label class="inline-flex items-center text-gray-600 w=4/12 mt-3 mx-5" for="female">Perempuan</label>
  <input class="h-5 w-5 text-gray-600" type="radio" id="other" name="gender" value="O" onClick={onChangeGender}/>
  <label class="inline-flex items-center text-gray-600 w=4/12 mt-3 mx-5" for="other">Other</label>


                  <label
                    for="birthdate"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    placeholder="Tanggal lahir"
                    className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                    value={birthdate}
                    onChange={onChangeBirthdate}
                  />

                  {/* <input type="password" placeholder="Confirm Password" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"  value={user_confpassword} onChange={onChangeConfPassword} /> */}

                  <div className="flex justify-center items-baseline">
                    <button
                      className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg"
                      values="daftarAccount"
                      onClick={daftarAccount}
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="mt-5  md:mt-0 md:col-span-1 bg-blue-400">
            <label class="block text-sm font-medium mx-20 text-gray-700">
              Photo
            </label>
            <div class="mx-20">
              <span class="inline-block h-20 w-20 rounded-full overflow-hidden .bg-center bg-gray-100 sm:h-20 sm:w-20">
                <svg
                  class="h-full w-full  text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <button
                type="button"
                class="ml-5-center bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
