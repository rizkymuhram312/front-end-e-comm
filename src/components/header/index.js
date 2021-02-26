import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar({ fixed }) {
 
  const [isLogin, setisLogin] = useState(false)
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  useEffect(() => {
    console.log(isLogin)
    if(localStorage.token==null || localStorage.token==undefined){
      setisLogin(false)
    }
    else {
      
      setisLogin(true)
    }
  }, [localStorage.token])
  return (
    <nav className="fixed z-50 w-full bg-background top-0 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a className="leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-800">
            <span className="text-xl font-bold">E-Commerce CODE.ID</span>
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars />
          </button>
        </div>
        <div className="relative flex w-full md:w-7/12 px-4 flex-wrap items-stretch lg:ml-auto">
          <div className="flex">
            <span className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-gray-600 rounded-full text-sm bg-gray-100 items-center rounded-r-none pl-2 py-1 text-gray-800 border-r-0 placeholder-background">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <input
            type="text"
            className="px-2 py-1 h-8 border border-solid  border-black rounded-full text-sm leading-snug text-gray-700 bg-gray-100 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-gray-300"
            placeholder="Search Product"
          />
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          {isLogin?(
            <>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                href="#">
                <i className="fab fa-twitter text-lg leading-lg  opacity-75"></i>
                <span className="ml-2">Sign Out</span>
              </a>
              </li>
              </ul>
            </>
          ):(
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                href="/daftar"
              >
                <i className="fab fa-facebook-square text-lg leading-lg  opacity-75"></i>

                <span className="ml-2">Sign Up</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                href="/login"
              >
                <i className="fab fa-twitter text-lg leading-lg  opacity-75"></i>
                <span className="ml-2">Sign In</span>
              </a>
            </li>
          </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
