import React from "react";

const HowItWork = (props) =>{
    return (
        <div id="3" className="bg-howitwork-bg bg-cover bg-fixed bg-black text-white">

            <img src="./assets/rectangles/black_box.png" className="opacity-90 h-[10rem] w-[10rem] translate-x-[40rem] translate-y-[5rem]"></img>
            <h1 className="text-7xl font-extrabold text-blue-400 translate-x-[43.5rem] translate-y-[-2.5rem]">3.</h1>
            <h1 className="text-3xl font-bold translate-x-[38rem] translate-y-[-2.5rem]">HOW IT WORKS?</h1>
            <div className="text-xl translate-x-[39rem] translate-y-[-2.5rem]">LOREM IPSIUM DOLOR</div>

            <img src="./assets/images/diamond_line.png" className="absolute translate-x-[33rem] translate-y-[5rem]"></img>
            <img src="./assets/images/diamond_line.png" className="absolute translate-x-[60rem] translate-y-[5rem]"></img>

            <div className="flex justify-center items-center ml-[15rem] pb-[15rem] pt-[5rem]">
                {
                    props.options.map((data) => {
                        return(
                            <div className="flex items-center w-[30rem]">
                                <div className="h-[70px] w-[70px] bg-transparent outline rounded-full absolute grid place-items-center translate-x-[-5rem] translate-y-[1rem]">{data.icon}</div>
                                <div className="flex flex-col mr-[10rem]">
                                    <div className="text-xl font-bold text-blue-400">{data.title}</div>
                                    <div>{data.description}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HowItWork;