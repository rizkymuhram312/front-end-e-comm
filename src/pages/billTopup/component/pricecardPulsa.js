import React, { useState } from 'react'


export const Pricecardpulsa = (props) => {

    // const [valCard,setValCard] = useState(0)
    
    // const onClickVal = (e) =>{
    //     const value = e.target.value = props.harga
    //     console.log(value);
    //     setValCard(value) 
    // }

    return(
        <>
        {/* <div value={valCard} onClick={onClickVal} class="cursor-pointer h-30 w-40 m-4 bg-background rounded-lg shadow-lg p-6 hover:bg-gray-200" tabIndex="0">
                <span class="flex justify-center text-md font-semibold">{props.nominal}</span>
                <span class="flex justify-center text-xs">{'Bayar : '+props.harga}</span>
        </div> */}
         <span class="flex justify-center text-md font-semibold">{props.nominal}</span>
            <span class="flex justify-center text-xs">{'Bayar : '+props.harga}</span>
        </>
    );
};

