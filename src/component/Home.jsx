import React from "react";
import "./Home.css";
import pizza from "../assets/pizza.png";
import pizza2 from "../assets/pizza2.png"
import { IoIosArrowForward } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons';
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { faFish,faMedal   } from "@fortawesome/free-solid-svg-icons";
import img1 from '../assets/frozen3.jpg'
import img2 from '../assets/non-veg.jpg'
import home from '../assets/homeimg.png'
import Navbar from "./Navbar"
import { Link } from "react-router-dom";


export default function Home() {
  const menuItems = [
    {
      heading: 'Frozen Vegetables',
      icon: faPepperHot,
      paragraphHeading: 'The quality of frozen vegetables is often high, .',
      paragraphIcon: faMedal ,
    },
    {
      heading: 'Frozen Fruits',
      icon: faAppleAlt,
      paragraphHeading: 'Lorem ipsum dolor sit amet consectet',
      paragraphIcon: faMedal ,
    },
    {
      heading: 'Frozen Non-Veg',
      icon: faFish,
      paragraphHeading: 'Lorem ipsum dolor sit amet consectet',
      paragraphIcon: faMedal ,
    },
  
  ];
  return (
    <>
    <div className="home">
    <Navbar/>
      <div className="row flex-column-reverse flex-md-row p-3">
        <div className="col-md-7 d-flex align-items-center">
          <div className="heading-texts col-12 p-5">
            <h1 className="heading d-flex text-light align-items-center " style={{fontSize:'80px'}}>
            It's All <br />
            About <br />
             Good Food
            </h1>

            <p className="heding_para text-light">
            For busy professionals, our frozen meals provide a convenient,<br />
            nutritious solution, ensuring you prioritize health without
            sacrificing 
            <br />taste or time in your hectic schedule.
            </p>

            <div className="heading_buttons d-flex align-items-center">
              <div className="heading_btn">
                <p className="explore px-2">
                  <span className="heading_btn-1 text-light">Explore</span>
                  <Link to="/product1">
                  <span className="arrow_btn bg-warning">
                    <IoIosArrowForward />
                  </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-5 d-flex justify-content-end align-items-end">
          <div className="col-12 ">
            <img className="pizza-img img-fluid  " src={pizza} alt="pizza" />
          </div>
        </div>
      </div>

      {/* *********************************************************************** */}
      <section>
        <div className="orumenu_section" >
      <div className="our_menu col-12 d-flex align-items-center">
        <h1 className="mx-auto text-light" style={{fontSize:'100px'}}>Our Menu</h1>
      </div>

      <div className="row m-4">
        {menuItems.map((item, index) => (
          <div className="col-12 mb-3" key={index}>
            <div className="box-1 p-3" >
              <div className="headingIcon row align-items-center">
                <div className=" col-4 col-md-2 mb-3 mb-md-0 text-center">
                  <FontAwesomeIcon icon={item.icon} style={{ fontSize: '2rem', color: item.color }} />
                </div>
                <div className="col-8 col-md-5">
                  <h1>{item.heading}</h1>
                </div>
                <div className="col-12 col-md-5">
                  <h5>
                    <FontAwesomeIcon icon={item.paragraphIcon} style={{ marginRight: '5px',  height:'30px'}} />
                    {item.paragraphHeading}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
{/* *********************************************************************** */}
<section>
      <div className="categories container">
        <div className="our_ctgry col-12 d-flex align-items-center">
          <h1 className="mx-auto text-light" style={{ fontSize: '9vw' }}>Categories</h1>
        </div>

        <div className="row m-4">
          {/* First Card */}
          <div className="col-12 col-md-6 mb-3">
          <Link to={"/product1"}>
            <div className="carrd position-relative h-50">
              <img src={img1} alt="" className="w-100 h-100 object-fit-cover" style={{borderRadius:'0'}} />
              <div className="card-text position-absolute top-50 start-50 translate-middle text-light text-center w-100">
                <h1 className="mb-3">Category 1</h1>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
          </Link>
          </div>

          {/* Second Card */}
          <div className="col-12 col-md-6 mb-3">
          <Link to={"/veg"}>
            <div className="carrd position-relative h-50">
              <img src={img2} alt="" className="w-100 h-100 object-fit-cover" style={{borderRadius:'0'}} />
              <div className="card-text position-absolute top-50 start-50 translate-middle text-light text-center w-100">
                <h1 className="mb-3">Category 2</h1>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </section>
{/* *********************************************************************** */}
<section>
  <div className="about_us">
  <div className="row flex-column-reverse flex-md-row p-3">
  <div className="col-md-5 d-flex justify-content-end align-items-end">
          <div className="col-12 ">
            <img className=" pizza-img img-fluid  " src={pizza2} alt="pizza" />
          </div>
        </div>
        <div className="col-md-7 d-flex align-items-center">
          <div className="heading-texts col-12 p-5">
            <h1 className="heading d-flex text-light align-items-center " style={{fontSize:'80px'}}>
             ABOUT US
            </h1>

            <p className="heding_para text-light">
            Welcome to our frozen food haven, designed
             especially for busy professionals like you! 
             At FORSTY BEATS, we understand the challenges of maintaining a healthy lifestyle amidst the chaos of a hectic schedule. That's why we've curated a selection of frozen meals that serve as your convenient, nutritious solution. Our mission is to empower you to prioritize your health without compromising on taste or sacrificing precious time. Whether you're racing against the clock or simply seeking a hassle-free yet wholesome meal option, our frozen delights are here to elevate your dining experience. Embrace the ease of our offerings, and let us be your ally in the pursuit of a balanced, flavorful, and time-efficient culinary journey. Welcome to a world where health meets convenience, where taste reigns supreme, and where your busy lifestyle finds its perfect match in our frozen delights.
            </p>

           
          </div>
        </div>

        
      </div>
  </div>
</section>
{/* <Carousel/> */}
    </div>
    </>
  );
}




// import React from "react";
// import "../component/Home.css";
// import Banner from "../assets/Banner";
// // import Slider from "../assets/Slider";
// import Carousel from "../assets/Slider";
// import Navbar from "./Navbar"
// function Home() {
 
  
//   return (
// <>
// <Navbar />
// <Banner/>

// <div className="container-card">
//         <div className="para-1">
//           <div className="para_1_text">
//             <h1>😍</h1>
//             <h2>Convenience</h2>
//             <p>
//               Unlocking the magic of convenience, one frosty bite at a time!
//             </p>
//           </div>
//         </div>

//         <div className="para-1">
//           <div className="para_1_text">
//             <h1>💴</h1>
//             <h2> Cost Management</h2>
//             <p>Keeping expenses cool while delivering quality</p>
//           </div>
//         </div>
//         <div className="para-1">
//           <div className="para_1_text">
//             <h1>⏲</h1>
//             <h2> Time Efficiency</h2>
//             <p> freezing time to unfurl efficiency's perfection</p>
//           </div>
//         </div>

//     </div>
    
//     <Carousel/>
//     </>

    
//   );
// }

// export default Home;

