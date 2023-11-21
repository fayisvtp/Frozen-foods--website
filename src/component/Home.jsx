import React from "react";
import "../component/Home.css";
import Banner from "../assets/Banner";
// import Slider from "../assets/Slider";
import Carousel from "../assets/Slider";
import Navbar from "./Navbar"
function Home() {
 
  
  return (
<>
<Navbar />
<Banner/>

<div className="container-card">
        <div className="para-1">
          <div className="para_1_text">
            <h1>😍</h1>
            <h2>Convenience</h2>
            <p>
              Unlocking the magic of convenience, one frosty bite at a time!
            </p>
          </div>
        </div>

        <div className="para-1">
          <div className="para_1_text">
            <h1>💴</h1>
            <h2> Cost Management</h2>
            <p>Keeping expenses cool while delivering quality</p>
          </div>
        </div>
        <div className="para-1">
          <div className="para_1_text">
            <h1>⏲</h1>
            <h2> Time Efficiency</h2>
            <p> freezing time to unfurl efficiency's perfection</p>
          </div>
        </div>

    </div>
    
    <Carousel/>
    </>

    
  );
}

export default Home;

