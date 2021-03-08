import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-red-500 text-left font-sans-serif fas fa-map-marker-alt">
          Alamat Pengiriman
        </h1>
        <div className="flex justify-between ...">
          <div>Dian Permana (+62813912901)</div>
          <div>Komplek Margaasih, Jalan jati Rukun B3 No.19, Margaasih</div>
          <div>
            <button className="bg-white hover:bg-blue-700  mr-2 text-black py-2 px-4 border border-blue-400 rounded">
              Utama
            </button>
            <button className="bg-white hover:bg-blue-700 text-black font-sans-serif  py-2 px-4 border border-blue-400 rounded">
              Ubah
            </button>
          </div>
        </div>
        <div classNameName="mt-10 py-3 border-t border-gray-300">
          <div classNameName="flex flex-wrap justify-left">
            <div classNameName="w-full lg:w-9/12 px-4">
                <label>
                    <input type="checkbox"></input>
                    <span classNameName="ml-1">Kirim sebagai Dropshipper</span>
                </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
