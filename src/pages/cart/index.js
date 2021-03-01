/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function index() {
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState([]);
  const [Cart, setCart] = useState([]);
  const [Order, setOrder] = useState({})

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    console.log(checked)
    let allChecked = true;
    for (const index in checked) {
      if (checked[index] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked])

  const toggleCheck = (index) => {
    setChecked((prevState) => {
      const newState = [...prevState];
      newState[index] = !prevState[index];
      return newState;
    });
  };

  const selectAll = (value) => {
    setCheckedAll(value);
    let total_qty = 0;
    let total_amount = 0;
    Cart.map(x=>{
      total_qty+=x.clit_qty;
      total_amount+=x.clit_subtotal;
    })
    if(value){
      setOrder({
        ...Order,
        cart_total_qty: total_qty,
        cart_total_amount: total_amount
      }
    )
    }else{
      setOrder({
        ...Order,
        cart_total_qty: 0,
        cart_total_amount: 0
      }
    )
    }
    setChecked((prevState) => {
      const newState = [ ...prevState ];
      for (const index in newState) {
        newState[index] = value;
      }
      return newState;
    });
  };

  const plus = (id)=>{
      setCart(Cart.map(x=>{
        if(x.clit_id !== id) return x
        return{...x, 
          clit_qty: x.clit_qty+1,
          clit_subweight: (x.clit_qty+1)*x.product.prod_weight, 
          clit_subtotal: (x.clit_qty+1)*x.product.prod_price}
      }))
  }

  const minus = (id)=>{
    setCart(Cart.map(x=>{
      if(x.clit_id !== id || x.clit_qty===0) return x
      return{...x, 
        clit_qty: x.clit_qty-1,
        clit_subweight: (x.clit_qty-1)*x.product.prod_weight,
        clit_subtotal: (x.clit_qty-1)*x.product.prod_price}
    }))
  }

  const check = (ev,el) =>{
      if(ev.target.checked){
          setOrder({
              ...Order,
              cart_total_qty: Order.cart_total_qty+el.clit_qty,
              cart_total_amount: Order.cart_total_amount+el.clit_subtotal
            }
          )
      }else{
        setOrder({
          ...Order,
          cart_total_qty: Order.cart_total_qty-el.clit_qty,
          cart_total_amount: Order.cart_total_amount-el.clit_subtotal
        }
      )
      }
  }

  async function fetchCart() {
    return await axios({
      url: `http://localhost:3003/api/cart/1001`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setOrder(res.data[0])
        for (let index = 0; index < res.data[0].cart_line_items.length; index++) {
          setChecked( checked => [...checked,false]) 
        }
        setCart(res.data[0].cart_line_items)
      })
      .catch((err) => console.error(err));
  }

  return (
      <div className="flex flex-wrap">
        <div className="md:w-3/12 md:mt-10 px-1 text-center font-bold text-xl pr-10">
          My Cart
        </div>
        <div className="w-full md:w-9/12 px-1 ">
          <div className="text-sm block my-4 p-3 text-white rounded border border-solid border-gray-200 bg-primary">
            <div className="flex justify-around items-center font-bold">
              <div className="lg:w-1/12 md:w-3/12 sm:w-2/12 w-4/12">Produk</div>
              <div>Harga</div>
              <div>Kuantitas</div>
              <div>Total</div>
              <div>Aksi</div>
            </div>
          </div>

          {Cart.map((x,y) => 
            {
              return (
              <div className="text-sm block my-4 p-3 text-white rounded border border-solid border-gray-200 bg-primary">
                <hr />
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-3 w-3 text-gray-600"
                        onChange={(event)=> {
                          check(event,x)
                          toggleCheck(y)
                          }
                         }
                        checked={checked[y]}
                      />
                    </div>
                    <div className="h-20 w-20 m-2 rounded border border-solid border-white">
                      <img src={x.product.product_images[0].prim_filename} alt="product" />
                    </div>
                    <div>{x.product.prod_desc}</div>
                  </div>
                  <div>{x.product.prod_price}</div>
                    <div className="flex flex-row">
                      <div className="border-2 border-white px-1" style={{cursor:'pointer'}} onClick={()=>plus(x.clit_id)}>+</div>
                      <div className="border-2 border-white px-1">{x.clit_qty}</div>
                      <div className="border-2 border-white px-1" style={{cursor:'pointer'}} onClick={()=>minus(x.clit_id)}>-</div>
                    </div>
                  <div>{x.clit_subtotal}</div>
                  <div className="lg:mr-10"> <button className=" font-bold bg-background text-black p-1 md:p-2 hover:bg-red-400 rounded">
                  Hapus
                  </button></div>
                </div>
                <hr />
              </div>
            )
            }
          )}

          <div className="flex justify-between items-center">
            <div>
              <input
                type="checkbox"
                class="form-checkbox h-3 w-3 text-gray-600 mr-2"
                onChange={(event) => selectAll(event.target.checked)}
                checked={checkedAll}
              />
              <span>Pilih Semua</span>
            </div>
            <div>Subtotal untuk Produk({Order.cart_total_qty} produk) </div>
            <div>{Order.cart_total_amount}</div>
            <div>
              <button className=" font-bold bg-secondary text-white lg:p-3 p-2 hover:bg-item rounded lg:mr-5">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
