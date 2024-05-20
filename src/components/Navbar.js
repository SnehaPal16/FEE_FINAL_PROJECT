import React from "react";

const Navbar = (props) =>{
    return(
        <div className="realative w-full h-full">
            <div id="1" className="absolute translate-x-[45rem] translate-y-[-50rem] z-[50] flex justify-end gap-7 mt-10  mr-[10rem] font-bold">
                {
                    props.options.map((option) => (
                        <a href={`#${option.id}`} key={option.id}><button>{option.title}</button></a>
                    ))
                }
            </div>

            <div className="relative" >

                <div className="absolute flex z-50 translate-y-[-50rem] translate-x-[13rem] mt-5">

                  <img src="./assets/rectangles/white_capsule.png"></img>

                  <img src="./assets/rectangles/black_capsule.png" className="mt-4 translate-x-[-1rem]"></img>
                  <div className="text-white leading-[-10px]">
                        <h2 className="font-bold text-xl">CREATIVE</h2>
                        <p>Tagline Here</p>
                  </div>
                </div>
        
                <img src="./assets/rectangles/blue_box.png" className="absolute h-50 w-50 translate-y-[-74rem] z-40"></img>

                <img src="./assets/rectangles/black_box.png" className="absolute h-[25rem] w-[25rem] translate-x-[14rem] translate-y-[-67rem] z-30"></img>

                <img src="./assets/rectangles/grey_box.png" className=" absolute z-20 translate-x-[50rem] translate-y-[-130rem] h-[150rem] w-[300rem]"></img>

                <img src="./assets/rectangles/grey_box.png" className=" absolute z-20 translate-x-[-40rem] translate-y-[-45rem] h-[60rem] w-[60rem]"></img>
            </div>
        </div>
    )
}

export default Navbar;