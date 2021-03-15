import React, { Component } from 'react'

const Pricecardpulsa = (props) => {
    return(
        <div class="cursor-pointer h-30 w-40 m-4 bg-background rounded-lg shadow-lg p-6 hover:bg-gray-200" tabIndex="0">
                <span class="flex justify-center text-md font-semibold">{props.nominal}</span>
                <span class="flex justify-center text-xs">{'Bayar : '+props.harga}</span>
        </div>
    );
};

export default Pricecardpulsa