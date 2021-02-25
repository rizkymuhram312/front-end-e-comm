import React from "react";

export default function index() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="md:w-3/12 md:mt-10 px-1 text-center font-bold text-xl pr-10">
          My Cart
        </div>
        <div className="w-full md:w-9/12 px-1 ">
          <div className="text-sm block my-4 p-3 text-white rounded border border-solid border-gray-200 bg-primary">
            <div className="flex justify-between items-center">
              <div>Produk</div>
              <div></div>
              <div>Harga Satuan</div>
              <div>Kuantitas</div>
              <div>Total Harga</div>
              <div>Aksi</div>
            </div>
          </div>
          <div className="text-sm block my-4 p-3 text-white rounded border border-solid border-gray-200 bg-primary">
            {/* <input
              type="checkbox"
              class="form-checkbox h-3 w-3 text-gray-600"
            />
            <span class="ml-2 text-md">label</span> */}
            <hr />
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div>
                  <input
                    type="checkbox"
                    class="form-checkbox h-3 w-3 text-gray-600"
                  />
                </div>
                <div className="h-20 w-20 ml-2 mr-2 rounded border border-solid border-primary">
                  <img src="/logo192.png" alt="product" />
                </div>
                <div>Deskripsi</div>
              </div>
              <div>Harga Satuan</div>
              <div>Kuantitas</div>
              <div>Total Harga</div>
              <div>Aksi</div>
            </div>
            <hr />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="md:w-3/12 md:mt-10 px-1"></div>
        <div className="w-full md:w-9/12 px-1 ">
          <div className="flex justify-between items-center">
            <div>
              <input
                type="checkbox"
                class="form-checkbox h-3 w-3 text-gray-600 mr-2"
              />
              <span>Pilih Semua</span>
            </div>
            <div>Subtotoal untuk Produk(... produk) </div>
            <div>Total Harga</div>
            <div>Checkout</div>
          </div>
        </div>
      </div>
    </>
  );
}
