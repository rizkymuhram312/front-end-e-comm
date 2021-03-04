import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

export default function Navbar({ fixed }) {

  const [isLogin, setisLogin] = useState(false)
  const [navbarOpen, setNavbarOpen] = React.useState(false);


  const [value, setValue] = useState();
  const refresh = () => {
    // re-renders the component
    setValue({});
  }



  useEffect(() => {
    // console.log(isLogin)
    if (localStorage.token == null || localStorage.token == undefined) {
      setisLogin(false);
      setValue({});

    }
    else {

      setisLogin(true);
      setValue({});
    }
    setValue({});
  }, [localStorage.token])




  return (


        <div>

          {isLogin ? (

            <>
                    <div className="capitalize text-center text-3xl font-bold">
                        selamat datang {localStorage.getItem('dataUserName')}
                    </div>
            </>

          ) : (
            <div className="capitalize text-center text-3xl font-bold">
            anda belum login
            </div> 
            )}
        </div>
 
  );
}
