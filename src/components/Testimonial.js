import React from "react";

const Testimonial = (props) =>{
    return (
        <div id="5" className="bg-testimonial-bg bg-cover bg-fixed bg-black text-white">
            
            <img src="./assets/rectangles/black_box.png" className="opacity-90 h-[10rem] w-[10rem] translate-x-[45rem] translate-y-[5rem]"></img>
            <h1 className="text-7xl font-extrabold text-blue-400 translate-x-[48.5rem] translate-y-[-2.5rem]">4.</h1>
            <h1 className="text-3xl font-bold translate-x-[44rem] translate-y-[-2.5rem]">TESTIMONIALS</h1>
            <div className="text-xl translate-x-[44rem] translate-y-[-2.5rem]">LOREM IPSIUM DOLOR</div>

            <img src="./assets/images/diamond_line.png" className="absolute translate-x-[48rem] translate-y-[5rem]"></img>

            <div className="flex justify-center items-center ml-[10rem] pb-[15rem] pt-[5rem]">
                {
                    props.options.map( (data) => {
                        return (
                            <div className="flex flex-col items-end  gap-14">
                                <div className="mr-[10rem] w-[30rem] text-right">{data.description}</div>
                                <button id="btn_box" className="text-white text-xl w-fit mr-[10rem] rounded-2xl  bg-blue-400 px-2 py-1">READ MORE</button>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Testimonial;