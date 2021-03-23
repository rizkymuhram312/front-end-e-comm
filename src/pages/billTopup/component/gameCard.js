import React,{useState} from 'react'

const GameCard = (props) => {
    // let [valGame,setValGame] = useState("")

    // const onClickVal = (e) =>{
    //     const value = e.target.value = 
    //     console.log(value);
    //     setValCard(value) 
    // }
    return (
        <>
                        
                        <p class="text-center text-md text-pink-600 font-semibold">{props.vendor === 'Steam' ? 'Steam Wallet IDR': 
                        (props.vendor === 'MobileLegends' ? 'Mobile Legend':
                        (props.vendor ==='Garena' ? 'Garena':'PUBG Mobile'))}</p>
                        {/* <div value="MobileLegends" class="cursor-pointer h-32 w-32 m-6 bg-background rounded-lg shadow-lg p-6 hover:bg-gray-200" tabIndex="1">
                            <div class="flex justify-center">
                                <img class="h-10 w-10" src="./mobile_legends.png"/>
                            </div>
                            
                            <p class="text-center">Mobile Legends</p>
                        </div>
                        <div value="Garena" class="cursor-pointer h-32 w-32 m-6 bg-background rounded-lg shadow-lg p-6 hover:bg-gray-200" tabIndex="2">
                            <div class="flex justify-center">
                                <img class="h-10 w-10" src="./garena.png"/>
                            </div>
                            
                            <p class="text-center">Garena</p>
                        </div>
                        <div value="PUBG"  class="cursor-pointer h-32 w-32 m-6 bg-background rounded-lg shadow-lg p-6 hover:bg-gray-200" tabIndex="3">
                            <div class="flex justify-center">
                                <img class="h-10 w-10" src="./pubg.png"/>
                            </div>
                            <p class="text-center">PUBG Mobile</p>
                        </div> */}
        </>
    );
};

export default GameCard