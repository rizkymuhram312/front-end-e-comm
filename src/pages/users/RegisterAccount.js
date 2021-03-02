import React, { Component } from "react";

export default class RegisterAccount extends Component {
  state = {
    accoId: null,
    accoUsername: "",
    accoNama: "",
    accoPhone: "",
    accoShopname: "",
    accoGender: "",
    accoBirth: "",
    accoAvatar: "",
  };
  render() {
    return (
      <>
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
              <form action="#" method="POST">
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
                    />
                    <label
                      for="gender"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Jenis Kelamin
                    </label>
                    <label class="inline-flex items-center w=4/12 mt-3 mx-5">
                      <input
                        type="radio"
                        class="form-radio h-5 w-5 text-gray-600"
                        value="L"
                      />
                      <span class="ml-2 text-gray-700">Lelaki</span>
                    </label>
                    <label class="inline-flex items-center w=4/12 mt-3 mx-5">
                      <input
                        type="radio"
                        class="form-radio h-5 w-5 text-gray-600"
                        value="P"
                      />
                      <span class="ml-2 text-gray-700">Perempuan</span>
                    </label>
                    <label class="inline-flex items-center w=4/12 mt-3 mx-5">
                      <input
                        type="radio"
                        class="form-radio h-5 w-5 text-gray-600"
                        value="O"
                      />
                      <span class="ml-2 text-gray-700">Other</span>
                    </label>

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
                    />

                    {/* <input type="password" placeholder="Confirm Password" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"  value={user_confpassword} onChange={onChangeConfPassword} /> */}

                    <div className="flex justify-center items-baseline">
                      <button
                        className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg"
                        values="klikDaftar"
                        onClick
                      >
                        Create Account
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-1 bg-blue-400">
              <label class="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div class="">
                <span class="inline-block h-20 w-20 rounded-full overflow-hidden .bg-center bg-gray-100 sm:h-50 sm:w-50">
                  <svg
                    class="h-full w-full text-gray-300"
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
}
