import React from "react";
import WCUBox from "./WCUBox";

const WhyChooseUs = ()  => {
    return (
        <div className="bg-brick-bg bg-fixed bg-black mt-[50rem]">
            <img src="./assets/rectangles/blue_box.png" className=" absolute h-[8rem] w-[8rem] translate-x-[26rem] translate-y-[-25rem]"></img>
        
            <img src="./assets/images/img1_1.png" id="img1_1" className="absolute  h-[78rem] w-[78rem] translate-x-[16rem] translate-y-[-40rem] z-30"></img>
    
            <img src="./assets/images/img1_2.png" id="img1_2" className=" absolute h-[45rem] w-[45rem] translate-x-[33rem] translate-y-[10rem] z-40"></img> 

            <img src="./assets/rectangles/blue_box.png" className=" absolute h-[35rem] w-[35rem] translate-x-[15rem] translate-y-[12rem] z-50"></img>
            <div className="text-white absolute  flex flex-col justify-center items-center z-[1000] w-[15rem]  translate-x-[25rem] translate-y-[15rem]">
                <h1 className="font-extrabold text-5xl mb-5">1.</h1>
                <h2 className="font-bold text-2xl mb-5">LOREM IPSIUM</h2>
                <p className="text-sm">Lorem ipsum dolor  mero moleamet, soluta euism od isea, hiea unereusams ullu tpamco detore  aer rper quo,utam signiferuuue uo. Brute inani in prom in.mero moleamet, soluta euism od isea</p>
            </div>

            <img src="./assets/rectangles/black_box.png" className=" absolute h-[40rem] w-[40rem] translate-x-[5rem] translate-y-[-20rem] z-50"></img>
            <div className=" absolute flex flex-col justify-start items-start z-[1000] w-[20rem]  translate-x-[15rem] translate-y-[-5rem]">
                <h1 className="font-extrabold text-3xl mb-5 text-blue-400">WE ARE BEST</h1>
                <p className="text-sm mb-5 text-white">Lorem ipsum dolor  mero moleamet, soluta euism od isea, hiea unereusams ullu tpamco detore  aer rper quo,utam signiferuuue uo. Brute inani in prom in.mero moleamet, soluta euism od isea. Brute inani in prom in.mero moleamet, soluta euism od isea</p>
                <div>
                    <button className="text-white text-xl w-fit mr-[10rem] rounded-2xl  bg-blue-400 px-2 py-1">READ MORE</button>
                </div>
            </div>

            <div className="text-white flex flex-col justify-center items-center mx-auto pb-[10rem]">
                <div className="pt-[60rem] flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl">WHY CHOOSE US</h1>
                    <h2 className="text-base mb-[5rem]">LOREM IPSIUM DOLOR</h2>
                </div>

                <div className="flex relative">
                    <div>
                        <WCUBox head="FEATURE"/>
                    </div>
                    <div className="translate-y-[3rem]">
                        <img src="./assets/images/diamond_line.png"></img>
                    </div>
                    <div>
                        <WCUBox head="ABOUT US"/>
                    </div>
                </div>

                <div className="translate-y-[7rem] translate-x-[5rem]">
                    <button className="text-white text-xl w-fit mr-[10rem] rounded-2xl  bg-blue-400 px-2 py-1">READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;