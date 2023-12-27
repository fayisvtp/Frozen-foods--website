import React from "react";
import "./Banner.css";
import image from "./model-1.png";
import { Link } from "react-router-dom";


function Banner() {
  return (
    <div className="banner-container">
      <div className="div-1">
        <div className="text-1">
          <h1>
            <span className="its">It's </span>
            <br />
            <span className="all_about"> All About </span>
            <br />
            <span className="good_food"> Good Food</span>
          </h1>
         
          <p  className="para">
            For busy professionals, our frozen meals provide a convenient,
            nutritious solution, ensuring you prioritize health without
            sacrificing taste or time in your hectic schedule.
          </p>
          
        </div>
        <div>
          <Link to="/product1">
          <button className="btn_1">Order Now</button>
          </Link>
        </div>
        <div>
          {/* <div></div> */}
          {/* <div>
          <Link to="/foodcost">
            <button className="btn_2 ">How to manage Food cost</button> 
            </Link>
          </div> */}
        </div>
      </div>
      <div className="div-2">
        
        <div className="model">
          <img src={image} alt="" className="img" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
