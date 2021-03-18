import React, { useState } from 'react'
import OrderShipping from '../Index'
import OrderShippingArrival from '../../order_shipping_arival/Index'
import ExpeditionRoute from '../../expedition_routes/index'
import Expedition from '../../expedition/index'

function TabNavigation() {
    const[openTab, setOpenTab]= React.useState(1)


    return (
        <div>
            <div className="flex flex-wrap">
        <div className="w-full md:full-mt-16">
          <ul
            className="flex mb-0 list-none  flex-wrap pt-2 pb-4 flex-row mx-2"
            role="tablist"
          >


            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-gray-600"
                    : "text-gray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#"
                role="tablist"
              >
                Shipping
              </a>
            </li>



            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-gray-600"
                    : "text-gray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#/province"
                role="tablist"
              >
                Shippping Arrival
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-gray-600"
                    : "text-gray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#/city"
                role="tablist"
              >
                Expedition Route
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-gray-600"
                    : "text-gray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Expedition
              </a>
            </li>
            
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">


              <div className="tab-content tab-space">


                <div className={openTab === 1 ? "block" : "hidden"} id="link1">

                  <div>
                    <OrderShipping />
                  </div>

                </div>


                <div className={openTab === 2 ? "block" : "hidden"} id="link1">

                  <div>
                    <OrderShippingArrival />
                  </div>


                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link2">

                  <div>
                    <ExpeditionRoute />
                  </div>

                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                 

                  <div>
                    <Expedition />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default TabNavigation
