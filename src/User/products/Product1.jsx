import React from "react";
import './Product1.css';
import cook from '/coding/Projects/frostybytes/src/assets/cook.jpg';
// import frozen1 from '/coding/Projects/frostybytes/src/assets/frozen1.jpeg'
// import frozen2 from "/coding/Projects/frostybytes/src/assets/frozen2.jpg"
// import frozen3 from '/coding/Projects/frostybytes/src/assets/frozen3.jpg'
// import { Link } from "react-router-dom";
function Product1() {
  return (
    <>
      <div
        className="headimg p-5 text-center bg-image"
        style={{
          backgroundImage: `url(${cook})`,
          height: 400,
        }}
      >
        {/* ********************** */}

        
     </div>
    </>
  );
}

export default Product1;
