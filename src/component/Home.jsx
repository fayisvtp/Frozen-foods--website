import React from "react";
import image1 from "../assets/model-1.png";
import "../component/Home.css";
import Slider from "../assets/Slider";
import { MDBBtn } from "mdb-react-ui-kit";
import { LinearGradient } from "react-text-gradients";

function Home() {
  return (
    <>
      <div className="box container-fluid">
        <div className="text-1">
          <div className="heading">
            <h1>
              <LinearGradient gradient={["to left", "#BCA37F,#113946"]}>
                Frosty Feasts
              </LinearGradient>
            </h1>
            <h3>
              <LinearGradient gradient={["to left", "#BCA37F,#113946"]}>
                Tailored for hostelized professionals
              </LinearGradient>
            </h3>
          </div>
          <h6 className="paragraph">
            For busy professionals, our frozen meals provide a convenient,
            nutritious solution, ensuring you prioritize health without
            sacrificing taste or time in your hectic schedule.
          </h6>

          {/* <div className="btn">
              <MDBBtn className="mx-2 mdbtn" color="tertiary" rippleColor="light">
            How to manage food cost
          </MDBBtn>
         
          </div> */}
        </div>
        <div className="img-container">
          <div className="model-1">
            <img src={image1} alt="modewl" />
          </div>
        </div>
      </div>

      {/* ************************************** */}

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
      <div></div>
      {/* <Slider/> */}
    </>
  );
}

export default Home;
