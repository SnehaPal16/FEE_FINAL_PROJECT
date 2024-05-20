import React from "react";

const GetInTouch = (props) =>{
    return (
        <div id="6" className="bg-brick-bg bg-fixed bg-cover bg-black text-white">

            <img src="./assets/rectangles/black_box.png" className="opacity-90 h-[10rem] w-[10rem] translate-x-[45rem] translate-y-[5rem]"></img>
            <h1 className="text-7xl font-extrabold text-blue-400 translate-x-[48.5rem] translate-y-[-2.5rem]">5.</h1>
            <h1 className="text-3xl font-bold translate-x-[44rem] translate-y-[-2rem]">GET IN TOUCH</h1>


            <img src="./assets/rectangles/blue_box.png" className="absolute h-[5rem] w-[5rem] translate-x-[13rem] translate-y-[4rem] z-40"></img>
            <img src="./assets/rectangles/blue_box.png" className="absolute h-[5rem] w-[5rem] translate-x-[40rem] translate-y-[4rem] z-40"></img>
            <img src="./assets/rectangles/blue_box.png" className="absolute h-[5rem] w-[5rem] translate-x-[66rem] translate-y-[4rem] z-40"></img>


            <div className="flex justify-center items-center ml-[15rem] pb-[8rem] pt-[5rem]">
                {
                    props.options.map((data) => {
                        return(
                            <div className="flex w-[30rem]">
                                <div className="font-extrabold text-6xl mr-[3rem] z-50">{data.icon}</div>
                                <div className="flex flex-col mr-[10rem]">
                                    <div className="font-bold text-xl mb-7">{data.title}</div>
                                    <div>{data.description2}</div>
                                    <div>{data.description2}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <p className="font-semibold text-lg flex justify-center items-center">COPYRIGHT 2024 | Designed By SPCreation.com</p>
            <a href="#1"><p className="absolute text-2xl translate-x-[48.5rem] translate-y-[7rem] z-[1000] text-white">TOP</p></a>
            <div id="top" className="h-[10rem] w-[10rem] translate-x-[45rem] z-30 bg-blue-500"></div>
        </div>
    )
}

export default GetInTouch;