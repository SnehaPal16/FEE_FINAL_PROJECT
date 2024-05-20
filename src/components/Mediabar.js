import React from "react";

const Mediabar = (props) =>{
    return (
        <div id="4" className="flex justify-center items-center gap-20 mx-auto pt-[3rem] pb-[3rem] bg-blue-400 text-white ">
            {
                props.options.map((data) => (
                    <a key={data.id} className="outline rounded-full h-[60px] w-[60px]" ><button className="h-[60px] w-[60px] pl-1">{data.icon}</button></a>
                ))
            }
        </div>
    )
}

export default Mediabar;