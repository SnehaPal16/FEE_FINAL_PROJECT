import "./App.css";
import React from "react";
import {data} from "./Data/NavbarData";
import {data1} from "./Data/HowItWorkData";
import {data2} from "./Data/TestimonialData"
import {data3} from "./Data/MediabarData";
import {data4} from "./Data/GetInTouchData"
import Navbar from "./components/Navbar";
import HowItWork from "./components/HowItWork";
import Testimonial from "./components/Testimonial";
import Mediabar from "./components/Mediabar";
import GetInTouch from "./components/GetInTouch";
import Porfolio from "./components/Porfolio";
import WhyChooseUs from "./components/WhyChooseUs";


const App = () =>{
  return (
    <div>
      
      <Navbar options={data}/>
      <WhyChooseUs/>
      <Porfolio/>
      <HowItWork options={data1}/>    
      <Testimonial options={data2}/>
      <Mediabar options={data3}/>
      <GetInTouch options={data4}/>     
    </div>
  )
}

export default App;
