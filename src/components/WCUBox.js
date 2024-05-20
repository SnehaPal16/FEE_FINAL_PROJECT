import React from "react";

const WCUBox = (props) => {
    return (
        <div className="relative w-2/5 mx-auto">
            <div className="absolute z-10">
                <img src="./assets/rectangles/grey_txt_box.png"></img>
            </div>
            <div className="z-50">
                <div className="font-bold text-xl mb-5">{props.head}</div>
                <div className="text-white">Lorem ipsum dolor  mero moleamet, soluta euism od isea, hiea unereusams ullu tpamco detore  aer rper quo,utam signiferuuue uo. Brute inani in prom in. </div>
            </div>
            
        </div>
    )
}

export default WCUBox;